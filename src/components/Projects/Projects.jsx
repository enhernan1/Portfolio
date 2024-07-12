import React from "react";
import projects from "../data/projects.json"
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h3 className="projects__title">Projects</h3>
      {/* <p className='projects__subtitle'>Most recent work</p> */}
      <div className="projects__project-container">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>;
        })}
      </div>
    </section>
  );
};