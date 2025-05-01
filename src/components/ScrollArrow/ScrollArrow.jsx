import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import "./ScrollArrow.css";

const ScrollArrow = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopArrow(window.scrollY > 100);
      setShowBottomArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-arrows">
      {showTopArrow && (
        <div
          className="scroll-arrow top"
          onClick={scrollToTop}
          title="Go to Top"
        >
          <FaArrowUp size={28} />
        </div>
      )}
      {showBottomArrow && (
        <div
          className="scroll-arrow bottom"
          onClick={scrollToBottom}
          title="Go to Bottom"
        >
          <FaArrowDown size={28} />
        </div>
      )}

      <a
        href="https://wa.me/919652198887"
        target="_blank"
        rel="noopener noreferrer"
        className="scroll-arrow whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <a
        href="https://www.instagram.com/studiopikachu?igsh=MXhxN3QwaGZ1aXh4"
        target="_blank"
        rel="noopener noreferrer"
        className="scroll-arrow instagram"
        title="Visit Instagram"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
};

export default ScrollArrow;
