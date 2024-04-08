import style from './App.module.css'
import Welcome from "./components/Welcome/Welcome";
import {Navbar} from './components/Navbar/Navbar';
import About from './components/About/About.jsx';
import Contact from "./components/Contact/Contact";
import Projects  from "./components/Projects/Projects";

function App() {

  return (
    <>
    <div className={style.welcome} >
     <Navbar />
     <Welcome/>
    </div>
    <div className={style.about}>
     <About />
    </div>
    <div className={style.projects}>
    <Projects />
    </div>
    <div className={style.contact}>
      <Contact />
    </div>
    </>
  )
}

export default App