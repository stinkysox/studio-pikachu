import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import "./FashionShootGallery.css";

// Updated the array name to avoid conflict
const imagesArrayTwo = [
  "https://i.postimg.cc/1tDNnHX3/IMG-2996.jpg",
  "https://i.postimg.cc/KjF3nM3r/IMG-2997.jpg",
  "https://i.postimg.cc/vTzgXZWR/IMG-2998.jpg",
  "https://i.postimg.cc/J4pHktrZ/IMG-2999.jpg",
  "https://i.postimg.cc/NjVydVr0/IMG-3001.jpg",
  "https://i.postimg.cc/G2PHhmgB/IMG-3002.jpg",
  "https://i.postimg.cc/660ykTGg/IMG-3003.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imagesArrayTwo.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-carousel">
      <p className="fashion-title">Fashion Photography</p>
      <motion.div
        className="first-carousel-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={imagesArrayTwo[currentIndex]} // Using imagesArray instead of firstCarousel
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </motion.div>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/studiopikachu?igsh=MXhxN3QwaGZ1aXh4"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-button"
      >
        <FaInstagram size={40} color="#E1306C" />
      </a>
    </div>
  );
};

export default ImageCarousel;
