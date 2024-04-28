import React from "react";
import "./Project.css";
import ProjectTemplate from "./ProjectTemplate";
import pythonLogo from "../media/python-logo-only.png";
import reactLogo from "../media/react-logo.png";
import nba_best_bets_img from "../media/nba_best_bets_pic.png";

const projectsData = [
  {
    name: "Nba Best Bets",
    description:
      "Determines which NBA teams are going to win on a given day.\n" +
      "Utilizes the NBA_API and web scraping to gather all relevant info to make predictions.\n" +
      "Currently still working on implementing the betting strategy based on the win prediction.\n" +
      "Will also add player props later on.",
    tools: [
      [<img src={pythonLogo} alt="Python Logo" />],
      [<img src={reactLogo} alt="React Logo" />],
    ],
    demo_picture: [nba_best_bets_img],
    date: "January 2024 - Current",
  },
];

const Project = () => {
  return (
    <div className="projectContainer">
      <h1>My Projects</h1>
      {projectsData.map((project, index) => (
        <ProjectTemplate key={index} {...project} />
      ))}
    </div>
  );
};

export default Project;
