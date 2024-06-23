import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";

const Skills = () => {
  return (
    <Section>
      <motion.div
        className="flex-1 flex flex-col justify-center pt-2 sm:pt-8 lg:pr-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Goal
        </motion.h1>
        <motion.p
          className="text-white font-medium lg:text-[30px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[44px] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          With a keen eye for detail and a love for aesthetics, I strive to
          deliver designs that not only look great but also provide an
          intuitive and enjoyable user experience. My goal is to help
          businesses enhance their digital presence and connect with their
          customers through engaging and effective UI design.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex-1 h-[50vh] lg:h-full flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Shop />
          </Suspense>
        </Canvas>
      </motion.div>
    </Section>
  );
};

export default Skills;
