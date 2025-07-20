import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="flex h-1/6 bg-gray-200 justify-between items-center px-4 shadow">
      <div>
        <img
          src="src\assets\vector-colorful-logo-design_1002026-45.avif"
          width={100}
          height={100}
          className="object-fill"
        />
      </div>
      <div className="font-medium">
        <Link to="/about" className="px-3">
          About
        </Link>
        <select className="w-35 mx-2 border p-2" onChange={handleNavigation}>
          <option>Go To</option>
          <option value="/infinite">Infinite Scroll</option>
          <option value="/language">Lang tranlate</option>
          <option value="/accordion">Accordion</option>
          <option value="/comment">Nested Comments</option>
          <option value="/image-slider">Image Slider</option>
          <option value="/pagination">Pagination</option>
        </select>

        <Link to="/private" className="px-3">
          Private
        </Link>
        <Link to="/practice" className="px-3">
          Practice
        </Link>
        <Link to="/food-app" className="px-3">
          Food App
        </Link>
      </div>
    </div>
  );
};

export default Header;
