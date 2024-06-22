import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";
import { skills } from "./constants";

const pastelColors = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Light Orange
  "#FFFFBA", // Light Yellow
  "#BAFFC9", // Light Green
  "#BAE1FF", // Light Blue
  "#CBA6C3", // Light Purple
];

const Skills = () => {
  return (
    <Section className="bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
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

      <div className="flex-1 flex flex-col justify-center pt-2 sm:pt-4 md:pt-8 lg:pr-4">
        <motion.h2
          className="font-black text-white text-[26px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[35px] leading-tight mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4 bg-gray-800 p-2 rounded-lg shadow-md">
              <motion.h3
                className="font-bold text-xs sm:text-sm text-white mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                {skillCategory.category}
              </motion.h3>
              {skillCategory.items.map((item, itemIndex) => (
                <motion.div
                  className="mt-1"
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: itemIndex * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.h4
                    className="text-xs sm:text-sm lg:text-md font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                  >
                    {item}
                  </motion.h4>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
