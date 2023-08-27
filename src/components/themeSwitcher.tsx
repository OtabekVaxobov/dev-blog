'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="purple-dark">purple-dark</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </>
  );
}
