import React from "react";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import homeAnimation from "../../assets/home.json.json";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", overflow: "hidden", backgroundColor: "#f5f9ff" }}>
      <NavbarComp />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          minHeight: "80vh",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Welcome to HealthMate!!
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "500px", marginBottom: "2rem" }}>
            Manage your healthcare appointments, connect with doctors, and keep track of your health — all in one place.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/login" style={buttonStyle}>Login</a>
            <a href="/register" style={buttonStyle}>Register</a>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <Lottie animationData={homeAnimation} loop />
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "0.8rem 1.5rem",
  backgroundColor: "#2575fc",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",
  cursor: "pointer",
};

export default Home;
