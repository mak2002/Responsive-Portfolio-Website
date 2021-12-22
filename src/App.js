import "./App.css";
import data from "./assets/data";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App dark">
      <div className="wrapper min-h-screen dark:bg-dark1">
        <Navbar name={data.name}/>
        <About description={data.about.description}/>
      </div>
    </div>
  );
}

export default App;
