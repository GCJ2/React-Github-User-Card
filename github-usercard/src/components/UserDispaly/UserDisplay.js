import React, {useState, useEffect} from 'react';
import './UserDisplay.scss'
import Followers from "../followers/Followers";
import Repos from "../Repos/Repos";

const UserDisplay = ({user}) => {
  if (user) {
    console.log(user);
  }

  return (
    <div className='user-display'>
      {!user ? <h1 className='conditional-statement'>Please enter a GitHub User</h1>
        : <div className='user-card'>
          <div className='user-card-top'>
            <div className='top-row'>
              <img src={user.avatar_url} alt="User profile" className='profile-picture'/>
              <div className='right-content'>
                <div className='name-links'>
                  <h1>{user.name}</h1>
                  <a href={user.html_url} target='_blank'>@{user.login}</a>
                </div>
                <div className='about-content'>
                  <p>{user.bio}</p>
                  <p>{user.location}</p>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                  <a href={user.blog}>{user.blog}</a>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <div className='bottom-content'>
        {user ?
          <Repos reposURL={user.repos_url}/>
          : null}
        {user ?
          <Followers followersURL={user.followers_url}/>
          : null}
      </div>
    </div>
  );
};

export default UserDisplay;
