import React, { useState } from "react";
import { LANG } from "../utilities/Language";
const data = LANG;
const Language = () => {
  const [lang, setLang] = useState("en");

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div>
        <label className="text-sm px-2 py-1">Select Language</label>
        <select
          className="px-2 py-1 border w-30"
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="ua">ukrainian</option>
        </select>
      </div>

      <div className="w-2/3 p-5 my-10 border border-gray-200">
        <h2 className="text-2xl">{data[lang].header}</h2>
        <h5 className="text-lg">{data[lang].subHeader}</h5>
        <p>{data[lang].description}</p>
      </div>
    </div>
  );
};

export default Language;
