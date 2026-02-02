import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Lottie from "lottie-react"; // ✅ Import Lottie
import "./DoctorDashboard.css";

import appointmentAnim from "../../assets/appointment.json";
import bookAnim from "../../assets/book.json";
import profileAnim from "../../assets/profile.json";
import recordsAnim from "../../assets/records.json";

const dashboardCards = [
  { title: "My Appointments", link: "/doctor/appointments", lottie: appointmentAnim },
  { title: "Patient List", link: "/doctor/patients", lottie: bookAnim },
  { title: "Prescriptions", link: "/doctor/prescriptions", lottie: recordsAnim },
  { title: "My Profile", link: "/doctor/profile", lottie: profileAnim },
];

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "2rem", color: "#093a90" }}>Doctor Dashboard</h2>

      <div className="dashboard-grid">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => navigate(card.link)}
          >
            {/* Render the Lottie animation */}
            <Lottie animationData={card.lottie} loop style={{ height: 150 }} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
