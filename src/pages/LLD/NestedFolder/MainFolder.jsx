import React, { useState } from "react";
import NestedFolder from "./NestedFolder";
import { folders, folders1 } from "./folderData";

const MainFolder = () => {
  return (
    <div>
      <NestedFolder folderData={folders} />
    </div>
  );
};

export default MainFolder;
