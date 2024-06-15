import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";

const About = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center p-4">
      <div className="flex-1 pt-2 sm:pt-8 lg:pr-4">
        <h1 className="font-black text-white lg:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2">
          Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
        </h1>
        <p className="text-white font-medium lg:text-[30px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[44px] mt-2">
          I am a UI designer, and <br className="sm:block hidden" />
          this is my portfolio <br className="sm:block hidden" />
          for the flower shop mobile app.
        </p>
      </div>

      <div className="flex-1 h-[50vh] lg:h-full flex items-center justify-center">
        <Canvas
          className="w-full h-full bg-transparent"
          camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
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
    </Section>
  );
};

export default About;
