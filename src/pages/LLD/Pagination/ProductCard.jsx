import React from "react";

const ProductCard = ({ title, description, price, thumbnail }) => {
  return (
    <div className="flex flex-col p-3 border border-gray-200 m-4 w-1/5 rounded-lg shadow-lg">
      <div className="w-full h-[370px]  flex flex-col justify-center items-center">
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-lg p-2 my-2">{title}</h4>
        <p className="text-sm p-2 mb-2">{description}</p>
        <p className="text-sm p-2 mb-2">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
