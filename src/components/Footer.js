import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">FeasI Platforms</div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/developers">Developers</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FeasI Platforms Inc. All rights reserved.</p>
        <p className="country">Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;
