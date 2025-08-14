
import Tweet from "./Tweet";
const TweetList = ({ tweets, isLoading, isError}) => {
  if (isLoading) {
    return <p>Loading tweets...</p>;
  }

  if (isError) {
    return <p>Oops! Something went wrong. Please try again.</p>;
  }

  if (tweets.length === 0) {
    return <p>No tweets to display yet.</p>;
  }

  return (
    <ul className="tweet-list-container">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet userName={tweet.userName} content={tweet.content} date={new Date(tweet.date).toLocaleDateString()} />
        </li>
      ))}
    </ul>
  );
};

export default TweetList