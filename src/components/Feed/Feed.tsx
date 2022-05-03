import React, { FC } from 'react';
import './Feed.css';

interface FeedProps {}

const Feed: FC<FeedProps> = () => (
  <div className="Feed" data-testid="Feed">
    Feed Component
  </div>
);

export default Feed;
