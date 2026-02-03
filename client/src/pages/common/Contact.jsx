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
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f9ff" }}>
      <NavbarComp />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
          gap: "3rem",
        }}
      >
       
        <div style={{ flex: 1, maxWidth: "500px" }}>
          <Lottie animationData={contactAnimation} loop />
        </div>

        
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={cardStyle}>
            <h2 style={{ marginBottom: "1rem" }}>Contact Us!!</h2>

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
    </div>
  );
};

/* ---------- STYLES ---------- */
const cardStyle = {
  backgroundColor: "#ffffff",
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
