import React  from "react";
import "./ProjectCard.css"
import { getImageUrl } from "../../utils";
export const ProjectCard = ({project: {title, imageSrc, skills, demo, source}}) => {

  
  return (
    <div className="project-card">
      <img src={getImageUrl(imageSrc)} alt={`snip of ${title}`} className="project-card__img"/>
      <h3 className="project-card__title">{title}</h3>

      <ul className="project-card__skills">{
        skills.map((skill, id) => {
          return (
            <div key={id} className="project-card__skill-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="projects__checkmark-img">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <li key={id} className="project-card__skill">{skill}</li>
            </div>
            
          );
        })}
      </ul>
      <div className="project-card__links">
        <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__link">Demo</a>
        {/* <a href={source} target="_blank" rel="noopener noreferrer" className="project-card-link">Source</a> */}
      </div>
    </div>
  );
};