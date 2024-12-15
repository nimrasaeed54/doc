
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ProviderPage from './components/ProviderPage';
import DoctorLocationPage from './components/DoctorLocationPage';
import LocationPage from './components/LocationPage';
import CalendarPage from './components/CalendarPage';
import AppointmentForm from './components/AppointmentForm';
import DoctorsInAreaPage from './components/DoctorsInAreaPage';
import Home from './components/Home';
import ClinicDashboard from './components/ClinicDashboard';
import RegisterPatient from './components/RegisterPatient';
import RegisterClinic from './components/RegisterClinic';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {

  useEffect(() => {

    if (!localStorage.getItem('userLoggedIn')) {
      localStorage.clear();
    }
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/provider" element={<ProviderPage />} />
        <Route path="/doctor-location/:doctorId" element={<DoctorLocationPage />} />
        <Route path="/calendar/:doctorId" element={<CalendarPage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/doctors/:area" element={<DoctorsInAreaPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clinic-dashboard" element={<ClinicDashboard />} />

        <Route path="/register-patient" element={<RegisterPatient />} />


        <Route path="/register-clinic" element={<RegisterClinic />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
