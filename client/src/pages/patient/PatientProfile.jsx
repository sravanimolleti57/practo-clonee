import React, { useState } from "react";
import NavbarComp from "../../components/NavbarComp";

const PatientProfile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    bloodGroup: "",
    address: "",
    city: "",
    district: "",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved successfully ✅");
  };

  return (
    <div>
      {/* Navbar always on top */}
      <NavbarComp />

      <div className="profile-wrapper">
        <div className="profile-card">
          <h2 className="profile-title">Patient Profile</h2>

          <form onSubmit={handleSubmit}>
            <div className="profile-grid">
              {Object.keys(form).map((field) => (
                <div className="input-group" key={field}>
                  <label>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field}`}
                    required
                  />
                </div>
              ))}
            </div>

            <button type="submit" className="save-btn">
              Save Profile
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .profile-wrapper {
          background: #f4f6f9;
          min-height: 100vh;
          padding: 40px 20px;
          box-sizing: border-box;
        }

        .profile-card {
          background: white;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .profile-title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 26px;
          font-weight: 600;
          color: #333;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          margin-bottom: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
        }

        .input-group input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: 0.3s;
        }

        .input-group input:focus {
          border-color: #2575fc;
          outline: none;
          box-shadow: 0 0 5px rgba(37,117,252,0.3);
        }

        .save-btn {
          margin-top: 30px;
          width: 100%;
          padding: 12px;
          background: #2575fc;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .save-btn:hover {
          background: #1a5ed9;
        }

        /* ✅ Mobile Responsive */
        @media (max-width: 768px) {
          .profile-card {
            padding: 25px;
          }

          .profile-grid {
            grid-template-columns: 1fr;
          }

          .profile-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default PatientProfile;
