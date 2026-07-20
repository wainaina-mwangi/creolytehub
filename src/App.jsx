import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Banner from "./components/ManagementBanner/Banner";
import ServicesGrid from "./components/ServicesGrid/ServicesGrid";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <ServicesGrid />
    </>
  );
};

export default App;
