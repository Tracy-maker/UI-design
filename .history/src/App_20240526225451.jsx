import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">The Story</div>
      <section>The Challenge</section>
      <section>Prototyping Summaries</section>
      <section>Prototyping</section>
      <section>Final Design</section>
    </BrowserRouter>
  );
};

export default App;
