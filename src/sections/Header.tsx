'use client';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import {
  Avatar,
  Button,
  Divider,
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
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useAuth } from '@/providers/AuthContext';

export default function Header() {
  const auth = getAuth();
  const user = auth.currentUser;
  const photoURL = user?.photoURL as string;
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
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/cabinet" aria-current="page">
              Cabinet
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/login">
              Signin
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            {!currentUser && <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>}
          </NavbarItem>
          {currentUser && <NavbarItem>

            <Avatar
              showFallback
              src={
                photoURL}
              alt="profil"
              className="h-8 w-8 rounded-full object-cover border-blue-500  border-1"
            // onClick={() => setOpenModal(true)}
            />

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
