import React from "react";
import { getImageUrl } from "../../utils";
import "./Contact.css";
export const Contact = () => {
  return (
    <footer className="contact-container" id="contact">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="contact-links">
        <li className="contact-link">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
          <a href="mailto:enrinandez102@gmail.com">Enrinandez102@gmail.com</a>
        </li>
        <li className="contact-link">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
          <a href="http://www.linkedin.com/in/enrique-hernandez-524762209"  target="_blank" rel="noopener noreferrer">LinkedIn.com/Enrique_Hernandez</a>
        </li>
        <li className="contact-link">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
          <a href="https://github.com/enhernan1"  target="_blank" rel="noopener noreferrer">Github.com/enhernan1</a>
        </li>
      </ul>
    </footer>
  );
};