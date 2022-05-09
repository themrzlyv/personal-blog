import moment from 'moment';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import EmptyData from '../../components/EmptyData';
import NetworkError from '../../components/NetworkError';
import PreLoader from '../../components/PreLoader';
import { QueryId } from '../../infrastructure/global/queries/QueryId';
import PostReq from '../../infrastructure/global/requests/PostReq';
import useRouter from '../../infrastructure/hooks/useRouter';

const PostDetail = () => {
  const { location } = useRouter();
  const splitId = location.pathname.split('/')[2].split('-');
  const postId = splitId[splitId.length - 1];

  const { data, isLoading, error } = useQuery(
    [QueryId.GET_POST_BY_ID, postId],
    () => PostReq.getPostById(postId),
    {
      enabled: !!postId,
    },
  );

  console.log(postId, 'postId');

  if (isLoading) return <PreLoader />;
  if (error) return <NetworkError error={error} />;
  if (!data) return <EmptyData />;

  return (
    <div className="h-screen mb-20">
      <div
        style={{ backgroundImage: `url(${data.post.images[0]})` }}
        className="w-full h-[30rem] bg-no-repeat bg-center bg-[length:50rem_30rem] bg-fixed"
      />
      <div className="w-full dark:bg-gray-600 bg-gray-100 my-5 p-5 rounded-md">
        <div className="mb-2 flex items-center">
          <h6 className=" text-gray-400 text-sm font-light">
            {moment(data.post.createdAt).format('D MMM YYYY')}
          </h6>
          <span className="text-gray-400 mx-2">|</span>
          <h6 className="text-gray-400 text-sm font-light">
            {moment(data.post.createdAt).fromNow()}
          </h6>
        </div>
        <h4 className="text-lg font-normal mb-2 dark:text-white text-black">{data.post.title}</h4>
        <div className="flex items-center">
          <span className="mr-2">
            <svg
              className="w-4 h-4 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
          </span>
          {data.post.tags.map(({ tag }, idx) => (
            <NavLink
              to={`/tag/${tag.tagName}-${tag.id}`}
              key={tag.id}
              className="text-sm dark:hover:text-cyan-600  hover:text-cyan-600 dark:text-gray-200 font-extralight"
            >
              {tag.tagName}
              {idx !== data.post.tags.length - 1 && <span className="mx-2">|</span>}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="my-5">
        <p className="font-extralight text-current dark:text-gray-100">{data.post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
