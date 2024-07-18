import React from "react";
import "./EducationTemplate.css";

const Education = ({ degree, university, logo, date, gpa }) => {
  return (
    <div className="educationTemplate-container">
      <h2>{university}</h2>
      <p className="education_degree">{degree}</p>
      <p className="education_date">{date}</p>
      <p className="education_gpa">{gpa}</p>
      <img src={logo} alt="school_logo" className="education_logo" />
    </div>
  );
};

export default Education;
