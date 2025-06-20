import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/liveChatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('')

  const liveChatData = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  const handleSubmit = (e)=>{
    if(e.key==='Enter' && comment.trim()){
        dispatch(addMessages({
            name:"Khushal",
            message:comment
        }))
        setComment('')
    }
  }
  return (
    <div className="flex flex-col w-full max-w-[450px] mx-auto ">
      {/* Chat Box */}
      <div
        className=" bg-gray-100 m-4 p-2 rounded-md overflow-y-scroll overflow-x-hidden flex flex-col-reverse"
        style={{ height: "400px", flexShrink: 0 }}
      >
        {liveChatData.map((data, ind) => (
          <ChatMessage {...{...data, ind}} key={ind} />
        ))}
      </div>

      {/* Input Box */}
      <div className="px-4 flex items-center justify-between gap-2">
        <input
          type="text"
          className="w-3/4 border border-gray-400  p-2 rounded-2xl"
          placeholder="Type your message..."
          onChange={(e)=>setComment(e.target.value)}
          onKeyDown={handleSubmit}
          value={comment}
        />
        <button
          className="group text-lg bg-gray-200 hover:bg-pink-100 text-gray-800 rounded-full p-2 w-10 h-10 flex items-center justify-center transition"
          title="Send a heart"
        >
          <span className="group-hover:hidden">🤍</span>
          <span className="hidden group-hover:inline">❤️</span>
        </button>
      </div>
    </div>
  );
};

export default Livechat;
