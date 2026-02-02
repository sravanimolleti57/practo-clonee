import React from "react";
import NavbarComp from "../../components/NavbarComp";

const ManagePatients = () => {
  const patients = [
    { id: 1, name: "Sravani Molleti", age: 24, city: "Hyderabad" },
    { id: 2, name: "John Doe", age: 30, city: "Mumbai" },
    { id: 3, name: "Jane Smith", age: 28, city: "Bangalore" },
    { id: 4, name: "Robert Brown", age: 35, city: "Chennai" },
    { id: 5, name: "Anita Verma", age: 29, city: "Kolkata" },
    { id: 6, name: "Rohan Patel", age: 32, city: "Delhi" },
    { id: 7, name: "Priya Sharma", age: 27, city: "Pune" },
    { id: 8, name: "Vikram Singh", age: 31, city: "Hyderabad" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1.5rem", color: "#093a90" }}>Manage Patients</h2>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
      }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>City</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((pat) => (
            <tr key={pat.id}
                style={trStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f8ff"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
              <td style={tdStyle}>{pat.id}</td>
              <td style={tdStyle}>{pat.name}</td>
              <td style={tdStyle}>{pat.age}</td>
              <td style={tdStyle}>{pat.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles
const thStyle = {
  padding: "12px 15px",
  border: "1px solid #ddd",
  textAlign: "left",
  backgroundColor: "#f5f5f5",
  color: "#093a90",
  fontWeight: "bold"
};

const tdStyle = {
  padding: "12px 15px",
  border: "1px solid #ddd",
  textAlign: "left"
};

const trStyle = {
  transition: "background-color 0.2s ease"
};

export default ManagePatients;
