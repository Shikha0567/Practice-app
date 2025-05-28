import React from "react";
import { Link } from "react-router";

const Header = () => {
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
        <Link to="/contact" className="px-3">
          Contact
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
