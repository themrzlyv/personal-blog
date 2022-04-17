import React, { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useRouter from '../../infrastructure/hooks/useRouter';

interface iLink {
  name: string;
  key: string;
  url: string;
  index: number;
}

interface iTabsProps {
  links: iLink[];
}

const NavTabs: React.FC<iTabsProps> = ({ links }) => {
  const { location } = useRouter();
  const [activeTab, setActiveTab] = useState<iLink | undefined>(
    links.find(({ url }) => url === location.pathname),
  );

  const handleActiveTab = useCallback((activeLink) => setActiveTab(activeLink), []);

  const checkTabForLocation = useMemo(() => {
    if (activeTab) {
      if (activeTab?.url !== location.pathname) {
        setActiveTab(undefined);
      }
    }
  }, [activeTab, location.pathname]);

  const Tabs: React.FC<{ link: iLink }> = React.memo(({ link }) => {
    return (
      <NavLink
        to={link.url}
        onClick={() => {
          handleActiveTab(link);
        }}
        className={({ isActive }) =>
          `transition-all duration-150 h-9 w-24 flex items-center justify-center hover:text-white tracking-wide ${
            isActive ? 'text-white' : 'text-gray-500'
          } `
        }
      >
        {link.name}
      </NavLink>
    );
  });

  return (
    <div className="w-max relative">
      <div className="flex items-center justify-around">
        {links.map((link) => (
          <Tabs link={link} key={link.key} />
        ))}
      </div>
      {activeTab ? (
        <div
          className={`w-24 h-0.5 absolute bottom-0 bg-cyan-600 transition-all duration-300`}
          style={{ left: `${activeTab.index * 6}rem` }}
        />
      ) : null}
    </div>
  );
};

export default NavTabs;
