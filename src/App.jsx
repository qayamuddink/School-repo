import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import StudentCorner from "./Pages/StudentCorner";
import Admission from "./Pages/Admission";
import CBSEDisclosure from "./Pages/CbseDisClosure";
import Gallery from "./Pages/Gallery";
import MajorEvents from "./Pages/MajorEvents";
import Career from "./Pages/Career";
import Academics from "./Pages/Academics";
import BeyondAcademics from "./Pages/BeyondAcademics";

const App = () => {
  return (
    <>
      
      <div className="bg-slate-500 text-white py-2 px-4 flex flex-col items-center justify-center md:flex-row md:justify-end md:space-x-6">
      <p className="text-sm md:text-base">
        Have any questions? <a href="tel:+917351003754" className="underline">+91-***1003754</a>
      </p>
      <p className="text-sm md:text-base">Blog</p>
    </div>
      
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/cbse-disclosure" element={<CBSEDisclosure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/major-events" element={<MajorEvents />} />
          <Route path="/career" element={<Career />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beyond-academics" element={<BeyondAcademics />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
};

export default App;
