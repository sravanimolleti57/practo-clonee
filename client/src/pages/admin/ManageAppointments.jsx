import React from "react";
import NavbarComp from "../../components/NavbarComp";

const ManageAppointments = () => {
  const appointments = [
    { id: 1, patient: "Sravya", doctor: "Dr. Ramesh Kumar", date: "02 Feb 2026", status: "Upcoming" },
    { id: 2, patient: "John ", doctor: "Dr. Sneha Reddy", date: "15 Jan 2026", status: "Completed" },
    { id: 3, patient: "Ramu", doctor: "Dr. Anil Sharma", date: "20 Feb 2026", status: "Upcoming" },
    { id: 4, patient: "Robin", doctor: "Dr. Priya Nair", date: "05 Mar 2026", status: "Cancelled" },
    { id: 5, patient: "Anitha ", doctor: "Dr. Karthik Varma", date: "10 Mar 2026", status: "Upcoming" },
    { id: 6, patient: "Rohan ", doctor: "Dr. Meera Joshi", date: "12 Mar 2026", status: "Completed" },
    { id: 7, patient: "Priya ", doctor: "Dr. Rohit Singh", date: "15 Mar 2026", status: "Upcoming" },
    { id: 8, patient: "Vikram ", doctor: "Dr. Ananya Gupta", date: "18 Mar 2026", status: "Upcoming" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1.5rem", color: "#093a90" }}>Manage Appointments</h2>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
      }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Patient</th>
            <th style={thStyle}>Doctor</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}
                style={trStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f8ff"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
              <td style={tdStyle}>{appt.id}</td>
              <td style={tdStyle}>{appt.patient}</td>
              <td style={tdStyle}>{appt.doctor}</td>
              <td style={tdStyle}>{appt.date}</td>
              <td style={tdStyle}>{appt.status}</td>
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

export default ManageAppointments;
