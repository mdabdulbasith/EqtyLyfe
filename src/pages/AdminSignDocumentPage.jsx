import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PDFDocument } from "pdf-lib";
import html2canvas from "html2canvas";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.js?url";
import { PDFDocument, rgb } from 'pdf-lib';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const signatureFonts = [
  "'Dancing Script', cursive",
  "'Pacifico', cursive",
  "'Great Vibes', cursive",
  "'Allura', cursive",
  "'Satisfy', cursive",
];

export default function AdminSignDocumentPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pdfUrl, setPdfUrl] = useState(null);
  const [name, setName] = useState("");
  const [selectedFont, setSelectedFont] = useState(null);
  const [loading, setLoading] = useState(true); // track PDF loading

  const pdfContainerRef = useRef();
  const previewRef = useRef();

  const [pdfWidth, setPdfWidth] = useState(
    window.innerWidth < 640 ? window.innerWidth - 40 : 600
  );
  const [box, setBox] = useState({ x: 50, y: 350, width: 200, height: 50 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);

  // Fetch the client-signed PDF
  useEffect(() => {
    fetch(`https://eqtylyfe-be.onrender.com/api/signed-pdfs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch PDF");
        return res.json();
      })
      .then((data) => setPdfUrl(data.clientSignedUrl))
      .catch((err) => console.error("Failed to load PDF:", err))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 640 ? window.innerWidth - 40 : 600;
      const scale = newWidth / pdfWidth;
      setBox((prev) => ({
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

  const applyAdminSignature = async () => {
    if (!name || !selectedFont) {
      alert("Please type your name and select a style.");
      return;
    }
    if (!previewRef.current) {
      alert("Preview not ready yet. Please wait for the PDF to load.");
      return;
    }

    try {
      const clonedNode = previewRef.current.cloneNode(true);
      clonedNode.className = ""; // remove Tailwind classes

      // Reset colors for the root node
      clonedNode.style.backgroundColor = "#ffffff";
      clonedNode.style.color = "#000000";

      // Reset colors for all children to avoid oklch errors
      clonedNode.querySelectorAll("*").forEach(el => {
        el.style.backgroundColor = "#ffffff";
        el.style.color = "#000000";
      });

      clonedNode.style.border = "none";
      clonedNode.style.boxShadow = "none";
      clonedNode.style.position = "fixed";
      clonedNode.style.left = "-9999px";
      clonedNode.style.top = "-9999px";
      clonedNode.style.fontFamily = selectedFont;
      clonedNode.style.fontSize = `${Math.max(12, box.height * 0.5)}px`;
      document.body.appendChild(clonedNode);


      const sigCanvas = await html2canvas(clonedNode, {
        backgroundColor: "#ffffff",
        scale: 2,
      });
      document.body.removeChild(clonedNode);
      const signatureImageData = sigCanvas.toDataURL("image/png");

      const existingPdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const signatureImage = await pdfDoc.embedPng(signatureImageData);
      const firstPage = pdfDoc.getPages()[0];
      const { width: pdfW, height: pdfH } = firstPage.getSize();

      const scaleX = pdfW / pdfContainerRef.current.offsetWidth;
      const scaleY = pdfH / pdfContainerRef.current.offsetHeight;

      const pdfX = box.x * scaleX;
      const pdfY = pdfH - (box.y + box.height) * scaleY;


      firstPage.drawImage(signatureImage, {
        x: pdfX,
        y: pdfY,
        width: box.width * scaleX,
        height: box.height * scaleY,
      });
      firstPage.drawText(`Signed on: ${new Date().toLocaleString()}`, {
        x: pdfX,
        y: pdfY - 15, // 15 points below the signature
        size: 10,
        color: rgb(0, 0, 0), // black text
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const formData = new FormData();
      formData.append("file", blob, `co-signed-document-${id}.pdf`);
      const response = await fetch(
        `https://eqtylyfe-be.onrender.com/api/upload-admin-signed-pdf/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Admin signature applied successfully!");
        navigate("/manage-signed-pdfs");
      } else {
        alert("Failed to upload co-signed PDF.");
      }
    } catch (err) {
      console.error("Admin signing error:", err);
      alert("Error while applying admin signature.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#24418A]">
        Admin Sign Document
      </h1>

      {loading && <p className="text-center text-gray-500">Loading PDF...</p>}

      <input
        type="text"
        placeholder="Enter admin name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-3 w-full rounded-lg"
      />

      {name && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {signatureFonts.map((font, index) => (
            <div
              key={index}
              onClick={() => setSelectedFont(font)}
              className={`cursor-pointer p-3 rounded-lg text-center shadow-sm ${selectedFont === font ? "border-2 border-blue-500 bg-blue-50" : "border"
                }`}
              style={{ fontFamily: font, fontSize: "1.5rem" }}
            >
              {name}
            </div>
          ))}
        </div>
      )}

      {selectedFont && pdfUrl && (
        <div
          ref={pdfContainerRef}
          className="relative mt-6 bg-gray-50 rounded-lg shadow-sm inline-block"
          style={{ width: pdfWidth }}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={() => setLoading(false)}
            onLoadError={() => setLoading(false)}
          >
            <Page pageNumber={1} width={pdfWidth} renderTextLayer={false} renderAnnotationLayer={false} />
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

      <button
        onClick={applyAdminSignature}
        disabled={loading || !previewRef.current}
        className={`mt-6 px-6 py-3 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-[#265CE1] hover:bg-blue-700"
          }`}
      >
        Apply Admin Signature
      </button>
    </div>
  );
}
