import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomCalendar from './CustomCalendar';


import './CalendarPage.css';

function CalendarPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { availableSlots, doctor } = location.state || {};
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!availableSlots) {
      alert('No available slots available for the selected doctor.');
    }
  }, [availableSlots]);

  const handleConfirm = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleBookSchedule = () => {
    if (!doctor || !selectedDate || !selectedTime) {
      setErrorMessage('Please select a doctor, date, and time.');
      return;
    }
    navigate('/appointment', {
      state: { doctor, date: selectedDate, time: selectedTime },
    });
  };

  return (
    <div className="calendar-page">
      <h2>Select a Date and Time</h2>

      {availableSlots ? (
        <CustomCalendar
          availableSlots={availableSlots}
          onConfirm={handleConfirm}
        />
      ) : (
        <p>No available slots for this doctor at the moment.</p>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="button-container">
        <button
          variant="primary"
          onClick={handleBookSchedule}
          disabled={!selectedDate || !selectedTime}
        >
          Book Schedule
        </button>
      </div>
    </div>
  );
}

export default CalendarPage;
