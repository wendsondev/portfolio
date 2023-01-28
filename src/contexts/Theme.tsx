import { dark, light } from '@theme/.';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

type ContextThemeProps = {
  children: ReactNode;
};

export const ContextTheme = createContext(() => {});

export function ContextThemeProvider({ children }: ContextThemeProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    const newTheme = theme?.title === 'dark' ? dark : light;

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.title);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');
    const preferIsDark = window.matchMedia('(prefers-color-scheme: dark)');

    const newTheme = storageTheme === 'dark' || preferIsDark ? dark : light;
    setTheme(newTheme);
  }, []);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>{children}</ThemeProvider>
  );
}
