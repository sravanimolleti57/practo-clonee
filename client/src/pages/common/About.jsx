import React from "react";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import aboutAnimation from "../../assets/about.json";

const About = () => {
  return (
    <div style={pageStyle}>
      <NavbarComp />

      {/* ABOUT CONTENT */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>About HealthMate</h1>

        <p style={textStyle}>
          HealthMate is a modern healthcare management system designed to
          simplify interactions between patients, doctors, and administrators.
        </p>

        <p style={textStyle}>
          Our platform helps patients book appointments easily, enables doctors
          to manage care efficiently, and allows administrators to oversee the
          system smoothly.
        </p>
      </div>

      {/* BIG LOTTIE */}
      <div style={lottieStyle}>
        <Lottie animationData={aboutAnimation} loop />
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f5f9ff",
  fontFamily: "'Poppins', sans-serif",
};

const contentStyle = {
  padding: "3rem 2rem 1.5rem",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.4rem",
  fontWeight: "600",
  marginBottom: "1rem",
};

const textStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  maxWidth: "900px",
  margin: "0 auto 1rem",
  color: "#333",
};

const lottieStyle = {
  maxWidth: "650px",
  margin: "0 auto",
};

export default About;
