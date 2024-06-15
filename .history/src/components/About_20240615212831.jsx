import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";

const About = () => {
  const [isShopScale, setIsShopScale] = useState([0.5, 0.5, 0.5]);
  const [isShopPosition, setIsShopPosition] = useState([0, -6.5, -43]);
  const [currentStage, setCurrentStage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShopScale([0.4, 0.4, 0.4]);
        setIsShopPosition([0, -6.5, -35]);
      } else {
        setIsShopScale([0.5, 0.5, 0.5]);
        setIsShopPosition([0, -6.5, -43]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section className="flex flex-col lg:flex-row items-start p-4">
      <div className="flex-1 p-1 lg:pr-4">
        <div>
          <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
          </h1>
          <p className="text-white font-medium lg:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px] lg:leading-[40px] mt-2">
            I am a UI designer, and <br className="sm:block hidden" />
            this is my portfolio <br className="sm:block hidden" />
            for the flower shop mobile app.
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 lg:pl-8 h-full">
        <Canvas
          className="w-full h-full bg-transparent"
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
            <Shop
              setCurrentStage={setCurrentStage}
              position={isShopPosition}
              rotation={[0, Math.PI / 2, 0]}
              scale={isShopScale}
            />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default About;
