import React from "react";
import "./ProjectTemplate.css";

const Project = ({ name, description, tools, demo_picture, date }) => {
  return (
    <div className="projectTemplate-container">
      <h2>{name}</h2>
      <div className="tools-icons">
        <p style={{ fontWeight: 500 }}>Made with:</p>
        {tools.map((tool, index) => (
          <div key={index} className="tool-icon">
            {tool}
          </div>
        ))}
      </div>
      <p className="description">{description}</p>
      <p className="date">{date}</p>
      <img src={demo_picture} alt="demo_picture" className="demo_picture" />
    </div>
  );
};

export default Project;
