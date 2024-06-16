import React from "react";
import Section from "./models/Section";
import About from "./About";
import Skills from "./Skills";

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <About>
        <h1>yy</h1>
      </About>

  <Skills>
    <h2>yy</h2>
  </Skills>

      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

export default Interface;
