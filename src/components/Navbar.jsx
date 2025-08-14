import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('profile')}>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;