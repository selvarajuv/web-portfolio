import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="sticky-navbar">
      <div className="links">
        <Link
          to="Home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          HOME
        </Link>
        <Link
          to="ProjectAnchor"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          PROJECTS
        </Link>
        <Link
          to="SkillsAnchor"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          SKILLS
        </Link>
        <Link
          to="ExperienceAnchor"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          EXPERIENCE
        </Link>
        <Link
          to="EducationAnchor"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          EDUCATION
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
