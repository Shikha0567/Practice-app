import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    autoCompleteHandler();
  }, [searchText]);

  const autoCompleteHandler = async () => {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const data = await response.json();
    setSearchResults(data[1]);
  };

  return (
    <div className="flex flex-col items-center h-[800px] my-25">
      <img
        src="src\assets\google_logo.svg"
        className="w-[250px] object-fill mb-10"
      />
      <div className="w-1/3">
        <input
          type="text"
          className="px-2 py-3 rounded-2xl shadow-sm border border-gray-300 w-full focus:border-gray-300"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {searchResults?.length > 0 && showResults && (
          <div className="rounded-md shadow-sm border border-gray-300 w-full">
            <ul>
              {searchResults?.map((result, idx) => (
                <li
                  key={idx}
                  className="hover:bg-gray-200 px-2 py-1 cursor-pointer"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
