import { dark, light } from '@theme/.';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

type ContextThemeProps = {
  children: ReactNode;
};

export const ContextTheme = createContext(() => {});

export function ContextThemeProvider({ children }: ContextThemeProps) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    const newTheme = theme?.title === 'dark' ? light : dark;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.title);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');

    const newTheme = storageTheme === 'light' ? light : dark;
    setTheme(newTheme);
  }, []);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>{children}</ThemeProvider>
  );
}
