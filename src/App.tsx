import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-poppins bg-bodyColor text-textColor">
      <Header />
      <div>
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
