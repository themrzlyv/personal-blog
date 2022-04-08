import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
  return <div className='dark:bg-black transition duration-500 w-screen h-screen'>
    <NavBar />
    <h1 className=' text-blue-600 dark:white'>Hello World</h1>
  </div>;
};

export default App;
