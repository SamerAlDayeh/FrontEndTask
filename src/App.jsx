import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import PricingSection from "./components/PricingSection/PricingSection";
import OurTeamSection from "./components/OurTeamSection/OurTeamSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import FullScreenMenu from "./components/FixedMenu/Menu";
import FixedMenuButton from "./components/FixedMenu/FixedMenu";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      <FixedMenuButton onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <FullScreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <HeroSection />
      <PricingSection />
      <OurTeamSection />
      <TestimonialSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
