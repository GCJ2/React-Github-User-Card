import React from 'react';

const FollowerCard = ({follower}) => {

  return (
    <div>
      <p>{follower.login}</p>
    </div>
  );
};

export default FollowerCard;