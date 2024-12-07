import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';  // Custom CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} />
          </a>
          <a href="mailto:your-email@example.com" className="social-icon">
            <FaEnvelope size={30} />
          </a>
        </div>

        <p className="footer-copy">© 2024 Doc. All rights reserved.</p>

        <a href="#top" className="back-to-top">Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;
