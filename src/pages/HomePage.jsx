import React from 'react';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';
import { useTweetContext } from '../context/useTweetContext';

const HomePage = () => {
   const { tweets, isLoading, isError, userName, addTweet } = useTweetContext();
  return (
    <>
      <TweetForm onSubmit={addTweet} userName={userName}/>
      <TweetList tweets={tweets} isLoading={isLoading} isError={isError} />
    </>
  );
};

export default HomePage;