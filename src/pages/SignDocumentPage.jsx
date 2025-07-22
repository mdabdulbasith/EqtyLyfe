import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PDFDocument } from "pdf-lib";
import html2canvas from "html2canvas";
import { useDocuments } from "../DocumentsContext";
import { Document, Page, pdfjs } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs';

// Use an external CDN for the worker

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();


const signatureFonts = [
  "'Dancing Script', cursive",
  "'Pacifico', cursive",
  "'Great Vibes', cursive",
  "'Allura', cursive",
  "'Satisfy', cursive",
];

export default function SignDocumentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { markAsSigned } = useDocuments();

  const [name, setName] = useState("");
  const [selectedFont, setSelectedFont] = useState(null);
  const [fileUrl] = useState("/contract.pdf");
  const [signedPdfUrl, setSignedPdfUrl] = useState(null);

  const pdfContainerRef = useRef();
  const previewRef = useRef();

  const [pdfWidth, setPdfWidth] = useState(
    window.innerWidth < 640 ? window.innerWidth - 40 : 600
  );
  const [box, setBox] = useState({ x: 50, y: 350, width: 200, height: 50 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 640 ? window.innerWidth - 40 : 600;
      const scale = newWidth / pdfWidth; // calculate how much we shrank

      setBox(prev => ({
        ...prev,
        x: prev.x * scale,
        y: prev.y * scale,
        width: prev.width * scale,
        height: prev.height * scale,
      }));

      setPdfWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pdfWidth]);


  const startDrag = (e) => {
    setDragging({ offsetX: e.clientX - box.x, offsetY: e.clientY - box.y });
  };

  const startResize = (e) => {
    e.stopPropagation();
    setResizing({
      startX: e.clientX,
      startY: e.clientY,
      startW: box.width,
      startH: box.height,
    });
  };

  const stopActions = () => {
    setDragging(false);
    setResizing(false);
  };

  const onMove = (e) => {
    if (dragging) {
      setBox((prev) => ({
        ...prev,
        x: e.clientX - dragging.offsetX,
        y: e.clientY - dragging.offsetY,
      }));
    }
    if (resizing) {
      setBox((prev) => ({
        ...prev,
        width: Math.max(50, resizing.startW + (e.clientX - resizing.startX)),
        height: Math.max(20, resizing.startH + (e.clientY - resizing.startY)),
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopActions);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stopActions);
    };
  });

  const applySignature = async () => {
    if (!name || !selectedFont) {
      alert("Please type your name and select a style.");
      return;
    }

    if (!previewRef.current || !pdfContainerRef.current) {
      alert("Signature preview not ready. Please try again.");
      return;
    }

    try {
      const clonedNode = previewRef.current.cloneNode(true);
      clonedNode.style.backgroundColor = "#ffffff";
      clonedNode.style.color = "#000000";
      clonedNode.style.border = "none";
      clonedNode.style.boxShadow = "none";
      clonedNode.style.position = "fixed";
      clonedNode.style.left = "-9999px";
      clonedNode.style.top = "-9999px";
      clonedNode.style.fontFamily = selectedFont;
      clonedNode.style.fontSize = `${Math.max(12, box.height * 0.5)}px`;
      document.body.appendChild(clonedNode);

      clonedNode.style.padding = "0 0 4px 0";
      const originalHeight = clonedNode.style.height;
      clonedNode.style.height = `${clonedNode.offsetHeight + 4}px`;

      const sigCanvas = await html2canvas(clonedNode, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: clonedNode.offsetWidth,
        windowHeight: clonedNode.offsetHeight + 10,
        ignoreElements: (el) => {
          const style = window.getComputedStyle(el);
          return (
            style.color.includes("oklch") ||
            style.backgroundColor.includes("oklch")
          );
        },
      });
      clonedNode.style.height = originalHeight;
      document.body.removeChild(clonedNode);

      const signatureImageData = sigCanvas.toDataURL("image/png");

      const existingPdfBytes = await fetch(fileUrl).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const signatureImage = await pdfDoc.embedPng(signatureImageData);
      const firstPage = pdfDoc.getPages()[0];
      const { width: pdfW, height: pdfH } = firstPage.getSize();

      const container = pdfContainerRef.current.getBoundingClientRect();
      const scaleX = pdfW / container.width;
      const scaleY = pdfH / container.height;

      const pdfX = box.x * scaleX;
      const pdfY = pdfH - (box.y + box.height) * scaleY;

      firstPage.drawImage(signatureImage, {
        x: pdfX,
        y: pdfY,
        width: box.width * scaleX,
        height: box.height * scaleY,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      // Revoke old URL to prevent memory leaks
      if (signedPdfUrl) {
        URL.revokeObjectURL(signedPdfUrl);
      }
      setSignedPdfUrl(URL.createObjectURL(blob));

      // Upload to backend
      const formData = new FormData();
      formData.append("file", blob, `signed-document-${id}.pdf`);

      try {
        const response = await fetch("https://eqtylyfe-be.onrender.com/api/upload-signed-pdf", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          console.log("Signed PDF uploaded successfully:", data.url);

          // Update context: mark as signed and save file URL
          markAsSigned(parseInt(id), data.url);

          alert("Document signed and uploaded successfully!");

          // Reset inputs for next document
          setName("");
          setSelectedFont(null);
        } else {
          console.error("Upload failed:", data.message);
          alert("Upload failed. Please try again.");
        }
      } catch (uploadErr) {
        console.error("Error uploading PDF:", uploadErr);
        alert("Error uploading signed PDF. Please try again.");
      }
    } catch (err) {
      console.error("Failed to apply signature:", err);
      alert("Error while signing document. Please try again.");
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#24418A]">
        Sign Document
      </h1>

      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 w-full rounded-lg shadow-sm transition"
      />

      {name && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {signatureFonts.map((font, index) => (
            <div
              key={index}
              onClick={() => setSelectedFont(font)}
              className={`cursor-pointer p-3 sm:p-4 rounded-lg text-center transition shadow-sm hover:shadow-md ${selectedFont === font
                ? "border-2 border-blue-500 bg-blue-50"
                : "border border-gray-300"
                }`}
              style={{ fontFamily: font, fontSize: "1.5rem" }}
            >
              {name}
            </div>
          ))}
        </div>
      )}

      {selectedFont && (
        <div
          ref={pdfContainerRef}
          className="relative mt-6 bg-gray-50 rounded-lg shadow-sm inline-block"
          style={{ width: pdfWidth }}
        >
          <Document file={fileUrl}>
            <Page
              pageNumber={1}
              width={pdfWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          <div
            ref={previewRef}
            className="absolute flex items-center justify-center cursor-move"
            style={{
              left: box.x,
              top: box.y,
              width: box.width,
              height: box.height,
              fontFamily: selectedFont,
              fontSize: `${Math.max(12, box.height * 0.5)}px`,
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "2px dashed transparent",
            }}
            onMouseDown={startDrag}
          >
            {name}
            <div
              className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 cursor-se-resize"
              onMouseDown={startResize}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={applySignature}
          className="w-full sm:w-auto px-6 py-3 bg-[#265CE1] text-white rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition"
        >
          Apply Signature
        </button>

        <button
          onClick={() => navigate("/sign-documents")}
          className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 active:scale-95 transition"
        >
          Back to Documents
        </button>
      </div>

      {signedPdfUrl && (
        <div className="text-center mt-6">
          <h2 className="text-lg font-semibold mb-3">Signed PDF Preview:</h2>
          <iframe
            src={signedPdfUrl}
            className="w-full h-64 sm:h-96 border rounded-lg shadow-sm"
            title="Signed PDF Preview"
          ></iframe>
          <a
            href={signedPdfUrl}
            download={`signed-document-${id}.pdf`}
            className="text-blue-600 underline mt-3 inline-block hover:text-blue-800"
          >
            Download Signed Document
          </a>
        </div>
      )}
    </div>
  );
}
