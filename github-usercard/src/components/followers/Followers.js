import React, {useState, useEffect} from 'react';
import axios from 'axios'
import FollowerCard from "../FollowerCard/FollowerCard";
import './Followers.scss'

const Followers = ({followersURL}) => {
  const [followers, setFollowers] = useState([]);

  const fetchFollowers = () => {
    axios.get(followersURL)
      .then(res => {
        setFollowers(res.data)
      })
      .catch(err => console.error())
  };

  useEffect(() => {
    fetchFollowers()
  }, [followersURL]);

  if (followers.length !== 0) {
    console.log(followers)
  }

  return (
    <div className='followers'>
      <h2>Followers</h2>
      <div className='followers-list'>
        {followers.map(follower => (
          <FollowerCard key={follower.id} follower={follower}/>
        ))}
      </div>
    </div>
  );
};

export default Followers;