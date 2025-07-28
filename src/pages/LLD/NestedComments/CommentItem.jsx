import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Comment from "./Comment";

dayjs.extend(relativeTime);

const CommentItem = ({ comment }) => {
  const [toggleComment, setToggleComment] = useState(true);

  const toggleHandler = () => {
    setToggleComment(!toggleComment);
  };

  return (
    <div className="flex flex-col p-2 m-2 border border-gray-200">
      <div className="flex flex-row items-center">
        <img
          alt="Comment Avatar"
          src={comment.commentAvatar}
          width={50}
          height={65}
          className="rounded-full object-cover"
        />
        <h4 className="font-bold p-2">{comment.user}</h4>
        <span className="font-light text-sm">
          {dayjs(comment.timeStamp).fromNow()}
          <span className="mx-2 cursor-pointer" onClick={toggleHandler}>
            {toggleComment ? "⬇️" : "⬆️"}
          </span>
        </span>
      </div>
      {toggleComment && (
        <div>
          <div className="p-2">
            <p className="mx-10">{comment.content}</p>
          </div>

          {comment?.replies && <Comment data={comment.replies} />}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
