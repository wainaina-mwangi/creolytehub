import React from "react";
import { motion } from "framer-motion";
import "./CtaSection.css";
import { useNavigate } from "react-router";

export default function CtaSection({ closeDrawer }) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
    <section
      className="cta-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div
        className="cta-bg-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="cta-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 className="cta-title" variants={itemVariants}>
          Ready to Scale with Quality?
        </motion.h2>

        <motion.p className="cta-subtitle" variants={itemVariants}>
          Whether you are an enterprise looking for Tier-1 talent or a
          high-performing professional ready for your next global challenge,
          Creolyte Hub is your partner in excellence.
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <motion.button
            className="btn btn-Talent"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLinkClick}
          >
            Hire Talent
          </motion.button>

          <motion.button
            className="btn btn-outlined"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Partner with Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
