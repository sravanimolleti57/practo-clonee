import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import registerAnimation from "../../assets/register.json";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // You can connect backend API here later
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration Successful!");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <NavbarComp />

      {/* Background Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <Lottie animationData={registerAnimation} loop />
      </div>

      {/* Register Form */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#e7dbdb1a",
            padding: "3rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Register</h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Register
            </button>
          </form>

          <p style={{ marginTop: "1rem" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#2575fc", fontWeight: "bold" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  width: "100%",
};

const buttonStyle = {
  padding: "0.8rem 1rem",
  backgroundColor: "#2575fc",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",
};

export default Register;
