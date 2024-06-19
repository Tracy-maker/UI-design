import React from "react";

const Card = (props) => {
  const { image, title } = props;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-50 sm:h-64 md:h-72 lg:h-80 xl:h-96">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center px-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
