import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [shimmerUI, setShimmerUI] = useState(false);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", loadMoreCards);

    return () => window.removeEventListener("scroll", loadMoreCards);
  }, []);

  const loadMoreCards = () => {
    // 1. window.innerHeight
    // 👉 This gives the visible height of the browser window.
    // Think: "What part of the page is in front of your eyes right now?"

    // 2. window.scrollY
    // 👉 This gives how much the user has scrolled down from the top.
    // Think: "How far have I moved down from the top?"

    // 3. document.body.scrollHeight
    // 👉 This gives the total height of the entire page (including off-screen parts).
    // Think: "How tall is the whole page, including the part I haven't seen yet?"

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData();
    }
  };

  const fetchData = async () => {
    setShimmerUI(true);
    try {
      const response = await fetch("https://meme-api.com/gimme/20");
      const data = await response.json();
      setShimmerUI(false);
      setData((prev) => [...prev, ...data.memes]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-wrap mx-2 my-4 justify-center items-center">
      {data?.length > 0 &&
        data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col p-3 border border-gray-200 m-4 w-1/5 rounded-lg shadow-lg"
          >
            <div className="w-full h-[370px]  flex flex-col justify-center items-center">
              <div className="w-full h-[300px] overflow-hidden">
                <img
                  src={item.url}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg p-2 my-2">{item.author}</h4>
            </div>
          </div>
        ))}
      {shimmerUI && <ShimmerUI />}
    </div>
  );
};

export default InfiniteScroll;
