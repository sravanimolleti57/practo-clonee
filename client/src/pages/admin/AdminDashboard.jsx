import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import "./AdminDashboard.css";

import appointmentAnim from "../../assets/appointment.json";
import bookAnim from "../../assets/book.json";
import profileAnim from "../../assets/profile.json";
import recordsAnim from "../../assets/records.json";

const dashboardCards = [
  { title: "Manage Doctors", link: "/admin/manage-doctors", anim: profileAnim },
  { title: "Manage Patients", link: "/admin/manage-patients", anim: bookAnim },
  { title: "Manage Appointments", link: "/admin/manage-appointments", anim: appointmentAnim },
  { title: "Reports", link: "/admin/reports", anim: recordsAnim },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <NavbarComp />
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="cards-grid">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => navigate(card.link)}
          >
            <Lottie animationData={card.anim} loop={true} className="card-lottie" />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
