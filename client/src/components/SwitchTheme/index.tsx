import React from 'react';
import { useDarkMode } from '../../infrastructure/Contexts/ThemeContext';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
      <div className="relative flex items-center border border-cyan-600 justify-between w-20 px-2 py-1 bg-gray-700 rounded-full">
        <span
          className={`w-6 h-6 rounded-full bg-white top-1  ${
            theme !== 'dark' ? 'translate-x-10 bg-white' : 'translate-x-0 bg-gray-300'
          }  transition-transform ease-in-out duration-500 absolute`}
        ></span>
        <span onClick={toggleTheme}>
          <svg
            className="w-6 h-6 text-yellow-500 transition duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </span>

        <span onClick={toggleTheme}>
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default SwitchTheme;
