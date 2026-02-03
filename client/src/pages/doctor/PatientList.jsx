import React from "react";
import NavbarComp from "../../components/NavbarComp";

const PatientList = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 30, gender: "Male" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female" },
    { id: 3, name: "Mark Lee", age: 40, gender: "Male" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1rem", color: "#093a90" }}>Patient List</h2>

      {patients.map((p) => (
        <div key={p.id} style={card}>
          <p><strong>Name:</strong> {p.name}</p>
          <p><strong>Age:</strong> {p.age}</p>
          <p><strong>Gender:</strong> {p.gender}</p>
        </div>
      ))}
    </div>
  );
};

const card = {
  background: "#e8efb4",
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default PatientList;
