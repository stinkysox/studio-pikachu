import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section className="map-section" id="map">
      <h2>Find Studio Pikachu</h2>
      <div className="map-container">
        <iframe
          title="Studio Pikachu Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5693491899946!2d78.3957574!3d17.4306844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97508b0f5651%3A0x1a1921509d84dde7!2sStudio%20Pikachu!5e0!3m2!1sen!2sin!4v1714554806815!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
