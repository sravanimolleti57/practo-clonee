import React from "react";
import NavbarComp from "../../components/NavbarComp";

const DoctorAppointments = () => {
  const appointments = [
    { id: 1, patient: "John Doe", date: "02 Feb 2026", time: "10:00 AM", status: "Upcoming" },
    { id: 2, patient: "Jane Smith", date: "03 Feb 2026", time: "11:30 AM", status: "Upcoming" },
    { id: 3, patient: "Mark Lee", date: "01 Feb 2026", time: "02:00 PM", status: "Completed" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "1rem", color: "#093a90" }}>My Appointments</h2>

      {appointments.map((appt) => (
        <div key={appt.id} style={card}>
          <p><strong>Patient:</strong> {appt.patient}</p>
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Status:</strong> {appt.status}</p>
        </div>
      ))}
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default DoctorAppointments;
