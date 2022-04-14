import moment from 'moment';
import React from 'react';
import { iPost } from '../../infrastructure/common/types';

interface iProps {
  post: iPost;
}
const Post: React.FC<iProps> = ({ post }) => {
  return (
    <div
      key={post._id}
      className="w-full my-7 p-5 flex flex-col shadow-md border relative rounded-sm  dark:border-gray-700 before:absolute before:w-full before:h-full before:left-0 before:top-0 before:scale-y-0 hover:before:scale-y-100 before:transition-all before:duration-500 before:border-cyan-600 before:border-l  before:border-r after:absolute after:w-full after:h-full after:left-0 after:top-0 after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-500 after:border-cyan-600 after:border-t after:border-b"
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
        <p className="text-gray-500 text-xl font-light">{post.content}</p>
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
  );
};

export default Post;
