import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";
import "./Experience.css";

export const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-content">
        <div className="skills">{
          skills.map((skill, id) => {
            return (
            <div key={id} className="skill">
              <div className="skill-img-container">
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
              </div>
              <p>{skill.title}</p>
            </div>
            );         
          })}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => {
              return (
                <li key={id} className="history-item">
                  <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`}/>
                  <div className="history-item-details">
                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                    <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
};