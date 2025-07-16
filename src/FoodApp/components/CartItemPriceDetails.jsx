import React from "react";
import { useSelector } from "react-redux";

const CartItemPriceDetails = () => {
  const cartItems = useSelector((store) => store.cart.items);
  let totalPrice =
    cartItems?.length &&
    cartItems.reduce((accu, currItem) => {
      accu += currItem.price * currItem.count;
      return accu;
    }, 0);
  console.log(cartItems, "cartItems...");
  console.log(totalPrice, "totalPrice");
  return <div>{totalPrice}</div>;
};

export default CartItemPriceDetails;
