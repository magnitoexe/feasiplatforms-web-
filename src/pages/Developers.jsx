import React from "react";
import "../css/Developers.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Developer = () => {
  return (
    <>
    <Navbar />
    <div className="developer-page">
      <motion.header
        className="developer-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Developer Hub</h1>
        <p>Tools and APIs to build the future with FeasI</p>
      </motion.header>

      <section className="dev-tools">
        <motion.div className="dev-card" whileHover={{ scale: 1.03 }}>
          <h2>FeasI API</h2>
          <p>Integrate payments, cloud storage, and more with simple REST APIs.</p>
        </motion.div>
        <motion.div className="dev-card" whileHover={{ scale: 1.03 }}>
          <h2>FeasI SDK</h2>
          <p>SDKs for JavaScript, React Native, and more to build with ease.</p>
        </motion.div>
        <motion.div className="dev-card" whileHover={{ scale: 1.03 }}>
          <h2>Developer Docs</h2>
          <p>Clear, simple documentation to get started in minutes.</p>
        </motion.div>
      </section>

    </div>
     <Footer/>
    </>
  );
};

export default Developer;
