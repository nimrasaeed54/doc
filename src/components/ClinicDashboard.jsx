import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClinicDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to Login page on logout
  };

  return (

      <h1>Welcome to the Clinic Dashboard</h1>

  );
};

export default ClinicDashboard;
