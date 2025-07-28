import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaFile,
  FaRegFolder,
} from "react-icons/fa6";

const FolderItem = ({ folderData }) => {
  const [showFolder, setShowFolder] = useState(true);

  return (
    <div>
      <div
        className="flex flex-row mx-10 my-1 items-center cursor-pointer"
        onClick={() => setShowFolder(!showFolder)}
      >
        {folderData.isFolder &&
          (showFolder ? (
            <FaArrowDown className="px-1" />
          ) : (
            <FaArrowRight className="px-1" />
          ))}
        {folderData?.isFolder ? <FaRegFolder /> : <FaFile />}
        <span className="px-2">
          {folderData.name} {folderData.id}
        </span>
      </div>
      {showFolder && (
        <div className="ps-5">
          {folderData.children &&
            folderData.children?.map((folder) => (
              <FolderItem folderData={folder} />
            ))}
        </div>
      )}
    </div>
  );
};

export default FolderItem;
