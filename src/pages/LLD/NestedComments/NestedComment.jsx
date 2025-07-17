import React from "react";
import { nestedComments } from "./comments_data";
import Comment from "./Comment";

const NestedComment = () => {
  return (
    <div className="w-1/2 mx-20 my-15">
      <Comment data={nestedComments} />
    </div>
  );
};

export default NestedComment;
