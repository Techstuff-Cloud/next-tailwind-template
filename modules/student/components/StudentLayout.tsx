import React from 'react';
import StudentSideNavbar from './StudentSideNavbar';
import { StudentLayoutProps } from '../types';

const StudentLayout = ({ children }: StudentLayoutProps) => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar */}
      <StudentSideNavbar />

      {/* Main Content */}
      <main className='flex-1 p-6 bg-surface-400'>{children}</main>
    </div>
  );
};

export default StudentLayout;
