import { useState, useEffect } from 'react'
import './App.css'
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

function App() {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchTweets = async () => {
    try {
      const res = await fetch('https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo');
      const data = await res.json();
      console.log('Data from server:', data); 
      setTweets(data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const handleAddTweet = async(newTweet) => {
    setIsLoading(true)
    setIsError(false)
    try{
      const res = await fetch('https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTweet),
      })
      if (!res.ok) {
        throw new Error('Failed to post tweet.');
      }
      fetchTweets()
      return true
    } catch (error) {
      console.error('Error adding tweet', error)
      setIsError(true)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="main-screen"> 
      <TweetForm onSubmit={handleAddTweet}/>
      <TweetList tweets={tweets} isLoading={isLoading} isError={isError}/>
    </div>
  )
}

export default App
