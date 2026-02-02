import React from "react";
import NavbarComp from "../../components/NavbarComp";

const BookAppointment = () => {
  const doctors = [
    { id: 1, name: "Dr. Ramesh Kumar", specialization: "Cardiologist", hospital: "Apollo Hospital", experience: "12 Years", rating: "4.8 ⭐", fee: "₹800" },
    { id: 2, name: "Dr. Sneha Reddy", specialization: "Dermatologist", hospital: "Care Hospital", experience: "8 Years", rating: "4.6 ⭐", fee: "₹600" },
    { id: 3, name: "Dr. Arjun Mehta", specialization: "Neurologist", hospital: "Yashoda Hospital", experience: "15 Years", rating: "4.9 ⭐", fee: "₹1000" },
    { id: 4, name: "Dr. Kavya Sharma", specialization: "Pediatrician", hospital: "Rainbow Hospital", experience: "10 Years", rating: "4.7 ⭐", fee: "₹700" },
    { id: 5, name: "Dr. Rahul Verma", specialization: "Orthopedic", hospital: "KIMS Hospital", experience: "14 Years", rating: "4.5 ⭐", fee: "₹900" },
    { id: 6, name: "Dr. Priya Nair", specialization: "Gynecologist", hospital: "Sunshine Hospital", experience: "9 Years", rating: "4.6 ⭐", fee: "₹750" },
    { id: 7, name: "Dr. Vikram Singh", specialization: "ENT Specialist", hospital: "Apollo Clinic", experience: "11 Years", rating: "4.4 ⭐", fee: "₹500" },
    { id: 8, name: "Dr. Anjali Rao", specialization: "Psychiatrist", hospital: "Aster Hospital", experience: "13 Years", rating: "4.8 ⭐", fee: "₹850" },
    { id: 9, name: "Dr. Kiran Patel", specialization: "Oncologist", hospital: "Global Hospital", experience: "16 Years", rating: "4.9 ⭐", fee: "₹1200" },
    { id: 10, name: "Dr. Neha Gupta", specialization: "Ophthalmologist", hospital: "LV Prasad Eye Institute", experience: "7 Years", rating: "4.5 ⭐", fee: "₹650" },
    { id: 11, name: "Dr. Suresh Reddy", specialization: "Urologist", hospital: "Medicover Hospital", experience: "18 Years", rating: "4.7 ⭐", fee: "₹1100" },
    { id: 12, name: "Dr. Deepika Iyer", specialization: "Endocrinologist", hospital: "Continental Hospital", experience: "12 Years", rating: "4.6 ⭐", fee: "₹950" },
  ];

  const handleBook = (doctorName) => {
    alert(`Appointment booked successfully with ${doctorName} ✅`);
  };

  return (
    <div className="book-container">
      <NavbarComp />
      <h2 className="title">Book Appointment</h2>

      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>{doc.name}</h3>
            <p><strong>{doc.specialization}</strong></p>
            <p>{doc.hospital}</p>
            <p>Experience: {doc.experience}</p>
            <p>Rating: {doc.rating}</p>
            <p className="fee">Consultation Fee: {doc.fee}</p>
            <button
              className="book-btn"
              onClick={() => handleBook(doc.name)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .book-container {
          padding: 40px;
          background: #faf3f2;
          min-height: 100vh;
        }

        .title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: bold;
        }

        .doctor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .doctor-card {
          background: #96d2e9;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(143, 230, 233, 0.24);
          text-align: center;
          transition: 0.3s ease;
        }

        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(160, 214, 235, 0.15);
        }

        .doctor-image {
          font-size: 50px;
          margin-bottom: 10px;
        }

        .doctor-card h3 {
          margin: 10px 0 5px;
          font-size: 18px;
        }

        .doctor-card p {
          margin: 4px 0;
          font-size: 14px;
          color: #555;
        }

        .fee {
          font-weight: bold;
          margin-top: 8px;
          color: #2575fc;
        }

        .book-btn {
          margin-top: 15px;
          padding: 8px 15px;
          background: #083a90;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        .book-btn:hover {
          background: #1a5ed9;
        }

        @media (max-width: 768px) {
          .doctor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BookAppointment;
