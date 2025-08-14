
import Tweet from "./Tweet";
const TweetList = ({ tweets, isLoading, isError}) => {
  if (isLoading) {
    return <p>Loading tweets...</p>;
  }

  if (isError) {
    return <p>Oops! Something went wrong. Please try again.</p>;
  }

  return (
    <ul className="tweet-list-container">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet username={tweet.userName} text={tweet.content} date={tweet.date} />
        </li>
      ))}
    </ul>
  );
};

export default TweetList