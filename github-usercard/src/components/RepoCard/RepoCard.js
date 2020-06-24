import React from 'react';
import './RepoCard.scss'

const RepoCard = ({repo}) => {
  return (
    <div className='repo-card'>
      <a href={repo.html_url} target='_blank'>{repo.name}</a>
      {/*<h3>{repo.name}</h3>*/}
      <p>{repo.language}</p>
    </div>
  );
};

export default RepoCard;