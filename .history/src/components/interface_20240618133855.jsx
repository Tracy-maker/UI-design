import React from "react";
import Section from "./models/Section";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <About />
      </Section>

      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Interface;
