import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctorsData';
import './LocationPage.css';

function LocationPage() {
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allAreas = new Set();

    doctorsData.forEach(doctor => {
      doctor.areas.forEach(area => {
        allAreas.add(area);
      });
    });

    setAreas([...allAreas].sort()); // Sorting the areas alphabetically
  }, []);

  const handleAreaClick = (area) => {
    navigate(`/doctors/${area}`);
  };

  return (
    <div className="location-page">
      <h2 className="page-title">Select a Location to View Doctors</h2>
      <p className="instruction-text">Choose a location from the list below to check available doctors in that area.</p>
      <div className="area-list">
        {areas.length === 0 ? (
          <div className="loading-message">Loading available locations...</div>
        ) : (
          areas.map((area, index) => (
            <div 
              key={index} 
              className="area-card"
              onClick={() => handleAreaClick(area)}
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i> {area}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LocationPage;
