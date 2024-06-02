import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">  <Navbar />
        <Story /></div>
      
      </div>

    </BrowserRouter>
  );
};

export default App;
