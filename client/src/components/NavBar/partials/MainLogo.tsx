import React from 'react';
import Man from '../../../assets/man.png';
import MenuLink from '../../MenuLink';


const MainLogo = () => {
  return (
    <div className="max-w-1/6 flex justify-around items-center">
      <div className="w-12 h-12 overflow-hidden flex justify-center rounded-full ">
        <img src={Man} className="object-contain" alt="profile" />
      </div>
      <MenuLink to="/" className='text-white'>
        THEMRZLYV
      </MenuLink>
    </div>
  );
}

export default MainLogo