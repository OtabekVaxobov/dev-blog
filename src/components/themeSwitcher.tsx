'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer">Themes</DropdownTrigger>
        <DropdownMenu
          id={theme}
          aria-label="Action"
          onAction={(key) => setTheme(key.toString())}
        >
          <DropdownItem aria-label="PurpleDark" key="purpledark">PurpleDark</DropdownItem>
          <DropdownItem aria-label="Cyberpunk" key="cyberpunk">Cyberpunk</DropdownItem>
          <DropdownItem aria-label="Dark" key="dark">Dark</DropdownItem>
          <DropdownItem aria-label="Light" key="light">Light</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
