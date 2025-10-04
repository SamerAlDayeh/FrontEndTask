import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectImg1 from "../../images/ProjectImg/ProjectImg1.png";
import ProjectImg2 from "../../images/ProjectImg/ProjectImg2.png";
import ProjectImg3 from "../../images/ProjectImg/ProjectImg3.png";
import "./ProjectsSection.css";

const projectsData = [
  {
    id: 0,
    date: "MARCH 15, 2022",
    category: "ARCHITECTURE",
    address: "3119 MULBERRY LN, NEWCASTLE, OK",
    description: "...",
    image: ProjectImg1,
    modalImage: ProjectImg1,
  },
  {
    id: 1,
    date: "FEBRUARY 10, 2023",
    category: "INTERIOR DESIGN",
    address: "207 OAK ST, LOS ANGELES, CA",
    description: "...",
    image: ProjectImg2,
    modalImage: ProjectImg2,
  },
  {
    id: 2,
    date: "NOVEMBER 05, 2023",
    category: "LANDSCAPE LIGHTING",
    address: "95 PINEWOOD AVE, MIAMI, FL",
    description: "...",
    image: ProjectImg3,
    modalImage: ProjectImg3,
  },
];
const totalProjects = projectsData.length;

const CARD_WIDTH = 700;
const CARD_MARGIN = 30;
const CARD_FULL_WIDTH = CARD_WIDTH + CARD_MARGIN;

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextIndex = (currentIndex + 1) % totalProjects;
  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;

  const currentProject = projectsData[currentIndex];

  const goToNext = () => setCurrentIndex(nextIndex);
  const goToPrev = () => setCurrentIndex(prevIndex);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const initialOffset = CARD_FULL_WIDTH / 2;

  return (
    <section className="projects-section-wrapper">
      <div className="projects-header">
        <p className="header-text">PROJECTS</p>
        <p>
          Below you can take a look at our featured and recent projects that
          have been numerously awarded for our unique light products.
        </p>
        <div className="header-divider"></div>
      </div>

      <div className="carousel-container">
        <div
          className="projects-carousel-track"
          style={{
            transform:
              window.innerWidth > 768
                ? `translateX(calc(${initialOffset}px - ${currentIndex} * ${CARD_FULL_WIDTH}px))`
                : "none",
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={openModal}
              className={
                index !== currentIndex ? "faded-slide" : "active-slide"
              }
            />
          ))}
        </div>
      </div>

      <div className="carousel-controls-bottom">
        <button className="nav-arrow-bottom prev" onClick={goToPrev}>
          &larr;
        </button>
        <button className="nav-arrow-bottom next" onClick={goToNext}>
          &rarr;
        </button>
      </div>

      {isModalOpen && (
        <ProjectModal image={currentProject.modalImage} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;
