import React from "react";
import Section from "./models/Section";
import About from "./About";
import Skills from "./Skills";

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
     <Section> <About /></Section>
     
      <Section><Skills /></Section>
      

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
