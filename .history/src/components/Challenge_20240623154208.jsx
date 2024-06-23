import React from "react";
import Section from "./models/Section";
import About from "../assets/images/About.png"; // Make sure the path is correct

const Challenge = () => {
  return (
    <Section>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">The Challenge</h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1 md:mr-6">
            <img
              src={About}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="flex-1 text-left md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Challenge 1: Interface Design
            </h2>
            <p className="mb-4">
              <strong>Visual Appeal:</strong> The flower shop app needs to be
              visually appealing to attract users' attention. The choice of
              colors, images, and typography must work perfectly together.
            </p>
            <p>
              <strong>Solution:</strong> Use soft colors like pink, light blue,
              and white to convey a warm and romantic feeling. High-quality
              images of flowers can enhance visual appeal.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Challenge;
