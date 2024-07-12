import React from "react";
import "./About.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className="about container" id="about">
      <h3 className="about__title">About Me</h3>
      {/* <p className="about__subtittle">My Introduction</p> */}
      {/* <h1 className="about__title">About Me</h1> */}
      <div className="about__content">
        <div className="about__crop-container">
          <img className="about__image" src={getImageUrl("/hero/second_shot_2.png")} alt="Me"/>
        </div>
        <div className="about__subsection">
          <ul className="about__subsection-items">
            <li className="about__subsection-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="about__education-img">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
              <div className="about-item-text">
                <h3>
                  Education
                </h3>
                <p>B.Sc Bacheslors Degree in Computer Science from IU Bloomington</p>
              </div>
            </li>
            <li className="about__subsection-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="about__hobbies-img">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
              </svg>
              <div className="about-item-text">
                <h3>Hobbies</h3>
                <p>I enjoy building and customizing keyboards and PS5 controllers.</p>
              </div>
            </li>
          </ul>
          <p className="about__description"> I was born and raised in the vibrant city of Brooklyn, New York, to two hardworking immigrant parents. As a proud first-generation college graduate, I have a deep appreciation for the values of perseverance and dedication. My Mexican heritage has profoundly shaped who I am, instilling in me a rich cultural identity and a strong sense of community. I find joy in exploring the world through traveling, which allows me to experience diverse cultures and broaden my horizons.</p>
        </div>
      </div>
    </section>
  );
};