import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";
import { skills } from "./constants";

// Define an array of pastel colors
const pastelColors = [
  '#FFB3BA', // Light Pink
  '#FFDFBA', // Light Orange
  '#FFFFBA', // Light Yellow
  '#BAFFC9', // Light Green
  '#BAE1FF', // Light Blue
  '#CBA6C3', // Light Purple
];

const Skills = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center justify-center p-4 min-h-screen">
      <div className="flex-1 h-[50vh] lg:h-full flex items-center justify-center">
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Shop />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="flex-1 flex flex-col justify-center pt-2 sm:pt-8 lg:pr-4">
        <motion.h2
          className="font-black text-white xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] text-[30px] lg:leading-[60px] mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              className="w-full md:w-64 sm:w-56"
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.h3
                className="text-md w-auto lg:text-lg font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {skill.title}
              </motion.h3>
              <motion.div
                className="h-2 w-full rounded-full mt-2"
                style={{
                  background: pastelColors[index % pastelColors.length], // Cycle through pastel colors
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
