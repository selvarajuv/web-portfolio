import React from "react";
import "./Experience.css";
import ExperienceTemplate from "./ExperienceTemplate";
import iarchLogo from "../media/iarch_solutions.jpg";
import transparent from "../media/transparent.jpg";

const experienceData = [
  {
    name: "iArch Solutions",
    description: "Intern",
    date: "August 2022 - March 2023",
    demo_picture: [iarchLogo],
  },
  {
    name: "",
    description: "",
    date: "",
    demo_picture: [transparent],
  },
  {
    name: "",
    description: "",
    date: "",
    demo_picture: [transparent],
  },
  {
    name: "",
    description: "",
    date: "",
    demo_picture: [transparent],
  },
];

const Experience = () => {
  return (
    <div className="experienceContainer">
      <h1>Expereince</h1>
      {experienceData.map((experience, index) => (
        <ExperienceTemplate key={index} {...experience} />
      ))}
    </div>
  );
};

export default Experience;
