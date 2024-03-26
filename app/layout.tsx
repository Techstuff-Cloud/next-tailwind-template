import { SettingContext } from '@/_context/ThemeContext';
import WrapperComponent from '@/app/demo/shadcn-atoms/WrapperComponent';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import * as React from 'react';
import './globals.css';
import AdminLayout from '@/components/AdminLayout';

export const metadata: Metadata = {
  title: 'Template Next App',
  description: 'Created with next-tailwind-template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SettingContext>
      <WrapperComponent>
        <AdminLayout>{children}</AdminLayout>
        <Toaster />
      </WrapperComponent>
    </SettingContext>
  );
}
