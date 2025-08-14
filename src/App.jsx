import { useState, useEffect } from 'react'
import './App.css'
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

function App() {
  const [tweets, setTweets] = useState(() => {
    const savedTweets = localStorage.getItem('tweets');
    return savedTweets ? JSON.parse(savedTweets) : [];
  });

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);
  const handleAddTweet = (newTweet) => {
    setTweets([{ ...newTweet, id: Date.now(), createdAt: new Date() }, ...tweets]);
  };

  return (
    <div className="main-screen"> 
      <TweetForm onSubmit={handleAddTweet}/>
      <TweetList tweets={tweets}/>
    </div>
  )
}

export default App
