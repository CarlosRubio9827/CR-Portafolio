import React from "react";
import { Link } from "react-router-dom";
import "./projectItem.scss";

import { BsGithub } from "react-icons/bs";
import {FiExternalLink} from 'react-icons/fi'

const ProjectItem = ({ infoProject }) => {
  console.log(infoProject);
  const { id, name, description, gitHub, livePage, technologies,imgMobile } = infoProject;
  const openNewTab = (page) => {
    window.open(page, "_blank", "noreferrer");
    // window.location.href = page;
  };



  return (
    <div className="projectsItem" style={{ 
        backgroundImage: `url(${imgMobile})` 
    }}>
      <h2 className="projectsItem-name">{name}</h2>
      <p className="projectsItem-description">{description}</p>
      <ul className="projectsItem-ul">
        {technologies.map((i, j) => (
          <li key={j}>{i}</li>
        ))}
      </ul>
      <div className="projectsItem-links">
        <Link
          className="projectsItem-links-item"
          onClick={() => {
            openNewTab(gitHub);
          }}
          to="#"
        >
          <BsGithub className="projectsItem-links-item-img"/>
        </Link>
        <Link
          className="projectsItem-links-item"
          onClick={() => {
            openNewTab(livePage);
          }}
          to="#"
        >
          <FiExternalLink className="projectsItem-links-item-img"/>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
