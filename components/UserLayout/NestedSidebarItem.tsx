import { cn } from '@/lib/utils/utils';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { forwardRef, useMemo } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { iconsMapping } from './constants';

interface NestedSidebarItemProps {
  iconName: string;
  label: string;
  isActivePath?: boolean;
  showNestedSidebar?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}

const ListItem = forwardRef(({ children, onClick, isActivePath, ...props }: any, ref: any) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      className={cn(
        'w-full h-[50px] flex items-center gap-2.5 p-3 text-gray-400 text-sm bg-transparent hover:cursor-pointer',
        isActivePath
          ? 'bg-primary-100/50 text-primary-500 font-medium'
          : 'hover:bg-primary-50/50 hover:text-primary-500'
      )}
      {...props}
    >
      {children}
    </li>
  );
});

ListItem.displayName = 'NestedSidebarListItem';

export const NestedSidebarItem = (props: NestedSidebarItemProps) => {
  const { iconName, label, isActivePath, onClick, expanded } = props;

  const Icon = useMemo(() => iconsMapping[iconName as keyof typeof iconsMapping], [iconName]);

  return expanded ? (
    <ListItem
      isActivePath={isActivePath}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className='min-w-6 min-h-6'
          stroke='currentColor'
        />
      )}
      <p className='w-full truncate'>{label}</p>
    </ListItem>
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <ListItem
          isActivePath={isActivePath}
          onClick={onClick}
        >
          {Icon && (
            <Icon
              className='min-w-6 min-h-6'
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
  );
};
