import { SettingContext } from '@/_context/ThemeContext';
import WrapperComponent from '@/app/demo/shadcn-atoms/WrapperComponent';
import { Toaster } from '@/components/ui/toaster';
import * as React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SettingContext>
      <WrapperComponent>
        {children}
        <Toaster />
      </WrapperComponent>
    </SettingContext>
  );
}
