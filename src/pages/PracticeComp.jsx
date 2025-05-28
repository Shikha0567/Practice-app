import React, { useState } from "react";
import { accordionData } from "../utilities/constants";
import ChildComp from "./ChildComp";
import Input from "./Input";

const PracticeComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputValue, setInputValue] = useState();
  const handleChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="flex justify-center m-4">
      <div className="w-1/2 p-4">
        {accordionData?.map((data, index) => (
          <ChildComp
            key={data?.id}
            title={data?.title}
            desc={data.para}
            isActive={index === activeIndex}
            onToggle={() => {
              if (activeIndex === index) {
                setActiveIndex(null); // Close if already open
              } else {
                setActiveIndex(index); // Open this one
              }
            }}
          />
        ))}
      </div>
      <div className="m-4">
        <Input
          value={inputValue}
          handleInputChange={(value) => handleChange(value)}
          label="First Input"
        />
        <Input
          value={inputValue}
          handleInputChange={(value) => handleChange(value)}
          label="Second Input"
        />
      </div>
    </div>
  );
};

export default PracticeComp;
