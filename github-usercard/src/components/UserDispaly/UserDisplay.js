import React from 'react';
import './UserDisplay.scss'

const UserDisplay = ({user}) => {
  if (user) {
    console.log(user);
  }

  return (
    <div>
      {!user ? <h1>Please enter a GitHub User</h1>
        : <div className='user-card'>
          <img src={user.avatar_url} alt=""/>
          <div className='user-card-top'>
            <div className='user-card-top-row'>
              <div className='user-card-left-content'>
                <h1>{user.name}</h1>
                <p>{user.login}</p>
                <p>{user.bio}</p>
                <p>{user.location}</p>
              </div>
              <div className='user-card-right-content'>
                <div className='user-card-right-top'>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                </div>
              </div>
            </div>
          </div>
        </div>}

    </div>
  );
};

export default UserDisplay;
