import './App.css';
import './vars.css';
import useLocalStorage from "use-local-storage";
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About.jsx'
import { Experience } from './components/Experience/Experience.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className={"App"} data-theme={isDark ? "dark" : "light"}>
      {/* <Navbar isDark={isDark} setIsDark={setIsDark}/> */}
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <div className="content-container">
        <Hero/>
        <About />
        <Skills />
        <Experience />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
