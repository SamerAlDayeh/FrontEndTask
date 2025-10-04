import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social">
      <a
        href="https://facebook.com/yourpage"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href="https://instagram.com/yourpage"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="mailto:you@example.com"
        className="social-link"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
