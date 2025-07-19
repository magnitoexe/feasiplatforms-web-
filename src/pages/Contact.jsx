import React from "react";
import "../css/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-page">
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/logo.svg" className="logo" alt="FeasI Platforms" />
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Let’s talk.</p>
      </motion.header>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>

      <footer className="footer">
        <p>&copy; 2025 FeasI Platforms Inc.</p>
      </footer>
    </div>
  );
};

export default Contact;
