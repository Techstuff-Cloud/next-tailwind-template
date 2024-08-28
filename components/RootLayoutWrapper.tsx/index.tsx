'use client';

import { ThemeContext } from '@/lib/stores/theme';
import { Poppins } from 'next/font/google';
import React, { useContext } from 'react';
import UserLayout from '../UserLayout';
import { TooltipProvider } from '../ui/tooltip';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const RootLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { mode, theme } = useContext(ThemeContext);

  return (
    <html
      lang='en'
      className={mode}
    >
      <body
        data-theme={theme}
        className={poppins.className}
      >
        <TooltipProvider delayDuration={200}>
          <UserLayout>{children}</UserLayout>
        </TooltipProvider>
      </body>
    </html>
  );
};

export default RootLayoutWrapper;
