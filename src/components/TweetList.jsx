import Tweet from "./Tweet";
import React, { useEffect, useRef } from "react";
import { useTweetContext } from '../context/useTweetContext';

const TweetList = () => {
  const { tweets, isLoading, isError, hasMore, loadMoreTweets } = useTweetContext();
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        loadMoreTweets();
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [hasMore, loadMoreTweets]);

  if (isLoading) {
    return <p>Loading tweets...</p>;
  }

  if (isError) {
    return <p>Oops! Something went wrong. Please try again.</p>;
  }

  if (tweets.length === 0 && !isLoading) {
    return <p>No tweets to display yet.</p>;
  }

  return (
    <ul className="tweet-list-container">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet userName={tweet.userName} content={tweet.content} date={new Date(tweet.date).toLocaleDateString()} />
        </li>
      ))}
      {isLoading && <p>Loading more tweets...</p>}
      <li ref={loader} style={{ height: "20px" }}></li>
    </ul>
  );
};

export default TweetList