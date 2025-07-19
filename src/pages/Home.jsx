import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x11d6c9,
        backgroundColor: 0x000000,
        points: 12.0,
        maxDistance: 25.0,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="home">
      <Navbar />
      <div className="vanta-bg" ref={vantaRef}>
        <motion.section
          className="hero-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <h1>
              <span className="highlight">FeasI Platforms</span><br />
              Tech That Grows Where Freedom Flows
            </h1>
            <p className="subtitle">
              Powering the future of finance, cloud, and innovation. Built for Gen Z.
            </p>
            <div className="btn-group">
              <motion.a
                href="/contact"
                className="cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/features"
                className="cta-btn alt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>

      <section className="platforms">
        <h2>Our Platforms</h2>
        <div className="platforms-grid">
          <div className="platform-card">
            <h3>FeasIPay</h3>
            <p>Secure and fast payments for everyone, inspired by PalmPay but better.</p>
          </div>
          <div className="platform-card">
            <h3>FeasICloud</h3>
            <p>Cloud storage for the next generation, simple and stylish like iCloud.</p>
          </div>
          <div className="platform-card">
            <h3>Developer Tools</h3>
            <p>API, SDKs and tools for innovators building with Feasl.</p>
          </div>
          <div className="platform-card">
            <h3>Analytics</h3>
            <p>Insight-driven analytics for performance tracking and scaling.</p>
          </div>
          <div className="platform-card">
            <h3>Support System</h3>
            <p>24/7 customer engagement and helpdesk platform.</p>
          </div>
          <div className="platform-card">
            <h3>FeasIMarket</h3>
            <p>Marketplace for FeasI apps, tools, and plugins.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
