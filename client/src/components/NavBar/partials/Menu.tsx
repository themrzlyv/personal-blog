import React, { useContext } from 'react';
import { navMenuLinks } from '../../../infrastructure/common/data';
import { AppContext } from '../../../infrastructure/Contexts/AppContext/AppContext';
import SwitchTheme from '../../SwitchTheme';
import NavTabs from '../../Tab';

const Menu = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="max-w-2/5 flex items-center justify-around px-2 ">
      <NavTabs links={navMenuLinks} />
      <button
        className="focus:text-white text-gray-500  p-2 mx-2"
        onClick={() => dispatch({ type: 'toggleSearchBox' })}
      >
        <span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
      </button>
      <SwitchTheme />
    </div>
  );
};

export default Menu;
