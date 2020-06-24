import React, {useState} from 'react';
import './Search.scss'

const Search = ({fetchUser}) => {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(user);
    // setUser('');
  };

  return (
    <div className='search-component'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter a user'
          value={user}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;