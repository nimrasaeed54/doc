
// import React, { useState, useEffect } from 'react';
// import './DashboardNavbar.css';

// const DashboardNavbar = () => {
//   const [patientName, setPatientName] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     try {
//       const userData = JSON.parse(localStorage.getItem('userData'));
//       setPatientName(userData ? `${userData.firstName} ${userData.lastName}` : 'Patient');
//       setProfileImage(userData?.profilePicture || null); // Load profile picture from localStorage if available
//     } catch (error) {
//       console.error('Error reading user data:', error);
//       setPatientName('Patient');
//     }
//   }, []);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64Image = reader.result;
//         setProfileImage(base64Image); 

       
//         const userData = JSON.parse(localStorage.getItem('userData')) || {};
//         userData.profilePicture = base64Image;
//         localStorage.setItem('userData', JSON.stringify(userData));
//       };
//       reader.readAsDataURL(file);  // Convert image to base64
//     }
//   };

//   const handleImageRemove = () => {
//     setProfileImage(null);
  
//     const userData = JSON.parse(localStorage.getItem('userData')) || {};
//     userData.profilePicture = null; 
//     localStorage.setItem('userData', JSON.stringify(userData));
//     setIsModalOpen(false);  
//   };

//   const handleImageChange = () => {
//     document.getElementById('image-upload').click(); 
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prevState) => !prevState);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);  // Open the modal
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);  // Close the modal
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="hamburger-icon" onClick={toggleSidebar}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       <div className={`side-navbar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <div className="navbar-content">
//           <div className="profile-section" onClick={openModal}> 
//             <span className="profile-image">
//               {profileImage ? (
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
//                 />
//               ) : (
//                 <span className="default-avatar">
//                   <img
//                     src="profileimg.png"
//                     alt="Profile Icon"
//                     style={{ width: '50px', height: '50px', borderRadius: '50%' }} // Default image styling
//                   />
//                 </span>
//               )}
//             </span>
//           </div>
//           <p className="patient-name">{patientName}</p>
//           <ul className="navbar-links">
//             <li><a href="/dashboardhome">Home</a></li>
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/doctorsdashboard">Doctors</a></li>
//             <li><a href="/clinicdashboard">Clinic</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="logout-button">
//         <button>Log Out</button>
//       </div>

//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3>Profile Image</h3>
//             <button className="modal-option" onClick={handleImageChange}> {/* Triggers file input */}
//               Change Profile Image
//             </button>
//             {profileImage && (
//               <button className="modal-option" onClick={handleImageRemove}> {/* Remove image */}
//                 Remove Image
//               </button>
//             )}
//             <button className="close-modal-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}

//       <input
//         type="file"
//         id="image-upload"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="image-upload-input"
//         style={{ display: 'none' }} 
//       />
//     </div>
//   );
// };

// export default DashboardNavbar;
import React, { useState, useEffect } from 'react';
import './DashboardNavbar.css';
import { useNavigate } from 'react-router-dom'; // Importing react-router-dom for navigation

const DashboardNavbar = () => {
  const [patientName, setPatientName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook for page navigation

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
      setPatientName(userData ? `${userData.firstName} ${userData.lastName}` : 'Patient');
      setProfileImage(userData?.profilePicture || null); // Load profile picture from localStorage if available
    } catch (error) {
      console.error('Error reading user data:', error);
      setPatientName('Patient');
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);

        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        userData.profilePicture = base64Image;
        localStorage.setItem('userData', JSON.stringify(userData));
      };
      reader.readAsDataURL(file);  // Convert image to base64
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);

    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    userData.profilePicture = null;
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsModalOpen(false);  
  };

  const handleImageChange = () => {
    document.getElementById('image-upload').click(); 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  // Handle logout and navigate to the login page
  const handleLogout = () => {
    localStorage.removeItem('userData');  // Remove user data from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`side-navbar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="navbar-content">
          <div className="profile-section" onClick={openModal}> 
            <span className="profile-image">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                />
              ) : (
                <span className="default-avatar">
                  <img
                    src="profileimg.png"
                    alt="Profile Icon"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} // Default image styling
                  />
                </span>
              )}
            </span>
          </div>
          <p className="patient-name">{patientName}</p>
          <ul className="navbar-links">
            <li><a href="/dashboardhome">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/doctorsdashboard">Doctors</a></li>
            <li><a href="/clinicdashboard">Clinic</a></li>
          </ul>
        </div>
      </div>

      <div className="logout-button">
        <button onClick={handleLogout}>Log Out</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Profile Image</h3>
            <button className="modal-option" onClick={handleImageChange}> {/* Triggers file input */}
              Change Profile Image
            </button>
            {profileImage && (
              <button className="modal-option" onClick={handleImageRemove}> {/* Remove image */}
                Remove Image
              </button>
            )}
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageUpload}
        className="image-upload-input"
        style={{ display: 'none' }} 
      />
    </div>
  );
};

export default DashboardNavbar;
