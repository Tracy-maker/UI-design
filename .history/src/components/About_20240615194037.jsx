import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";

const About = () => {
  const [isShopScale, setIsShopScale] = useState([0.5, 0.5, 0.5]);
  const [isRotating, setIsRotating] = useState(false);
  const [isShopPosition, setIsShopPosition] = useState([0, -6.5, -43]);


  const adjustShopForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <Section>
      <div className="flex-1 p-1 lg:pr-4 flex items-start">
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

      <div className="flex-1 p-4 lg:pl-8 h-full flex items-start">
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
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                position={isShopPosition}
                rotation={[0.1, 4.7077, 0]}
                scale={islandScale}
            />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default About
