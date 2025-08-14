

const Tweet = ({username, text , time}) => {

const formattedTime = time.toLocaleString();

return (  
    <div>
      <div className="header">
        <div className="username"> {username}</div>
         <div className="tweet-time">{formattedTime}</div>
      </div>
      <div className="tweetText">{text}</div>
    </div>
  )
}


export default Tweet