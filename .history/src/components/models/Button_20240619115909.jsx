import React from "react";

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className="text-2xl">
      Button
    </button>
  );
};

export default Button;
