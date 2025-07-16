import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import CartItemPriceDetails from "../components/CartItemPriceDetails";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems");
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <div>
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
              <div className="flex items-center justify-center" key={item.id}>
                <CartItem cartItem={item} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <div className="w-150 h-150 rounded-2xl">
                <img
                  src="src\assets\empty-cart.webp"
                  className="h-3/4 w-full p-3 object-cover rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <CartItemPriceDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
