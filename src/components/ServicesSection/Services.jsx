import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const whatsappLink = "https://wa.me/919652198887";

  const services = [
    {
      title: "Newborn Photography",
      description:
        "Capture the precious moments of your newborn with a professional photoshoot. Our team specializes in creating beautiful memories.",
      imageUrl:
        "https://i.postimg.cc/nhN07npV/CMP00063-2-1.jpg/ee/81daee78a86ac2f8b0faef65f19ec876.jpg",
      alt: "Newborn",
    },
    {
      title: "Kids Photography",
      description:
        "From playful portraits to candid moments, we offer vibrant sessions for children of all ages.",
      imageUrl: "https://i.postimg.cc/VNGksstg/CMP00352-2.jpg",
      alt: "Kids",
    },
    {
      title: "Maternity Photography",
      description:
        "Celebrate the journey of motherhood with intimate and glowing maternity photos.",
      imageUrl: "https://i.postimg.cc/1twGQPZX/CMP00164.jpg",
      alt: "Maternity",
    },
    {
      title: "Family Portraits",
      description:
        "Gather your loved ones for beautiful family portraits that will last a lifetime.",
      imageUrl: "https://i.postimg.cc/bNJTBZvN/CMP00046.jpg",
      alt: "Family Portraits",
    },
    {
      title: "Events Photography",
      description:
        "We capture the highlights of your special events, from weddings to corporate gatherings.",
      imageUrl:
        "https://i.pinimg.com/736x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg",
      alt: "Events",
    },
    {
      title: "Fashion Photography",
      description:
        "Bring your style to life with stunning fashion photography tailored to your unique look.",
      imageUrl: "https://i.postimg.cc/vTzgXZWR/IMG-2998.jpg",
      alt: "Fashion",
    },
    {
      title: "Birthday Photography",
      description:
        "Celebrate the special milestones with memorable birthday photoshoots capturing every moment.",
      imageUrl: "https://i.postimg.cc/3NghG3kP/IMG-3032.jpg",
      alt: "Birthday",
    },
  ];

  return (
    <div className="services-container" id="myservices">
      <h2 className="services-title">Services We Provide</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            className="service-item"
            key={index}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="service-image">
              <motion.img
                src={service.imageUrl}
                alt={service.alt}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="contact-btn">Contact Us</button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
