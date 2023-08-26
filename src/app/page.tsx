'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>some content</p>
        <ThemeSwitcher />
        <Link prefetch href="/about">
          About
        </Link>
      </div>
    </>
  );
}

export function ThemeSwitcher() {
  'use client';
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      The current theme is: {theme}
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="purple-dark">purple-dark</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </>
  );
}
