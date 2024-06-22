import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";
import { skills } from "./constants";

// Define an array of pastel colors
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
    <Section className="p-6 lg:p-12 bg-gray-900">
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

      <div className="flex-1 flex flex-col justify-center pt-2 sm:pt-8 lg:pr-4 text-white">
        <motion.h2
          className="font-black text-white xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] text-[30px] lg:leading-[60px] mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 space-y-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                className="font-semibold text-xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                {skillCategory.category}
              </motion.h3>
              <div className="space-y-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.div
                    className="w-full bg-gray-800 p-4 rounded-lg shadow-md"
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: itemIndex * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <motion.h4
                      className="text-lg font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                    >
                      {item}
                    </motion.h4>
                    <motion.div
                      className="h-2 w-full rounded-full mt-2"
                      style={{
                        background: pastelColors[(categoryIndex + itemIndex) % pastelColors.length],
                        width: "100%",
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                    ></motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
