import ServiceItem from "./ServiceItem";
import "./ServicesList.css";

import { FiHome, FiFeather } from "react-icons/fi";
import { RiLightbulbLine } from "react-icons/ri";

const services = [
  {
    id: 1,
    icon: <FiHome />,
    title: "ARCHITECTURE",
    description: "We provide high-quality architecture services.",
  },
  {
    id: 2,
    icon: <FiFeather />,
    title: "INTERIOR DESIGN",
    description: "Our team offers unique and stylish architecture solutions.",
  },
  {
    id: 3,
    // 🎯 استخدام RiLightbulbLine
    icon: <RiLightbulbLine />,
    title: "LIGHTING DESIGN",
    description: "Let our team design unique lighting for your home.",
  },
];

function ServicesList() {
  return (
    <div className="services-list-container">
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}

export default ServicesList;
