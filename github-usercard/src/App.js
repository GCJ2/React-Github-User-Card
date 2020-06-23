import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserDisplay from "./components/UserDispaly/UserDisplay"
import Search from './components/Search'
import Header from './components/header/Header'
import './App.css';

const App = () => {

  const [userInfo, setUserInfo] = useState(null);

  const fetchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then (res => {
        // console.log(res.data);
        setUserInfo(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  // useEffect(() => {
  //   fetchUser()
  // }, []);

  return (
    <div>
      <Header/>
      <Search fetchUser={fetchUser}/>
      <UserDisplay
        user={userInfo}/>
    </div>
  );
};

export default App;

