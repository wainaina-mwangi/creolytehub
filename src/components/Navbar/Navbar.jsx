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
    <nav className="navbar ">
      
      <div className="navbar-logo">
        <Link to="/" className="logo-link-container">
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="flex items-center justify-center p-2.5 rounded-xl bg-[#006591]/10 dark:bg-white/5 transition-transform duration-300 group-hover:scale-105">
              <FaGalacticRepublic className="w-9 h-9 text-[#006591] dark:text-sky-400 drop-shadow-sm" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                Creolyte
                <span className="text-[#006591] dark:text-sky-400 font-semibold ml-0.5">
                  Hub
                </span>
              </span>
            </div>
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
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="inline-flex md:hidden items-center justify-center p-2 rounded-lg bg-transparent hover:bg-[#006591]/10 dark:hover:bg-white/5 active:scale-95 transition-all duration-200 outline-none border-none cursor-pointer"
        >
          {isOpen ? (
            <MdCancel className="w-7 h-7 hidden text-red-500 transform rotate-0 hover:scale-105 transition-transform duration-200" />
          ) : (
            <GiHamburgerMenu className="w-7 h-7  text-[#006591] dark:text-slate-200 transform rotate-0 hover:scale-105 transition-transform duration-200" />
          )}
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
              <FaGalacticRepublic className="drawer-logo-icon text-3xl" />
              <span className="drawer-logo-text">
                Creolyte
                <span className="text-[#006591] text-semibold">Hub</span>
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
