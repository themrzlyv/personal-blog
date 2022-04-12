import moment from 'moment';
import React from 'react';
import { iPost } from '../../infrastructure/common/types';

interface iPostsProps {
  posts?: iPost[];
  isLoading?: boolean;
  error?: unknown;
}

const Posts: React.FC<iPostsProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="w-full my-7 p-5 flex flex-col shadow-md border hover:border-cyan-600 rounded-sm dark:border-gray-700 dark:hover:border-cyan-600"
        >
          <div className="mb-3 flex items-center">
            <h6 className=" text-gray-400 text-sm font-light">
              {moment(post.createdAt).format('D MMM YYYY')}
            </h6>
            <span className="text-gray-400 mx-2">|</span>
            <h6 className="text-gray-400 text-sm font-light">{moment(post.createdAt).fromNow()}</h6>
          </div>

          <div className="flex flex-col mb-5">
            <h4 className="dark:text-white text-2xl font-semibold mb-3">{post.title}</h4>
            <p className="text-gray-400 text-xl font-light">{post.content}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                className="w-4 h-4 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                ></path>
              </svg>
            </span>
            {post.tags.map((tag) => (
              <p key={tag._id} className="text-sm dark:text-gray-200 font-light">
                {tag.tagName}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
