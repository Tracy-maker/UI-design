import React from "react";
import Section from "./models/Section";

const About = () => {
  return (
    <Section>
      <h1 className="text-5xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Rita</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I make YouTube videos to help developers
        <br />
        learn how to build 3D apps
      </p>
    </Section>
  );
};

export default About;
