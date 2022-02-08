import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="company-logo">
        <h3>Legendary Collections</h3>
        <p>The Organized Collectors App!</p>
      </div>
      <div className="header-buttons">
        <div>
          <button>Send Alpha Feedback</button>
        </div>
        <div>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
