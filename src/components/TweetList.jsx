
import Tweet from "./Tweet";
const TweetList = ({ tweets }) => {
  return (
    <ul className="tweet-list-container">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet username={tweet.username} text={tweet.text} time={tweet.createdAt} />
        </li>
      ))}
    </ul>
  );
};

export default TweetList