import React, { useState } from "react";
import "./Maternity.css";

const images = [
  "https://i.postimg.cc/FHwG5TJP/CMP00395.jpg",
  "https://i.postimg.cc/Rh0wntH6/CMP00622-2.jpg",
  "https://i.postimg.cc/2jHQN0s4/IMG-0880.jpg",
  "https://i.postimg.cc/MpJXCRp7/00701499.jpg",
  "https://i.postimg.cc/mrbkDsMh/E34-AA39-C-4-EEB-40-C5-925-E-E166-FA29-D873.jpg",
  "https://i.postimg.cc/K4SvySxG/CMP00311.jpg",
  "https://i.postimg.cc/xCDmg7b2/CMP00199.jpg",
  "https://i.postimg.cc/nr6GmkfR/IMG-2994.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => setSelectedImage(src)}
            className="gallery-img"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
