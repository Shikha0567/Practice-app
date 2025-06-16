import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "../../utilities/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, image, price, count } = props.cartItem || {};

  const handleIncrement = () => {
    dispatch(increment(props.cartItem));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };
  return (
    <div className="w-1/3 h-50 bg-gray-50 border-gray-100 shadow-sm z-10 p-2 m-4">
      <div className="flex flex-row p-2 m-4">
        <div className="w-40 h-40 rounded-2xl">
          <img
            src={image}
            className="h-3/4 w-full p-3 object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col py-2 text-md mx-10">
          <span className="font-medium py-1">{name}</span>
          <span className="py-1">Rs. {price}</span>

          <div class="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={handleDecrement}
            >
              <FaMinus />
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {count}
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={handleIncrement}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
