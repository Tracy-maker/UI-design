import React from "react";

const Card = (props) => {
  const { image, title } = props;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
