'use client';

import Tabs from '@/components/UI/Tabs/Tabs';
import React from 'react';
import { studentLayoutTabsData } from '../constants';
import { Tab } from '@/components/UI/Tabs';
import { StudentLayoutTabItem } from '../types';
import { useRouter } from 'next/navigation';

const StudentLayoutTabs = () => {
  const router = useRouter();

  const handleTabChange = (tab: Tab<StudentLayoutTabItem>) => {
    router.push(tab.href);
  };

  return (
    <div className='p-6'>
      <Tabs<StudentLayoutTabItem>
        tabs={studentLayoutTabsData}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

StudentLayoutTabs.displayName = 'StudentLayoutTabs';
export default StudentLayoutTabs;
