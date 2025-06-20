import React, { useState } from "react";

const Comment = ({ data }) => {
  const [showReply, setReplyShow] = useState(false);

  const replyHandler = () => {
    setReplyShow(!showReply);
  };
  return (
    <div className="p-4  w-full">
      <div className="flex">
        <img 
        className="rounded-full h-10 w-10 bg-white ring-2 ring-offset-2 ring-purple-400 shadow-lg "
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${data.name}`} alt="" />
        <p className="font-semibold text-base sm:text-lg break-words px-2">
          {data.name}
        </p>
      </div>
      <p className="pt-2 px-2 sm:px-4 text-sm sm:text-base text-gray-700 break-words">
        {data.text}
      </p>

      {data.replies.length > 0 && (
        <button
        onClick={() => replyHandler()}
        className="mt-1 ml-2 sm:ml-4 px-1 py-1 sm:px-4 sm:py-2 cursor-pointer border border-gray-400 bg-blue-100 hover:bg-blue-200 rounded-md text-xs transition w-fit"
        >
          {!showReply ? "Show Replies" : "Hide Replies"}
        </button>
      )}
      <hr className="mt-2  border-t border-gray-300" />
      {showReply && data.replies.map((d) => 
        <div className="pl-5">
          <Comment data={d} />
        </div>
        
      )}
    </div>
  );
};

export default Comment;
