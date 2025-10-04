import { useState, useEffect } from "react";
import "./FixedMenu.css";

const FixedMenuButton = ({
  onToggleMenu,
  isMenuOpen,
  scrollThreshold = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > scrollThreshold || isMenuOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [scrollThreshold, isMenuOpen]);

  const buttonIcon = isMenuOpen ? "X" : "☰";

  return (
    <button
      className={`fixed-menu-toggle ${isVisible ? "visible" : "hidden"} ${
        isMenuOpen ? "is-close-btn" : ""
      }`}
      onClick={onToggleMenu}
      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    >
      <span className="icon">{buttonIcon}</span>
    </button>
  );
};

export default FixedMenuButton;
