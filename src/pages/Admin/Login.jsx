import React, { useState } from "react";
import "./Admin.css";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "feasiadmin123") {
      onLogin(); // Call parent login
    } else {
      alert("Invalid password");
    }
  };

  return (
   <motion.div className="admin-login"
    initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  >
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
