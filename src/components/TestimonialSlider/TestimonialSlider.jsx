import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      text: "Creolytech Hub transformed how we scale. Within 48 hours, we had a vetted team of moderators that felt like a natural extension of our California headquarters. The quality from Nairobi is unmatched.",
      author: "Alex Thompson",
      role: "CTO, Verisync AI (London)"
    },
    {
      id: 2,
      text: "The web development team delivered our platform ahead of schedule with flawless code execution. Their communication and front-end polish exceeded all our internal expectations.",
      author: "Sarah Jenkins",
      role: "Founder, Bloom Digital (New York)"
    },
    {
      id: 3,
      text: "Incredible design sensibility. They reworked our entire corporate brand asset catalog and created interactive mockups that immediately captured our enterprise target audience.",
      author: "David Kovacs",
      role: "Product Lead, Apex Logistics (Berlin)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        
        <div className="testimonial-left">
          <h2 className="testimonial-title">
            Trusted by founders in the US, UK, and EU.
          </h2>
          <div className="testimonial-badges">
            <span className="badge-item">Fortune 500</span>
            <span className="badge-item">Y Combinator</span>
          </div>
        </div>

        
        <div className="testimonial-right">
          <div className="slider-window">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="slide-card">
                  <span className="quote-mark">“</span>
                  <p className="quote-text">{item.text}</p>
                  
                  <div className="author-block">
                    <div className="author-avatar">
                     
                      {item.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.author}</h4>
                      <p className="author-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot-btn ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}