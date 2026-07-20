import React from "react";
import {
  MdSupportAgent,
  MdChat,
  MdHeadsetMic,
  MdPalette,
  MdCode,
  MdCreate,
} from "react-icons/md";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  const services = [
    {
      icon: <MdSupportAgent />,
      title: "Virtual Assistance",
      desc: "Administrative support, scheduling, and email management handled by meticulous professionals.",
    },
    {
      icon: <MdChat />,
      title: "Chat Moderation",
      desc: "24/7 community engagement and platform moderation for growing social and gaming brands.",
    },
    {
      icon: <MdHeadsetMic />,
      title: "Customer Support",
      desc: "Empathetic, multi-channel support that solves problems and builds customer loyalty.",
    },
    {
      icon: <MdPalette />,
      title: "Design",
      desc: "Graphic design, UI/UX, and social media assets that maintain your brand's global standards.",
    },
    {
      icon: <MdCode />,
      title: "Development",
      desc: "Front-end, back-end, and full-stack talent ready to jump into your existing sprint cycles.",
    },
    {
      icon: <MdCreate />,
      title: "Writing",
      desc: "SEO-optimized content, technical documentation, and compelling copywriting for global audiences.",
    },
  ];

  return (
   <section className="services-section">
  <div className="services-container">
    <div className="services-header">
      <h2 className="services-main-title">Our Specialized Services</h2>
      <p className="services-subtitle">High-quality talent tailored to scale your business operations effortlessly.</p>
    </div>

    <div className="services-grid">
      {services.map((item, index) => (
        <div key={index} className="service-card">
          <div className="service-icon-box">{item.icon}</div>
          <h3 className="service-title">{item.title}</h3>
          <p className="service-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
