import React from "react";
import "./Home.css";
import profile_pic from "../media/profile.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

var resume_link =
  "https://drive.google.com/file/d/1OS8sPxIYKddAjFOJY7k6gz3XHsNBRBJo/view?usp=sharing";
var linkden_link = "https://www.linkedin.com/in/vishwajit-selvaraju/";
var github_link = "https://github.com/selvarajuv";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="info">
        <h1>My Web Portfolio</h1>
        <p>
          Hi! I'm Vichu Selvaraju, a second-year at Northeastern University
          pursuing a data science degree. I'm interested in tracking patterns in
          sports analytics, especially the NBA. I'm currently looking for an
          internship or research opportunity.
        </p>
      </div>
      <img src={profile_pic} alt="profile" className="pfp" />
      <div className="resume">
        <a href={resume_link} target="_blank" rel="noopener noreferrer">
          <button>RESUME</button>
        </a>
      </div>
      <div className="icons">
        <a rel="noopener noreferrer" target="_blank" href={linkden_link}>
          <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
        </a>
        <a href={github_link} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fa-3x" />
        </a>
      </div>
    </div>
  );
};

export default Home;
