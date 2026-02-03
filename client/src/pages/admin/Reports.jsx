import React from "react";
import NavbarComp from "../../components/NavbarComp";

const Reports = () => {
  const reports = [
    { id: 1, type: "Daily Appointments", total: 20 },
    { id: 2, type: "Doctors Available", total: 15 },
    { id: 3, type: "Patients Registered", total: 50 },
    { id: 4, type: "Upcoming Appointments", total: 12 },
    { id: 5, type: "Cancelled Appointments", total: 3 },
    { id: 6, type: "Completed Appointments", total: 30 },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1.5rem", color: "#093a90" }}>Reports</h2>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
      }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Report Type</th>
            <th style={thStyle}>Total</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((rep) => (
            <tr key={rep.id}
                style={trStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f8ff"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
              <td style={tdStyle}>{rep.id}</td>
              <td style={tdStyle}>{rep.type}</td>
              <td style={tdStyle}>{rep.total}</td>
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

export default Reports;
