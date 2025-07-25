import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers"; // Assuming you have a Developers page
import Admin from "./pages/Admin/Admin";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/admi1n" element={<Admin/>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
