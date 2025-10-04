import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({ menuOpened, setMenuOpened }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faCamera} className="logo-icon" />
        your logo
      </div>
      <button
        className={`menu-btn ${menuOpened ? "open" : ""}`}
        onClick={() => setMenuOpened((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
