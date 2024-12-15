
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterClinic.css';

const RegisterClinic = () => {
  const [clinicName, setClinicName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [specialties, setSpecialties] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Registering clinic with: ', clinicName, email, contactNumber, location, specialties);
    navigate('/login', { state: { role: 'clinic' } });
  };

  return (
    <div className="register-container">
      <h2>Register as Clinic</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label htmlFor="clinicName">Clinic Name</label>
          <input
            type="text"
            id="clinicName"
            placeholder="Clinic Name"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="specialties">Specialties</label>
          <input
            type="text"
            id="specialties"
            placeholder="Specialties"
            value={specialties}
            onChange={(e) => setSpecialties(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="register-button">Register</button>
      </form>

      <div className="register-link">
        <small className="small-text">
          Already have an account? <Link to="/login">Login here</Link>
        </small>
      </div>
    </div>
  );
};

export default RegisterClinic;
