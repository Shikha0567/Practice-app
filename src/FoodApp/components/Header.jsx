import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  //subscribing to the cart reducer (small portion of the store)
  //selector gives us access to the entire big store, but we only need the cart portion of it
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const isCartPage = window.location.href.indexOf("cart") > -1;

  return (
    <div className="h-1/6 flex justify-between items-center border border-gray-100">
      <div onClick={() => navigate("/food-app")}>
        <img
          alt="logo"
          src="src\assets\food-logo.jpg"
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      {!isCartPage && (
        <div
          className="px-4 mx-5 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <div className="relative inline-block">
            <FaCartPlus size={35} />
            <div className="circle-cart">{cartItems.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
