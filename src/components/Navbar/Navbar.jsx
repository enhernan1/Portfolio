import React, { useState, useEffect} from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const adjustScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        const offsetTop = element.offsetTop - navbarHeight - 10;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener('hashchange', adjustScroll);

    return () => {
      window.removeEventListener('hashchange', adjustScroll);
    };
  }, []);
  
  return (
    <nav className="navbar" id="navbar">
      <a className="title" href="/">Enrique.dev</a>
      <div className="menu">
        <img className="menu-buton" src={menuOpen ? getImageUrl("/nav/closeIcon.png") : getImageUrl("/nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
        <ul 
          className={`menu-items ${menuOpen && "menu-open"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}