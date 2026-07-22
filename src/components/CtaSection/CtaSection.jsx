import React from "react";
import "./CtaSection.css";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Scale with Quality?</h2>
        <p className="cta-subtitle">
          Whether you are an enterprise looking for Tier-1 talent or a
          high-performing professional ready for your next global challenge,
          Creolyte Hub is your partner in excellence.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-Talent">Hire Talent</button>
          <button className="btn btn-outlined">Partner with Us</button>
        </div>
      </div>
    </section>
  );
}
