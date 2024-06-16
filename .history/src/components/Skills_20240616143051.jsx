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
            <motion.div
              className="w-64"
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {skill.title}
              </motion.h3>
              <motion.div
                className="h-2 w-full rounded-full mt-2"
                style={{
                  background: `linear-gradient(to right, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`,
                  width: `${skill.level}%`,
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
