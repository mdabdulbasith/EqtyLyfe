// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechSolutions from './pages/TechSolutions';
import CaseStudies from './pages/CaseStudies';
// import AboutUs from './pages/AboutUs';
// import CaseStudies from './pages/CaseStudies';
// import EQTYLyfe from './pages/EQTYLyfe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-solutions" element={<TechSolutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}

export default App;
