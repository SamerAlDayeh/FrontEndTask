import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const FullScreenMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fullscreen-menu ${isOpen ? "open" : "closed"}`}>
      <nav className="menu-links">
        <a href="#home" onClick={onClose}>
          HOME
        </a>
        <a href="#about" onClick={onClose}>
          ABOUT
        </a>
        <a href="#projects" onClick={onClose}>
          TEAM
        </a>
        <a href="#team" onClick={onClose}>
          PORTFOLIO
        </a>
        <a href="#contact" onClick={onClose}>
          CONTACTS
        </a>
        <a href="#contact" onClick={onClose}>
          <FontAwesomeIcon icon={faMobileScreen} />
          <span> 1-300-123-1234</span>
        </a>
      </nav>
    </div>
  );
};

export default FullScreenMenu;
