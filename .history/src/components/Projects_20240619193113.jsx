import React from "react";
import Section from "./models/Section";
import Button from "./models/Button";
import Card from "./models/Card";
import { projects } from "./constants";

const Projects = () => {
  return (
    <Section>
      <div className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>
       
        <div className="relative z-10 w-full max-w-6xl mx-auto p-4 flex flex-col items-center">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {projects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
