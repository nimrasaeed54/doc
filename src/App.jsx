// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Assuming you have a Navbar component
// import Home from './components/Home';
// import ProviderPage from './components/ProviderPage';
// import DoctorLocationPage from './components/DoctorLocationPage';
// import LocationPage from './components/LocationPage'; // New LocationPage component
// import CalendarPage from './components/CalendarPage';
// import AppointmentForm from './components/AppointmentForm';
// import DoctorsInAreaPage from './components/DoctorsInAreaPage'; // Updated route for DoctorsInAreaPage

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/provider" element={<ProviderPage />} />
//         <Route path="/doctor-location/:doctorId" element={<DoctorLocationPage />} />
//         <Route path="/calendar/:doctorId" element={<CalendarPage />} /> {/* Route for CalendarPage */}
//         <Route path="/appointment" element={<AppointmentForm />} />
//         <Route path="/location" element={<LocationPage />} />
//         <Route path="/doctors/:area" element={<DoctorsInAreaPage />} /> {/* Route for DoctorsInAreaPage */}
//       </Routes>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import ProviderPage from './components/ProviderPage';
import DoctorLocationPage from './components/DoctorLocationPage';
import LocationPage from './components/LocationPage'; 
import CalendarPage from './components/CalendarPage';
import AppointmentForm from './components/AppointmentForm';
import DoctorsInAreaPage from './components/DoctorsInAreaPage'; 
import { ToastContainer } from 'react-toastify'; // Importing ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* Global ToastContainer here */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<ProviderPage />} />
        <Route path="/doctor-location/:doctorId" element={<DoctorLocationPage />} />
        <Route path="/calendar/:doctorId" element={<CalendarPage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/doctors/:area" element={<DoctorsInAreaPage />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
