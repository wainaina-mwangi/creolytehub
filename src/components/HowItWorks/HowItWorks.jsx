import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Brief",
      desc: "Tell us your requirements and goals."
    },
    {
      number: 2,
      title: "Match",
      desc: "We hand-pick the best talent for your role."
    },
    {
      number: 3,
      title: "Onboard",
      desc: "Seamless integration into your workflows."
    },
    {
      number: 4,
      title: "Manage",
      desc: "We handle HR; you drive the results."
    }
  ];

  return (
    <section className="hiw-section">
      <div className="hiw-container">
        
    
        <div className="hiw-header">
          <h2 className="hiw-main-title">How It Works</h2>
          <p className="hiw-subtitle">A seamless path from identifying a need to operational excellence.</p>
        </div>

        
        <div className="hiw-timeline-wrapper">
          <div className="hiw-progress-line"></div>
          
          <div className="hiw-steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="hiw-step-item">
                <div className="hiw-number-badge">
                  {step.number}
                </div>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}