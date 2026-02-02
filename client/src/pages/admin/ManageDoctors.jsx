import React from "react";
import NavbarComp from "../../components/NavbarComp";

const ManageDoctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Ramesh Kumar", specialization: "Cardiologist", hospital: "Apollo" },
    { id: 2, name: "Dr. Sneha Reddy", specialization: "Dermatologist", hospital: "Care Hospital" },
    { id: 3, name: "Dr. Anil Sharma", specialization: "Neurologist", hospital: "City Hospital" },
    { id: 4, name: "Dr. Priya Nair", specialization: "Pediatrician", hospital: "Sunrise Hospital" },
    { id: 5, name: "Dr. Karthik Varma", specialization: "Orthopedic", hospital: "Fortis" },
    { id: 6, name: "Dr. Meera Joshi", specialization: "Gynecologist", hospital: "Apollo" },
    { id: 7, name: "Dr. Rohit Singh", specialization: "ENT", hospital: "Care Hospital" },
    { id: 8, name: "Dr. Ananya Gupta", specialization: "Psychiatrist", hospital: "City Hospital" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1.5rem", color: "#093a90" }}>Manage Doctors</h2>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
      }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Specialization</th>
            <th style={thStyle}>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.id}
                style={trStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f8ff"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
              <td style={tdStyle}>{doc.id}</td>
              <td style={tdStyle}>{doc.name}</td>
              <td style={tdStyle}>{doc.specialization}</td>
              <td style={tdStyle}>{doc.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for table cells
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

export default ManageDoctors;
