import React from "react";
import Section from "./models/Section";
import styles from "../styles";
import Shop from "./models/Shop";

const About = () => {
  
  return (
    <Section>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I am a UI designer, and <br className="sm:block hidden" />
        this is my portfolio <br className="sm:block hidden" />
        for the flower shop mobile app.
      </p>
      <Shop/>
    </Section>
  );
};

export default About;
