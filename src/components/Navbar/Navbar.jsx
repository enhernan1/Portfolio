import React, { useState, useEffect} from "react";
import "./Navbar.css";
import { Toggle } from "../Toggle/Toogle";
export const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offset, setOffset] = useState(150);

  const updateOffset = () => {
    if (window.innerWidth <= 1280 ) {
      setOffset(45);
    } else {
      setOffset(150);
    }
  };

  useEffect(() => {
    
    updateOffset();
    
    const adjustScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);



      if (element) {
        const offsetTop = element.offsetTop - navbarHeight - offset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('resize', updateOffset);
    window.addEventListener('hashchange', adjustScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', adjustScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffset);
    };
  }, [offset]);
  
  return (
    <div className={`navbar-box ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <nav className="navbar container"> 
        <a className="navbar__title" href="/">Enrique Hernandez</a>
        <div className="navbar__menu">
          <div className="navbar__menu-buttons" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? ( 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="navbar__menu-button">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="navbar__menu-button">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            )}  
          </div>
          <ul 
            className={`navbar__menu-items ${menuOpen && "navbar__menu-open"}`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
          </ul>
        </div>
      </nav>
    </div>
  )
}