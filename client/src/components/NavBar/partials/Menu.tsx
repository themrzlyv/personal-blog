import React from 'react';
import { navMenuLinks } from '../../../infrastructure/common/data';
import SwitchTheme from '../../SwitchTheme';
import NavTabs from '../../Tab';

const Menu = () => {
  return (
    <div className="max-w-2/5 flex items-center justify-around px-2 ">
      <NavTabs links={navMenuLinks} />
      <SwitchTheme />
    </div>
  );
};

export default Menu;
