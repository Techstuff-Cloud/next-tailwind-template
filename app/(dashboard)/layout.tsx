import { SideNavbarComponent } from '@/components/SideNavbar';
import TopNavbarComponent from '@/components/TopNavbar';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Template Next App',
  description: 'Created with next-tailwind-template',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <SideNavbarComponent />
      <div className='flex flex-col w-full'>
        <TopNavbarComponent />
        {children}
        <Toaster />
      </div>
    </div>
  );
}
