import React from "react";
import "../css/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <motion.header
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="logo.svg" className="logo" alt="FeasI Platforms" />
        <h1>About FeasI Platforms</h1>
        <p>Innovating for a freer digital future.</p>
      </motion.header>

      <motion.section
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            <strong>FeasI Platforms</strong> is a technology initiative built by and for the next generation. We believe in building platforms that empower people with freedom, simplicity, and speed.
          </p>

          <h2>Our Mission</h2>
          <p>
            We’re on a mission to simplify digital life in Africa and beyond — from seamless payments (FeasIPay) to intuitive cloud services (FeasICloud), and tools for developers.
          </p>

          <h2>Our Vision</h2>
          <p>
            To create a unified ecosystem where technology serves humans — not the other way around.
          </p>
        </div>

        <div className="about-highlight">
          <h3>🚀 Founded by Gen Z. Built for the world.</h3>
          <p>
            We’re young, bold, and unafraid to shape the future.
          </p>
        </div>
      </motion.section>

      <footer className="footer">
        <p>&copy; 2025 FeasI Platforms Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
