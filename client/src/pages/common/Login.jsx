import React, { useState } from "react";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import loginAnimation from "../../assets/login.json"; // your downloaded animation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f9ff" }}>
      <NavbarComp />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          minHeight: "80vh",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Lottie Animation */}
        <div style={{ flex: 1, minWidth: "300px", maxWidth: "400px" }}>
          <Lottie animationData={loginAnimation} loop />
        </div>

        {/* Right: Login Card */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "400px",
            backgroundColor: "#fff",
            padding: "3rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
          <p style={{ marginTop: "1rem" }}>
            Don't have an account?{" "}
            <a href="/register" style={{ color: "#2575fc", fontWeight: "bold" }}>
              Register
            </a>
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

export default Login;
