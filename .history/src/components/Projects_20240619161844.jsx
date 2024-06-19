import React from "react";
import Section from "./models/Section";
import Button from "./models/Button";

const Projects = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Projects</h2>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50"></div>
        <div className="flex w-full h-full gap-8 items-center justify-center relative z-10">
          <Button>← Previous</Button>
          <Button>Next →</Button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
