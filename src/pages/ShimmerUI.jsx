import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap mx-2 my-4 justify-center items-center">
      {Array.from({ length: 20 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col p-3 border border-gray-200 m-4 w-[300px] rounded-lg shadow-lg animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full h-[250px] bg-gray-200 rounded-md mb-4"></div>

          {/* Title Placeholder */}
          <div className="w-3/4 h-4 bg-gray-200 rounded-md mb-2"></div>

          {/* Subtitle Placeholder */}
          <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
