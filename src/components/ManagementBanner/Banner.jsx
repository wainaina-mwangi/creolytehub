import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForward, MdCheckCircle } from "react-icons/md";
import "./Banner.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ManagementBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(`Thanks! We will reach out to ${email}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setEmail("");
    }
  };

  return (
    <section className="mgmt-banner">
      <ToastContainer />
      <motion.div
        className="mgmt-banner-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className="mgmt-eyebrow-text">EFFORTLESS DELEGATION</span>

        <h2 className="mgmt-banner-title">
          Stop managing freelancers one by one.
        </h2>

        <p className="mgmt-banner-subtitle">
          Enter your work email to receive a customized talent proposal within
          24 hours.
        </p>

        <form onSubmit={handleSubmit} className="mgmt-inline-form">
          <input
            type="email"
            required
            placeholder="Enter your work email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mgmt-form-input"
          />
          <motion.button
            type="submit"
            className="mgmt-btn-submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get Proposal</span>
            <MdArrowForward className="mgmt-btn-icon" />
          </motion.button>
        </form>

        <div className="mgmt-form-benefits">
          <span className="mgmt-benefit-item">
            <MdCheckCircle className="mgmt-check-icon" /> No credit card
            required
          </span>
          <span className="mgmt-benefit-item">
            <MdCheckCircle className="mgmt-check-icon" /> Response within 2
            hours
          </span>
        </div>
      </motion.div>
    </section>
  );
}
