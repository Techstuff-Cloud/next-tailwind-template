import { cn } from '@/lib/utils/utils';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { forwardRef, useMemo } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { iconsMapping } from './constants';

interface SidebarItemProps {
  iconName: string;
  label: string;
  isActivePath?: boolean;
  showNestedSidebar?: boolean;
  onClick?: () => void;
}

const ListItem = forwardRef(({ children, onClick, isActivePath, ...props }: any, ref: any) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 p-3 rounded-xl text-gray-500 text-sm bg-transparent hover:cursor-pointer',
        isActivePath ? 'bg-primary-500 text-gray-50' : 'hover:bg-primary-50 hover:text-primary-500'
      )}
      {...props}
    >
      {children}
    </li>
  );
});

ListItem.displayName = 'ListItem';

export const SidebarItem = ({ iconName, label, isActivePath, onClick, showNestedSidebar }: SidebarItemProps) => {
  const Icon = useMemo(() => iconsMapping[iconName as keyof typeof iconsMapping], [iconName]);

  return showNestedSidebar ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <ListItem
          isActivePath={isActivePath}
          onClick={onClick}
        >
          {Icon && (
            <Icon
              height={24}
              width={24}
              stroke='currentColor'
            />
          )}
        </ListItem>
      </TooltipTrigger>
      <TooltipContent
        side='right'
        className='bg-primary-500 text-gray-50 z-50 border-primary-500'
      >
        <p>{label}</p>
        <TooltipArrow className='fill-primary-500' />
      </TooltipContent>
    </Tooltip>
  ) : (
    <ListItem
      isActivePath={isActivePath}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          height={24}
          width={24}
          stroke='currentColor'
        />
      )}
      <p className='w-full truncate'>{label}</p>
    </ListItem>
  );
};
