import React from "react";

const Card = (props) => {
  const { image, title } = props;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-112 xl:h-122">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center px-4 py-2 bg-opacity-75 rounded">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
