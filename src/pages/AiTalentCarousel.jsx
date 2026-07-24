import React, { useState, useRef } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdPhone,
  MdArrowForward,
} from "react-icons/md";
import "./AiTalentCarousel.css";
import image1 from "../assets/A.jpg";
import image2 from "../assets/B.jpg";
import image3 from "../assets/C.jpg";
import image4 from "../assets/D.jpg";
import image5 from "../assets/E.jpg";
import image6 from "../assets/F.jpg";
import image7 from "../assets/J.jpg";

export default function AiTalentCarousel() {
  const carouselRef = useRef(null);

  const handleBookCall = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/YOUR_CALENDLY_USERNAME/30min",
      });
    } else {
      window.open(
        "https://calendly.com/YOUR_CALENDLY_USERNAME/30min",
        "_blank",
      );
    }
  };

  const talentData = [
    {
      id: 1,
      image: image1,
      description:
        "Graphic-Artist-Designs high-converting brand identities and visual assets",
    },
    {
      id: 2,
      image: image2,
      description:
        "CyberSecurity Analysist-Secures cloud infrastructure and enforces SIEM/SOC operations",
    },
    {
      id: 3,
      image: image3,
      description:
        "Customer Support -Drives customer retention, onboarding, and ticket resolution",
    },
    {
      id: 4,
      image: image4,
      description:
        "Ui/Ux Designer-Transforms complex product requirements into seamless, modern UIs",
    },
    {
      id: 5,
      image: image5,
      description:
        "FullStack Developer-Architects scalable full-stack React & Node AI pipelines",
    },
    {
      id: 6,
      image: image6,
      description:
        "Virtual Assistant-Coordinates daily operations, administrative tasks, and client communications",
    },
    {
      id: 7,
      image: image7,
      description:
        "Video Editor-Transforms raw footage into polished, cinematic brand stories",
    },
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="ai-talent-section">
      <div className="ai-talent-container">
        <div className="ai-talent-header">
          <h2 className="ai-talent-title">
            Onboard specialized talent to <br /> power your next big
            breakthrough
          </h2>
          <p className="ai-talent-subtitle">
            From AI systems and custom design to daily operations—hire
            pre-vetted specialists or complete teams in days, not months.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-btn btn-prev"
            onClick={() => scroll("left")}
            aria-label="Previous Slide"
          >
            <MdChevronLeft size={28} />
          </button>

          <div className="carousel-track" ref={carouselRef}>
            {talentData.map((talent) => (
              <div key={talent.id} className="talent-card">
                <img
                  src={talent.image}
                  alt="AI Engineer Candidate"
                  className="talent-card-img"
                />
                <div className="card-gradient-overlay"></div>
                <p className="card-text-overlay">{talent.description}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn btn-next"
            onClick={() => scroll("right")}
            aria-label="Next Slide"
          >
            <MdChevronRight size={28} />
          </button>
        </div>

        <div className="ai-talent-cta-row">
          <button className="btn-cta btn-book" onClick={handleBookCall}>
            <MdPhone size={18} /> Book a Call
          </button>
          <button className="btn-cta btn-hire">
            Hire Talent <MdArrowForward size={18} className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
