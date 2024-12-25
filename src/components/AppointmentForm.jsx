
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProgressBar from "./Progressbar";
// import "./AppointmentForm.css";

// function AppointmentForm() {
//   const [activeTab, setActiveTab] = useState("guest"); // Default tab is "guest"
//   const [activeTabInfo, setActiveTabInfo] = useState(""); // Stores the info of the active tab
//   const location = useLocation();
//   const navigate = useNavigate();


//   const { doctor, date, time } = location.state || {};

//   const [selectedDoctor, setSelectedDoctor] = useState(doctor);
//   const [selectedDate, setSelectedDate] = useState(date);
//   const [selectedSlot, setSelectedSlot] = useState(time);
//   const [step, setStep] = useState(0); 

//   useEffect(() => {
//     console.log("Doctor: ", selectedDoctor);
//     console.log("Date: ", selectedDate);
//     console.log("Time: ", selectedSlot);

//     if (!selectedDoctor || !selectedDate || !selectedSlot) {
//       console.error("Missing doctor, date, or time.");
//       navigate("/calendar"); 
//     }
//   }, [selectedDoctor, selectedDate, selectedSlot, navigate]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);

//     if (tab === "guest") {
//       setActiveTabInfo("Create a new appointment as a guest.");
//     } else if (tab === "established") {
//       setActiveTabInfo("If you allow cookies, we will show your old data according to your phone number.");
//     } else if (tab === "new") {
//       setActiveTabInfo("Create a new appointment as a new user.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setStep(3); 
//   };

//   return (
//     <div className="registration-container">
//       <h1 className="page-title">Patient Registration</h1>
//       <ProgressBar steps={["Location", "Doctors", "Calendar", "Appointment"]} currentStep={4} />

//       {selectedDoctor && selectedDate && selectedSlot && (
//         <div className="doctor-appointment-info">
//           <p className="appointment-details">
//             Appointment with <strong>{selectedDoctor.name}</strong> in{" "}
//             <strong>{selectedDoctor.location}</strong>, on <strong>{selectedDate}</strong>, at {selectedSlot}.
//           </p>
//         </div>
//       )}

//       {/* Tab Menu */}
//       <div className="tab-menu">
//         <div
//           className={`tab ${activeTab === "guest" ? "active" : ""}`}
//           onClick={() => handleTabClick("guest")}
//         >
//           Guest Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "established" ? "active" : ""}`}
//           onClick={() => handleTabClick("established")}
//         >
//           Established Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "new" ? "active" : ""}`}
//           onClick={() => handleTabClick("new")}
//         >
//           New Patient
//         </div>
//       </div>

//       {/* Expanding Information Panel */}
//       <div className="info-panel">
//         <p>{activeTabInfo}</p>
//       </div>

//       {/* Form Content based on Selected Tab */}
//       <div className="form-content">
//         {activeTab === "guest" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Guest Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" required />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Reason For Visit</label>
//               <textarea required></textarea>
//             </div>
//             <div className="form-group">
//               <label>Upload Documents</label>
//               <input type="file" multiple />
//             </div>
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         )}

//         {activeTab === "established" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Established Patient</h2>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" required />
//             </div>
//             <button type="submit" className="submit-button">
//               Login
//             </button>
//           </form>
//         )}

//         {activeTab === "new" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>New Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" required />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <button type="submit" className="submit-button">
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AppointmentForm;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProgressBar from "./Progressbar";
// import "./AppointmentForm.css";

// function AppointmentForm() {
//   const [activeTab, setActiveTab] = useState("guest"); // Default tab is "guest"
//   const [activeTabInfo, setActiveTabInfo] = useState(""); // Stores the info of the active tab
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { doctor, date, time } = location.state || {};

//   const [selectedDoctor, setSelectedDoctor] = useState(doctor);
//   const [selectedDate, setSelectedDate] = useState(date);
//   const [selectedSlot, setSelectedSlot] = useState(time);
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     console.log("Doctor: ", selectedDoctor);
//     console.log("Date: ", selectedDate);
//     console.log("Time: ", selectedSlot);

//     if (!selectedDoctor || !selectedDate || !selectedSlot) {
//       console.error("Missing doctor, date, or time.");
//       navigate("/calendar");
//     }
//   }, [selectedDoctor, selectedDate, selectedSlot, navigate]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);

//     if (tab === "guest") {
//       setActiveTabInfo("Create a new appointment as a guest.");
//     } else if (tab === "established") {
//       setActiveTabInfo("If you allow cookies, we will show your old data according to your phone number.");
//     } else if (tab === "new") {
//       setActiveTabInfo("Create a new appointment as a new user.");
//     }
//   };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // Safely access form data
//   const formData = {
//     firstName: e.target.firstName.value,
//     lastName: e.target.lastName.value,
//     dob: e.target.dob.value,
//     email: e.target.email.value,
//     phone: e.target.phone.value,
//     password: e.target.password.value,
//     address: e.target.address.value,
//     city: e.target.city.value,
//     state: e.target.state.value,
//     zipCode: e.target.zipCode.value,
//   };

