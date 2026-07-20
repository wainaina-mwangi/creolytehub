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
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",

    "https://images.unsplash.com/photo-1616587896649-79b16d8b173d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
