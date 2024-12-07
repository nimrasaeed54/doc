import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link className="navbar-logo" to="/">Doc</Link>
        <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/provider">Provider</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/location">Location</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
