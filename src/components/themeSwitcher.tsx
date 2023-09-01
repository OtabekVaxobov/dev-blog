'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Dropdown suppressHydrationWarning>
        <DropdownTrigger className="cursor-pointer">Themes</DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key: string) => setTheme(key.toString())}
        >
          <DropdownItem key="purpledark">PurpleDark</DropdownItem>
          <DropdownItem key="cyberpunk">Cyberpunk</DropdownItem>
          <DropdownItem key="dark">Dark</DropdownItem>
          <DropdownItem key="light">Light</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
