import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Routes } from "react-router-dom";

const Interface = () => {
  return (
    <Routes>
      <div className="flex flex-col items-center w-screen">
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        {/* <Contact id="contact" /> */}
      </div>
    </Routes>
  );
};

export default Interface;
