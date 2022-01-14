import React from 'react';
import './feed-container.scss';

function FeedContainer({ children }) {
  return (
    <div className="feed-container">
      {children}
    </div>
  )
}

export default FeedContainer;

