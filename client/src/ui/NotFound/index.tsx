import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-3">
          <svg
            className="w-32 h-32 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            ></path>
          </svg>
        </span>
        <h1 className="font-bold text-3xl dark:text-white">404</h1>
        <p className="dark:text-white">Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
