import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const isLoggedIn = true; // Replace with real auth logic

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); // close mobile menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/"); // redirect to home
  };

  const links = (
    <>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      {isLoggedIn ? (
        <span onClick={handleLogout} style={{ ...linkStyle, cursor: "pointer" }}>Logout</span>
      ) : (
        <Link to="/login" style={linkStyle}>Login</Link>
      )}
    </>
  );

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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h2 style={{ margin: 0, color: "#093a90" }}>HealthMate</h2>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2rem" }}>
            {links}
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            ☰
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 2rem",
            gap: "1rem",
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
          }}
        >
          {links}
        </div>
      )}
    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#083b93",
  fontWeight: "bold",
  fontSize: "1rem",
};

export default NavbarComp;
