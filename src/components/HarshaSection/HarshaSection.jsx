import React from "react";
import "./HarshaSection.css"; // You can create this file or add styles to your existing CSS

const HarshaSection = () => {
  return (
    <section className="harsha-section">
      <div className="harsha-content">
        <h2>Harsha Vardhan</h2>
        <p className="subtitle">Certified Photographer from Egypt</p>
        <p className="speciality">Specialist in Newborn Photography</p>
      </div>

      <div className="harsha-images">
        <div className="image-placeholder">
          <img src="https://i.postimg.cc/JnYyDzCP/IMG-3004.jpg" alt="" />
        </div>
        <div className="image-placeholder">
          <img src="https://i.postimg.cc/Gp589pCz/IMG-2995.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HarshaSection;
