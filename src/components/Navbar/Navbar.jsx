import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/mockData";
import { IoWifi } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
// import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between sticky top-0 z-50 px-6 py-5">
      <div className="navbar-logo">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
            <IoWifi className="text-brand-orange group-hover:text-white text-2xl transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="nav-logo-text text-xl font-black tracking-tighter">
              Creolyte<span className="text-brand-orange">Hub</span>
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop nav — unchanged */}
      <ul className="hidden md:flex items-center gap-8">
        {NavbarMenu.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.link}
              className="nav-link text-sm font-semibold transition-colors"
            >
              {item.title}
            </Link>
            <span className="absolute rounded -bottom-8 left-0 w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button className="button hidden md:flex" style={{display:"none"}}>
          Hire Talent
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Mobile menu toggle — only visible below md */}
        <button
          className="md:hidden p-2 text-brand-orange"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-1">
          {NavbarMenu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="nav-link text-sm font-semibold py-3 border-b border-gray-50 last:border-b-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <button className="button mt-3 w-full justify-center">
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
      )}
    </nav>
  );
};

export default Navbar;
