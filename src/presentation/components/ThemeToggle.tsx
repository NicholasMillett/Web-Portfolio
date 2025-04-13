'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import clsx from 'clsx';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const dark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
    onClick={toggleTheme}
    className={clsx(
        'relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300',
        isDark ? 'bg-gray-800 hover:bg-background-dark' : 'bg-gray-100 hover:brightness-105',
        'border border-gray-400 dark:border-border-dark shadow-inner'
    )}
    aria-label="Toggle theme"
    >
    <span
        className={clsx(
        'inline-block h-5 w-5 transform rounded-full flex items-center justify-center transition-transform duration-300',
        isDark
            ? 'translate-x-7 bg-background-dark text-warmAccent'
            : 'translate-x-1 bg-background-light text-mapPin-light'
        )}
    >
        {isDark ? <MoonStar size={14} /> : <Sun size={14} />}
    </span>
    </button>

    );
};