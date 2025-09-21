// src/pages/Landing.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <About />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Landing;
