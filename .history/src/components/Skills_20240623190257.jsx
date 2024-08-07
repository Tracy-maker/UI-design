import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";

const Skills = () => {
  return (
    <Section>
      <div >
        <div className="w-full lg:w-3/5 flex items-center justify-center mb-8 lg:mb-0">
          <Canvas
            className="w-full h-[50vh] lg:h-full bg-transparent"
            camera={{ near: 0.1, far: 1000 }} 
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

        <div className="w-full lg:w-2/5 text-white lg:pl-12">

          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With a keen eye for detail and a love for aesthetics, I strive to
            deliver designs that not only look great but also provide an
            intuitive and enjoyable user experience. My goal is to help
            businesses enhance their digital presence and connect with their
            customers through engaging and effective UI design.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
