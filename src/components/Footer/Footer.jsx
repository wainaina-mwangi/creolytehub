import React from "react";
import { Link } from "react-router-dom";
import { FiShare2, FiAtSign, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from "../../assets/logo.jpeg";
import "./Footer.css";

export default function FooterDarkHero() {
  const handleWhatsapp = () => {
    window.open("https://wa.me/254715071832", "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: "Creolyte Hub", url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <footer className="footer-dark-hero">
      <div className="fdh-container">
        <div className="fdh-hero-box">
          <div className="fdh-hero-content">
            <span className="fdh-hero-tag">HQ IN NAIROBI, KENYA</span>
            <h2>Ready to scale with global talent?</h2>
            <p>
              Book a discovery call or reach out directly on WhatsApp to get
              started.
            </p>
          </div>
          <div className="fdh-hero-btns">
            <Link to="/book-briefing" className="fdh-btn-white">
              <span>Book Briefing</span> <FiArrowUpRight />
            </Link>
            <button className="fdh-btn-green" onClick={handleWhatsapp}>
              <FaWhatsapp /> <span>WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="fdh-middle-row">
          <div className="fdh-brand-block">
            <Link to="/" className="fdh-logo">
              <img src={logoImg} alt="Creolyte Hub" />
              <span className="fdh-logo-text">CREOLYTE HUB</span>
            </Link>
            <p className="fdh-bio">
              Global Talent, Local Precision. Bridging borderless work and local
              excellence.
            </p>
          </div>

          <div className="fdh-nav-col">
            <span className="fdh-nav-title">Company</span>
            <Link to="/about">About Us</Link>
            <Link to="/kenya-operations">Kenya Ops</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/newsletter">Newsletter</Link>
          </div>

          <div className="fdh-nav-col">
            <span className="fdh-nav-title">Legal</span>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="fdh-connect-col">
            <span className="fdh-nav-title">Connect</span>
            <div className="fdh-social-row">
              <a
                href="mailto:contact@creolyte.com"
                className="fdh-icon-circle"
                aria-label="Email"
              >
                <FiAtSign />
              </a>
              <button
                className="fdh-icon-circle"
                onClick={handleShare}
                aria-label="Share"
              >
                <FiShare2 />
              </button>
            </div>
            <span className="fdh-phone">HQ: +254 (0) 715 071 832</span>
          </div>
        </div>

        <div className="fdh-bottom-bar">
          <p>© {new Date().getFullYear()} Creolyte Hub. All rights reserved.</p>
          <div className="fdh-status">
            <span className="fdh-status-dot"></span>
            <span>Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
