import React, { useState } from "react";
import NavbarComp from "../../components/NavbarComp";

const DoctorProfile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    hospital: "",
    address: "",
    city: "",
    state: "",
  });

  return (
    <div style={container}>
      <NavbarComp />
      <div style={cardWrapper}>
        <h2 style={title}>My Profile</h2>
        <div style={formContainer}>
          {Object.keys(form).map((field) => (
            <div key={field} style={formGroup}>
              <label style={label}>{formatLabel(field)}</label>
              <input
                type="text"
                placeholder={`Enter ${formatLabel(field)}`}
                value={form[field]}
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
                style={input}
              />
            </div>
          ))}

          <button style={btn}>Save Profile</button>
        </div>
      </div>
    </div>
  );
};

// Helper to format labels nicely
const formatLabel = (field) => {
  switch (field) {
    case "phone":
      return "Phone Number";
    case "experience":
      return "Experience (years)";
    default:
      return field.charAt(0).toUpperCase() + field.slice(1);
  }
};

// Center the card in the page
const container = {
  minHeight: "100vh",
  backgroundColor: "#f5f9ff",
  display: "flex",
  flexDirection: "column",
};

const cardWrapper = {
  margin: "auto", // centers vertically & horizontally
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  maxWidth: "500px",
  width: "90%",
};

const title = {
  marginBottom: "1.5rem",
  textAlign: "center",
  color: "#093a90",
};

const formContainer = {
  display: "grid",
  gap: "1rem",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
};

const label = {
  marginBottom: "0.3rem",
  fontWeight: "bold",
  color: "#093a90",
};

const input = {
  padding: "0.8rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  marginTop: "1rem",
  padding: "0.8rem",
  backgroundColor: "#2575fc",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default DoctorProfile;
