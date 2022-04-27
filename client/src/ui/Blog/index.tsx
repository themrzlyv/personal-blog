import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Pagination from '../../components/Pagination';
import Posts from '../../components/Posts/Posts';
import PreLoader from '../../components/PreLoader';
import { QueryId } from '../../infrastructure/global/queries/QueryId';
import PostReq from '../../infrastructure/global/requests/PostReq';

let PageSize = 4;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    [QueryId.GET_ALL_POSTS, currentPage, PageSize],
    () => PostReq.getAllPosts({ limit: PageSize, page: currentPage }),
    {
      keepPreviousData: true,
    },
  );

  return (
    <div className="flex flex-col p-3 ">
      <div className="p-3">
        <Posts posts={data?.posts} isLoading={isLoading} error={error} />
      </div>
      {!data || data.posts.length === 0 || error || isLoading ? null : (
        <Pagination
          currentPage={currentPage}
          totalCount={data?.totalPosts as number}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Blog;
