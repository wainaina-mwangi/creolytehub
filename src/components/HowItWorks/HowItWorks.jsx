import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Brief",
      desc: "Tell us your requirements and goals.",
    },
    {
      number: 2,
      title: "Match",
      desc: "We hand-pick the best talent for your role.",
    },
    {
      number: 3,
      title: "Onboard",
      desc: "Seamless integration into your workflows.",
    },
    {
      number: 4,
      title: "Manage",
      desc: "We handle HR; you drive the results.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-container">
        <motion.div
          className="hiw-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="hiw-main-title">How It Works</h2>
          <p className="hiw-subtitle">
            A seamless path from identifying a need to operational excellence.
          </p>
        </motion.div>

        <div className="hiw-timeline-wrapper">
          <motion.div
            className="hiw-progress-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          />

          <motion.div
            className="hiw-steps-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="hiw-step-item"
                variants={stepVariants}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="hiw-number-badge"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
