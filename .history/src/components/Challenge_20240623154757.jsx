import React from "react";
import Section from "./models/Section";
import About from "../assets/images/About.png"; // Make sure the path is correct

const Challenge = () => {
  return (
    <Section>
      <div>
        <h1 className="text-center text-4xl font-extrabold text-white mb-8">
          The Challenge
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src={About} alt="About Us" className="w-2/4" />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Challenge 1: Interface Design
            </h2>
            <p className="text-lg text-white mb-4">
              <strong className="font-semibold">Visual Appeal:</strong> The
              flower shop app needs to be visually appealing to attract users'
              attention. The choice of colors, images, and typography must work
              perfectly together.
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-semibold">Solution:</strong> Use soft
              colors like pink, light blue, and white to convey a warm and
              romantic feeling. High-quality images of flowers can enhance
              visual appeal.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Challenge;
