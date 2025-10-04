import "./HeroSection.css";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import slider1 from "../../images/MainSliderPic1.png";
import slider2 from "../../images/MainSliderPic2.png";
import slider3 from "../../images/MainSliderPic3.png";
import { useState } from "react";

function HeroSection() {
  const images = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((next) => (next === images.length - 1 ? 0 : next + 1));
  };

  return (
    <section className="hero-section">
      <LeftPart
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <RightPart
        currentIndex={currentIndex}
        images={images}
        menuOpened={menuOpened}
      />
    </section>
  );
}

export default HeroSection;
