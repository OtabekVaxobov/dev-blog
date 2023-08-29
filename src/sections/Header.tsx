'use client';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import {
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];
  return (
    <>
      <Divider />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent dark:bg-slate-500 purpledark:bg-purple-400"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            logo
            <Link className="font-bold text-inherit" href="/">
              Dev-Blog
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/blogs" aria-current="page">
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Link href="/login">Sign Up</Link>
          </NavbarItem>

          <NavbarItem className=" cursor-pointer">
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href="/">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Divider />
    </>
  );
}
