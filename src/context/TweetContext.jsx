import React, { useState, useEffect} from 'react';
import { createClient } from '@supabase/supabase-js';
import { TweetContext } from './TweetContextObject'; 

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [session, setSession] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loadingSession, setLoadingSession] = useState(true);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Anon';
  });
  const TWEETS_PER_PAGE = 10;

  const fetchTweets = async (offset = 0) => {
    try {
      const { data, error } = await supabase.from('Tweets').select('*').order('date', { ascending: false })
        .range(offset, offset + TWEETS_PER_PAGE - 1);

      if (error) throw error;
      if (data.length < TWEETS_PER_PAGE) setHasMore(false);

      if (offset === 0) setTweets(data);
      else setTweets(prevTweets => [...prevTweets, ...data]);

      setIsError(false);
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const addTweet = async (newTweet) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from('Tweets').insert([newTweet]).select();
      if (error) throw error;
      setTweets(prevTweets => [data[0], ...prevTweets]);
      return true;
    } catch (error) {
      console.error('Error adding tweet', error);
      setIsError(true);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setSession(data.session);
    } catch (error) {
      alert(error.message);
    }
  };

  const signup = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert("Registration successful! Please check your email to verify your account.");
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setTweets([]); 
  };

  const loadMoreTweets = () => {
    if (isLoading || !hasMore) return;
    fetchTweets(tweets.length);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoadingSession(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  useEffect(() => {
  if (session) {
    fetchTweets();
    } else {
      setTweets([])
    }
  }, [session]);

  return (
    <TweetContext.Provider value={{ tweets, isLoading, isError, userName, session, loadingSession, hasMore, addTweet, loadMoreTweets, updateUserName, login, logout, signup}}>
      {children}
    </TweetContext.Provider>
  );
};

