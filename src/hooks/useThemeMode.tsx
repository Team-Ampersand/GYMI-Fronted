import { useState, useEffect } from 'react';

type ThemeKey = 'light' | 'dark';

type ReturnType = {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};

const useThemeMode = (): ReturnType => {
  const [theme, setTheme] = useState<ThemeKey>('light');

  const initTheme = () => {
    const preferDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initalTheme = (localStorage?.getItem('theme') ||
      (preferDark ? 'dark' : 'light')) as ThemeKey;
    setTheme(initalTheme);
  };

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((e) => (e === 'light' ? 'dark' : 'light'));
  };

  return { theme, setTheme, toggleTheme };
};

export default useThemeMode;
