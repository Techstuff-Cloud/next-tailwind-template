'use client';

import { ThemeContext } from '@/lib/stores/theme';
import { Inter } from 'next/font/google';
import React, { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
  const { mode, theme } = useContext(ThemeContext);

  return (
    <html
      lang='en'
      className={mode}
    >
      <body
        data-theme={theme}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
};

export default WrapperComponent;
