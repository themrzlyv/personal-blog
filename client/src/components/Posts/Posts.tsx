import React from 'react';
import { iPost } from '../../infrastructure/common/types';
import Post from '../Post';
import PostSkeleton from '../PostSkeleton';

interface iPostsProps {
  posts?: iPost[];
  isLoading?: boolean;
  error?: unknown;
}

const Posts: React.FC<iPostsProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </>
    );
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
