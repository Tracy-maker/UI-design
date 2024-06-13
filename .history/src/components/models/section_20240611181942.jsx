import React from "react";

const Section = (props) => {
  const { children } = props;
  return (
    <div className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
      {children}
    </div>
  );
};

export default Section;
