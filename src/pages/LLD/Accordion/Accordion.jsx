import React, { useState } from "react";
import AccordionChild from "./AccordionChild";
import { accordion_data } from "../../../FoodApp/Utils/AccordionData";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center my-10">
      <div className="w-2/3">
        {accordion_data?.length > 0 &&
          accordion_data?.map((data, index) => (
            <AccordionChild
              key={data.id}
              title={data?.title}
              content={data?.content}
              isActive={index === activeIndex}
              setActiveIndex={() => {
                index === activeIndex
                  ? setActiveIndex(null)
                  : setActiveIndex(index);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Accordion;
