import { useContext } from 'react';
import { TweetContext } from './TweetContext';

export const useTweetContext = () => useContext(TweetContext);