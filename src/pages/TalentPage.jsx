import React from "react";
import { motion } from "framer-motion";
import {
  MdVerifiedUser,
  MdPublic,
  MdWork,
  MdArrowForward,
} from "react-icons/md";
import "./TalentPage.css";
import AiTalentCarousel from "./AiTalentCarousel";
import image5 from "../assets/E.jpg";
import FaqSection from "./FaqSection";

export default function TalentPage() {
  const remoteRoles = [
    "Virtual Assistant",
    "Full-Stack Web Developer",
    "Graphic & Web Designer",
    "Customer Support Specialist",
    "Digital Marketing Manager",
    "UI/UX Designer",
    "Data Entry & Operations Specialist",
    "Social Media Manager",
  ];

  const marqueeRoles = [...remoteRoles, ...remoteRoles];

  return (
    <section className="about-opt3-section">
      <div className="about-opt3-container">
        <div className="about-opt3-header">
          <h1 className="about-opt3-title">
            Vetted Talent. <br />
            <span className="title-emerald-italic">Global Reach.</span>
          </h1>
          <p className="about-opt3-subtitle">
            We maintain an active network of highly qualified Kenyan remote
            professionals ready to integrate directly into international
            business operations.
          </p>

          <button className="btn-opt3-dark">
            Join the Network <MdArrowForward className="btn-arrow-icon" />
          </button>
        </div>

        <div className="globe-cluster-stage">
          <div className="dot-matrix-bg"></div>

          <div className="roles-marquee-wrapper">
            <div className="roles-marquee-track">
              {marqueeRoles.map((role, index) => (
                <motion.span
                  key={index}
                  className="pill-item"
                  whileHover={{ scale: 1.05, translateY: -2 }}
                >
                  <MdWork size={18} className="pill-icon" /> {role}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="candidate-card-stack">
            <div className="mini-candidate-card">
              <img
                src={image5}
                alt="Vetted Talent Profile"
                className="mini-avatar"
              />
              <div className="mini-info">
                <span className="mini-name">Erastus W.</span>
                <span className="mini-tag">
                  <MdVerifiedUser /> Vetted Specialist
                </span>
              </div>
            </div>

            <div className="mini-candidate-card offset-right">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Talent Network Hub"
                className="mini-avatar"
              />
              <div className="mini-info">
                <span className="mini-name">Nairobi Talent Hub</span>
                <span className="mini-tag global-tag">
                  <MdPublic /> GMT / EST Overlap
                </span>
              </div>
            </div>
          </div>
          <AiTalentCarousel />
        </div>
          <FaqSection/>
      </div>
    
    </section>
  );
}
