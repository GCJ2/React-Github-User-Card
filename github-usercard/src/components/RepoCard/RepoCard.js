import React from 'react';
import './RepoCard.scss'

const RepoCard = ({repo}) => {
  return (
    <div className='repo-card'>
      <a href={repo.html_url} target='_blank'>{repo.name}</a>
      <p>{repo.language}</p>
    </div>
  );
};

export default RepoCard;