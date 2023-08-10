import React from "react";
import "./descriptionJobExp.scss";

const DescriptionJobExp = ({ info, show }) => {
  const { position, company, startDate, endDate, responsibilities, img } = info;
  
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
      <ul className="descriptionJob-resp">
        {responsibilities.map((responsibility, index) => (
          <li className="descriptionJob-resp-li" key={index}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionJobExp;
