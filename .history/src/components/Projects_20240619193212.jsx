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
          <div className="flex w-full items-center justify-between mb-8">
            <Button>← Previous</Button>
            <Button>Next →</Button>
          </div>
          <div className="flex w-full overflow-x-auto gap-8">
            {projects.map((project) => (
              <div className="min-w-[200px] flex-shrink-0">
                <Card
                  key={project.id}
                  image={project.image}
                  title={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
