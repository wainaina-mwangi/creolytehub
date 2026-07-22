import React, { useState } from "react";
import { motion } from "framer-motion";
import "./StatsCounter.css";

function CounterItem({ endValue, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startCounter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    let start = 0;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = endValue / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);
  };

  return (
    <motion.div
      className="stats-grid-cell"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={startCounter}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="stats-number-wrap">
        <span className="stats-number">{count.toLocaleString()}</span>
        <span className="stats-suffix">{suffix}</span>
      </div>
      <p className="stats-label">{label}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const stats = [
    { endValue: 100, suffix: "+", label: "Vetted Professionals" },
    { endValue: 98, suffix: "%", label: "Client Retention Rate" },
    { endValue: 48, suffix: "h", label: "Average Match Time" },
    { endValue: 25, suffix: "+", label: "Global Markets" },
  ];

  return (
    <section className="stats-counter-section">
      <div className="stats-grid-container">
        {stats.map((stat, idx) => (
          <CounterItem key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
}
