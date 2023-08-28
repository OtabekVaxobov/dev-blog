'use client';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import { Button, Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
      <Divider />
      <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-transparent dark:bg-slate-500 purpledark:bg-purple-400'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            logo
            <Link className="font-bold text-inherit" href='/'>Dev-Blog</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
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
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitcher />
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">

          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="default" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
              >
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
