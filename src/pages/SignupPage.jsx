import React, { useState } from 'react';
import '../CSS/login.css'; 
import { useTweetContext } from '../context/useTweetContext';

const SignupPage = ({ onNavigate }) => {
  const { signup } = useTweetContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="login-container">
      <h2>Sign Up to Tweeter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Sign Up</button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <button 
          onClick={() => onNavigate('login')}
          style={{
            background: 'none',
            border: 'none',
            color: '#94d2bd',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '1em',
            padding: '0'
          }}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupPage;