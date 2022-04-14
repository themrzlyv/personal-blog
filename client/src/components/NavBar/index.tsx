import React from 'react';
import MainLogo from './partials/MainLogo';
import Menu from './partials/Menu';


const NavBar = () => {
  return (
    <header className="fixed top-0 w-full bg-black h-16 z-10">
      <nav className="max-w-6xl mx-auto h-full flex justify-between items-center">
        <MainLogo />
        <Menu />
      </nav>
    </header>
  );
};

export default NavBar;
