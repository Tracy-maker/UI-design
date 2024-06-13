import React from "react";

const Section = (props) => {
  const { children } = props;
  return (
    <div className="h-screen w-screen pt-20 p-8 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
      {children}
    </div>
  );
};

export default Section;
