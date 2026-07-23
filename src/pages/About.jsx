import React from "react";
import { motion } from "framer-motion";
import { FiEye, FiShield, FiGlobe, FiMapPin, FiMail } from "react-icons/fi";
import "./About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <motion.section
          className="about-grid-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="about-hero-content" variants={fadeInUp}>
            <span className="about-badge">Our Mission</span>
            <h1 className="about-title">
              Bridging Local Talent to Global Impact.
            </h1>
            <p className="about-text">
              Creolyte Hub connects high-caliber Kenyan developers, designers,
              and creative strategists with international enterprise
              projects—bringing local digital excellence to the world.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <p className="about-stat-number">100%</p>
                <p className="about-stat-label">Kenyan Founded</p>
              </div>
              <div className="stat-item">
                <p className="about-stat-number">100+</p>
                <p className="about-stat-label">Global Connections</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Creolyte Hub Team Collaborating"
            />
          </motion.div>
        </motion.section>

        {/* HERITAGE / CRAFTSMANSHIP SECTION */}
        <motion.section
          className="about-craft-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="about-image-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Modern Tech Workspace"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="about-badge">Our Heritage</span>
            <h2 className="about-title">
              Built on Precision & Structural Integrity
            </h2>
            <p className="about-text">
              Rooted in the exacting craftsmanship of glass and aluminum design,
              Creolyte Hub carries that exact same standard of physical
              precision into digital infrastructure, web engineering, and media
              creative solutions.
            </p>

            <div className="founder-block">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Victor Omondi"
                className="founder-img"
              />
              <div>
                <h4 className="founder-name">Victor Omondi</h4>
                <p className="founder-role">Founder & Managing Director</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="directives-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="directives-header" variants={fadeInUp}>
            <span className="about-badge">Core Pillars</span>
            <h2 className="about-title">Why Teams Choose Creolyte</h2>
          </motion.div>

          <motion.div className="directives-grid" variants={staggerContainer}>
            <motion.div
              className="directive-card card-transparency"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="directive-icon">
                <FiEye />
              </div>
              <h3>Radical Transparency</h3>
              <p className="about-text">
                Clear communication, documented development workflows, and zero
                hidden overhead costs.
              </p>
            </motion.div>

            <motion.div
              className="directive-card card-excellence"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="directive-icon">
                <FiShield />
              </div>
              <h3>Tier-1 Standard</h3>
              <p className="about-text">
                Vetted technical skills and creative mastery designed to perform
                under demanding production settings.
              </p>
            </motion.div>

            <motion.div
              className="directive-card card-global"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="directive-icon">
                <FiGlobe />
              </div>
              <h3>Global Integration</h3>
              <p className="about-text">
                Seamless remote handoffs combined with local Nairobi operational
                support and coordination.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="hq-card">
            <div className="hq-content">
              <div>
                <span className="hq-badge">Headquarters</span>
                <h2 className="hq-title">Nairobi, Kenya</h2>
                <p className="hq-text">
                  Operating directly out of the vibrant Baba Dogo and Lucky
                  Summer hubs in Ruaraka District.
                </p>
              </div>

              <div className="hq-details">
                <div className="hq-info-row">
                  <FiMapPin size={18} />
                  <span>Baba Dogo Rd, Lucky Summer — Nairobi, Kenya</span>
                </div>
                <div className="hq-info-row">
                  <FiMail size={18} />
                  <span>creolytehub@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="hq-map-wrapper">
              <iframe
                title="Creolyte Hub Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.632281896895!2d36.8833895!3d-1.2435504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1422be30055d%3A0x86bb1b590635f60d!2sBaba%20Dogo%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
