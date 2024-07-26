"use client";
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log('useTheme hook:', useTheme);
    console.log('Theme:', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
