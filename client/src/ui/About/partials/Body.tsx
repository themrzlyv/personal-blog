import React from 'react';

import ProfilePhoto from '../../../assets/profile_photo.jpg';
import WorkList from '../../../components/WorkList';
import { workListData } from '../../../infrastructure/common/data';
import Connection from '../blocks/Connection';
import GeneralInfos from '../blocks/GeneralInfos';

const Body = () => {
  return (
    <>
      <div className="p-3 flex flex-wrap w-full ">
        <GeneralInfos />
        <div className='w-full'>
          <WorkList list={workListData} />
        </div>
        <Connection />
      </div>
    </>
  );
};

export default Body;
