import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctorsData';
import './DoctorLocationPage.css';

function DoctorLocationPage() {
  const navigate = useNavigate();

  const handleDoctorSelection = (doctor) => {
    navigate(`/calendar/${doctor.id}`, { state: { availableSlots: doctor.availableSlots } });
  };

  return (
    <div className="doctor-location-page">
      <h2 className="page-title">Find Your Doctor</h2>
      <div className="doctor-grid">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="doctor-tile">
            <div className="doctor-header">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
            <div className="doctor-footer">
              <p className="doctor-location">
                <span className="location-icon">📍</span>
                {doctor.location}
              </p>
              <button
                className="action-button"
                onClick={() => handleDoctorSelection(doctor)}
              >
                View Available Slots
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorLocationPage;
