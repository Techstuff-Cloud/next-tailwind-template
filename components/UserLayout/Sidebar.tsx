import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { sidebarOptions } from './constants';
import { NestedSidebar } from './NestedSidebar';
import { SidebarItem } from './SidebarItem';
import { SidebarOption } from './types';

interface SidebarProps {
  setShowSidebarToggleButton: (show: boolean) => void;
  setNestedSidebarExpanded: (expand: boolean) => void;
  nestedSidebarExpanded: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const [activeOption, setActiveOption] = useState<SidebarOption | null>(null);
  const pathname = usePathname();

  const { setShowSidebarToggleButton, setNestedSidebarExpanded, nestedSidebarExpanded } = props;

  const hasSubOptions = useMemo(() => activeOption?.hasSubOptions, [activeOption]);

  const isActivePath = useCallback(
    (path: string) => {
      if (path === '/') {
        return pathname === path; // Match exactly for root route
      }
      return pathname.startsWith(path);
    },
    [pathname]
  );

  const handleSidebarLinkClick = useCallback((option: SidebarOption) => {
    if (option.hasSubOptions) {
      setActiveOption(option);
      setShowSidebarToggleButton(true);
      setNestedSidebarExpanded(true);
    } else {
      setActiveOption(null);
      setShowSidebarToggleButton(false);
      setNestedSidebarExpanded(false);
    }
  }, []);

  useEffect(() => {
    const option = sidebarOptions.find((option) => isActivePath(option.href));

    handleSidebarLinkClick(option as SidebarOption);
  }, []);

  return (
    <div
      className={cn(
        'bg-transparent max-w-[268px] max-h-[calc(100vh_-_82px)] flex border-r border-r-surface-100 transition-all overflow-x-hidden overflow-y-auto scrollbar'
      )}
    >
      <div className={cn(hasSubOptions ? 'w-[68px] border-r border-r-surface-100' : 'w-[268px]')}>
        <div className='h-full w-full p-2.5 box-border flex flex-col gap-40 justify-between'>
          <ul className='w-full flex flex-col gap-1.5'>
            {sidebarOptions.map((option) => (
              <Link
                href={option.href}
                key={option.id}
                onClick={() => handleSidebarLinkClick(option)}
              >
                <SidebarItem
                  iconName={option.iconName}
                  label={option.label}
                  isActivePath={isActivePath(option.href)}
                  showNestedSidebar={hasSubOptions}
                />
              </Link>
            ))}
          </ul>

          <ul className='w-full flex flex-col gap-1.5'>
            <SidebarItem
              label='Settings'
              iconName='settings'
              onClick={() => console.log('Settings')}
              showNestedSidebar={hasSubOptions}
            />
            <SidebarItem
              label='Logout'
              iconName='log-out'
              onClick={() => console.log('Logout')}
              showNestedSidebar={hasSubOptions}
            />
          </ul>
        </div>
      </div>

      {hasSubOptions && (
        <div
          className={cn(
            'h-full transition-all',
            hasSubOptions ? 'block' : 'hidden',
            nestedSidebarExpanded ? 'w-[200px]' : 'w-[50px]'
          )}
        >
          <NestedSidebar
            expanded={nestedSidebarExpanded}
            sidebarOptions={activeOption?.subOptions || []}
          />
        </div>
      )}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
