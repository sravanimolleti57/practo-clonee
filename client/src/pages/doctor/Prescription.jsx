import React from "react";
import NavbarComp from "../../components/NavbarComp";

const Prescription = () => {
  const prescriptions = [
    { id: 1, patient: "John Doe", medicine: "Paracetamol", dosage: "500mg", date: "02 Feb 2026" },
    { id: 2, patient: "Jane Smith", medicine: "Amoxicillin", dosage: "250mg", date: "03 Feb 2026" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1rem", color: "#093a90" }}>Prescriptions</h2>

      {prescriptions.map((p) => (
        <div key={p.id} style={card}>
          <p><strong>Patient:</strong> {p.patient}</p>
          <p><strong>Medicine:</strong> {p.medicine}</p>
          <p><strong>Dosage:</strong> {p.dosage}</p>
          <p><strong>Date:</strong> {p.date}</p>
        </div>
      ))}
    </div>
  );
};

const card = {
  background: "#ade9cc",
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default Prescription;
