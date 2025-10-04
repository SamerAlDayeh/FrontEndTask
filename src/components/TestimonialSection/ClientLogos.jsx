import Logo1 from "../../images/ClientLogos/Logo1.png";
import Logo2 from "../../images/ClientLogos/Logo2.png";

const partnerLogos = [
  { id: 1, src: Logo1, alt: "Company 1" },
  { id: 2, src: Logo2, alt: "Company 2" },
  { id: 3, src: Logo1, alt: "Company 3" },
];

const ClientLogos = () => (
  <div className="client-logos-section">
    <p className="trusted-by-text">Trusted by</p>
    <div className="logos-grid">
      {partnerLogos.map((logo) => (
        <div key={logo.id} className="logo-item">
          <img src={logo.src} alt={logo.alt} className="partner-logo-image" />
          <p className="logo-caption">COMPANY</p>
        </div>
      ))}
    </div>
  </div>
);

export default ClientLogos;
