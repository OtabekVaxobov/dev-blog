'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ];
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute(
      'data-theme',
      theme?.toString() || ''
    );
  }, [theme]);

  if (!mounted) return null;

  return (
    <>
      <select
        className="select max-w-xs"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((item, id) => (
          <option key={id} data-choose-theme={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
