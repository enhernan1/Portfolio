import React, { useState }  from "react";
import "./ProjectCard.css"
import { getImageUrl } from "../../utils";
export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  
  return (
    <div className="project-card-container">
      <img src={getImageUrl(imageSrc)} alt={`snip of ${title}`} className="project-card-img"/>
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">
        {showFullDescription ? description : `${description.slice(0, 75)}${description.length > 75 ? '...' : ' '}`}
        {description.length > 75 && (
          <span onClick={toggleDescription} className="see-more-link">
            {showFullDescription ? " See less" : "See more"}
          </span>
        )}
      </p>
      <ul className="project-card-skills">{
        skills.map((skill, id) => {
          return <li key={id} className="project-card-skill">{skill}</li>;
        })}
      </ul>
      <div className="project-card-links">
        <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card-link">Demo</a>
        {/* <a href={source} target="_blank" rel="noopener noreferrer" className="project-card-link">Source</a> */}
      </div>
    </div>
  );
};