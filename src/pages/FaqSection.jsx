import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./FaqSection.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the requirements to join the Talent Network?",
      answer:
        "Requirements depend on your track (Software Engineering, UI/UX, Virtual Assistance, Graphic Design, etc.). We evaluate your practical portfolio, technical or domain assessments, communication skills, and remote work readiness. You can learn more about our application process in our candidate guide.",
    },
    {
      question:
        "How quickly can companies match and hire vetted professionals?",
      answer:
        "Our matching algorithm and human vetting team pair global clients with production-ready talent within 24 to 48 hours. Once matched, you can conduct direct intro interviews and onboard immediately.",
    },
    {
      question: "How do timezone overlaps work for international teams?",
      answer:
        "Our professionals operate from Kenya (EAT / GMT+3), providing a natural 4 to 6-hour overlap with European, Middle Eastern, and US East Coast (EST) working hours to ensure seamless daily standups and sprint cycles.",
    },
    {
      question:
        "Does the platform handle contracts, payroll, and escrow security?",
      answer:
        "Yes! We handle international compliance, localized payout methods, and milestone escrow protection so employers can scale worry-free and talent receives timely, guaranteed payments.",
    },
    {
      question: "What happens if a placed talent isn't the right fit?",
      answer:
        "We offer a 14-day risk-free trial period. If a specialist or engineer isn't meeting your project expectations, we will provide an immediate replacement at zero additional cost.",
    },
    {
      question:
        "What if I don't pass the initial vetting assessment as a candidate?",
      answer:
        "If you don't qualify on your first attempt, you will receive structured feedback on your project submission or assessment. Candidates are eligible to re-apply after 60 days of skill building.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-subtitle">
            For more information, check out our{" "}
            <a href="#help" className="faq-link">
              help center
            </a>
            .
          </p>
        </div>
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>

                  <span className="faq-icon-wrap">
                    {isOpen ? (
                      <MdKeyboardArrowUp className="faq-icon green-icon" />
                    ) : (
                      <MdKeyboardArrowDown className="faq-icon" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
