// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechSolutions from './pages/TechSolutions';
import CaseStudies from './pages/CaseStudies';
import SignDocumentsPage from "./pages/SignDocumentsPage";
import SignDocumentPage from "./pages/SignDocumentPage";
import { DocumentsProvider } from "./DocumentsContext";
import ManageSignedPDFs from "./pages/ManageSignedPDFs";
import AdminSignDocumentPage from "./pages/AdminSignDocumentPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from './pages/AdminLogin';
// import AboutUs from './pages/AboutUs';
// import CaseStudies from './pages/CaseStudies';
// import EQTYLyfe from './pages/EQTYLyfe';

function App() {
  return (
    <Router>
      <DocumentsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/sign-documents" element={<SignDocumentsPage />} />
          <Route path="/sign-document/:id" element={<SignDocumentPage />} />
          <Route path="/admin-sign/:id" element={<AdminSignDocumentPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/manage-signed-pdfs" element={
              <ProtectedRoute>
                <ManageSignedPDFs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </DocumentsProvider>
    </Router>
  );
}

export default App;
