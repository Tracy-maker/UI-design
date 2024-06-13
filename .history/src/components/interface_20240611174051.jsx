import React from "react";
import Section from "./models/Section";

const Interface = () => {
  return (
    <div class="flex flex-col items-center w-screen">
      <Section>
        <h1>About</h1>
      </Section>
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
