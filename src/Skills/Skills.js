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
import appsmith from "../media/Skills_Images/appsmith-logo.png";
import flask from "../media/Skills_Images/flask-logo.svg";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>My Skills</h1>
      <div className="pythonLogo">
        <img src={python} alt="python-logo" />
        <p>Python</p>
      </div>
      <div className="cssLogo">
        <img src={css} alt="css-logo" />
        <p>CSS</p>
      </div>
      <div className="dockerLogo">
        <img src={docker} alt="docker-logo" />
        <p>Docker</p>
      </div>
      <div className="mysqlLogo">
        <img src={mysql} alt="mysql-logo" />
        <p>My SQL</p>
      </div>
      <div className="htmlLogo">
        <img src={html} alt="html-logo" />
        <p>HTML</p>
      </div>
      <div className="reactLogo">
        <img src={react} alt="react-logo" />
        <p>React</p>
      </div>
      <div className="typescriptLogo">
        <img src={typescript} alt="typescript-logo" />
        <p>TypeScript</p>
      </div>
      <div className="javascriptLogo">
        <img src={javascript} alt="javascript-logo" />
        <p>JavaScript</p>
      </div>
      <div className="appsmithLogo">
        <img src={appsmith} alt="appsmith-logo" />
        <p>Appsmith</p>
      </div>
      <div className="flaskLogo">
        <img src={flask} alt="flask_logo" />
        <p>Flask</p>
      </div>
    </div>
  );
};

export default Skills;
