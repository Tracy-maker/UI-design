import React from "react";
import { motion } from "framer-motion";
import Section from "./models/Section";
import Details from "../assets/images/Details.png";

const Content = () => {
  return (
    <Section>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 flex justify-center mb-2 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={Details} alt="Details" className="w-2/5 md:w-2/4" />
          </motion.div>
          <motion.div
            className="w-full md:w-3/4 text-left md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-500 mb-6">
              Challenge 3: Content Layout
            </h2>
            <p className="text-base sm:text-lg text-white text-justify">
              <strong className="font-semibold">Information Display:</strong>{" "}
              Effectively display flower information and prices within limited
              screen space while maintaining a clean layout.
            </p>
            <p className="text-base sm:text-lg text-white text-justify">
              <strong className="font-semibold">Solution:</strong> Use
              card-based design to display each flower item, including images,
              names, and prices. Maintain proper spacing between cards to avoid
              a cluttered interface.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Content;
