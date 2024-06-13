import React from "react";
import Section from "./models/Section";
import Shop from "./models/Shop";

const About = () => {
  const screenPosition = [10, 20, 20];
  const screenScale = [1, 1, 1];
  const rotation = [0, 0, 0];

  const adjustShopForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenScale]
  };

  return (
    <Section>
      <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 text-white">
        Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
      </h1>
      <p className="text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px] lg:leading-[40px] mt-2 text-white-100">
        I am a UI designer, and <br className="sm:block hidden" />
        this is my portfolio <br className="sm:block hidden" />
        for the flower shop mobile app.
      </p>
      <Shop position={screenPosition} scale={screenScale} rotation={rotation} />
    </Section>
  );
};

export default About;
