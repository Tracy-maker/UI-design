import React from "react";
import { motion } from "framer-motion";
import Section from "./models/Section";
import Items from "../assets/images/Items.png";

const Experience = () => {
  return (
    <Section>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 text-left md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Challenge 2: User Experience (UX)
            </h2>
            <p className="text-base sm:text-lg text-white mb-2 text-justify">
              <strong className="font-semibold">Navigation Design:</strong> The
              app must be easy to navigate, allowing users to find the flowers
              and related information they want easily.
            </p>
            <p className="text-base sm:text-lg text-white text-justify">
              <strong className="font-semibold">Solution:</strong> Employ a
              simple navigation menu and clear category labels such as "Birthday
              Bouquets," "Celebration Bouquets," etc. Use a bottom navigation
              bar for quick access to main features.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={Items} alt="About Us" className="w-2/4 md:w-2/4 " />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
export default Experience;
