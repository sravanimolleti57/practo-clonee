import React from "react";
import NavbarComp from "../../components/NavbarComp";

const MedicalRecords = () => {
  const records = [
    {
      id: 1,
      doctor: "Dr. Ramesh Kumar",
      hospital: "Apollo Hospital",
      date: "02 Feb 2026",
      diagnosis: "Hypertension",
      prescription: "Amlodipine 5mg daily",
      status: "Reviewed",
    },
    {
      id: 2,
      doctor: "Dr. Sneha Reddy",
      hospital: "Care Hospital",
      date: "15 Jan 2026",
      diagnosis: "Skin Allergy",
      prescription: "Antihistamine for 5 days",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Arjun Mehta",
      hospital: "Yashoda Hospital",
      date: "20 Dec 2025",
      diagnosis: "Diabetes Type 2",
      prescription: "Metformin 500mg",
      status: "Reviewed",
    },
  ];

  return (
    <div className="records-container">
      <NavbarComp />
      <h2 className="records-heading">Medical Records</h2>

      <div className="records-grid">
        {records.map((record) => (
          <div key={record.id} className="record-card">
            <h3>{record.doctor}</h3>
            <p><strong>Hospital:</strong> {record.hospital}</p>
            <p><strong>Date:</strong> {record.date}</p>
            <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
            <p><strong>Prescription:</strong> {record.prescription}</p>

            <div className="record-footer">
              <span className={`status ${record.status.toLowerCase()}`}>
                {record.status}
              </span>
              <button className="download-btn">Download</button>
            </div>
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .records-container {
          padding: 2rem;
          min-height: 100vh;
          background: linear-gradient(to right, #eef2ff, #f8fbff);
        }

        .records-heading {
          text-align: center;
          margin-bottom: 2rem;
          color: #2b4eff;
        }

        .records-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .record-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          transition: 0.3s ease;
        }

        .record-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .record-card h3 {
          margin-bottom: 0.8rem;
          color: #333;
        }

        .record-card p {
          margin: 0.4rem 0;
          color: #555;
          font-size: 0.95rem;
        }

        .record-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .status {
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status.reviewed {
          background: #d4edda;
          color: #155724;
        }

        .status.pending {
          background: #fff3cd;
          color: #856404;
        }

        .download-btn {
          padding: 6px 14px;
          border: none;
          border-radius: 6px;
          background: #2b4eff;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .download-btn:hover {
          background: #1f36c7;
        }
      `}</style>
    </div>
  );
};

export default MedicalRecords;
