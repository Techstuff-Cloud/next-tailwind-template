'use client';

import { createContext, ReactNode, useState } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

interface ThemeContextProps {
  mode: string;
  theme: string;
  toggleColorMode: () => void;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  theme: '',
  toggleColorMode: () => {},
  setTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('omkala-theme');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'light' : 'light'));
  };

  return <ThemeContext.Provider value={{ mode, theme, toggleColorMode, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
