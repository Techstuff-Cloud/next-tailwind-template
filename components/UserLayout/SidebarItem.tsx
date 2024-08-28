import { cn } from '@/lib/utils/utils';
import { useMemo } from 'react';
import { iconsMapping } from './constants';

interface SidebarItemProps {
  iconName: string;
  label: string;
  isActivePath?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({ iconName, label, isActivePath, onClick }: SidebarItemProps) => {
  const Icon = useMemo(() => iconsMapping[iconName as keyof typeof iconsMapping], [iconName]);

  return (
    <li
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 p-3 rounded-lg text-gray-500 text-sm bg-transparent hover:cursor-pointer',
        isActivePath ? 'bg-primary-500 text-gray-50' : 'hover:bg-primary-50 hover:text-primary-500'
      )}
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
