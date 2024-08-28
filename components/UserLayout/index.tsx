import { ReactNode, useCallback, useState } from 'react';
import Appbar from './Appbar';
import Sidebar from './Sidebar';

const UserLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebarToggleButton, setShowSidebarToggleButton] = useState(false);
  const [nestedSidebarExpanded, setNestedSidebarExpanded] = useState(false);

  const toggelNestedSidebarExpand = useCallback(() => {
    setNestedSidebarExpanded((show) => !show);
  }, []);

  return (
    <div className='min-h-screen h-full w-full bg-surface-50'>
      <header className='sticky top-0 z-50 w-full h-[82px]'>
        <Appbar
          onToggleSidebar={toggelNestedSidebarExpand}
          showSidebar={nestedSidebarExpanded}
          showToggleButton={showSidebarToggleButton}
        />
      </header>
      <main className='w-full flex'>
        <Sidebar
          nestedSidebarExpanded={nestedSidebarExpanded}
          setShowSidebarToggleButton={setShowSidebarToggleButton}
          setNestedSidebarExpanded={setNestedSidebarExpanded}
        />

        <div className='p-6 bg-body min-h-[calc(100vh_-_82px)] h-full flex-grow'>{children}</div>
      </main>
    </div>
  );
};

UserLayout.displayName = 'UserLayout';

export default UserLayout;
