import { BrowserRouter } from "react-router-dom";
import { Navbar, Story, Challenge, Summaries, Prototyping, Final, Contact } from './components';

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
        <Final />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
