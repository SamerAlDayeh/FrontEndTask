import Navbar from "../NavBar/Navbar";
import "./LeftPart.css";

function LeftPart({ prevSlide, nextSlide, menuOpened, setMenuOpened }) {
  return (
    <div className="hero-left">
      <div className="left-top">
        <div className="line" style={{ left: "25%" }}></div>
        <div className="line line-light" style={{ left: "50%" }}></div>
        <div className="line" style={{ left: "75%" }}></div>
        <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <div className="content">
          <h1>
            lighting
            <br />& BUILDING
          </h1>
          <p>
            MODERN ENERGY
            <br />
            EFFICIENT HOUSES
            <br />
            FROM 150 SQ. M.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      <div className="left-bottom"></div>

      <div className="slider-controls">
        <button className="slider-btn" onClick={prevSlide}>
          ←
        </button>
        <button className="slider-btn" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
}

export default LeftPart;
