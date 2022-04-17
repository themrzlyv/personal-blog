import React from 'react';
import { generateKey } from '../../infrastructure/common/functions';

interface listItem {
  companyName: string;
  position: string;
  startDate: string;
  isCurrent: boolean;
}

interface iWorkListProps {
  list: listItem[];
}

interface iWorkListItemProps {
  item: listItem;
}

const WorkListItem: React.FC<iWorkListItemProps> = ({ item }) => {
  return (
    <li className="flex items-center py-2">
      <div className="flex items-center justify-center p-3">
        {item.isCurrent ? (
          <div className="h-2 w-2 rounded-lg bg-cyan-500 " />
        ) : (
          <div className="h-2 w-2 rounded-lg bg-transparent border border-black dark:border-white" />
        )}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm uppercase text-cyan-800">{item.companyName}</p>
        <p className="flex items-center">
          <span className="font-light text-sm italic dark:text-white transition-all duration-300">
            {item.position}
          </span>
          <span className="mx-2">&#9900;</span>
          <span className="font-light text-sm dark:text-white transition-all duration-300">{`Since ${item.startDate}`}</span>
        </p>
      </div>
    </li>
  );
};

const WorkList: React.FC<iWorkListProps> = ({ list }) => {
  return (
    <ul className="relative">
      {list.map((item) => (
        <WorkListItem key={generateKey(item.startDate)} item={item} />
      ))}
    </ul>
  );
};

export default WorkList;
