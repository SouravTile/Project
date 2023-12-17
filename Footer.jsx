// Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import twitterIcon from "../src/images/Twitter.png";
import instagramIcon from "../src/images/Instagram.png";
import gmailIcon from "../src/images/Gmail.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <div className="container">
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} className='img-fluid animated' alt="Twitter.png" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} className='img-fluid animated' alt="Instagram.png" />
          </a>
          <a href="mailto:your@email.com">
            <img src={gmailIcon} className='img-fluid animated' alt="Gmail.png" />
          </a>
        </div>
        
        <div className="quick-links">
          <h5>Quick Links</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink to="/" className="text-white">Home</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/about" className="text-white">About</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/donate" className="text-white">Donate</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/Privacy Policy" className="text-white">Privacy Policy</NavLink>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>
      </div>
      <p style={{ color: 'white' }}>&copy; 2023 Food Donation Website</p>

    </footer>
  );
};

export default Footer;
