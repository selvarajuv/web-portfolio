import React from "react";
import "./Project.css";
import ProjectTemplate from "./ProjectTemplate";
import pythonLogo from "../media/Skills_Images/python-logo.png";
import reactLogo from "../media/Skills_Images/react-logo.png";
import flaskLogo from "../media/Skills_Images/flask-logo.svg";
import appsmithLogo from "../media/Skills_Images/appsmith-logo.png";
import mysqlLogo from "../media/Skills_Images/mysql-logo.png";
import nba_best_bets_img from "../media/nba_best_bets_pic.png";
import local_league_legends from "../media/local_league_legends.png";

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
  {
    name: "Local Leauge Legends",
    description:
      "Local League Legends is an app designed to bring friends and local communities together through sports.\n" +
      "Local League Legends gives people the opportunity to play the sports that \n" +
      "they love in a competitive environment while meeting people who share their passion.",
    tools: [
      [<img src={pythonLogo} alt="Python Logo" />],
      [<img src={mysqlLogo} alt="React Logo" />],
      [<img src={flaskLogo} alt="Flask Logo" />],
      [<img src={appsmithLogo} alt="Appsmith Logo" />],
    ],
    demo_picture: [local_league_legends],
    date: "February 2024 - March 2024",
  },
];

const Project = () => {
  return (
    <div className="projectContainer">
      <h1>Projects</h1>
      {projectsData.map((project, index) => (
        <ProjectTemplate key={index} {...project} />
      ))}
    </div>
  );
};

export default Project;
