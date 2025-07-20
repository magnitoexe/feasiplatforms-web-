import React from "react";
import "../css/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Failed to send. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <motion.header
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="logoicon.png" className="logo" alt="FeasI Platforms" />
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Let’s talk.</p>
      </motion.header>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>

      <footer className="footer">
        <p>&copy; 2025 FeasI Platforms Inc.</p>
      </footer>
    </div>
  );
};

export default Contact;
