import { useState, useEffect } from 'react';
import { Theme } from '@mui/material';
import deepmerge from '@mui/utils/deepmerge';
import { darkTheme, lightTheme } from '../themes';

const useMergedTheme = (userTheme?: Theme) => {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    setSystemTheme(matchDarkMode.matches ? 'dark' : 'light');
    matchDarkMode.addEventListener('change', handleThemeChange);

    return () => {
      matchDarkMode.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const defaultTheme = systemTheme === 'dark' ? darkTheme : lightTheme;

  return userTheme ? deepmerge(defaultTheme, userTheme) : defaultTheme;
};

export default useMergedTheme;
