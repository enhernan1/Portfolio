import React from "react";
import projects from "../data/projects.json"
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>;
        })}
      </div>
    </section>
  );
};