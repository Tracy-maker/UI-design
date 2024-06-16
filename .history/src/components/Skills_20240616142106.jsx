import React from "react";
import { skills } from "./constants";
import Section from "./models/Section";


const Skills = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3 className="text-xl font-bold text-gray-800">{skill.title}</motion.h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
