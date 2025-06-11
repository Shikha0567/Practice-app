import React from "react";

const CartItem = (props) => {
  const { id, name, image, price } = props.cartItem || {};
  console.log(name, "name", image, "image");
  console.log(props, "props.CartItem");
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
        </div>
      </div>
    </div>
  );
};

export default CartItem;
