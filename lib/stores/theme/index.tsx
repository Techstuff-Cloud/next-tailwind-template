"use client";

import { createContext, ReactNode, useState } from "react";

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
  mode: "dark",
  theme: "",
  toggleColorMode: () => {},
  setTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState("dark");
  const [theme, setTheme] = useState("my-custom-theme-one");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleColorMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
