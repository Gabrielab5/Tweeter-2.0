import React, { createContext, useState, useEffect} from 'react';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Anon';
  });

  const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MDI5NjAsImV4cCI6MjA2OTcwNjk2MH0.iV8eGgVzS85f_9lW6n9P5V6_j9J_t5Xy1Yj3_q3K8oI';
  const API_URL = 'https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets';

  const fetchTweets = async () => {
    try {
      const res = await fetch(`${API_URL}?apikey=${API_KEY}`);
      if (!res.ok) throw new Error('Failed to fetch tweets.');
      const data = await res.json();
      setTweets(data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setIsError(true);
    }
  };

  const addTweet = async (newTweet) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}?apikey=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTweet),
      });
      if (!res.ok) throw new Error('Failed to post tweet.');
      
      const addedTweet = await res.json();
      setTweets(prevTweets => [addedTweet[0], ...prevTweets]);

      return true;
    } catch (error) {
      console.error('Error adding tweet', error);
      setIsError(true);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  useEffect(() => {
    fetchTweets();
    const intervalId = setInterval(fetchTweets, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TweetContext.Provider value={{ tweets, isLoading, isError, userName, addTweet, updateUserName }}>
      {children}
    </TweetContext.Provider>
  );
};

