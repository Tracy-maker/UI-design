import React from "react";
import Section from "./models/Section";
import styles from "../styles"

const About = () => {
  return (
    <Section>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915EFF]">Adrian</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I develop 3D visuals, user <br className="sm:block hidden" />
        interfaces and web applications
      </p>
    </Section>
  );
};

export default About;
