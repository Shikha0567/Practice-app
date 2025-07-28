import React from "react";
import { useNavigate } from "react-router";

const FoodCard = (props) => {
  const {
    name,
    category,
    vegetarian,
    price,
    discount,
    finalPrice,
    rating,
    deliveryTime,
    tags,
    imageUrl,
  } = props.foodItem;

  const navigate = useNavigate();

  return (
    <div
      className="w-1/4 h-105 bg-gray-100 flex flex-col p-1 rounded-xl m-4"
      onClick={() => navigate("/desc", { state: props?.foodItem?.cards })}
    >
      <img
        alt="Food Item"
        src={imageUrl}
        className="h-4/6 w-full p-3 object-cover rounded-2xl"
      />
      <div className="flex flex-row justify-between items-center p-2">
        <span className="font-medium">{name}</span>
        <span className="px-1 bg-green-700 text-white rounded-md">
          {rating}
          <span className="pl-1">⭐</span>
        </span>
      </div>
      <div className="flex flex-row justify-between items-center text-gray-800 p-2">
        <span className="font-normal">{tags.length > 0 && tags.join(",")}</span>
        <span>
          Rs.
          {price}
        </span>
      </div>
      <div className="flex flex-row justify-end items-center text-sm p-2">
        <span className="px-1">🕝</span>
        <span>{deliveryTime}</span>
      </div>
    </div>
  );
};

export default FoodCard;
