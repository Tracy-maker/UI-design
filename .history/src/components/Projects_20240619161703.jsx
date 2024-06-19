import React from "react";
import Section from "./models/Section";
import Button from "./models/Button";

const Projects = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Projects</h2>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <Button>← Previous</Button>

        <Button>Next →</Button>
      </div>
    </Section>
  );
};

export default Projects;
