import React from 'react'
import { useQuery } from 'react-query';
import { QueryId } from '../../../infrastructure/global/queries/QueryId';
import PostReq from '../../../infrastructure/global/requests/PostReq';
import Posts from '../../../components/Posts/Posts'

const Body = () => {
  const { data, isLoading, error } = useQuery(QueryId.GET_ALL_POSTS, () =>
    PostReq.getAllPosts({ limit: 2 }),
  );
  return (
    <div className='p-3'>
        <h4 className='text-gray-400 text-xl'>Last blog posts</h4>
        <Posts posts={data?.posts} isLoading={isLoading} error={error} />
    </div>
  )
}

export default Body