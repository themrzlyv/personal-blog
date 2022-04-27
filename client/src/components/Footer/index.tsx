import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-black transition-all duration-300 shadow-lg py-4 border-t">
      <div className="mx-auto max-w-sm flex justify-around">
        <p className="font-extralight text-xs dark:text-white">
          &#169; 2022 themrzlyv.herokuapp.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
