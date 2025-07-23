import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageSignedPDFs() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("adminAuth"); // clear login state
    navigate("/admin-login");
  };

  if (loading)
    return <p className="text-center mt-6 text-gray-500">Loading PDFs...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Signed PDFs Manager
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

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
                  {(pdf.clientSignedUrl || pdf.url)?.split("/").pop() || "Signed Document"}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Uploaded: {new Date(pdf.uploadedAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                {(pdf.clientSignedUrl || pdf.url) && (
                  <a
                    href={pdf.clientSignedUrl || pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium underline"
                  >
                    View Client-Signed
                  </a>
                )}

                {pdf.adminSignedUrl ? (
                  <a
                    href={pdf.adminSignedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 text-sm font-medium underline"
                  >
                    View Co-Signed
                  </a>
                ) : (
                  <button
                    onClick={() => navigate(`/admin-sign/${pdf._id}`)}
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                  >
                    Sign as Admin
                  </button>
                )}

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
