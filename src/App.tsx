import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="font-poppins bg-bodyColor text-textColor">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