//   // Store data in localStorage
//   localStorage.setItem("userData", JSON.stringify(formData));

//   // Proceed with other actions (navigate to login page, etc.)
//   setStep(3);
//   navigate("/login");
// };


//   return (
//     <div className="registration-container">
//       <h1 className="page-title">Patient Registration</h1>
//       <ProgressBar steps={["Location", "Doctors", "Calendar", "Appointment"]} currentStep={4} />

//       {selectedDoctor && selectedDate && selectedSlot && (
//         <div className="doctor-appointment-info">
//           <p className="appointment-details">
//             Appointment with <strong>{selectedDoctor.name}</strong> in{" "}
//             <strong>{selectedDoctor.location}</strong>, on <strong>{selectedDate}</strong>, at {selectedSlot}.
//           </p>
//         </div>
//       )}

//       {/* Tab Menu */}
//       <div className="tab-menu">
//         <div
//           className={`tab ${activeTab === "guest" ? "active" : ""}`}
//           onClick={() => handleTabClick("guest")}
//         >
//           Guest Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "established" ? "active" : ""}`}
//           onClick={() => handleTabClick("established")}
//         >
//           Established Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "new" ? "active" : ""}`}
//           onClick={() => handleTabClick("new")}
//         >
//           New Patient
//         </div>
//       </div>

//       {/* Expanding Information Panel */}
//       <div className="info-panel">
//         <p>{activeTabInfo}</p>
//       </div>

//       {/* Form Content based on Selected Tab */}
//       <div className="form-content">
//         {activeTab === "guest" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Guest Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" required />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Reason For Visit</label>
//               <textarea required></textarea>
//             </div>
//             <div className="form-group">
//               <label>Upload Documents</label>
//               <input type="file" multiple />
//             </div>
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         )}

//         {activeTab === "established" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Established Patient</h2>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" required />
//             </div>
//             <button type="submit" className="submit-button">
//               Login
//             </button>
//           </form>
//         )}

//         {activeTab === "new" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>New Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" required />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" required />
//               </div>
//             </div>
//             <button type="submit" className="submit-button">
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AppointmentForm;
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ProgressBar from "./Progressbar";
// import "./AppointmentForm.css";

// function AppointmentForm() {
//   const [activeTab, setActiveTab] = useState("guest"); // Default tab is "guest"
//   const [activeTabInfo, setActiveTabInfo] = useState(""); // Stores the info of the active tab
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { doctor, date, time } = location.state || {};

//   const [selectedDoctor, setSelectedDoctor] = useState(doctor);
//   const [selectedDate, setSelectedDate] = useState(date);
//   const [selectedSlot, setSelectedSlot] = useState(time);
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     console.log("Doctor: ", selectedDoctor);
//     console.log("Date: ", selectedDate);
//     console.log("Time: ", selectedSlot);

//     if (!selectedDoctor || !selectedDate || !selectedSlot) {
//       console.error("Missing doctor, date, or time.");
//       navigate("/calendar");
//     }
//   }, [selectedDoctor, selectedDate, selectedSlot, navigate]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);

//     if (tab === "guest") {
//       setActiveTabInfo("Create a new appointment as a guest.");
//     } else if (tab === "established") {
//       setActiveTabInfo("If you allow cookies, we will show your old data according to your phone number.");
//     } else if (tab === "new") {
//       setActiveTabInfo("Create a new appointment as a new user.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Safely access form data
//     const formData = {
//       firstName: e.target.firstName.value,
//       lastName: e.target.lastName.value,
//       dob: e.target.dob.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       password: e.target.password.value,
//       address: e.target.address.value,
//       city: e.target.city.value,
//       state: e.target.state.value,
//       zipCode: e.target.zipCode.value,
//       profilePicture,
//     };

//     // Store data in localStorage
//     localStorage.setItem("userData", JSON.stringify(formData));

//     // Proceed with other actions (navigate to login page, etc.)
//     setStep(3);
//     navigate("/login");
//   };

//   return (
//     <div className="registration-container">
//       <h1 className="page-title">Patient Registration</h1>
//       <ProgressBar steps={["Location", "Doctors", "Calendar", "Appointment"]} currentStep={4} />

//       {selectedDoctor && selectedDate && selectedSlot && (
//         <div className="doctor-appointment-info">
//           <p className="appointment-details">
//             Appointment with <strong>{selectedDoctor.name}</strong> in{" "}
//             <strong>{selectedDoctor.location}</strong>, on <strong>{selectedDate}</strong>, at {selectedSlot}.
//           </p>
//         </div>
//       )}

//       {/* Tab Menu */}
//       <div className="tab-menu">
//         <div
//           className={`tab ${activeTab === "guest" ? "active" : ""}`}
//           onClick={() => handleTabClick("guest")}
//         >
//           Guest Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "established" ? "active" : ""}`}
//           onClick={() => handleTabClick("established")}
//         >
//           Established Patient
//         </div>
//         <div
//           className={`tab ${activeTab === "new" ? "active" : ""}`}
//           onClick={() => handleTabClick("new")}
//         >
//           New Patient
//         </div>
//       </div>

