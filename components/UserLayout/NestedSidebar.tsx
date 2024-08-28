import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { NestedSidebarItem } from './NestedSidebarItem';
import { SidebarOption } from './types';

interface NestedSidebarProps {
  sidebarOptions: SidebarOption[];
  expanded: boolean;
}

export const NestedSidebar = (props: NestedSidebarProps) => {
  const pathname = usePathname();
  const { expanded, sidebarOptions } = props;

  const isActivePath = useCallback(
    (path: string) => {
      if (path === '/') {
        return pathname === path; // Match exactly for root route
      }
      return pathname.startsWith(path);
    },
    [pathname]
  );

  return (
    <div className='w-full h-full py-2.5 transition-all'>
      <ul className='w-full h-full'>
        {sidebarOptions.map((option) => (
          <Link
            key={option.id}
            href={option.href}
          >
            <NestedSidebarItem
              iconName={option.iconName}
              label={option.label}
              expanded={expanded}
              isActivePath={isActivePath(option.href)}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};
