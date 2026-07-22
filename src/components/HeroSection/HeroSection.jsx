import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdVerifiedUser,
  MdPublic,
  MdFlashOn,
  MdSentimentSatisfiedAlt,
  MdAdd,
} from "react-icons/md";
import "./HeroSection.css";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [image1, image2, image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/hire-talent");

    if (closeDrawer) {
      closeDrawer();
    }
  };
  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="badge-wrapper" variants={itemVariants}>
            <span className="badge badge-verified">
              <MdVerifiedUser className="badge-icon" /> Verified Pro
            </span>
            <span className="badge badge-global">
              <MdPublic className="badge-icon" /> Global Reach
            </span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Global Work.
            <br />
            <span className="title-accent">Local Excellence.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Connecting international businesses with vetted, managed remote
            talent from Kenya. Scale your operations with precision, speed, and
            cultural alignment.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLinkClick}
            >
              Hire Your Remote Team
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={handleScrollToServices}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Services
            </motion.button>
          </motion.div>

          <motion.div className="hero-trust-footers" variants={itemVariants}>
            <span className="trust-item">
              <MdFlashOn className="trust-icon" /> 24h Response
            </span>
            <span className="trust-item">
              <MdSentimentSatisfiedAlt className="trust-icon" /> 98%
              Satisfaction
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-graphic-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="window-card">
            <div className="window-header"></div>

            <div className="window-body-carousel">
              <div
                className="carousel-track"
                style={{ "--current-slide": currentIndex }}
              >
                {carouselImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Remote talent presentation ${index + 1}`}
                    className="window-image"
                  />
                ))}
              </div>

              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="window-footer">
              <div className="footer-left">
                <span className="footer-label">Current Active Talent</span>
                <h3 className="footer-stat">500+</h3>
              </div>

              <div className="footer-right">
                <div className="avatar-stack">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Remote Specialist"
                    className="avatar"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Remote Engineer"
                    className="avatar"
                  />
                  <img
                    src="https://media.istockphoto.com/id/2218333130/photo/confident-businessman-smiling-in-a-casual-suit-and-glasses-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=H6ImSogE21cldteIwpMDo2LgYK6Szk7mJC4M1aL8PWU="
                    alt="Remote Specialist"
                    className="avatar"
                  />

                  <motion.div
                    className="avatar-plus-btn"
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MdAdd />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