//       {/* Expanding Information Panel */}
//       <div className="info-panel">
//         <p>{activeTabInfo}</p>
//       </div>

//       {/* Form Content based on Selected Tab */}
//       <div className="form-content">
//         {activeTab === "guest" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Guest Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" name="firstName" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" name="lastName" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" name="phone" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" name="dob" required />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" name="address" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" name="city" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" name="state" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" name="zipCode" required />
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Reason For Visit</label>
//               <textarea name="reason" required />
//             </div>
//             <div className="form-group">
//               <label>Upload Documents</label>
//               <input type="file" multiple name="documents" />
//             </div>
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         )}

//         {activeTab === "established" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>Established Patient</h2>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" name="password" required />
//             </div>
//             <button type="submit" className="submit-button">
//               Login
//             </button>
//           </form>
//         )}

//         {activeTab === "new" && (
//           <form className="form" onSubmit={handleSubmit}>
//             <h2>New Patient</h2>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" name="firstName" required />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" name="lastName" required />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" name="dob" required />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="tel" name="phone" required />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
      
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 autocomplete="current-password" 
//               />
//             </div>
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" name="address" required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>City</label>
//                 <input type="text" name="city" required />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input type="text" name="state" required />
//               </div>
//               <div className="form-group">
//                 <label>Zip Code</label>
//                 <input type="text" name="zipCode" required />
//               </div>
//               <div className="form-group">
//               <label>Profile Picture</label>
//               <input type="file" name="profilePicture" onChange={handleFileChange} />
//             </div>
//             </div>
//             <button type="submit" className="submit-button">
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AppointmentForm;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "./Progressbar";
import "./AppointmentForm.css";

function AppointmentForm() {
  const [activeTab, setActiveTab] = useState("guest"); // Default tab is "guest"
  const [activeTabInfo, setActiveTabInfo] = useState(""); // Stores the info of the active tab
  const location = useLocation();
  const navigate = useNavigate();

  const { doctor, date, time } = location.state || {};

  const [selectedDoctor, setSelectedDoctor] = useState(doctor);
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSlot, setSelectedSlot] = useState(time);
  const [step, setStep] = useState(0);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    console.log("Doctor: ", selectedDoctor);
    console.log("Date: ", selectedDate);
    console.log("Time: ", selectedSlot);

    if (!selectedDoctor || !selectedDate || !selectedSlot) {
      console.error("Missing doctor, date, or time.");
      navigate("/calendar");
    }
  }, [selectedDoctor, selectedDate, selectedSlot, navigate]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === "guest") {
      setActiveTabInfo("Create a new appointment as a guest.");
    } else if (tab === "established") {
      setActiveTabInfo("If you allow cookies, we will show your old data according to your phone number.");
    } else if (tab === "new") {
      setActiveTabInfo("Create a new appointment as a new user.");
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Safely access form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      dob: e.target.dob.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipCode: e.target.zipCode.value,
      profilePicture, // Profile picture saved here
    };

    // Store data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Proceed with other actions (navigate to login page, etc.)
    setStep(3);
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <h1 className="page-title">Patient Registration</h1>
      <ProgressBar steps={["Location", "Doctors", "Calendar", "Appointment"]} currentStep={4} />

      {selectedDoctor && selectedDate && selectedSlot && (
        <div className="doctor-appointment-info">
          <p className="appointment-details">
            Appointment with <strong>{selectedDoctor.name}</strong> in{" "}
            <strong>{selectedDoctor.location}</strong>, on <strong>{selectedDate}</strong>, at {selectedSlot}.
          </p>
        </div>
      )}

      {/* Tab Menu */}
      <div className="tab-menu">
        <div
          className={`tab ${activeTab === "guest" ? "active" : ""}`}
          onClick={() => handleTabClick("guest")}
        >
          Guest Patient
        </div>
        <div
          className={`tab ${activeTab === "established" ? "active" : ""}`}
          onClick={() => handleTabClick("established")}
        >
          Established Patient
        </div>
        <div
          className={`tab ${activeTab === "new" ? "active" : ""}`}
          onClick={() => handleTabClick("new")}
        >
          New Patient
        </div>
      </div>

      {/* Expanding Information Panel */}
      <div className="info-panel">
        <p>{activeTabInfo}</p>
      </div>

      {/* Form Content based on Selected Tab */}
      <div className="form-content">
        {activeTab === "guest" && (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Guest Patient</h2>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" required />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" required />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" name="state" required />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" name="zipCode" required />
              </div>
            </div>
            <div className="form-group">
              <label>Reason For Visit</label>
              <textarea name="reason" required />
            </div>
            <div className="form-group">
              <label>Upload Documents</label>
              <input type="file" multiple name="documents" />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}

        {activeTab === "established" && (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Established Patient</h2>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        )}

        {activeTab === "new" && (
          <form className="form" onSubmit={handleSubmit}>
            <h2>New Patient</h2>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" required />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" name="state" required />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" name="zipCode" required />
              </div>
              <div className="form-group">
                <label>Profile Picture</label>
                <input type="file" name="profilePicture" onChange={handleFileChange} />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AppointmentForm;

