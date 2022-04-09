import React from 'react';
import { useDarkMode } from '../../infrastructure/Contexts/ThemeContext';

import Man from '../../assets/man.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <header className="fixed top-0 w-full bg-black h-16">
      <nav className="max-w-6xl mx-auto h-full flex justify-between items-center">
        <div className="w-1/6 flex justify-around items-center">
          <div className="w-12 h-12 overflow-hidden flex justify-center rounded-full ">
            <img src={Man} className="object-contain" alt="profile" />
          </div>
          <h4 className="text-lg text-white">THEMRZLYV</h4>
        </div>
        <div className="w-1/6 flex items-center justify-around ">
          <NavLink to="/" className="text-white">
            About
          </NavLink>
          <NavLink to="/blog" className="text-white">
            Blog
          </NavLink>
          <NavLink to="/projects" className="text-white">
            Projects
          </NavLink>
          <span onClick={() => toggleTheme()} >
            {theme === 'dark' ? (
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
