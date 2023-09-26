import React from "react";
import "./descriptionJobExp.scss";

const DescriptionJobExp = ({ info, show }) => {
  const {
    position,
    tools,
    techStack,
    company,
    description,
    startDate,
    endDate,
    responsibilities,
    img,
  } = info;

  return (
    <div className={`descriptionJob ${show === true ? "x" : ""}`}>
      <div className="descriptionJob-pos">
        <h3 className="descriptionJob-pos-dec">{position}</h3>
        <img className="descriptionJob-pos-img" src={img.src} />
      </div>
      {/* <span className="descriptionJob-com">{company}</span> */}
      <p className="descriptionJob-date">
        {startDate} - {endDate}
      </p>
      <p className="descriptionJob-info">{description}</p>
      <h4>Responsibilities:</h4>
      <ul className="descriptionJob-resp">
        {responsibilities.map((responsibility, index) => (
          <li className="descriptionJob-resp-li" key={index}>
            {responsibility}
          </li>
        ))}
      </ul>
      {tools ? (
        <>
          <p className="descriptionJob-tool">Tools:</p>
          <ul className="descriptionJob-tools">
            {tools.map((tool, index) => (
              <li className="descriptionJob-tools-li" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="descriptionJob-tool">Tech Stack:</p>
          <ul className="descriptionJob-tools">
            {techStack.map((stack, index) => (
              <li className="descriptionJob-tools-li" key={index}>
                {stack}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DescriptionJobExp;
