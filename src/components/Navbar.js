import React, { useState } from "react";
import "../css/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logoicon.png" alt="Logo" className="icon" /> <span className="text">FeasI Platforms</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/contact">Contact Us</a>
        <a href="/feasicloud">FeasICloud</a>
        <a href="/feaspay">FeasIPay</a>
        <a href="/developer">Developer</a>
        <a href="/about">About</a>
        <a href="/join" className="join-btn">Join Us</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
