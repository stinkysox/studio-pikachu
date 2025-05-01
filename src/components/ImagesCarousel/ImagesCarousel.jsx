import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ImagesCarousel.css";

// Updated the array name to avoid conflict
const imagesArray = [
  "https://i.postimg.cc/253GgP6L/CMP00042-2-1.jpg",
  "https://i.postimg.cc/vTwvgTv5/CMP00064-3-1.jpg",
  "https://i.postimg.cc/6qVfdKHg/CMP00069.jpg",
  "https://i.postimg.cc/y60jqhVj/CMP00103.jpg",
  "https://i.postimg.cc/pXZBr25n/CMP00135.jpg",
  "https://i.postimg.cc/5tZBTyTD/CMP00151.jpg",
  "https://i.postimg.cc/1twGQPZX/CMP00164.jpg",
  "https://i.postimg.cc/8P1hqqXk/CMP00180.jpg",
  "https://i.postimg.cc/85SFL6qk/CMP00201.jpg",
  "https://i.postimg.cc/RhbVp6bH/CMP00285.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imagesArray.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-carousel" id="portfolio">
      <p className="fashion-title">Baby Photography</p>
      <motion.div
        className="first-carousel-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={imagesArray[currentIndex]} // Using imagesArray instead of firstCarousel
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
