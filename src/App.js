import "./App.css";
import data from "./assets/data";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {


  return (
    <div className="App dark">
      <div className="wrapper min-h-screen min-w-full dark:bg-dark1-50">
        <Navbar name={data.name} />
        <About description={data.about.description}/>
        <Skills frontendSkills={data.frontendSkills} backendSkills={data.backendSkills} />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
