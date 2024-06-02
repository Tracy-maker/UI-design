import React from "react";

const Section = () => {
  return (
    <motion.section
      className={`h-screen w-screen p-8 mx-auto flex flex-col items-start justify-center`}
      initial={{opacity:0,y:50}}
    ></motion.section>
  );
};

export default Section;
