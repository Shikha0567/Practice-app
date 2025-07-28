import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../utilities/cartSlice";

const ItemDetails = (props) => {
  const dispatch = useDispatch();
  const { name, price, rating, vegetarian, image, deliveryTime, description } =
    props.details;

  const handleAddItems = () => {
    console.log(props.details, "props.details");
    dispatch(increment(props.details));
  };

  return (
    <div className="w-4/6 h-70 bg-gray-50 border-gray-100 shadow-lg z-10 p-3 m-4">
      <div className="flex flex-row p-2 m-4">
        <div className="w-60 h-60 rounded-2xl relative">
          <img
            alt="food item"
            src={image}
            className="h-3/4 w-full p-3 object-cover rounded-2xl"
          />
          <button
            className="absolute bottom-14 left-16 bg-white border-2 border-green-800 text-green-800 font-bold w-25 h-10 cursor-pointer"
            onClick={handleAddItems}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col py-2 text-md mx-10">
          <span className="py-1">
            {vegetarian ? (
              <div className="veg-badge-container">
                <span className="circle" />
              </div>
            ) : (
              <div className="non-veg-badge-container">
                <span className="triangle" />
              </div>
            )}
          </span>
          <span className="font-medium py-1">{name}</span>
          <span className="py-1">Rs. {price}</span>
          <span className="px-1 text-green-800 rounded-md flex items-center py-1 font-semibold">
            <span>{rating}</span>
            <span className="star filled">&#9733;</span>
          </span>
          <span className="py-1 font-light">{deliveryTime}</span>
          <span className="font-light py-1">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
