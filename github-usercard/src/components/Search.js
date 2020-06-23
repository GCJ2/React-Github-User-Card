import React, {useState} from 'react';

const Search = ({fetchUser}) => {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(user)
  };

  return (
    <div>
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