import "./App.css";
import data from "./assets/data";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App dark">
      <div className="wrapper min-h-screen dark:bg-dark1">
        <Navbar name={data.name} />
        <About description={data.about.description}/>
        <Skills frontendSkills={data.frontendSkills} backendSkills={data.backendSkills} />
      </div>
    </div>
  );
}

export default App;
