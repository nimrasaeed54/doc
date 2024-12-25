
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import AuthPage from './components/AuthPage';
// import ProviderPage from './components/ProviderPage';
// import DoctorLocationPage from './components/DoctorLocationPage';
// import LocationPage from './components/LocationPage';
// import CalendarPage from './components/CalendarPage';
// import AppointmentForm from './components/AppointmentForm';
// import DoctorsInAreaPage from './components/DoctorsInAreaPage';
// import Home from './components/Home';
// // import ClinicDashboard from './components/ClinicDashboard';
// // import RegisterPatient from './components/RegisterPatient';
// // import RegisterClinic from './components/RegisterClinic';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import LoginPage from './components/Login';

// const App = () => {

//   useEffect(() => {

//     if (!localStorage.getItem('userLoggedIn')) {
//       localStorage.clear();
//     }
//   }, []);


//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* <Route path="/" element={<AuthPage />} /> */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/provider" element={<ProviderPage />} />
//         <Route path="/doctor-location/:doctorId" element={<DoctorLocationPage />} />
//         <Route path="/calendar/:doctorId" element={<CalendarPage />} />
//         <Route path="/appointment" element={<AppointmentForm />} />
//         <Route path="/location" element={<LocationPage />} />
//         <Route path="/doctors/:area" element={<DoctorsInAreaPage />} />
//         <Route path="/" element={<LoginPage />} />
//         {/* <Route path="/clinic-dashboard" element={<ClinicDashboard />} />
//         <Route path="/register-patient" element={<RegisterPatient />} />
//         <Route path="/register-clinic" element={<RegisterClinic />} /> */}
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginPage from './dashboard/LoginPage';
import Home from './components/Home';
import ProviderPage from './components/ProviderPage';
import DoctorLocationPage from './components/DoctorLocationPage';
import LocationPage from './components/LocationPage';
import CalendarPage from './components/CalendarPage';
import AppointmentForm from './components/AppointmentForm';
import DoctorsInAreaPage from './components/DoctorsInAreaPage';
import DashboardNavbar from './dashboard/DashboardNavbar';
import DashboardHome from './dashboard/DashboardHome';
import ProfilePage from './dashboard/ProfilePage';
import DoctorsDashboard from './dashboard/DoctorsDashboard';
import ClinicPage from './dashboard/ClinicDashboard';
const App = () => {
  return (
    <>
      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/provider" element={<><Navbar /><ProviderPage /><Footer /></>} />
        <Route path="/doctor-location/:doctorId" element={<><Navbar /><DoctorLocationPage /><Footer /></>} />
        <Route path="/calendar/:doctorId" element={<><Navbar /><CalendarPage /><Footer /></>} />
        <Route path="/appointment" element={<><Navbar /><AppointmentForm /><Footer /></>} />
        <Route path="/location" element={<><Navbar /><LocationPage /><Footer /></>} />
        <Route path="/dashboardhome" element={<><DashboardNavbar /><DashboardHome/></>} />
        <Route path="/profile" element={<><DashboardNavbar /><ProfilePage/></>} />
        <Route path="/doctorsdashboard" element={<><DashboardNavbar /><DoctorsDashboard/></>} />
        <Route path="/clinicdashboard" element={<><DashboardNavbar /><ClinicPage/></>} />


        {/* <Route path="/location" element={<><Navbar /><LocationPage /><Footer /></>} /> */}

        <Route path="/doctors/:area" element={<><Navbar /><DoctorsInAreaPage /><Footer /></>} />
      </Routes>
    </>
  );
};

export default App;
