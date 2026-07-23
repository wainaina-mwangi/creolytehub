import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import About from "./pages/About";
import Talent from "./pages/TalentPage";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hire-talent" element={<HireTalent />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
