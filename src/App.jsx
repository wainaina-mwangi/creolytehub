import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
    </>
  );
};

export default App;
