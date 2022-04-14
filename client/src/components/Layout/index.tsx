import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <main className="grid grid-rows-3 min-w-screen min-h-screen dark:bg-stone-900 transition duration-300">
      <NavBar />
      <div className="row-span-3 mt-16">
        <div className="max-w-3xl mx-auto h-full">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
