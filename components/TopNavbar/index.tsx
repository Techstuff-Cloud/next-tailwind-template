import * as React from 'react';
import DropdownMenuComponent from '@/app/demo/shadcn-atoms/dropdown/page';
import { ModeSwitchButton } from '@/components/ModeSwitchButton';

const TopNavbarComponent = () => {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between bg-surface-100-800-token p-4 shadow-md'>
      <h1 className='text-2xl font-bold'>Shadcn</h1>

      <DropdownMenuComponent />

      <ModeSwitchButton />
    </div>
  );
};

export default TopNavbarComponent;
