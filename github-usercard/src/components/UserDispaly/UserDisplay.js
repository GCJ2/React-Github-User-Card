import React from 'react';
import './UserDisplay.scss'
import Followers from "../followers/Followers";
import Repos from "../Repos/Repos";

const UserDisplay = ({user, trigger, setTrigger}) => {
  if (user) {
    console.log(user);
  }

  return (
    <div>
      {!user ? <h1>Please enter a GitHub User</h1>
        : <div className='user-card'>
          <img src={user.avatar_url} alt="User profile" className='profile-picture'/>
          <div className='user-card-top'>
            <div className='user-card-top-row'>
              <div className='user-card-left-content'>
                <div className='name-link'>
                  <h1>{user.name}</h1>
                  <h4>@{user.login}</h4>
                </div>
                <p>{user.bio}</p>
                <p>{user.location}</p>
                <p>{user.blog}</p>
              </div>
              <div className='user-card-right-content'>
                <div className='followers-following'>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <div className='bottom-content'>
        {user ?
          <Followers followersURL={user.followers_url}
                     trigger={trigger}
                     setTrigger={setTrigger}/>
          : null}
        {/*<Repos/>*/}
      </div>
    </div>
  );
};

export default UserDisplay;
