
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctorsData';
import './DoctorsInAreaPage.css';
import ProgressBar from './Progressbar';

function DoctorsInAreaPage() {
  const { area } = useParams(); // Retrieve the dynamic 'area' from the URL
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const doctorsInArea = doctorsData.filter(doctor =>
      doctor.areas.includes(area)
    );
    setFilteredDoctors(doctorsInArea);
  }, [area]);

  const handleDoctorClick = (doctor) => {
    navigate(`/calendar/${doctor.id}`, {
      state: {
        availableSlots: doctor.availableSlots, 
        doctor: doctor,
      },
    });
  };

  return (
    <div className="doctor-area-page">
      <h2 className="page-title">Available Doctors in {area}</h2>
      <ProgressBar steps={["Location", "Doctors", "Calendar", "Appointment"]} currentStep={2} />
      <div className="doctor-list">
        {filteredDoctors.length === 0 ? (
          <div className="no-doctors">No doctors available in this area.</div>
        ) : (
          filteredDoctors.map(doctor => (
            <div
              key={doctor.id}
              className="doctor-profile"
              onClick={() => handleDoctorClick(doctor)}
            >
              <div className="doctor-image-container">
                <img
                  src={`/${doctor.picture}`} 
                  alt={doctor.name}
                  className="doctor-picture"
                />
              </div>

              <div className="doctor-details">
                <h5 className="doctor-name">{doctor.name}</h5>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-description">
                  {doctor.description || 'Experienced and trusted specialist.'}
                </p>
                <button className="view-slots-button">View Availability</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorsInAreaPage;
