import React from "react";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <About setSection={setSection} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Interface;
