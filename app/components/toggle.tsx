"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconButton } from "./material"; // Assuming you're using Material Tailwind for other components
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Importing SunIcon and MoonIcon from Heroicons

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton
      onClick={handleThemeSwitcher}
      color="white"
      style={{
        borderRadius: '50%',
      }}
    >
      {theme === 'light' ? (
        <SunIcon className="h-6 w-6" /> // Sun icon for light theme
      ) : (
        <MoonIcon className="h-6 w-6" /> // Moon icon for dark theme
      )}
    </IconButton>
  );
};

export default ThemeToggle;
