import React, { useState, useEffect } from "react";
import "./Admin.css";
import { FiLogOut, FiMail, FiUser } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import Login from "./Login";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("adminAuth") === "true"
  );
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/admin/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) return <Login onLogin={() => {
    localStorage.setItem("adminAuth", "true");
    setIsLoggedIn(true);
  }} />;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>📥 FeasI Inbox</h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut size={18} /> Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="no-messages">No messages yet.</p>
      ) : (
        <ul className="message-list">
          {messages.map((msg, index) => (
            <li key={index} className="message-card">
              <div className="message-top">
                <FiUser className="icon" />
                <strong>{msg.name}</strong>
                <FiMail className="icon email-icon" />
                <span>{msg.email}</span>
              </div>
              <p className="msg-body">{msg.message}</p>
              <div className="timestamp">
                <MdAccessTime className="icon" />
                <small>{msg.timestamp}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
