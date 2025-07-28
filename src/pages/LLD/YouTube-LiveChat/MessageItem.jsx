import React from "react";

const MessageItem = ({ avatar, name, message }) => {
  return (
    <div className="flex flex-row m-2">
      <img
        src={avatar}
        alt="user avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="font-semibold px-1">{name}</span>
      <span className="font-normal px-1">{message}</span>
    </div>
  );
};

export default MessageItem;
