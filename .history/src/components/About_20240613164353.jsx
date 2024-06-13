import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Section from "./models/Section";
import Shop from "./models/Shop";
import Loader from "../components/Loader";

const About = () => {
  const [isShopScale, setIsShopScale] = useState([1, 1, 1]);
  const [isShopPosition, setIsShopPosition] = useState([0, -6.5, -43]);

  const rotation = [0, 0, 0];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShopScale([0.9, 0.9, 0.9]);
      } else {
        setIsShopScale([1, 1, 1]);
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section>
      <div>
        <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2">
          Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
        </h1>
        <p className="text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px] lg:leading-[40px] mt-2">
          I am a UI designer, and <br className="sm:block hidden" />
          this is my portfolio <br className="sm:block hidden" />
          for the flower shop mobile app.
        </p>
      </div>

      {/* shop */}
      <div>
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />
            <Shop
              position={isShopPosition}
              scale={isShopScale}
              rotation={rotation}
            />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default About;
