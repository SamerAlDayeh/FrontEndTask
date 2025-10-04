import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ClientLogos from "./ClientLogos";
import "./TestimonialSection.css";
import ClientImg from "../../images/ClientsPic/ClientPic.png";
import ClientImg2 from "../../images/ClientsPic/ClientPic2.jpg";
import ClientImg3 from "../../images/ClientsPic/ClientPic3.png";

const allTestimonials = [
  {
    id: 0,
    quote:
      "I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest.",
    name: "SAM MCMILLAN",
    title: "Manager",
    image: ClientImg,
  },
  {
    id: 1,
    quote:
      "The quality of the lighting design completely transformed our workspace. Highly recommend their professional and unique solutions.",
    name: "ANN LEE",
    title: "Freelancer",
    image: ClientImg2,
  },
  {
    id: 2,
    quote:
      "Exceptional service and timely delivery. They truly understood our vision for a modern interior and executed it perfectly.",
    name: "JANE SMITH",
    title: "Home Owner",
    image: ClientImg3,
  },
];

const totalTestimonials = allTestimonials.length;

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = allTestimonials[currentIndex];

  return (
    <div className="main-container">
      <section className="testimonial-section-wrapper">
        <TestimonialCard
          data={currentTestimonial}
          totalItems={totalTestimonials}
          currentIndex={currentIndex}
          onDotClick={handleDotClick}
          d
        />
      </section>
      <ClientLogos />
    </div>
  );
};

export default TestimonialSection;
