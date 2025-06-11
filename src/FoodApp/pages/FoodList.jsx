import React, { useEffect, useState } from "react";
import { foodData } from "../Utils/data";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const [foodList, setFoodList] = useState(foodData);
  const [filteredList, setFilteredList] = useState(foodData);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    let debounceTimer = setTimeout(() => {
      setDebouncedKeyword(searchKeyword);
    }, 500);

    //cleanup timer
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchKeyword]);

  useEffect(() => {
    let updatedList =
      debouncedKeyword.length > 0
        ? foodList.filter((item) =>
            item.name.toLowerCase().includes(debouncedKeyword)
          )
        : foodList;
    setFilteredList(updatedList);
  }, [debouncedKeyword]);

  const handleSearch = (e) => {
    let keyword = e.target.value.trim().toLowerCase();
    setSearchKeyword(keyword);
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
            value={searchKeyword}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {filteredList?.length > 0 ? (
          filteredList?.map((foodItem) => (
            <FoodCard foodItem={foodItem} key={foodItem?.id} />
          ))
        ) : (
          <p className="m-6 p-3 font-bold text-2xl">No data found!</p>
        )}
      </div>
    </div>
  );
};

export default FoodList;
