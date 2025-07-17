import React from "react";

const AccordionChild = ({ title, content, isActive, setActiveIndex }) => {
  return (
    <div
      className="flex flex-col p-2 border border-gray-300"
      onClick={setActiveIndex}
    >
      <div className="flex justify-between items-center border border-gray-200">
        <h4 className="mb-2 p-2 text-lg">{title}</h4>
        <span className="px-3">⬇️</span>
      </div>
      {isActive && <p className="p-2 mt-2">{content}</p>}
    </div>
  );
};

export default AccordionChild;
