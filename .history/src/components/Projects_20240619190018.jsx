import React from "react";
import Section from "./models/Section";
import Button from "./models/Button";
import Card from "./models/Card";
import { projects } from "./constants";

const Projects = () => {
  return (
    <Section>
      <h2 className=" flex text-5xl font-bold mb-8 text-center">Projects</h2>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 z-0"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto p-4">
          <div className="flex w-full gap-8 items-center justify-center mb-8">
            <Button>← Previous</Button>
            <Button>Next →</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Card key={project.id} image={project.image} title={project.title} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
