import React from "react";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 border-top">
      <div className="d-flex justify-content-between align-items-center mx-3">
        <div className="d-flex align-items-center">
          <a href="#" className="text-muted text-decoration-none lh-1">
            <img src={logo} alt="TextTuner Logo" width="30" height="30" />
          </a>
          <span className="ms-2 text-muted">© 2025 TextTuner, Inc</span>
        </div>
      </div>
    </footer>
  );
}
