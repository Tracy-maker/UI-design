import React from "react";

const Section = (props) => {
  const { children } = props;
  return (
    <div className="h-screen w-screen pt-10  max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start justify-between">
      {children}
    </div>
  );
};

export default Section;
