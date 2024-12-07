import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AppointmentForm.css";

function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  const { doctor, date, time } = location.state || {};

  useEffect(() => {
    if (!doctor || !date || !time) {
      console.error("Missing doctor, date, or time.");
    }
  }, [doctor, date, time]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="appointment-form-container">
      {isSubmitted ? (
        <div className="success-message">
          <h1>✔️</h1>
          <h2>Appointment Confirmed!</h2>
          <p>Your appointment has been successfully booked. Thank you for choosing our service!</p>
          <p>We look forward to seeing you. For any changes, feel free to contact us.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Book Your Appointment</h2>

          <div className="form-group">
            <label>Doctor</label>
            <h3>{doctor?.name || "Doctor not available"}</h3>
          </div>

          <div className="form-group">
            <label>Selected Date</label>
            <h3>{date || "Date not selected"}</h3>
          </div>

          <div className="form-group">
            <label>Selected Time</label>
            <h3>{time || "Time not selected"}</h3>
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Enter phone number" required />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Enter address" required />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter city" required />
          </div>

          <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="Enter state" required />
          </div>

          <div className="form-group">
            <label>Zip Code</label>
            <input type="text" placeholder="Enter zip code" required />
          </div>

          <div className="form-group">
            <label>Reason For Visit</label>
            <textarea placeholder="Brief description" required></textarea>
          </div>

          <div className="form-group">
            <label>Upload Documents (Insurance & ID)</label>
            <input type="file" />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button type="reset" className="reset-button">Reset</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AppointmentForm;
