import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Services from "../../components/ServicesSection/Services";
import ImageCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import HarshaSection from "../../components/HarshaSection/HarshaSection";
const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <HarshaSection />
      <Services />
      <ImageCarousel />
    </div>
  );
};

export default Home;
