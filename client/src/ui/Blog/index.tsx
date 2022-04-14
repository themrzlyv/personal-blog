import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Pagination from '../../components/Pagination';
import Posts from '../../components/Posts/Posts';
import { QueryId } from '../../infrastructure/global/queries/QueryId';
import PostReq from '../../infrastructure/global/requests/PostReq';

let PageSize = 1;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    [QueryId.GET_ALL_POSTS, currentPage, PageSize],
    () => PostReq.getAllPosts({ limit: PageSize, page: currentPage }),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col p-3 ">
      {/* <div className="flex w-full my-5 ">
        <input
          type="text"
          placeholder="Search..."
          className="border text-lg dark:bg-transparent dark:text-white flex-1 indent-2 focus:outline-none"
        />
        <button className="px-3 py-2 border focus:border-cyan-600 dark:text-white">Search</button>
      </div> */}
      <div className="p-3">
        <Posts posts={data?.posts} isLoading={isLoading} error={error} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data?.totalPosts as number}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Blog;
