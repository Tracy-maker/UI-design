import React from "react";
import { motion } from "framer-motion";
import Section from "./models/Section";
import About from "../assets/images/About.png"; // Make sure the path is correct

const Challenge = () => {
  return (
    <Section>
      <div className="p-6 rounded-lg shadow-lg">
        <motion.h1
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Challenge
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={About}
              alt="About Us"
              className="w-3/4 md:w-2/4 rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Challenge 1: Interface Design
            </h2>
            <p className="text-base sm:text-lg text-white mb-4">
              <strong className="font-semibold">Visual Appeal:</strong> The
              flower shop app needs to be visually appealing to attract users'
              attention. The choice of colors, images, and typography must work
              perfectly together.
            </p>
            <p className="text-base sm:text-lg text-white">
              <strong className="font-semibold">Solution:</strong> Use soft
              colors like pink, light blue, and white to convey a warm and
              romantic feeling. High-quality images of flowers can enhance
              visual appeal.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Challenge;
