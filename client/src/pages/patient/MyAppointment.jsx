import React from "react";
import NavbarComp from "../../components/NavbarComp";

const MyAppointment = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Ramesh Kumar",
      specialization: "Cardiologist",
      date: "02 Feb 2026",
      hospital: "Apollo Hospital",
      status: "Upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Sneha Reddy",
      specialization: "Dermatologist",
      date: "15 Jan 2026",
      hospital: "Care Hospital",
      status: "Completed",
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2>My Appointments</h2>

      {appointments.map((appt) => (
        <div key={appt.id} style={card}>
          <h3>{appt.doctor}</h3>
          <p>{appt.specialization}</p>
          <p>{appt.hospital}</p>
          <p>{appt.date}</p>
          <p>{appt.status}</p>
        </div>
      ))}
    </div>
  );
};

const card = {
  background: "#a3d1e6",
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(75, 73, 73, 0.1)",
};

export default MyAppointment;
