import React from "react";
import Section from "./models/Section";
import About from "../assets/images/About.png"; // Make sure the path is correct

const Challenge = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <img src={About} alt="About Us" className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
        <div className="text-left max-w-md md:text-left md:ml-4">
          <h2 className="text-xl font-bold mb-2">Challenge 1: Interface Design</h2>
          <p className="mb-2">
            <strong>Visual Appeal:</strong> The flower shop app needs to be visually appealing to attract users' attention. The choice of colors, images, and typography must work perfectly together.
          </p>
          <p>
            <strong>Solution:</strong> Use soft colors like pink, light blue, and white to convey a warm and romantic feeling. High-quality images of flowers can enhance visual appeal.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Challenge;
