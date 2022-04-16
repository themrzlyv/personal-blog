import React from 'react';
import ContactTab from '../../../components/ContactTab';

const Header = () => {
  return (
    <div className="p-3 mt-10">
      <div className="w-full flex items-center">
        <p className="font-light italic mr-2 text-gray-500">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        </p>
        <p className="font-light text-gray-500">- Invictus by William Ernest Henley</p>
      </div>
      <ContactTab>
        <ContactTab.NavItem label="In need of a CV?">
          <a
            href="https://read.cv/themrzlyv"
            className="text-orange-500 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            There you go!
          </a>
        </ContactTab.NavItem>
        <ContactTab.NavItem label="In need of a CV?">
          <div className="flex items-center">
            <a href="">linkedin</a>
            <a href="">github</a>
            <a href="">instagram</a>
          </div>
        </ContactTab.NavItem>
        <ContactTab.NavItem label="In need of a CV?">
          <p>themirzaliyev@gmail.com</p>
        </ContactTab.NavItem>
      </ContactTab>
    </div>
  );
};

export default Header;
