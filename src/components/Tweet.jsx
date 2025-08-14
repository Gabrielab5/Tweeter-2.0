import React from "react";

const Tweet = ({userName, content , date}) => {

return (  
    <div>
      <div className="header">
        <div className="username"> {userName}</div>
         <div className="tweet-time">{date}</div>
      </div>
      <div className="tweetText">{content}</div>
    </div>
  )
}


export default Tweet