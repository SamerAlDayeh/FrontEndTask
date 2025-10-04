import "./ProjectCard.css";

const ProjectCard = ({ project, onImageClick, className = "" }) => (
  <div className={`project-card ${className}`}>
    <div className="project-image-container">
      <img
        src={project.image}
        alt={project.address}
        className="project-image"
      />

      <div className="project-info-overlay">
        <div className="date-category-wrapper">
          <span className="date-text">{project.date}</span>
          <br></br>
          <span className="category-text">{project.category}</span>
        </div>
        <p className="address-text">{project.address}</p>
        <p className="description-text">{project.description}</p>
      </div>

      <button className="zoom-button" onClick={onImageClick}>
        <span role="img" aria-label="zoom">
          🔍
        </span>
      </button>
    </div>
  </div>
);

export default ProjectCard;
