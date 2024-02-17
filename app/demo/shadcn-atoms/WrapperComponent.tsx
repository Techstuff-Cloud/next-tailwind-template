'use client';

import React, { useContext } from 'react';
import ThemeContext from '@/_context/ThemeContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
  const { mode, theme } = useContext(ThemeContext);

  return (
    <html lang='en' className={mode}>
      <body data-theme={theme} className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default WrapperComponent;
