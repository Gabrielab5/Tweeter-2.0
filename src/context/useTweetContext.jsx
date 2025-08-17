import { useContext } from 'react';
import { TweetContext } from './TweetContextObject';

export const useTweetContext = () => useContext(TweetContext);