// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './RegisterPatient.css'; 

// const RegisterPatient = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
  
//   const navigate = useNavigate(); 

//   const handleRegister = (e) => {
//     e.preventDefault();
//     setError('');
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     console.log('Registering user: ', name, email, password, confirmPassword);
//     navigate('/login', { state: { role: 'patient' } });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="register-container">
//       <form onSubmit={handleRegister} className="register-form">
//         <h2>Create an Account</h2>

//         {error && <p className="error-message">{error}</p>} 
        
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="submit-btn">Register</button>
//       </form>

//       <div className="register-link">
//         <small className="small-text">
//           Already have an account? <Link to="/login">Login here</Link>
//         </small>
//       </div>
//     </div>
//   );
// };

// export default RegisterPatient;
