import React from 'react';
import './FollowerCard.scss'

const FollowerCard = ({follower}) => {

  return (
    <div className='follower-card'>
      <img src={follower.avatar_url} alt=""/>
      <a href={follower.html_url}>{follower.login}</a>
    </div>
  );
};

export default FollowerCard;