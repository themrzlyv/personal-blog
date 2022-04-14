import React, { useContext } from 'react';
import { AppContext } from '../../infrastructure/Contexts/AppContext/AppContext';
import Modal from '../Modal';

const SearchBox = () => {
  const { initialState, dispatch } = useContext(AppContext);
  const {
    appTools: { isSearchBoxVisible },
  } = initialState;

  return (
    <Modal
      show={isSearchBoxVisible}
      onClose={() => dispatch({ type: 'toggleSearchBox' })}
      innerClose
    >
      <div className='flex items-center'>
        <input type="text" className='border flex-1 focus:outline-none text-lg py-1 indent-1 rounded-tl-md rounded-bl-md my-3 p-2' placeholder='Search post...' />
        <button className='w-16 h-10 flex items-center justify-center hover:bg-gray-100 transition-all duration-500'>
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
        </button>
      </div>
    </Modal>
  );
};

export default SearchBox;
