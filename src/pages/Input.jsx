import React from "react";

const Input = ({ value, handleInputChange, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="border-1 block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
