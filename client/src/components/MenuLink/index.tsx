import React from 'react';
import { NavLink } from 'react-router-dom';
import useRouter from '../../infrastructure/hooks/useRouter';

interface iMenuProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
}

const MenuLink: React.FC<iMenuProps> = ({ children, to, className, onClick }) => {
  return (
    <div className="relative py-3">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => {
          return `${className} ${isActive ? 'text-white' : 'text-gray-500'}`;
        }}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MenuLink;
