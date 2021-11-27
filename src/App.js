import "./App.css";
import Home from "./components/Home";
import Slide from "./components/Slide";
import HorizentalScrolls from "./components/HorizentalScroll";
import Distributor from "./components/Distributor";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  return (
    <div className="App">
      <Home />
      <Slide />
      <HorizentalScrolls />
      <Distributor />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
