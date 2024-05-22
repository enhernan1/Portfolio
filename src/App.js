import './App.css';
import './vars.css';
import useLocalStorage from "use-local-storage";
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About.jsx'
import { Experience } from './components/Experience/Experience.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Toggle } from './components/Toggle/Toogle.jsx';
// import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className={"App"} data-theme={isDark ? "dark" : "light"}>
      <Navbar/>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <div className="content-container">
        <Hero/>
        <About />
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
