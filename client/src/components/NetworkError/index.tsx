import React from 'react'


interface iProps {
    error: any
}

const NetworkError: React.FC<iProps> = ({ error }) => {
  return (
    <div className="bg-gray-100 dark:bg-stone-900 opacity-50 my-5 w-full flex items-center justify-center">
      <div className="my-16 flex flex-col items-center justify-center">
        <span className="mb-5">
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
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            ></path>
          </svg>
        </span>
        <p className='dark:text-white'>There is a connection problem with the Server</p>
      </div>
    </div>
  );
}

export default NetworkError