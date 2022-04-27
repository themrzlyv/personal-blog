import React, { useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { AppContext } from '../../infrastructure/Contexts/AppContext/AppContext';
import PostReq from '../../infrastructure/global/requests/PostReq';
import Modal from '../Modal';
import Posts from '../Posts/Posts';

const SearchBox = () => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { initialState, dispatch } = useContext(AppContext);
  const {
    appTools: { isSearchBoxVisible },
  } = initialState;

  const { mutate, data, isLoading, error, reset } = useMutation('mutationid', PostReq.getAllPosts, {
    onMutate: () => {
      setSearchInput('');
    },
  });

  const handleSearch = React.useCallback(() => {
    if (searchInput) {
      mutate({ search: searchInput });
    }
  }, [searchInput, mutate]);

  useEffect(() => {
    if (!isSearchBoxVisible) {
      setSearchInput('');
      reset();
    }
  }, [isSearchBoxVisible, reset]);

  return (
    <Modal
      show={isSearchBoxVisible}
      modalContainerClassName="pb-3 px-3"
      onClose={() => dispatch({ type: 'toggleSearchBox' })}
      innerClose
    >
      <div className="flex items-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="border flex-1 focus:outline-none text-lg h-10 mr-1 indent-1 rounded-tl-md rounded-bl-md my-3"
          placeholder="Search post..."
        />
        <button
          onClick={handleSearch}
          disabled={!searchInput || isLoading}
          className="w-16 h-10 flex items-center justify-center dark:text-black dark:bg-white hover:bg-gray-100 disabled:text-gray-300 disabled:bg-transparent transition-all duration-500"
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
      </div>
      {data && !error && !isLoading && (
        <div className="flex items-center dark:text-white">
          <p className="font-light mr-2">Result for:</p>
          <p className="font-semibold ">{data.search}</p>
        </div>
      )}
      {data && !error && !isLoading && (
        <Posts posts={data.posts} isLoading={isLoading} error={error} />
      )}
    </Modal>
  );
};

export default SearchBox;
