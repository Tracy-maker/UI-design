import React from "react";

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className="text-2xl font-bold cursor-pointer hover:text-in\">
      Button
    </button>
  );
};

export default Button;
