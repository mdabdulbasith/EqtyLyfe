import { useNavigate } from "react-router-dom";
import { useDocuments } from "../DocumentsContext";
import { FaFileSignature } from "react-icons/fa";

export default function SignDocumentsPage() {
  const navigate = useNavigate();
  const { documents } = useDocuments();

  const handleFinalizeSubmission = async () => {
    // Filter only signed docs
    const signedDocs = documents.filter(doc => doc.status === "Signed");

    if (signedDocs.length !== documents.length) {
      alert("Please sign all documents before continuing.");
      return;
    }

    try {
      const response = await fetch("https://eqtylyfe-be.onrender.com/api/finalize-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documents: signedDocs }),
      });
      const data = await response.json();

      if (data.success) {
        alert("All signed documents submitted successfully!");
        navigate("/next-step"); // adjust route as needed
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting signed documents:", error);
      alert("Error occurred while submitting. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-6 p-4 sm:p-6 space-y-6 border border-[#CBDFE1] rounded-2xl bg-[#FFFFFF] shadow-md">
      <div className="space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#24418A] text-center sm:text-left">
          Sign your documents
        </h1>

        {documents.map(doc => (
          <div key={doc.id} className="space-y-2">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#24418A]">{doc.title}</h2>
              <p className="text-sm sm:text-base text-[#374151] font-medium">{doc.description}</p>
            </div>

            <div
              onClick={() => navigate(`/sign-document/${doc.id}`)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border rounded-lg p-4 bg-[#F9FAFB] shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex-shrink-0 text-[#24418A] text-2xl sm:text-3xl">
                <FaFileSignature />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="font-medium text-[#162958] text-base sm:text-lg">{doc.title}</h3>
                  <span
                    className={`mt-2 sm:mt-0 px-3 py-1 rounded text-xs sm:text-sm ${
                      doc.status === "Signed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
                <p className="mt-2 text-[#162958] text-sm sm:text-base">Click to read and sign</p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button className="w-full sm:w-auto px-4 py-2 bg-[#DDE7FE] text-[#4B5563] rounded">
            Previous: Legal and Financial
          </button>
          <button
            onClick={handleFinalizeSubmission}
            className="w-full sm:w-auto px-4 py-2 bg-[#265CE1] text-white rounded hover:bg-[#4f6394] cursor-pointer"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
