import React from "react";
import Header from "../components/Header";
import FoodList from "./FoodList";

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <FoodList />
    </div>
  );
};

export default Main;
