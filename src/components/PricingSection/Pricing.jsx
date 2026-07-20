import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import "./Pricing.css";
import { Link } from "react-router";

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

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-main-title">Flexible Scale</h2>
          <p className="pricing-subtitle">
            Pricing built for startups and enterprises alike.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`pricing-card ${tier.popular ? "card-featured" : "card-standard"}`}
            >
              {tier.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="card-top-content">
                <span className="tier-label">{tier.label}</span>
                <h3 className="tier-title">{tier.title}</h3>
                <p className="tier-desc">{tier.desc}</p>

                <ul className="tier-features-list">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <MdCheckCircleOutline className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button to="/pricing" className="tier-action-btn">
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
