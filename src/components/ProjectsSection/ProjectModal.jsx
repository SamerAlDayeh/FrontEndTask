import "./ProjectModal.css";

const ProjectModal = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={image} alt="Enlarged Project View" className="modal-image" />
      </div>
    </div>
  );
};

export default ProjectModal;
