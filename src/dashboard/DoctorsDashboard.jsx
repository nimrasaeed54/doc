import React from 'react';
import './DoctorsDashboard.css'
import doctorsData from '../data/doctorsData'; 

const DoctorsPage = () => {
  return (
    <div className="doctors-page">
      <h1 className="page-title">Doctors</h1>
      <div className="doctors-list">
        {doctorsData.slice(0, 3).map((doctor) => (
          <div key={doctor.id} className="doctor-card">
          <img
                    src={doctor.picture}
                    className="doctor-image"
                    alt={doctor.name}
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
            <h2>{doctor.name}</h2>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
