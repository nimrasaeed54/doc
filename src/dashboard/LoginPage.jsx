


// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './Login.css';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('patient');
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     if (location.state?.role) {
// //       setRole(location.state.role);
// //     }

// //     const storedRole = localStorage.getItem('role');
// //     const storedEmail = localStorage.getItem('email');
// //     if (storedRole && storedEmail) {
// //       setRole(storedRole);
// //       setEmail(storedEmail);
// //       if (storedRole === 'patient') {
// //         navigate('/home');
// //       } else if (storedRole === 'clinic') {
// //         navigate('/clinic-dashboard');
// //       }
// //     }
// //   }, [location, navigate]);

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     if (email === 'test@test.com' && password === 'password') {
// //       localStorage.setItem('email', email);
// //       localStorage.setItem('role', role);

// //       if (role === 'patient') {
// //         navigate('/home');
// //       } else if (role === 'clinic') {
// //         navigate('/clinic-dashboard');
// //       }
// //     } else {
// //       alert('Invalid email or password');
// //     }
// //   };

// //   const handleRegisterRedirect = () => {
// //     if (role === 'patient') {
// //       navigate('/register-patient');
// //     } else if (role === 'clinic') {
// //       navigate('/register-clinic');
// //     }
// //   };

// //   const switchRole = (selectedRole) => {
// //     setRole(selectedRole);
// //   };

// //   return (
// //     <div className='login-page'>
// //       <div className="login-container">
// //         <div className="tabs">
// //           <button
// //             className={`tab-button ${role === 'patient' ? 'active' : ''}`}
// //             onClick={() => switchRole('patient')}
// //           >
// //             Patient
// //           </button>
// //           <button
// //             className={`tab-button ${role === 'clinic' ? 'active' : ''}`}
// //             onClick={() => switchRole('clinic')}
// //           >
// //             Clinic
// //           </button>
// //         </div>

// //         {role === 'patient' && (
// //           <form onSubmit={handleLogin}>
// //             <h2>Patient Login</h2>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //             <button type="submit">Login</button>
// //             <button type="button" onClick={handleRegisterRedirect}>
// //               Don't have an account? Register
// //             </button>
// //             <small>By logging in, you agree to our Terms and Conditions</small>
// //           </form>
// //         )}

// //         {role === 'clinic' && (
// //           <form onSubmit={handleLogin}>
// //             <h2>Clinic Login</h2>
// //             <input
// //               type="email"
// //               placeholder="Clinic Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //             <button type="submit">Login</button>
// //             <button type="button" onClick={handleRegisterRedirect}>
// //               Don't have an account? Register
// //             </button>
// //             <small>By logging in, you agree to our Terms and Conditions</small>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const LoginPage = () => {
  const [isClinic, setIsClinic] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleTab = (tab) => {
    setIsClinic(tab === "clinic");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData) {
      // Check if email and password match the stored data
      if (email === storedData.email && password === storedData.password) {
        setSuccessMessage("You are logged in!");
        setErrorMessage("");
        
        // Navigate to the dashboard or home page on success
        navigate("/dashboardhome"); // Update with your desired path

      } else {
        setErrorMessage("Invalid email or password!");
        setSuccessMessage("");
      }
    } else {
      setErrorMessage("No user data found!");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-page">
      <div className={`card-container ${isClinic ? "clinic-active" : ""}`}>
        <img
          className="logo"
          src="logo.png" 
          alt="Logo"
        />
        <div className="welcome-part">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>
          <div className="tabs">
            <button
              className={`tab ${!isClinic ? "active" : ""}`}
              onClick={() => toggleTab("patient")}
            >
              Patient Login
            </button>
            <button
              className={`tab ${isClinic ? "active" : ""}`}
              onClick={() => toggleTab("clinic")}
            >
              Clinic Login
            </button>
          </div>
        </div>

        <div className="form-part">
          <h2>{isClinic ? "Clinic Login" : "Patient Login"}</h2>
          <form onSubmit={handleLogin}> {/* Added onSubmit handler */}
            <input 
              type="email" 
              placeholder="Email" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Login</button>
            <p>
              <a href="#">Forgot Password?</a>
            </p>
            <p>
              By logging in, you agree to our{" "}
              <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle login form submission
//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Retrieve stored data from localStorage
//     const storedData = JSON.parse(localStorage.getItem("userData"));

//     if (storedData) {
//       // Check if email and password match the stored data
//       if (email === storedData.email && password === storedData.password) {
//         setSuccessMessage("You are logged in!");
//         setErrorMessage("");
       
//       } else {
//         setErrorMessage("Invalid email or password!");
//         setSuccessMessage("");
//       }
//     } else {
//       setErrorMessage("No user data found!");
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       {/* Display success or error message */}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//     </div>
//   );
// }

// export default Login;
