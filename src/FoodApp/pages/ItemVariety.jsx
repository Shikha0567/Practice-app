import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router";
import ItemDetails from "../components/ItemDetails";

const ItemVariety = () => {
  const location = useLocation();
  console.log(location.state, "location.state");
  const cards = location.state || [];
  return (
    <div className="flex flex-col">
      <Header />
      {cards?.length > 0 &&
        cards?.map((item) => (
          <div className="flex items-center justify-center" key={item?.id}>
            <ItemDetails details={item} />
          </div>
        ))}
    </div>
  );
};

export default ItemVariety;
