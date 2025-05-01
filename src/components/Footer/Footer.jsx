import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Icons for phone and email
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <p>
            <FaPhoneAlt /> <a href="tel:+919652198887">9652198887</a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:studiopikachu2@gmail.com">
              studiopikachu2@gmail.com
            </a>
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://www.instagram.com/studiopikachu?igsh=MXhxN3QwaGZ1aXh4"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram size={30} color="#E1306C" />
          </a>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Studio Pikachu. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
