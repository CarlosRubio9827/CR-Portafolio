import React, { useState } from "react";
import "./experience.scss";
import experienceData from "../../data/jobs.json";
import DescriptionJobExp from "../DescriptionJobExp/descriptionJobExp";

const Experience = () => {
  

  const { experience } = experienceData;
  const [activeIndex, setActiveIndex] = useState(0);
  const toogleJob = (e, index) => {
    const menu = document.getElementsByClassName(
      "experience-content-jobs-title"
    );
    var menuArr = [].slice.call(menu);

    menuArr.forEach((i) => {
      i.classList.remove("x");
    });
    e.target.classList.add("x");
    setActiveIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };

  return (
    <section id="experience" className="experience">
      <h2>
        02.<span>Experience</span>
      </h2>
      <div className="experience-content">
        <div className="experience-content-jobs">
          {experience.map((i, j) => (
            <button
              key={j}
              onClick={(e) => {
                toogleJob(e, j);
              }}
              className={`experience-content-jobs-title ${
                activeIndex === j ? "x" : ""
              }`}
            >
              {i.company}
            </button>
          ))}
        </div>
        <div className="experience-content-desc">
          {experience.map((project, index) => (
            <DescriptionJobExp
              info={project}
              show={activeIndex === index}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
