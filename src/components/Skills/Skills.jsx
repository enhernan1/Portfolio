import React from 'react';
import "./Skills.css";
import skills from "../data/skills.json";

export const Skills = () => {
  return (
  <section className='skills container' id='skills'>
    <h3 className='skills__title'>Skills</h3>
    {/* <p className='skills__subtitle'>My technical level</p> */}
    <div className='skills__box'>
      <div className='skills__section'>
        <h3 className='skills__section-title'>Frontend developer</h3>
        <div className="skills__skills">{
          skills[0].map((skill, id) => {
            return (
            <div key={id} className="skills__skill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="skills__checkmark-img">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <div className='skills__skill-details'>
                <h3 className='skills__skill-title'>{skill.title}</h3>
                <span className='skills__skill-level'>{skill.level}</span>
              </div>
            </div>
            );         
          })}
        </div>
      </div>
      <div className='skills__section'>
        <h3 className='skills__section-title'>Backend developer</h3>
        <div className="skills__skills">{
          skills[1].map((skill, id) => {
            return (
            <div key={id} className="skills__skill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="skills__checkmark-img">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <div className='skills__skill-details'>
                <h3 className='skills__skill-title'>{skill.title}</h3>
                <span className='skills__skill-level'>{skill.level}</span>
              </div>
            </div>
            );         
          })}
        </div>
      </div>
    </div>
  </section>);
};