import React, { useState } from 'react';
import '../profile.css';

const ProfilePage = ({ userName, onUserNameChange }) => {
  const [newUserName, setNewUserName] = useState(userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName && newUserName !== userName) {
      onUserNameChange(newUserName);
      alert('Username updated successfully!');
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile Settings</h2>
      <p>Current Username: <strong>{userName}</strong></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Change Username:</label>
          <input
            id="username"
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter new username"
          />
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;