import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Shop from "./models/Shop";
import Bird from "./models/Bird"; // Import the Bird component
import Loader from "../components/Loader";
import Section from "./models/Section";

const About = () => {
  const [isShopScale, setIsShopScale] = useState([0.5, 0.5, 0.5]);
  const [isShopPosition, setIsShopPosition] = useState([0, -6.5, -43]);
  const [mousePosition, setMousePosition] = useState([0, 0, 0]);

  const rotation = [0, 0, 0];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShopScale([0.4, 0.4, 0.4]);
      } else {
        setIsShopScale([0.5, 0.5, 0.5]);
      }
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePosition([x * 10, y * 10, 0]); // Adjust scaling factor as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Section>
      <div className="relative w-full h-full">
        <Canvas
          className="absolute top-0 left-0 w-full h-full bg-transparent"
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
            <Bird position={mousePosition} /> {/* Add Bird component */}
          </Suspense>
        </Canvas>

        <div className="relative z-10 p-1 lg:pr-4">
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
    </Section>
  );
};

export default About;
