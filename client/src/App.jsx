import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------ Common Pages ------------------ */
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import About from "./pages/common/About";
import Contact from "./pages/common/Contact";

/* ------------------ Dashboards ------------------ */
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

/* ------------------ Patient Sub Pages ------------------ */
import MyAppointment from "./pages/patient/MyAppointment";
import BookAppointment from "./pages/patient/BookAppointment";
import PatientProfile from "./pages/patient/PatientProfile";
import MedicalRecords from "./pages/patient/MedicalRecords";

/* ------------------ Doctor Sub Pages ------------------ */
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import PatientList from "./pages/doctor/PatientList";
import Prescription from "./pages/doctor/Prescription";
import DoctorProfile from "./pages/doctor/DoctorProfile";

/* ------------------ Admin Sub Pages ------------------ */
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";
import ManageAppointments from "./pages/admin/ManageAppointments";
import Reports from "./pages/admin/Reports";

/* ------------------ Page Animation ------------------ */
const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Common Pages */}
        <Route path="/" element={<motion.div {...pageAnimation}><Home /></motion.div>} />
        <Route path="/login" element={<motion.div {...pageAnimation}><Login /></motion.div>} />
        <Route path="/register" element={<motion.div {...pageAnimation}><Register /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageAnimation}><About /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageAnimation}><Contact /></motion.div>} />

        {/* Patient Dashboard & Sub Pages */}
        <Route path="/patient/dashboard" element={<motion.div {...pageAnimation}><PatientDashboard /></motion.div>} />
        <Route path="/patient/my-appointment" element={<motion.div {...pageAnimation}><MyAppointment /></motion.div>} />
        <Route path="/patient/book-appointment" element={<motion.div {...pageAnimation}><BookAppointment /></motion.div>} />
        <Route path="/patient/PatientProfile" element={<motion.div {...pageAnimation}><PatientProfile /></motion.div>} />
        <Route path="/patient/medical-records" element={<motion.div {...pageAnimation}><MedicalRecords /></motion.div>} />

        {/* Doctor Dashboard & Sub Pages */}
        <Route path="/doctor/dashboard" element={<motion.div {...pageAnimation}><DoctorDashboard /></motion.div>} />
        <Route path="/doctor/appointments" element={<motion.div {...pageAnimation}><DoctorAppointments /></motion.div>} />
        <Route path="/doctor/patients" element={<motion.div {...pageAnimation}><PatientList /></motion.div>} />
        <Route path="/doctor/prescriptions" element={<motion.div {...pageAnimation}><Prescription /></motion.div>} />
        <Route path="/doctor/profile" element={<motion.div {...pageAnimation}><DoctorProfile /></motion.div>} />

        {/* Admin Dashboard & Sub Pages */}
        <Route path="/admin/dashboard" element={<motion.div {...pageAnimation}><AdminDashboard /></motion.div>} />
        <Route path="/admin/manage-doctors" element={<motion.div {...pageAnimation}><ManageDoctors /></motion.div>} />
        <Route path="/admin/manage-patients" element={<motion.div {...pageAnimation}><ManagePatients /></motion.div>} />
        <Route path="/admin/manage-appointments" element={<motion.div {...pageAnimation}><ManageAppointments /></motion.div>} />
        <Route path="/admin/reports" element={<motion.div {...pageAnimation}><Reports /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
