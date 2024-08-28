import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { sidebarOptions } from './constants';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  setShowSidebarToggleButton: (show: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const [activeOption, setActiveOption] = useState<(typeof sidebarOptions)[number] | null>(null);
  const pathname = usePathname();

  const { setShowSidebarToggleButton } = props;

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

  const handleSidebarLinkClick = useCallback((option: (typeof sidebarOptions)[number]) => {
    if (option.hasSubOptions) {
      setActiveOption(option);
      setShowSidebarToggleButton(true);
    } else {
      setActiveOption(null);
      setShowSidebarToggleButton(false);
    }
  }, []);

  useEffect(() => {
    const option = sidebarOptions.find((option) => isActivePath(option.href));

    handleSidebarLinkClick(option as (typeof sidebarOptions)[number]);
  }, []);

  return (
    <div
      className={cn(
        'bg-transparent max-h-[calc(100vh_-_82px)] border-r border-r-surface-100 transition-all',
        hasSubOptions ? 'w-[68px] max-w-[68px]' : 'w-[268px] max-w-[268px]'
      )}
    >
      <div className='h-full w-full p-2.5 box-border flex flex-col gap-40 justify-between  overflow-y-auto scrollbar'>
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
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
