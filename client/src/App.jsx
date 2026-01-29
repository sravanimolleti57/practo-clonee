import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Common pages
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";

// Dashboards
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import About from "./pages/common/About";
import Contact from "./pages/common/Contact";


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
        <Route
          path="/"
          element={
            <motion.div {...pageAnimation}>
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/login"
          element={
            <motion.div {...pageAnimation}>
              <Login />
            </motion.div>
          }
        />

        <Route
          path="/register"
          element={
            <motion.div {...pageAnimation}>
              <Register />
            </motion.div>
          }
        />

        {/* Dashboards */}
        <Route
          path="/patient/dashboard"
          element={
            <motion.div {...pageAnimation}>
              <PatientDashboard />
            </motion.div>
          }
        />

        <Route
          path="/doctor/dashboard"
          element={
            <motion.div {...pageAnimation}>
              <DoctorDashboard />
            </motion.div>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <motion.div {...pageAnimation}>
              <AdminDashboard />
            </motion.div>
          }
        />
        <Route
         path="/about"
          element={
            <motion.div {...pageAnimation}>
              <About />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div {...pageAnimation}>
             <Contact />
          </motion.div>
        }
      />

      </Routes>
    </AnimatePresence>
  );
}

export default App;
