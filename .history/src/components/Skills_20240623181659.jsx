import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";
import { skills } from "./constants";

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
          className="font-black text-white text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] leading-tight mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        With a keen eye for detail and a love for aesthetics, I strive to deliver designs that not only look great but also provide an intuitive and enjoyable user experience. My goal is to help businesses enhance their digital presence and connect with their customers through engaging and effective UI design.
        </div>
      </div>
    </Section>
  );
};

export default Skills;
