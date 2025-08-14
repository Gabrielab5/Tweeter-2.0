import React from 'react';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';

const HomePage = ({ userName, tweets, isLoading, isError, onAddTweet }) => {
  return (
    <>
      <TweetForm onSubmit={onAddTweet} userName={userName}/>
      <TweetList tweets={tweets} isLoading={isLoading} isError={isError} />
    </>
  );
};

export default HomePage;