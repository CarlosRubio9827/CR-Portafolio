import React from "react";
import "./projectContainer.scss";
import projectsJson from "../../data/projects.json";
import ProjectItem from "../ProjectItem/projectItem";

const ProjectContainer = () => {

  const { projects } = projectsJson;
  console.log(projects)
  return (
    <section id="projectContainer" className="projectContainer">
      <h2 className="projectContainer-title">
        03.<span>Projects</span>
      </h2>
      <div className="projectContainer-projects">
        {projects.map((i,j)=>(
          <ProjectItem infoProject={i} key={j}/>
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
