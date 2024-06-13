import React from "react";
import Section from "./models/Section";
import About from "./About";

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <About>
        <h1>About</h1>
      </About>
      <Section>
        <h1>Skills</h1>
      </Section>
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
