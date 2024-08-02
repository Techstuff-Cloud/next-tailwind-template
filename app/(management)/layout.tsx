import React from 'react';
import ManagementNavbar from './navbar';

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>ManagementLayout</div>
      <ManagementNavbar />

      {children}
    </>
  );
}
