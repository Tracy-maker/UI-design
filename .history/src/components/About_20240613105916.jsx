import React from "react";
import Section from "./models/Section";
import styles from "../styles"

const About = () => {
  return (
    <Section>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915EFF]">Rita Zhang</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I am a UI designer, and <br className="sm:block hidden" />
      this is my portfolio for the flower shop mobile app.
      </p>
    </Section>
  );
};

export default About;
