import React from "react";
import { FiShare2, FiAtSign } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logoImg from "../../assets/logo.jpeg";
import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  const handleDirect = () => {
    const whatsapp = "https://wa.me/254715071832";
    window.open(whatsapp, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logoImg} alt="Creolyte Logo" />
            </div>
            <p className="footer-bio">
              Global Talent, Local Precision. Bridging the gap between
              borderless work and local excellence.
            </p>
            <div className="social-icons">
              <a href="#share" className="icon-circle" aria-label="Share">
                <FiShare2 />
              </a>
              <a
                href="#email"
                className="icon-circle"
                aria-label="Contact Email"
              >
                <FiAtSign />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#kenya-operations">Kenya Operations</a>
              </li>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col cta-card-col">
            <div className="footer-cta-card">
              <h3 className="cta-card-title">Start Growing Today</h3>
              <p className="cta-card-desc">
                Book a discovery call or chat with our team directly.
              </p>
              <div className="cta-card-buttons">
                <Link to="" className="btn-blue">
                  Book a Briefing
                </Link>
                <button className="btn-whatsapp" onClick={handleDirect}>
                  <FaWhatsapp className="whatsapp-icon" />
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Creolyte Hub. Global Talent, Local
            Precision.
          </p>
          <div className="footer-status">
            <span className="status-indicator">Systems Online</span>
            <span className="footer-location">
              Nairobi HQ: +254 (0) 715 071 832
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
