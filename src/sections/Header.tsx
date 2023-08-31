'use client';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react';
import { getAuth } from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';

import { useAuth } from '@/providers/AuthContext';
import { Logout } from '@/components/logout';
import Ava from '@/components/userAvatar';





export default function Header() {
  const { currentUser } = useAuth();
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
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />

        </NavbarContent>

        <NavbarContent className="md:hidden  gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Features
            </Link>
          </NavbarItem>
          {currentUser && <NavbarItem isActive>
            <Link color="foreground" href="/cabinet" aria-current="page">
              Cabinet
            </Link>
          </NavbarItem>}
          <NavbarItem isActive>
            <Link color="foreground" href="/blogs" aria-current="page">
              Blogs
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            {!currentUser && <Button as={Link} color="primary" href="/login" variant="flat">
              Sign Up
            </Button>}
          </NavbarItem>
          {currentUser && <NavbarItem>


            <Ava />

          </NavbarItem>}
          <Tooltip delay={1000} content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">Choose Theme</div>
            </div>
          }>
            <NavbarItem>

              <ThemeSwitcher />

            </NavbarItem>
          </Tooltip>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
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
