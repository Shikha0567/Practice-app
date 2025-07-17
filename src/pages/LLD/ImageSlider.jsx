import React, { useEffect, useState } from "react";
import { images } from "../../utilities/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      loadNextImage();
    }, 3000);
    return () => clearInterval(intervalId);
  });

  const loadNextImage = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const loadPrevImage = () => {
    setActiveIndex((index) => (index < 0 ? images.length - 1 : index - 1));
  };

  return (
    <div className="flex my-20 justify-center items-center">
      <div className="px-2 cursor-pointer" onClick={loadPrevImage}>
        <FaChevronLeft size={50} />
      </div>
      {images?.length > 0 && (
        <img
          alt="wallpaper"
          src={images[activeIndex]}
          width={800}
          height={500}
          className="object-cover"
        />
      )}
      <div className="px-2 cursor-pointer" onClick={loadNextImage}>
        <FaChevronRight size={50} />
      </div>
    </div>
  );
};

export default ImageSlider;
