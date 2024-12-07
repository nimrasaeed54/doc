import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomCalendar.css';

function CustomCalendar({ availableSlots, onConfirm }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleDayClick = (date) => {
    if (checkSlotAvailability(date)) {
      setSelectedDate(date);
      setSelectedTime('');
      setErrorMessage('');
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onConfirm(selectedDate, time);
  };

  const checkSlotAvailability = (date) => {
    return availableSlots[date]?.length > 0;
  };

  const getDaysInMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const getStartDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay();
  };

  const generateDaysForMonth = () => {
    const daysInMonth = getDaysInMonth();
    const startDayIndex = getStartDayOfMonth();
    const daysArray = [];

    for (let i = 0; i < startDayIndex; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const today = new Date();

      if (currentDate < today) {
        daysArray.push({ day: i, isPast: true });
      } else {
        daysArray.push({ day: i, isPast: false });
      }
    }

    while (daysArray.length < 42) {
      daysArray.push(null);
    }

    return daysArray;
  };

  const handleMonthChange = (direction) => {
    let newMonth = currentMonth + direction;
    if (newMonth < 0) {
      newMonth = 11;
      setCurrentYear(currentYear - 1);
    } else if (newMonth > 11) {
      newMonth = 0;
      setCurrentYear(currentYear + 1);
    }
    setCurrentMonth(newMonth);
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="big-calendar">
        <div className="calendar-header d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleMonthChange(-1)}
          >
            &lt;
          </button>
          <h2>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleMonthChange(1)}
          >
            &gt;
          </button>
        </div>

        <div className="calendar-weekdays">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="calendar-weekday">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {generateDaysForMonth().map((day, index) => {
            const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day?.day).padStart(2, '0')}`;
            const isSlotAvailable = checkSlotAvailability(date);

            return (
              day ? (
                <div
                  key={index}
                  className={`calendar-day ${selectedDate === date ? 'bg-primary text-white border-primary' : ''} 
                  ${isSlotAvailable ? 'border-success' : 'border-danger'} 
                  ${day?.isPast ? 'disabled' : ''}`} 
                  onClick={() => !day?.isPast && day && handleDayClick(date)}
                >
                  <div className="calendar-day-number">{day?.day || ''}</div>
                  {isSlotAvailable && !day?.isPast && (
                    <div className="slot-dot green-dot"></div>
                  )}
                  {!isSlotAvailable && !day?.isPast && (
                    <div className="slot-dot red-dot"></div>
                  )}
                </div>
              ) : (
                <div key={index} className="calendar-day empty-block"></div>
              )
            );
          })}
        </div>
      </div>

      <div className="slots-container">
        <h3>Available Slots</h3>
        <div>
          <p><span className="bg-success text-white p-1">Green</span> - Available Slot</p>
          <p><span className="bg-danger text-white p-1">Red</span> - Unavailable Slot</p>
        </div>
        {selectedDate ? (
          availableSlots[selectedDate]?.map((time) => (
            <button
              key={time}
              className={`btn ${time === selectedTime ? 'btn-success' : 'btn-outline-success'} m-2`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))
        ) : (
          <p>Please select a date to view available slots.</p>
        )}
        {errorMessage && (
          <div className="error-message text-danger">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomCalendar;