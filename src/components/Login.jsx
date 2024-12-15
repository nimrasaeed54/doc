
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.role) {
      setRole(location.state.role);
    }

    const storedRole = localStorage.getItem('role');
    const storedEmail = localStorage.getItem('email');
    if (storedRole && storedEmail) {
      setRole(storedRole);
      setEmail(storedEmail);
      if (storedRole === 'patient') {
        navigate('/home');
      } else if (storedRole === 'clinic') {
        navigate('/clinic-dashboard');
      }
    }
  }, [location, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      if (role === 'patient') {
        navigate('/home');
      } else if (role === 'clinic') {
        navigate('/clinic-dashboard');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegisterRedirect = () => {
    if (role === 'patient') {
      navigate('/register-patient');
    } else if (role === 'clinic') {
      navigate('/register-clinic');
    }
  };

  const switchRole = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="tabs">
          <button
            className={`tab-button ${role === 'patient' ? 'active' : ''}`}
            onClick={() => switchRole('patient')}
          >
            Patient
          </button>
          <button
            className={`tab-button ${role === 'clinic' ? 'active' : ''}`}
            onClick={() => switchRole('clinic')}
          >
            Clinic
          </button>
        </div>

        {role === 'patient' && (
          <form onSubmit={handleLogin}>
            <h2>Patient Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <button type="button" onClick={handleRegisterRedirect}>
              Don't have an account? Register
            </button>
            <small>By logging in, you agree to our Terms and Conditions</small>
          </form>
        )}

        {role === 'clinic' && (
          <form onSubmit={handleLogin}>
            <h2>Clinic Login</h2>
            <input
              type="email"
              placeholder="Clinic Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <button type="button" onClick={handleRegisterRedirect}>
              Don't have an account? Register
            </button>
            <small>By logging in, you agree to our Terms and Conditions</small>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
