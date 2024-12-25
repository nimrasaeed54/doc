import React from 'react';
import './ClinicDashboard.css'; 

const ClinicPage = () => {
  const clinics = [
    {
      id: 1,
      title: 'Stat Cardiologist Inc',
      image: 'path-to-stat-card-image.jpg',
      description: 'Stat Cardiologist offers top-tier internal medicine and cardiology services in the Chicago suburbs, founded by Dr. Saifullah Nasir in 2017.',
    },
    {
      id: 2,
      title: 'Newbise Clinic',
      image: 'path-to-newbise-card-image.jpg',
      description: 'Newbise Clinic specializes in personalized patient care, providing both general health and specialized treatments with a focus on patient comfort.',
    },
    {
      id: 3,
      title: 'HealthCare Plus',
      image: 'path-to-healthcare-plus-image.jpg',
      description: 'HealthCare Plus offers a wide range of medical services with a focus on holistic and preventive care.',
    },
    {
      id: 4,
      title: 'MediCare Health Center',
      image: 'path-to-medicare-image.jpg',
      description: 'MediCare Health Center offers specialized services in family medicine, pediatrics, and emergency care.',
    },
  ];

  return (
    <div className="clinic-container">
      <h1 className="clinic-title">Clinics</h1>
      
      <div className="card-container">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="card">
            <img
              src={clinic.image} 
              alt={clinic.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{clinic.title}</h2>
              <p className="card-description">{clinic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicPage;
