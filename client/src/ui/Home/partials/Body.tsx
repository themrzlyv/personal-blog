import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import Posts from '../../../components/Posts/Posts';
import { iResponseAllPosts } from '../../../infrastructure/common/types';
import { QueryId } from '../../../infrastructure/global/queries/QueryId';
import PostReq from '../../../infrastructure/global/requests/PostReq';

const Body = () => {
  const { data, isLoading, error } = useQuery(QueryId.GET_ALL_POSTS, () =>
    PostReq.getAllPosts({ limit: 2 }),
  );

  return (
    <div className="p-3">
      <h4 className="text-gray-400 text-xl">Last blog posts</h4>
      <Posts posts={data?.posts} isLoading={isLoading} error={error} />
      <div className="flex justify-center">
        <NavLink
          to="/blog"
          className={`text-cyan-600 hover:text-white relative px-16 py-1 rounded-full dark:text-white border border-cyan-600  hover:bg-cyan-600 transition-all duration-300`}
        >
          more post
        </NavLink>
      </div>
    </div>
  );
};

export default Body;
