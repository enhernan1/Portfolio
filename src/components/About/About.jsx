import React from "react";
import "./About.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img className="about-image" src={getImageUrl("/hero/second_shot.png")} alt="Me"/>
        <ul className="about-items">
          <li className="about-item">
            <img src={getImageUrl("/about/cursorIcon.png")} alt="Cursor icon"></img>
            <div className="about-item-text">
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience  in building responsive and optimized sites</p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageUrl("/about/serverIcon.png")} alt="Server icon"></img>
            <div className="about-item-text">
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized back-end systems and APIs</p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageUrl("/about/uiIcon.png")} alt="Ui icon"></img>
            <div className="about-item-text">
              <h3>Hobbies</h3>
              <p>I enjoy building and customizing keyboards and PS5 controllers.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};