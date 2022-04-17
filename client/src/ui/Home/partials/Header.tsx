import React from 'react';

const Header = () => {
  return (
    <div className="p-3 my-10 border-b border-gray-200">
      <h2 className="font-bold flex items-center text-2xl my-3 dark:text-white">
        <span>
          <svg
            className="w-6 h-6 mr-1 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            ></path>
          </svg>
        </span>
        G'day, how's it going?
      </h2>
      <p className="text-lg font-extralight dark:text-white">
        I'm <b className="font-normal">Samir Mirzaliyev</b>, a Front-end Engineer & React Js
        Developer . At day, I'm working and thinking on a professional approach to improve existing
        products and address critical issues with infrastructure. As an industrious engineer, I deal
        with each field of development.
      </p>
      <p className="text-md font-light italic dark:text-white mt-5 mb-1">
        Currently working at{' '}
        <a href="https://cybernet.az" className="text-cyan-600 not-italic">
          CYBERNET LLC
        </a>{' '}
      </p>
      <p className="text-md font-light italic dark:text-white mb-5">
        Based in <span className="text-cyan-600 not-italic">Baku / Azerbaijan</span>
      </p>
    </div>
  );
};

export default Header;
