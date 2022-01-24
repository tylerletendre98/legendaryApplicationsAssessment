import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="company-logo">
              <h4>Company Logo</h4>
            </div>
          </div>
          <div className="col-6">
            <div>
              <h1>This is the header</h1>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
