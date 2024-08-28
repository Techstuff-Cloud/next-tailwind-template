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
  }, [pathname]);

  return (
    <aside className={cn('sticky top-[82px] bg-surface-50 max-w-[268px] h-full overflow-x-hidden')}>
      <div className='h-full w-full flex border-r border-r-surface-100 transition-all max-h-[calc(100vh_-_82px)] overflow-y-auto scrollbar'>
        <div className={cn('h-full flex flex-col', hasSubOptions ? 'w-[68px]' : 'w-[268px]')}>
          <div
            className={cn(
              'min-h-[calc(100vh_-_82px)] w-full flex-1 p-2.5 box-border flex flex-col gap-40 justify-between',
              hasSubOptions && 'border-r border-r-surface-100'
            )}
          >
            <ul className='w-full flex flex-col gap-1.5'>
              {sidebarOptions.map((option) => (
                <Link
                  href={option.hasSubOptions ? option.subOptions[0]?.href : option.href}
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
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
