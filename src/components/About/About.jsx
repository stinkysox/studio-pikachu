import React from "react";
import "./About.css";
import { motion } from "framer-motion";

// Import the sound file
const pikachuSound = new Audio("/sounds/pikachu_cute (mp3cut.net).mp3");

const About = () => {
  const playSound = () => {
    pikachuSound.currentTime = 0;
    pikachuSound.play();
  };

  return (
    <section className="about-section" id="aboutpikachustudio">
      <div className="about-content">
        <h2>Studio Pikachu</h2>
        <p>
          At <strong>Studio Pikachu</strong>, we specialize in capturing the
          joy, innocence, and vibrant personalities of children. From giggles to
          curious stares, we freeze every magical moment with love and care.
        </p>
        <img
          src="https://i.postimg.cc/N0WSg154/IMG-0526.jpg"
          alt=""
          className="main-image"
        />
        <p>
          Our team of passionate photographers is trained to work with children
          of all ages in a warm, playful, and patient environment—making the
          photo session a delightful experience for both kids and parents.
        </p>
        <p>
          Whether it's a birthday shoot, newborn photography, family portraits,
          or themed sessions, Studio Pikachu brings professionalism, creativity,
          and top-tier service to every frame.
        </p>
        <p>
          Let us help you turn your child’s fleeting moments into timeless
          memories. Because at Studio Pikachu, <em>every child is a star</em>.
        </p>

        <motion.img
          src="https://i.postimg.cc/yxKYwyv2/Gemini-Generated-Image-3ua8fh3ua8fh3ua8.jpg"
          alt="Studio Pikachu"
          className="about-image"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileTap={{
            rotate: 360,
            y: -30,
            scale: 1.1,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          onTap={playSound}
        />
      </div>
    </section>
  );
};

export default About;
