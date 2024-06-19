import React from "react";

const Card = (props) => {
  const { imageSrc, title } = props;s
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
