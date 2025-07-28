import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaFile,
  FaRegFolder,
} from "react-icons/fa6";

const Folders = ({ folderData }) => {
  const [showFolder, setShowFolder] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setShowFolder(!showFolder);
  };

  const handleSelect = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex flex-row mx-10 my-1 items-center cursor-pointer">
        <input
          type="checkbox"
          name={folderData.name}
          checked={isChecked}
          onChange={handleSelect}
        />
        <div
          className="flex flex-row my-1 items-center cursor-pointer"
          onClick={handleClick}
        >
          {folderData.isFolder &&
            (showFolder ? (
              <FaArrowDown className="px-1" />
            ) : (
              <FaArrowRight className="px-1" />
            ))}
          {folderData?.isFolder ? <FaRegFolder /> : <FaFile className="mx-1" />}
          <span className="px-2">
            {folderData.name} {folderData.id}
          </span>
        </div>
      </div>
      {showFolder && (
        <div className="ps-5">
          {folderData.children &&
            folderData.children?.map((folder) => (
              <Folders folderData={folder} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Folders;
