'use client';

import * as React from 'react';
import { ReactNode } from 'react';

type SettingContextProps = {
  children: ReactNode;
};

interface ThemeContextProps {
  mode: string;
  theme: string;
  toggleColorMode: () => void;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  mode: 'light',
  theme: '',
  toggleColorMode: () => {},
  setTheme: () => {},
});

export function SettingContext({ children }: SettingContextProps) {
  const [mode, setMode] = React.useState('light');
  const [theme, setTheme] = React.useState('omkala-theme');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'light' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleColorMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
