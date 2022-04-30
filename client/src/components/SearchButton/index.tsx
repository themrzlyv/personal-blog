import React, { useContext } from 'react';
import { AppContext } from '../../infrastructure/Contexts/AppContext/AppContext';

const SearchButton = () => {
  const { dispatch, initialState } = useContext(AppContext);
  const {
    appTools: { isSearchBoxVisible },
  } = initialState;
  return (
    <>
      <button
        className={`${isSearchBoxVisible ? 'text-white' : 'text-gray-500'} p-2 mr-2`}
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
    </>
  );
};

export default SearchButton;
