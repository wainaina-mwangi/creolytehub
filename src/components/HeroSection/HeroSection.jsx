import React from "react";
import { motion } from "framer-motion";
import {
  MdCheck,
  MdVerifiedUser,
  MdFlashOn,
  MdPublic,
  MdArrowForward,
} from "react-icons/md";
import { useNavigate } from "react-router";
import "./HeroSection.css";
import image1 from "../../assets/image3.webp";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate("/hire-talent");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Talent Without Borders.
            <span className="hero-title-italic">
              {" "}
              Results Without Compromise.
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Connecting international businesses with vetted, managed remote
            talent from Kenya. Scale your operations with precision, speed, and
            cultural alignment.
          </motion.p>

          <motion.div className="hero-bullets" variants={itemVariants}>
            <span className="bullet-item">
              <MdCheck className="check-icon" /> Vetted Kenyan Remote
              Talent
            </span>
            <span className="bullet-item">
              <MdCheck className="check-icon" /> Managed Remote Operations
            </span>
            <span className="bullet-item">
              <MdCheck className="check-icon" /> 5+ Hours Working Overlap
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-showcase-wrapper"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="floating-card float-left">
            <span className="float-card-title">Top Skills Match</span>
            <div className="progress-bar-group">
              <div className="progress-info">
                <span>Full-Stack Development</span>
                <span className="percent">100%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill fill-100" />
              </div>
            </div>
            <div className="progress-bar-group">
              <div className="progress-info">
                <span>UI/UX & Web Design</span>
                <span className="percent">95%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill fill-95" />
              </div>
            </div>
          </div>

          <div className="main-talent-card">
            <img
              src={image1}
              alt="Featured Vetted Specialist"
              className="talent-bg-image"
            />

            <div className="talent-badge-overlay">
              <div className="talent-name-row">
                <span className="talent-name">Erastus W.</span>
                <span className="match-tag">
                  <MdVerifiedUser size={13} /> 100% Match
                </span>
              </div>
              <span className="talent-role">Full-Stack Web Engineer</span>
            </div>

            <div className="tech-stack-bar">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Tailwind CSS</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express</span>
            </div>
          </div>

          <div className="floating-card float-right">
            <div className="float-header">
              <MdPublic className="float-icon" />
              <span>Nairobi Talent Hub</span>
            </div>
            <p className="float-desc">
              Get matched with verified Kenyan talent ready to join your team.
            </p>
            <button className="btn-hero-primary" onClick={handleHireClick}>
              Hire Remote Talent <MdArrowForward size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
