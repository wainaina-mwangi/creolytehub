import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/mockData";
import { FaGalacticRepublic } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-logo">
        <Link to="/" className="logo-link-container">
          <div className="logo-icon-box">
            <FaGalacticRepublic className="logo-icon" />
          </div>
          <div className="logo-text-box">
            <span className="nav-logo-text">
              Creolyte<span className="text-brand-dark font-semibold">Hub</span>
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu">
        {NavbarMenu.map((item) => (
          <li key={item.id} className="desktop-menu-item">
            <Link to={item.link} className="nav-link">
              {item.title}
            </Link>
            <span className="hover-underline"></span>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="navbar-actions">
        <button className="button desktop-btn">
          Hire Talent
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-trigger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <MdCancel className="w-[30px] " /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar Slide Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="drawer-logo">
              <FaGalacticRepublic className="drawer-logo-icon" />
              <span className="drawer-logo-text">
                Creolyte<span className="text-brand-orange">Hub</span>
              </span>
            </div>
            <button className="close-btn" onClick={toggleMenu}>
              <MdCancel />
            </button>
          </div>

          <div className="drawer-body">
            <div className="mobile-links-wrapper">
              {NavbarMenu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>

            <button className="button mobile-drawer-btn">
              Hire Talent
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
