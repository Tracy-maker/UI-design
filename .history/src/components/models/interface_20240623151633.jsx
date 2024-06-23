import React from "react";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Challenge from "../Challenge";

const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <About setSection={setSection} />
      <Challenge/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Interface;
