import "./Slider.css";

function Slider({ images, currentIndex }) {
  return (
    <div className="slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Slider;
