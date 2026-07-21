import React from "react";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <span className="notfound-badge">Error 404</span>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="notfound-actions">
          <a href="/" className="btn btn-primary-nf">
            <FiHome className="btn-icon" />
            Back to Home
          </a>
          <button onClick={handleGoBack} className="btn btn-outlined-nf">
            <FiArrowLeft className="btn-icon" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}