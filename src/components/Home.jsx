import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import CustomCalendar from './CustomCalendar';
import doctorsData from '../data/doctorsData';
import './Home.css';

function Home() {
  const [filter, setFilter] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doctor) =>
      doctor.location.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const handleAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleSelectTime = (doctor, date, time) => {
    setSelectedDoctor(doctor);
    setSelectedDate(date);
    setSelectedTime(time);
    setShowModal(false);
    navigate('/appointment', {
      state: { doctor, date, time },
    });
  };

  const handleConfirm = (date, time) => {
    if (!date || !time) {
      setErrorMessage('Please select a valid date and time!');
    } else {
      setSelectedDate(date);
      setSelectedTime(time);
      setErrorMessage('');
    }
  };

  const handleBookSchedule = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      setErrorMessage('Please select a doctor, date, and time.');
      return;
    }
    navigate('/appointment', {
      state: { doctor: selectedDoctor, date: selectedDate, time: selectedTime },
    });
  };

  const findNextAvailableDate = (availableSlots) => {
    const todayDate = new Date().toISOString().split('T')[0];
    const availableDates = Object.keys(availableSlots).filter((date) => date > todayDate);
    if (availableDates.length === 0) return null;
    return availableDates[0];
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-3">Find Your Doctor</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter location"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="row">
        {filteredDoctors.map((doctor) => {
          const nextAvailableDate = findNextAvailableDate(doctor.availableSlots);
          const nextAvailableSlots = nextAvailableDate ? doctor.availableSlots[nextAvailableDate] : [];

          return (
            <div key={doctor.id} className="col-md-6 col-sm-12 mb-3">
              <div className="card custom-card">
                <div className="card-img-container">
                  <img
                    src={doctor.picture}
                    className="card-img-top rounded-circle"
                    alt={doctor.name}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">
                    {doctor.specialty} - {doctor.location}
                  </p>

                  {nextAvailableSlots.length > 0 ? (
                    <div className="mb-3">
                      <h6>
                        Next Available Slot: {formatDate(nextAvailableDate)}
                      </h6>
                      <div className="d-flex flex-wrap">
                        {nextAvailableSlots.map((time) => (
                          <button
                            key={time}
                            className={`btn m-1 ${selectedTime === time ? 'btn-primary' : 'btn-outline-primary'} `}
                            onClick={() => handleSelectTime(doctor, nextAvailableDate, time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <h6>No slots available in the near future.</h6>
                    </div>
                  )}

                 
                  <button
                    onClick={() => handleAppointment(doctor)}
                    className="btn btn-primary w-100 mt-auto"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Choose Date and Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDoctor && (
            <CustomCalendar
              availableSlots={selectedDoctor.availableSlots}
              onConfirm={handleConfirm}
            />
          )}

          {errorMessage && (
            <div className="alert alert-danger mt-3">
              <strong>Error!</strong> {errorMessage}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={handleBookSchedule}
          >
            Confirm Appointment
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
