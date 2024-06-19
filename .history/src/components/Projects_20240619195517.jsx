import React, { useRef, useEffect } from "react";
import Section from "./models/Section";
import Card from "./models/Card";
import { projects } from "./constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth;
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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

  // Duplicate the projects list to simulate infinite scroll
  const infiniteProjects = [...projects, ...projects];

  return (
    <Section>
      <div className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>

        <div className="relative z-10 w-full max-w-6xl mx-auto p-4">
          <div className="relative w-full flex items-center">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 z-20 p-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex w-full gap-8 px-16 overflow-hidden"
            >
              {infiniteProjects.map((project, index) => (
                <div key={index} className="min-w-[200px] flex-shrink-0">
                  <Card image={project.image} title={project.title} />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollRight}
              className="absolute right-0 z-20 p-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
