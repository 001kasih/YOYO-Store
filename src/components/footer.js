// components/Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>YOYO STORE</h3>
            <p>&copy; 2024 YOYO STORE. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>Contact Us:</p>
            <ul>
              <li>Email: contact@yoyostore.com</li>
              <li>Phone: +1234567890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
