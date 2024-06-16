import React from "react";
import { skills } from "./constants";
import Section from "./models/Section";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                {skill.title}
              </motion.h3>
              <div
                className="h-2 w-full bg-gray-200 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
