import React from "react";
import Home from "./pages/Home/Home";
import Gallery from "./components/MaternitySection/Maternity";
import FashionShootGallery from "./components/FashionShootGallery/FashionShootGallery";
import Map from "./components/Map/Map";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
const App = () => {
  return (
    <div>
      <Home />
      <Gallery />
      <FashionShootGallery />
      <Testimonials />
      <Map />
      <Footer />
      <ScrollArrow />
    </div>
  );
};

export default App;
