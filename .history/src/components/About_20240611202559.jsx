import React from "react";
import Section from "./models/Section";

const About = () => {
  return (
    <Section>
      <h1 className={`${styles.heroHeadText} text-white`} >
        Hi, I'm
        <br />
        <span className="b"></span>
      </h1>
    </Section>
  );
};

export default About;
