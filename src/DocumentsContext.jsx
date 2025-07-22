import { createContext, useState, useContext } from "react";

const DocumentsContext = createContext();

export const DocumentsProvider = ({ children }) => {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Title Authorization", description: "Description/explanation of the document", status: "Pending" },
    { id: 2, title: "EQTY LYFE Application", description: "Description/explanation of the document", status: "Pending" },
    { id: 3, title: "EQTY LYFE Authorization to Release Information", description: "Description/explanation of the document", status: "Pending" },
  ]);

  const markAsSigned = (id, fileUrl) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === id ? { ...doc, status: "Signed", fileUrl } : doc
      )
    );
  };


  return (
    <DocumentsContext.Provider value={{ documents, markAsSigned }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export const useDocuments = () => useContext(DocumentsContext);
