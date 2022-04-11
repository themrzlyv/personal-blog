import React from 'react';

const Header = () => {
  return (
    <div className="p-3 mt-10">
      <h2 className="font-bold text-2xl my-3 dark:text-white">Hi!</h2>
      <p className="text-xl dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid deleniti
        aliquam autem delectus consequatur minima, illo veritatis veniam repellat maiores,
        necessitatibus quis sint nostrum recusandae itaque architecto voluptatem ipsa esse, mollitia
        illum sunt? Suscipit.
      </p>
      <p className="text-xl dark:text-white mt-3 mb-5">
        Lorem ipsum dolor sit{' '}
        <a href="youtube.com" className="text-gray-400">
          Youtube.com
        </a>{' '}
      </p>
    </div>
  );
};

export default Header;
