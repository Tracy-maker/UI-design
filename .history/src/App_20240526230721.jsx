import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Challenge from "./components/Challenge";
import Summaries from "./components/Summaries";
import Prototyping from "./components/Prototyping";
import Final from "./components/Final";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Story />
        </div>
        <Challenge />
        <Summaries />
        <Prototyping />
        <Final/>
      </div>
    </BrowserRouter>
  );
};

export default App;
