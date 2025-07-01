import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Anteiku.</h1>
          <p>
            Anteiku is a modern food delivery platform designed and developed by
            <strong> Shanush</strong>, a Computer Science and Business Systems student at VIT Vellore.
            Built with MERN Stack, Anteiku blends great taste with great tech to bring delicious meals
            straight to your doorstep.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-9849630469</li>
            <li>shanush@anteiku.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright &copy; 2025 Anteiku.com — Built with ❤️ by Shanush. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
