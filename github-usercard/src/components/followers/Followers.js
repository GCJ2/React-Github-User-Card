import React, {useState, useEffect} from 'react';
import axios from 'axios'
import FollowerCard from "../FollowerCard/FollowerCard";

const Followers = ({followersURL}) => {
  const [followers, setFollowers] = useState([]);

  const fetchFollowers = () => {
    axios.get(followersURL)
      .then(res => {
        // console.log(res.data);
        setFollowers(res.data)
      })
      .catch(err => console.error())
  };

  useEffect(() => {
    fetchFollowers()
  }, []);

  if (followers.length !== 0) {
    console.log(followers)
  }

  return (
    <div>
      <h2>Followers</h2>
      {followers.map(follower => (
        <FollowerCard key={follower.id} follower={follower}/>
      ))}
    </div>
  );
};

export default Followers;