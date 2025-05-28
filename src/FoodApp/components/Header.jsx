import React from "react";

const Header = () => {
  return (
    <div className="h-1/6 flex justify-between items-center border border-gray-100">
      <div>
        <img
          src="src\assets\food-logo.jpg"
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-4 mx-5">cart</div>
    </div>
  );
};

export default Header;
