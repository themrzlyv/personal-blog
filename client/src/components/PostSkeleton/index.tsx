import React from 'react';
import Skeleton from 'react-loading-skeleton';

const PostSkeleton: React.FC = () => {
  return (
    <div className="w-full my-7 p-5 shadow-md border relative rounded-sm">
      <div className="flex items-center mb-3">
        <Skeleton width={150} height={10} />
        <span className="mx-2 text-gray-300">|</span>
        <Skeleton width={150} height={10} />
      </div>
      <Skeleton width={300} height={20} className="mb-5" />
      <Skeleton height={12} className="mb-5" />
      <Skeleton width={270} height={12} />
    </div>
  );
};

export default PostSkeleton;
