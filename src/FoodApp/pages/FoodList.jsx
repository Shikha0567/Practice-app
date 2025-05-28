import React, { useState } from "react";
import { foodData } from "../Utils/data";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const [foodList, setFoodList] = useState(foodData);
  const [filteredList, setFilteredList] = useState([]);
  const handleSearch = (e) => {
    let query = e.target.value;
    let updatedList = foodList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    filteredList(updatedList);
  };
  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex justify-between items-center mb-5">
        <span className="font-medium font-sans text-xl my-4 mb-10">
          Food Delivery Restaurants in Bengaluru
        </span>
        <div className="w-full max-w-md flex items-center space-x-2">
          <input
            className="py-2 px-4 border border-gray-300 w-full rounded-xl shadow-sm text-base focus:outline-none focus:shadow-md"
            placeholder="Search restaurants or dishes..."
          />
          <button className="px-4 py-2 bg-gray-200 rounded-xl">🔍</button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {foodList?.length > 0 &&
          foodList.map((foodItem) => (
            <FoodCard foodItem={foodItem} key={foodItem?.id} />
          ))}
      </div>
    </div>
  );
};

export default FoodList;
