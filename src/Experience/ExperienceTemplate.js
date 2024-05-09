import React from "react";
import "./ExperienceTemplate.css";

const Experience = ({ name, description, demo_picture, date }) => {
  return (
    <div className="experienceTemplate-container">
      <h2>{name}</h2>
      <p className="experience_description">{description}</p>
      <p className="experience_date">{date}</p>
      <img
        src={demo_picture}
        alt="demo_picture"
        className="experience_demo_picture"
      />
    </div>
  );
};

export default Experience;
