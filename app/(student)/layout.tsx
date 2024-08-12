import { StudentLayoutTabs } from '@/modules/student';
import React from 'react';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>StudentLayout</div>
      <StudentLayoutTabs />
      {children}
    </>
  );
};

StudentLayout.displayName = 'StudentLayout';
export default StudentLayout;
