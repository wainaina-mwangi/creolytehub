import React, { useState, useEffect } from "react";
import {
  MdVerifiedUser,
  MdPublic,
  MdFlashOn,
  MdSentimentSatisfiedAlt,
  MdAdd,
} from "react-icons/md";
import "./HeroSection.css";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  ];

  // Auto-play effect: cycles slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="badge badge-verified">
              <MdVerifiedUser className="badge-icon" /> Verified Pro
            </span>
            <span className="badge badge-global">
              <MdPublic className="badge-icon" /> Global Reach
            </span>
          </div>

          <h1 className="hero-title">
            Global Work.
            <br />
            <span className="title-accent">Local Excellence.</span>
          </h1>

          <p className="hero-description">
            Connecting international businesses with vetted, managed remote
            talent from Kenya. Scale your operations with precision, speed, and
            cultural alignment.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary">Hire Your Remote Team</button>
            <button className="btn btn-secondary">View Services</button>
          </div>

          <div className="hero-trust-footers">
            <span className="trust-item">
              <MdFlashOn className="trust-icon" /> 24h Response
            </span>
            <span className="trust-item">
              <MdSentimentSatisfiedAlt className="trust-icon" /> 98%
              Satisfaction
            </span>
          </div>
        </div>

        <div className="hero-graphic-wrapper">
          <div className="window-card">
            <div className="window-header"></div>

            <div className="window-body-carousel">
              <div
                className="carousel-track"
                style={{ "--current-slide": currentIndex }}
              >
                {carouselImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
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
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar-plus-btn">
                    <MdAdd />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
