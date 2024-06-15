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
      } else if (window.innerWidth < 1024) {
        setIsShopScale([0.5, 0.5, 0.5]);
        setIsShopPosition([0, -6.5, -40]);
      } else {
        setIsShopScale([0.6, 0.6, 0.6]);
        setIsShopPosition([0, -6.5, -43]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="flex-1 sm:pt-38 lg:h-full flex items-center justify-center">
        <Canvas
          className="w-full  h-auto bg-transparent"
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
