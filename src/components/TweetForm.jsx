import React, { useState } from 'react';
import Tweet from './Tweet';
const TweetForm = ({onSubmit}) => {
    const [tweet, setTweet] = useState("")
    const [isOver140, setIsOver140] = useState(false);
    const username ="Gabriela"
    
    const handleChange = (e) => {
        const newTweet = e.target.value;
        setTweet(e.target.value)
        setIsOver140(newTweet.length  > 140)
    }   
    
    const handleTweetSubmit =() => {
        onSubmit({ text: tweet, username: username })
        setTweet("")
    }
    
    return (
    <div className="create-tweet">
        <textarea 
        className="tweet-text" 
        onChange={handleChange} 
        value={tweet} 
        placeholder="What you have in mind...">
        </textarea>

        {isOver140 && (<p className="error">
            The tweet must be less than 140 characters.</p>)}

        <button className="tweet-btn" disabled={isOver140} onClick={handleTweetSubmit}>Tweet</button>
        <p className="over140"></p>
    </div>
  );
};

export default TweetForm;