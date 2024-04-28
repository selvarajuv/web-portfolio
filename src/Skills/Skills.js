import React from "react";
import "./Skills.css";
import css from "../media/Skills_Images/css-logo.png";
import docker from "../media/Skills_Images/docker-logo.png";
import mysql from "../media/Skills_Images/mysql-logo.png";
import html from "../media/Skills_Images/html-logo.png";
import python from "../media/Skills_Images/python-logo.png";
import react from "../media/Skills_Images/react-logo.png";
import typescript from "../media/Skills_Images/Typescript_logo_2020.svg.png";
import javascript from "../media/Skills_Images/JavaScript-logo.png";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>My Skills</h1>
      <img src={python} alt="python-logo" className="pythonLogo" />
      <img src={css} alt="css-logo" className="cssLogo" />
      <img src={docker} alt="docker-logo" className="dockerLogo" />
      <img src={mysql} alt="mysql-logo" className="mysqlLogo" />
      <img src={html} alt="html-logo" className="htmlLogo" />
      <img src={react} alt="react-logo" className="reactLogo" />
      <img src={typescript} alt="typescript-logo" className="typescriptLogo" />
      <img src={javascript} alt="javascript-logo" className="javascriptLogo" />
    </div>
  );
};

export default Skills;
