import React from "react";
import { motion } from "framer-motion";
import { MdCheckCircleOutline } from "react-icons/md";
import "./Pricing.css";

export default function PricingSection() {
  const tiers = [
    {
      label: "INDIVIDUAL",
      title: "Starter VA",
      desc: "Perfect for busy founders needing 20h/week dedicated support.",
      features: ["24/7 Availability", "Managed Oversight", "Cultural Training"],
      btnText: "Get Started",
      popular: false,
    },
    {
      label: "SCALE",
      title: "Full-time Agent",
      desc: "A dedicated expert focused entirely on your business outcomes.",
      features: [
        "100% Dedicated Talent",
        "Premium Workstations",
        "Weekly Performance Reports",
      ],
      btnText: "Select Plan",
      popular: true,
    },
    {
      label: "CUSTOM",
      title: "Managed Team",
      desc: "Custom pods of 5+ talents with a dedicated on-site manager.",
      features: [
        "Dedicated Team Lead",
        "Custom SLA Agreements",
        "Scalable Infrastructure",
      ],
      btnText: "Contact Sales",
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pricing-main-title">Flexible Scale</h2>
          <p className="pricing-subtitle">
            Pricing built for startups and enterprises alike.
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              variants={cardVariants}
              whileHover={{
                y: tier.popular ? -12 : -8,
                transition: { duration: 0.25 },
              }}
              className={`pricing-card ${
                tier.popular ? "card-featured" : "card-standard"
              }`}
            >
              {tier.popular && (
                <motion.div
                  className="popular-badge"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="card-top-content">
                <span className="tier-label">{tier.label}</span>
                <h3 className="tier-title">{tier.title}</h3>
                <p className="tier-desc">{tier.desc}</p>

                <motion.ul
                  className="tier-features-list"
                  variants={listVariants}
                >
                  {tier.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="feature-item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.25, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260 }}
                      >
                        <MdCheckCircleOutline className="feature-icon" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="tier-action-btn"
              >
                {tier.btnText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
