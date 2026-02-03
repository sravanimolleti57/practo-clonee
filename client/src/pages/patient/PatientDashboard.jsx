import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Lottie from "lottie-react";
import "./PatientDashboard.css"; // ✅ import the CSS file correctly

import appointmentAnim from "../../assets/appointment.json";
import bookAnim from "../../assets/book.json";
import profileAnim from "../../assets/profile.json";
import recordsAnim from "../../assets/records.json";

const dashboardCards = [
  { title: "My Appointments", lottie: appointmentAnim, link: "/patient/my-appointment" },
  { title: "Book Appointment", lottie: bookAnim, link: "/patient/book-appointment" },
  { title: "My Profile", lottie: profileAnim, link: "/patient/PatientProfile" },
  { title: "Medical Records", lottie: recordsAnim, link: "/patient/medical-records" },
];

const PatientDashboard = () => {
  const navigate = useNavigate(); // ✅ use react-router-dom navigation

  return (
    <div style={{ padding: "2rem" }}>
      <NavbarComp />
      <h2 style={{ marginBottom: "2rem", color: "#093a90" }}>Patient Dashboard</h2>

      <div className="patient-dashboard-grid">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="patient-dashboard-card"
            onClick={() => navigate(card.link)} // ✅ safe navigation
          >
            <Lottie animationData={card.lottie} loop style={{ height: 150 }} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
