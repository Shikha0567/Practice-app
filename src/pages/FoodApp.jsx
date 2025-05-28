import React from "react";
import { Link } from "react-router";
import FoodList from "./FoodList";

const FoodApp = () => {
  return (
    <div className="flex flex-col">
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
          <Link to="/cart" className="px-3">
            Cart
          </Link>
        </div>
      </div>
      <div className="my-4">
        <FoodList />
      </div>
    </div>
  );
};
export default FoodApp;
