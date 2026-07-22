import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TestimonialSlider.css";

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      text: "Creolytech Hub transformed how we scale. Within 48 hours, we had a vetted team of moderators that felt like a natural extension of our California headquarters. The quality from Nairobi is unmatched.",
      author: "Alex Thompson",
      role: "CTO, Verisync AI (London)",
    },
    {
      id: 2,
      text: "The web development team delivered our platform ahead of schedule with flawless code execution. Their communication and front-end polish exceeded all our internal expectations.",
      author: "Sarah Jenkins",
      role: "Founder, Bloom Digital (New York)",
    },
    {
      id: 3,
      text: "Incredible design sensibility. They reworked our entire corporate brand asset catalog and created interactive mockups that immediately captured our enterprise target audience.",
      author: "David Kovacs",
      role: "Product Lead, Apex Logistics (Berlin)",
    },
  ];

  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = testimonials.length - 1;
      if (nextPage >= testimonials.length) nextPage = 0;
      return [nextPage, newDirection];
    });
  };

  const goToSlide = (index) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    }),
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <motion.div
          className="testimonial-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonial-title">
            Trusted by founders in the US, UK, and EU.
          </h2>
          <div className="testimonial-badges">
            <motion.span
              className="badge-item"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Fortune 500
            </motion.span>
            <motion.span
              className="badge-item"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Y Combinator
            </motion.span>
          </div>
        </motion.div>

        <div className="testimonial-right">
          <div
            className="slider-window"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="slide-card"
              >
                <span className="quote-mark">“</span>
                <p className="quote-text">{activeTestimonial.text}</p>

                <div className="author-block">
                  <motion.div
                    className="author-avatar"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {activeTestimonial.author.charAt(0)}
                  </motion.div>
                  <div className="author-info">
                    <h4 className="author-name">{activeTestimonial.author}</h4>
                    <p className="author-role">{activeTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot-btn ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="dot-active-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
