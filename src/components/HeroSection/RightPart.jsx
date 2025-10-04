import Slider from "./Slider";
import "./RightPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

function RightPart({ currentIndex, images, menuOpened }) {
  const infoData = [
    { address: "2750 DUFFY ST", area: "290 SQ. M.", price: "$240 000" },
    { address: "123 Main St", area: "180 SQ. M.", price: "$120 000" },
    { address: "456 Oak St", area: "350 SQ. M.", price: "$300 000" },
  ];
  const currentInfo = infoData[currentIndex];

  return (
    <div className="hero-right">
      <div className={`menu-overlay ${menuOpened ? "open" : ""}`}>
        <ul>
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>PROJECTS</li>
          <li>CONTACTS</li>
          <li>
            <FontAwesomeIcon icon={faMobileScreen} />
            <span> 1-300-123-1234</span>
          </li>
        </ul>
      </div>

      <Slider currentIndex={currentIndex} images={images} />

      <div className="info">
        <span className="text-gray ">54+ WORKS</span>

        <span className="text-white ">{currentInfo.address}</span>
        <span className="text-gold ">{currentInfo.area}</span>
        <span className="text-gold ">{currentInfo.price}</span>

        <span></span>
      </div>
    </div>
  );
}

export default RightPart;
