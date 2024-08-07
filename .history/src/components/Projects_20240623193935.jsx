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
    <Section>
      <div className="relative w-full flex flex-col items-center justify-center px-2 sm:px-2">
        <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="relative z-10 w-full max-w-7xl mx-auto p-1 sm:p-2 flex items-center">
          <motion.button
            onClick={scrollLeft}
            className="z-20 p-2 sm:p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition mr-1 sm:mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </motion.button>
          <div className="flex w-full overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex w-full gap-4 sm:gap-8 px-2 overflow-x-scroll scroll-smooth hide-scrollbar"
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
          </div>
          <motion.button
            onClick={scrollRight}
            className="z-20 p-2 sm:p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition ml-2 sm:ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
