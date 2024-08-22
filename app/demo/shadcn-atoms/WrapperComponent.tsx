'use client';

import React, { useContext } from 'react';
import ThemeContext from '@/_context/ThemeContext';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
  const { mode, theme } = useContext(ThemeContext);

  return (
    <html lang='en' className={mode}>
      <body data-theme={theme} className={poppins.className}>
        {children}
      </body>
    </html>
  );
};

export default WrapperComponent;
