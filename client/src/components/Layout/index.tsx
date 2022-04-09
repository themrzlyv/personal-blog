import React from 'react';
import NavBar from '../NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <main className="grid grid-rows-3 min-w-screen min-h-screen dark:bg-black transition duration-300">
      <NavBar />
      <div className="row-span-3 mt-16">
        <div className="max-w-4xl mx-auto h-full">{children}</div>
      </div>
      <div className="w-full">
        <div className="mx-auto max-w-sm flex justify-around">
          <h4 className="dark:text-white">2022 themrzlyv.herokuapp.com</h4>
          <h4 className="dark:text-white">Policy</h4>
          <h4 className="dark:text-white">Terms</h4>
        </div>
      </div>
    </main>
  );
};

export default Layout;
