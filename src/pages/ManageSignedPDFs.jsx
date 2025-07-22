import { useEffect, useState } from "react";

export default function ManageSignedPDFs() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://eqtylyfe-be.onrender.com/api/signed-pdfs")
      .then((res) => res.json())
      .then((data) => {
        setPdfs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch PDFs:", err);
        setLoading(false);
      });
  }, []);

  const deletePdf = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;

    try {
      const res = await fetch(`https://eqtylyfe-be.onrender.com/api/signed-pdfs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setPdfs((prev) => prev.filter((pdf) => pdf._id !== id));
      } else {
        alert("Failed to delete PDF");
      }
    } catch (err) {
      console.error("Error deleting PDF:", err);
      alert("Error deleting PDF");
    }
  };

  if (loading)
    return <p className="text-center mt-6 text-gray-500">Loading PDFs...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Signed PDFs Manager
      </h1>

      {pdfs.length === 0 ? (
        <p className="text-center text-gray-500">No signed PDFs found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pdfs.map((pdf) => (
            <div
              key={pdf._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition duration-200 border border-gray-100 flex flex-col justify-between"
            >
              <div className="mb-4">
                <h2 className="text-sm text-gray-700 font-semibold truncate">
                  {pdf.url.split("/").pop()}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Uploaded: {new Date(pdf.uploadedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between mt-auto">
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium underline"
                >
                  View PDF
                </a>
                <button
                  onClick={() => deletePdf(pdf._id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
