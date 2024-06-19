import React from "react";
import Section from "./models/Section";
import Button from "./models/Button";
import Card from "./Card";
import { projects } from "./constants";
const Projects = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold mb-8">Projects</h2>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 z-0"></div>
        <div className="flex w-full h-full gap-8 items-center justify-center relative z-10">
          <Button>← Previous</Button>
          <Button>Next →</Button>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
