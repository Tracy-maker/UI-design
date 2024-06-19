import React from "react";

const Interface = () => {
    const { setSection } = props;
    return (
      <div className="flex flex-col items-center w-screen">
        <AboutSection setSection={setSection} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    );
};

export default Interface;
