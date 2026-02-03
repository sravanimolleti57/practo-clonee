import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarComp from "../../components/NavbarComp";
import "./AdminDashboard.css";

import manageDoctorsAnim from "../../assets/profile.json";
import managePatientsAnim from "../../assets/book.json";
import manageAppointmentsAnim from "../../assets/appointment.json";
import reportsAnim from "../../assets/records.json";

const dashboardCards = [
  { title: "Manage Doctors", link: "/admin/manage-doctors", anim: manageDoctorsAnim },
  { title: "Manage Patients", link: "/admin/manage-patients", anim: managePatientsAnim },
  { title: "Manage Appointments", link: "/admin/manage-appointments", anim: manageAppointmentsAnim },
  { title: "Reports", link: "/admin/reports", anim: reportsAnim },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <NavbarComp />
      <div className="admin-dashboard-container">
        <h2 className="admin-dashboard-title">Admin Dashboard</h2>

        <div className="admin-dashboard-grid">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="admin-dashboard-card"
              onClick={() => navigate(card.link)}
            >
              <Lottie animationData={card.anim} loop className="admin-card-lottie" />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
