import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/ManagementBanner/Banner";
import ServicesGrid from "./components/ServicesGrid/ServicesGrid";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import Pricing from "./components/PricingSection/Pricing";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <ServicesGrid />
      <HowItWorks />
      <TestimonialSlider />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
};

export default App;
