import TeamMemberCard from "../OurTeamSection/Team/TeamMemberCard";
import Person1 from "../../images/TeamImages/Person1.png";
import Person2 from "../../images/TeamImages/Person2.png";
import Person3 from "../../images/TeamImages/Person3.png";
import Person4 from "../../images/TeamImages/Person4.png";
import "./OurTeamSection.css";

const teamMembers = [
  {
    id: 1,
    name: {
      first: "mike",
      last: "BALMER",
    },
    title: "Lead Interior Designer",
    image: Person1,
    social: {
      facebook: "#",
      instagram: "#",
      email: "mailto:mike@example.com",
    },
  },
  {
    id: 2,
    name: {
      first: "sam",
      last: "BALMER",
    },
    title: "Senior Architect",
    image: Person2,
    social: {
      facebook: "#",
      instagram: "#",
      email: "mailto:mike@example.com",
    },
  },
  {
    id: 3,
    name: {
      first: "jack",
      last: "miller",
    },
    title: "Exterior & Landscape Designer",
    image: Person3,
    social: {
      facebook: "#",
      instagram: "#",
      email: "mailto:mike@example.com",
    },
  },
  {
    id: 4,
    name: {
      first: "JOHN",
      last: "BALMER",
    },
    title: "Project Manager",
    image: Person4,
    social: {
      facebook: "#",
      instagram: "#",
      email: "mailto:mike@example.com",
    },
  },
];

function OurTeamSection() {
  return (
    <section className="team-section-layout">
      <div className="team-header">
        <p className="main-heading">OUR TEAM</p>
        <p className="sub-heading">PEOPLE BEHIND OUR SUCCESS</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default OurTeamSection;
