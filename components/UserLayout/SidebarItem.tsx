import { useMemo } from 'react';
import { iconsMapping } from './constants';

interface SidebarItemProps {
  iconName: string;
  label: string;
  onClick?: () => void;
}

export const SidebarItem = ({ iconName, label, onClick }: SidebarItemProps) => {
  const Icon = useMemo(() => iconsMapping[iconName as keyof typeof iconsMapping], [iconName]);

  return (
    <li
      onClick={onClick}
      className='w-full flex items-center gap-3 p-3 rounded-lg text-gray-500 text-sm bg-transparent hover:bg-primary-50 hover:text-primary-500 hover:cursor-pointer'
    >
      {Icon && (
        <Icon
          height={24}
          width={24}
          stroke='currentColor'
        />
      )}
      <p className='w-full truncate'>{label}</p>
    </li>
  );
};
