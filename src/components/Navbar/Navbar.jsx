import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <motion.img
          src="https://i.postimg.cc/bwT4qHL1/Untitled-design-9.png"
          alt="Logo"
          className="nav-logo-image"
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: [0, -15, 15, -15, 15, 0, 100, 0],
            rotate: [0, 0, 0, 0, 0, 0, 360, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {[
          "About Pikachu Studio",
          "My Services",
          "Portfolio",
          "Testimonials",
          "Map",
          "Book Appointment",
        ].map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, "");
          const isWhatsApp = item === "Book Appointment";
          return (
            <li
              key={item}
              onClick={() => {
                console.log(`Clicked: ${item}`);
                if (!isWhatsApp) scrollToSection(id);
              }}
            >
              <a
                href={isWhatsApp ? "https://wa.me/919652198887" : "#"}
                target={isWhatsApp ? "_blank" : "_self"}
                rel={isWhatsApp ? "noopener noreferrer" : ""}
                className={isWhatsApp ? "btn" : ""}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
