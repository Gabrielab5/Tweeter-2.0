import React from 'react';
import { useTweetContext } from '../context/useTweetContext';

const Navbar = ({ onNavigate }) => {
  const { session, logout } = useTweetContext();

  const handleLogout = () => {
    logout();
    onNavigate('home'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {session ? (
        <>
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('profile')}>Profile</button>
        <button onClick={handleLogout}>Logout</button>
        </> ) : (
        <button onClick={() => onNavigate('login')}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;