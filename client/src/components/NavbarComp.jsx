import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Centered content container */}
      <div
        style={{
          maxWidth: "13000px", // limits width on large screens
          margin: "0 auto",   // centers the content
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Brand */}
        <h2 style={{ margin: 0, color: "#2575fc" }}>HealthMate</h2>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Link styling
const linkStyle = {
  textDecoration: "none",
  color: "#2575fc",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "0.2s",
};

export default NavbarComp;
