import React, { useRef } from "react";
import Section from "./models/Section";
import Button from "./models/Button";
import Card from "./models/Card";
import { projects } from "./constants";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <Section>
      <div className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>

        <div className="relative z-10 w-full max-w-6xl mx-auto p-4">
          <div className="relative w-full flex items-center">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 z-20 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              ← Previous
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex w-full gap-8 px-16 overflow-hidden"
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-[200px] flex-shrink-0">
                  <Card image={project.image} title={project.title} />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollRight}
              className="absolute right-0 z-20 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
