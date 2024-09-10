import React from "react";
import "./Education.css";
import EducationTemplate from "./EducationTemplate";
import northeastern_logo from "../media/northeastern_logo.svg";

const educationData = [
  {
    degree: "Bachelor of Data Science",
    university: "Northeastern University",
    date: "Expected Graduation in 2027",
    gpa: "Current GPA 4.0/4.0",
    logo: [northeastern_logo],
  },
];

const Education = () => {
  return (
    <div className="educationContainer">
      <h1>Education</h1>
      {educationData.map((education, index) => (
        <EducationTemplate key={index} {...education} />
      ))}
    </div>
  );
};

export default Education;
