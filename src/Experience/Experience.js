import React from "react";
import "./Experience.css";
import ExperienceTemplate from "./ExperienceTemplate";
import iarchLogo from "../media/iarch_solutions.jpg";
import vibhathiLogo from "../media/vibhathi_labs.jpg";
import transparent from "../media/transparent.jpg";

const experienceData = [
  {
    name: "iArch Solutions",
    description: "Intern/Capstone",
    date: "August 2022 - March 2023",
    demo_picture: [iarchLogo],
  },
  {
    name: "Vibathi Labs",
    description: "Training/Intern",
    date: "May 2024 - July 2024",
    demo_picture: [vibhathiLogo],
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
