import React from "react";

const Section = (props) => {
  const { children } = props;
  return <section className="h-screen w-screen p-8 max-w-screen-2xl" >{children}</section>;
};

export default Section;
