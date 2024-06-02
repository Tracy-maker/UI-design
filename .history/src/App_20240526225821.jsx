import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <section>The Challenge</section>
        <section>Prototyping Summaries</section>
        <section>Prototyping</section>
        <section>Final Design</section>
      </div>
    </BrowserRouter>
  );
};

export default App;
