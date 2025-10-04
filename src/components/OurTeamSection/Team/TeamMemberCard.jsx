import SocialIcons from "../SocialIcons";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ member }) => (
  <div className="member-card-wrapper">
    <div className="member-card-top">
      <div className="member-photo-container">
        <img
          src={member.image}
          alt={member.name.first}
          className="member-photo"
        />
      </div>
      <p className="member-name">{`${member.name.first} ${member.name.last}`}</p>
    </div>
    <div className="member-info-bottom">
      <p className="member-title">{member.title}</p>
      <div className="member-social-section">
        <div className="bar"></div>

        <SocialIcons socialLinks={member.social} />
      </div>
      <div className="first-name">{member.name.first}</div>
    </div>
  </div>
);

export default TeamMemberCard;
