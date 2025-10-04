import "./ServiceItem.css";
function ServiceItem({ icon, title, description }) {
  return (
    <div className="service-item">
      <div className="line-up">
        <div className="icon-container">{icon}</div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </div>
  );
}

export default ServiceItem;
