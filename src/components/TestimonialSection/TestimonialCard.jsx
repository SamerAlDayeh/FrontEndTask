import "./TestimonialCard.css";

function TestimonialCard({ data, totalItems, currentIndex, onDotClick }) {
  const dotsArray = Array.from({ length: totalItems }, (_, i) => i);

  return (
    <div className="testimonial-content">
      <div className="quote-icon">``</div>

      <p className="quote-text">{data.quote}</p>

      <div className="client-info">
        <img src={data.image} alt={data.name} className="client-image" />
        <div className="client-details">
          <p className="client-name">{data.name}</p>
          <p className="client-title">{data.title}</p>
        </div>
      </div>

      <div className="carousel-dots">
        {dotsArray.map((index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => onDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
