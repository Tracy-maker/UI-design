import React from "react";
import { skills } from "./constants";

const Skills = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <h3>{skills.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
