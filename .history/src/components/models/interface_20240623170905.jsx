import React from "react";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Challenge from "../Challenge";
import Experience from "../Experience";

const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <About setSection={setSection} />
      <Challenge />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Interface;
