'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (prefersDark) {
      window.document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      window.document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = window.document.documentElement;
    const next = isDark ? 'light' : 'dark';

    html.classList.toggle('dark');
    localStorage.setItem('theme', next);
    setIsDark(!isDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-3 rounded-full shadow transition-transform hover:scale-110"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}
