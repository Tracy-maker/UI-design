import { delay } from "framer-motion";
import React from "react";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 mx-auto flex flex-col items-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    ></motion.section>
  );
};

export default Section;
