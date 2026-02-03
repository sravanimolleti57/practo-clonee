import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Lottie from "lottie-react";
import "./DoctorDashboard.css";

import appointmentAnim from "../../assets/appointment.json";
import bookAnim from "../../assets/book.json";
import profileAnim from "../../assets/profile.json";
import recordsAnim from "../../assets/records.json";

const dashboardCards = [
  {
    title: "My Appointments",
    link: "/doctor/appointments",
    lottie: appointmentAnim,
  },
  {
    title: "Patient List",
    link: "/doctor/patients",
    lottie: bookAnim,
  },
  {
    title: "Prescriptions",
    link: "/doctor/prescriptions",
    lottie: recordsAnim,
  },
  {
    title: "My Profile",
    link: "/doctor/profile",
    lottie: profileAnim,
  },
];

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="doctor-dashboard">
      <NavbarComp />

      <div className="doctor-dashboard-container">
        <h2 className="doctor-dashboard-title">Doctor Dashboard</h2>

        <div className="doctor-dashboard-grid">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="doctor-dashboard-card"
              onClick={() => navigate(card.link)}
            >
              <Lottie
                animationData={card.lottie}
                loop={true}
                style={{ height: 120 }}
              />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
