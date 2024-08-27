import { ReactNode } from 'react';
import Appbar from './Appbar';
import Sidebar from './Sidebar';

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen h-full w-full bg-surface-50'>
      <div className='sticky top-0 z-50 w-full h-[82px]'>
        <Appbar />
      </div>
      <div className='w-full flex'>
        <Sidebar />

        <div className='p-6 bg-body min-h-[calc(100vh_-_82px)] h-full w-[calc(100%_-_268px)]'>{children}</div>
      </div>
    </div>
  );
};

UserLayout.displayName = 'UserLayout';

export default UserLayout;
