import React from 'react';
import { MdVerifiedUser, MdPublic, MdFlashOn, MdSentimentSatisfiedAlt, MdAdd } from 'react-icons/md';
import './HeroSection.css';

export default function HeroSection() {
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
            Global Work.<br />
            <span className="title-accent">Local Excellence.</span>
          </h1>

          <p className="hero-description">
            Connecting international businesses with vetted, managed remote talent from Kenya. 
            Scale your operations with precision, speed, and cultural alignment.
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
              <MdSentimentSatisfiedAlt className="trust-icon" /> 98% Satisfaction
            </span>
          </div>
        </div>

        <div className="hero-graphic-wrapper">
          <div className="window-card">
    
            <div className="window-body">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Remote team working collaboratively in an office" 
                className="window-image"
              />
              
              <div className="window-footer">
                <div className="footer-left">
                  <span className="footer-label">Current Active Talent</span>
                  <h3 className="footer-stat">1,240+</h3>
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

      </div>
    </section>
  );
}