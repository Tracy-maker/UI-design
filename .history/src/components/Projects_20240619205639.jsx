import React, { useRef } from "react";
import { motion } from "framer-motion";
import Section from "./models/Section";
import Card from "./models/Card";
import { projects } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section className="flex flex-col lg:flex-row items-center justify-center p-4 min-h-screen">
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Projects
        </h2>

        <div className="relative z-10 w-full max-w-6xl mx-auto p-2 sm:p-4">
        <motion.button
              onClick={scrollLeft}
              className="absolute left-0 z-20 p-2 sm:p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </motion.button>
          <div className="relative w-full flex items-center">
          
            <div
              ref={scrollContainerRef}
              className="flex w-full gap-4 sm:gap-8 px-8 overflow-x-scroll scroll-smooth hide-scrollbar"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="min-w-[180px] sm:min-w-[200px] flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card image={project.image} title={project.title} />
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={scrollRight}
              className="absolute right-0 z-20 p-2 sm:p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
