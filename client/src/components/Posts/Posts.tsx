import moment from 'moment';
import React from 'react';
import { iPost } from '../../infrastructure/common/types';
import Post from '../Post';

interface iPostsProps {
  posts?: iPost[];
  isLoading?: boolean;
  error?: unknown;
}

const Posts: React.FC<iPostsProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
