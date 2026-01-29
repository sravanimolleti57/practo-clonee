import React, { useState } from "react";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import contactAnimation from "../../assets/contact.json";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", backgroundColor: "#f5f9ff" }}>
      <NavbarComp />

      {/* Lottie Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.2, // subtle background
        }}
      >
        <Lottie animationData={contactAnimation} loop />
      </div>

      {/* Contact Form at Top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ marginBottom: "1rem" }}>Contact Us</h2>

          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              style={{ ...inputStyle, resize: "none" }}
            />

            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */
const cardStyle = {
  backgroundColor: "#f7f1f803",
  padding: "2.5rem",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  maxWidth: "400px",
  width: "100%",
  textAlign: "center",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "0.8rem",
  backgroundColor: "#2575fc",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Contact;
