'use client';
import React from 'react';
import SideBar from './SideBar';
import AppBar from './AppBar';

const AdminSideBar = ({ children }: any) => {
  return (
    <>
      <SideBar />
      <div className='lg:pl-72'>
        <AppBar />
        <main className=''>
          <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminSideBar;
