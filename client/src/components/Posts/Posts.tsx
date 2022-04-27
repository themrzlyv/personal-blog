import React from 'react';
import { iPost } from '../../infrastructure/common/types';
import EmptyData from '../EmptyData';
import NetworkError from '../NetworkError';
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
    return <NetworkError error={error} />;
  }

  if (!posts || posts.length === 0) {
    return <EmptyData />;
  }

  return (
    <div>
      {posts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
