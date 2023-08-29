'use client';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      header
      <ThemeSwitcher />
    </>
  );
}
