import React from 'react';
import usePagination, { DOTS } from '../../infrastructure/hooks/usePagination';

interface iPaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  className?: string;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<iPaginationProps> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <div className="flex w-80 mx-auto items-center justify-around">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="hover:bg-gray-100 transition-all duration-300 rounded-full p-2 disabled:bg-transparent disabled:text-gray-400"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </span>
      </button>

      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <span className="p-1">&#8230;</span>;
        }

        return (
          <button
            key={pageNumber}
            className={`${
              pageNumber === currentPage ? 'bg-gray-100' : ''
            } px-4 py-2 rounded-full hover:bg-gray-100`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        disabled={currentPage === lastPage}
        onClick={onNext}
        className="hover:bg-gray-100 transition-all duration-300 rounded-full p-2 disabled:bg-transparent disabled:text-gray-400"
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Pagination;
