import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import { getRandomName, LIMIT } from "./utils";
import { FaTelegram } from "react-icons/fa";

const YTLiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [myMessage, setMyMessage] = useState({
    name: "Shikha",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKVAPvaXvawQqMrNaNE3hMe4QDVG-saUfL51SR1Akqubm40PxlF=s83-c-mo",
    message: "",
  });

  useEffect(() => {
    let intervalId = setInterval(() => {
      fetchDummyLiveMessages();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const fetchDummyLiveMessages = () => {
    //fetch data from API, it will return an array of chat messages

    const dummyMessage = [
      {
        name: getRandomName(),
        avatar:
          "https://lh3.googleusercontent.com/a/ACg8ocKVAPvaXvawQqMrNaNE3hMe4QDVG-saUfL51SR1Akqubm40PxlF=s83-c-mo",
        message: "Hello World!",
      },
    ];
    setMessages((prev) => [...dummyMessage, ...prev].slice(0, LIMIT));
  };

  const handleSendMessage = (e) => {
    setMessages((prev) => [myMessage, ...prev]);
    setMyMessage((prev) => ({ ...prev, message: "" }));
  };

  return (
    <div className="w-screen h-[500px] flex flex-row my-5">
      <div className="mx-2">
        <iframe
          width="853"
          height="500"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="lofi hip hop radio 📚 beats to relax/study to"
          frameborder="0"
        ></iframe>
      </div>
      <div className="flex flex-col">
        <div className="w-[500px] h-[460px] flex flex-col-reverse overflow-y-scroll mx-2 border border-gray-300">
          {messages?.length > 0 &&
            messages?.map((message, index) => (
              <MessageItem key={index} {...message} />
            ))}
        </div>

        <div className="w-[500px] h-[50px] mx-2 relative">
          <input
            type="text"
            className="w-full h-full border border-gray-200 px-3 pr-10 py-2 rounded focus:outline-none"
            placeholder="Type a message..."
            value={myMessage.message}
            onChange={(e) =>
              setMyMessage((prev) => ({ ...prev, message: e.target.value }))
            }
          />

          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
          >
            <FaTelegram className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YTLiveChat;
