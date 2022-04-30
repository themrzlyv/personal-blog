import React from 'react';
import { navMenuLinks } from '../../../infrastructure/common/data';
import MediumButton from '../../MediumButton';
import SearchButton from '../../SearchButton';
import SwitchTheme from '../../SwitchTheme';
import NavTabs from '../../Tab';

const Menu = () => {

  return (
    <div className="w-3/6 flex items-center  justify-around px-2 ">
      <NavTabs links={navMenuLinks} />
      <SearchButton />
      <SwitchTheme />
      <div className="px-3 ml-2 rounded-md bg-orange-500">
        <MediumButton />
      </div>
    </div>
  );
};

export default Menu;
