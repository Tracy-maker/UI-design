import React from "react";
import Section from "./models/Section";

const Projects = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Projects</h2>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button className="hover:text-indigo-600 transition-colors">
          ← Previous
        </button>

        <button className="hover:text-indigo-600 transition-colors">
          Next →
        </button>
      </div>
    </Section>
  );
};

export default Projects;
