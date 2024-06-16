import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Section from "./models/Section";
import Flower from "./models/Flower";

const About = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center justify-center p-4 min-h-screen">
      <div className="flex-1 flex flex-col justify-center pt-2 sm:pt-8 lg:pr-4">
        <motion.h1
          className="font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
        </motion.h1>
        <motion.p
          className="text-white font-medium lg:text-[30px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[44px] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I am a UI designer, and <br className="sm:block hidden" />
          this is my portfolio <br className="sm:block hidden" />
          for the flower shop mobile app.
        </motion.p>
      </div>

      <div className="flex-1 h-[20vh] lg:h-full flex items-center justify-center">
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Flower />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default About;
