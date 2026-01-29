import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import loginAnimation from "../../assets/login.json";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    // TEMP LOGIN (backend later)
    if (role === "admin") navigate("/admin/dashboard");
    if (role === "doctor") navigate("/doctor/dashboard");
    if (role === "patient") navigate("/patient/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f9ff" }}>
      <NavbarComp />

      <div style={containerStyle}>
        <div style={{ flex: 1, maxWidth: "400px" }}>
          <Lottie animationData={loginAnimation} loop />
        </div>

        <div style={cardStyle}>
          <h2>Login</h2>

          <form onSubmit={handleSubmit} style={formStyle}>
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

            <div>
              <p style={{ marginBottom: "0.5rem" }}>Select Role</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["admin", "doctor", "patient"].map((item) => (
                  <div
                    key={item}
                    onClick={() => setRole(item)}
                    style={{
                      flex: 1,
                      padding: "0.6rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      textAlign: "center",
                      border:
                        role === item
                          ? "2px solid #2575fc"
                          : "1px solid #ccc",
                      backgroundColor:
                        role === item ? "#eaf1ff" : "#fff",
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  gap: "2rem",
  flexWrap: "wrap",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "3rem",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  maxWidth: "400px",
  width: "100%",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.8rem",
  backgroundColor: "#2575fc",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

export default Login;
