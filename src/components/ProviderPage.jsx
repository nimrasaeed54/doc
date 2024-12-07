import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctorsData';
import './ProviderPage.css';

function ProviderPage() {
  const navigate = useNavigate();

  const handleDoctorClick = (doctor) => {
    navigate(`/doctor-location/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div className="provider-page container">
      <h2 className="page-title">Meet Our Doctors</h2>
      <div className="doctor-grid">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img
              src={doctor.picture}
              className="doctor-img"
              alt={doctor.name}
            />
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <button
                className="view-location-btn"
                onClick={() => handleDoctorClick(doctor)}
              >
                View Locations
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProviderPage;