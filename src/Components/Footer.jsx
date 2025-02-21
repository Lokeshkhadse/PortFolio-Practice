import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./Footer.css"; // Import CSS file

function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer-container">
        <div className="footer-content">
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
          <br/>
          <hr/>
          <div className="footer-text">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <p>Supportive Partner ❤️ Lokesh</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
