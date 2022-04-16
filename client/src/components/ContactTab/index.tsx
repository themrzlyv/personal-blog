import { render } from '@testing-library/react';
import React from 'react';

interface iContactTabProps {
  children: React.FC<iContactTabNavItemProps> | React.ReactNode;
}

interface iContactTabNavItemProps {
  children: React.FC<any> | React.ReactNode;
  label: string;
  wrapperClass?: string;
  labelClass?: string;
}

export default class ContactTab extends React.Component<iContactTabProps> {
  static NavItem: React.FC<iContactTabNavItemProps> = ({ children, label, wrapperClass, labelClass }) => {
    return (
      <div className={`flex flex-col flex-1 ${wrapperClass}`}>
        <p className={`font-light text-gray-500 text-sm mb-2 ${labelClass}`}>{label}</p>
        {children}
      </div>
    );
  };

  render() {
    return (
      <div className="flex items-center w-full bg-gray-100 rounded-md p-5 my-5 shadow-md dark:bg-gray-800">
        {this.props.children}
      </div>
    );
  }
}