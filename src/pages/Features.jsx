import React from "react";
import "../css/Features.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <div className="features-page">
        <motion.header
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Features</h1>
          <p>Explore what makes FeasI Platforms different</p>
        </motion.header>

        <section className="features-grid">
          {/* FeasIPay */}
          <motion.div className="feature-card" whileHover={{ scale: 1.03 }}>
            <img src="/assets/feasipay.png" alt="FeasIPay" />
            <h2>FeasIPay</h2>
            <p>
              Fast, secure, and simple payments for everyone — built for
              mobile-first Africa.
            </p>
             <a
              href="https://feasipay.com"
              className="launch-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
               Launch FeasIPay
            </a>
          </motion.div>

          {/* FeasICloud */}
          <motion.div className="feature-card" whileHover={{ scale: 1.03 }}>
            <img src="/assets/feasicloud-mockup.png" alt="FeasICloud" />
            <h2>FeasICloud</h2>
            <p>
              Gen Z cloud that feels like magic. Access your files anywhere with
              one tap.
            </p>
            <a
              href="https://feasicloud.com"
              className="launch-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
               Launch FeasICloud
            </a>
          </motion.div>

          {/* Developer Tools */}
          <motion.div className="feature-card" whileHover={{ scale: 1.03 }}>
            <img src="/assets/devtools.png" alt="Developer Tools" />
            <h2>Developer Tools</h2>
            <p>
              SDKs, APIs, and components to help young African devs build the
              future.
            </p>
             <a
              href="https://feasitech.com"
              className="launch-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
               Launch FeasI Dev Tools
            </a>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Features;
