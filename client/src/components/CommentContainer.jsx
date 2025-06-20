import React from "react";

import { commentData } from "./constants";
import Comment from "./Comment";

const CommentContainer = () => {
  return <div>
    <p className="p-1 m-1 font-bold text-2xl">Comments</p>

    {commentData.map((data,ind)=>(
        <Comment data={{...data,id:ind}} key={ind}/>
    ))}
    
  </div>;
};

export default CommentContainer;
