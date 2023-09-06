'use client';

import {
  Avatar,
  Link,
} from '@nextui-org/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,

} from '@nextui-org/dropdown';
import { getAuth } from 'firebase/auth';
import { Logout } from './logout';
import { ReactElement } from 'react';
// import Link from 'next/link';

export default function Ava() {
  const auth = getAuth();
  const user = auth.currentUser;
  const photoURL = user?.photoURL as string;
  const userName = user?.displayName as string;
  return (
    <>
      <div>
        <Dropdown aria-label='avatar' placement="bottom-start">
          <DropdownTrigger aria-label='avatar_trigger'>
            <Avatar
              aria-label='Image'
              showFallback
              src={photoURL}
              alt="profil"
              className="h-8 w-8 rounded-full object-cover border-blue-500  border-1"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p aria-label="signed" className="font-bold">Signed in as</p>
              <p aria-label="userName" className="font-bold">{userName || 'Name is defined'}</p>
            </DropdownItem>
            <DropdownItem description="Settings" key="settings">
              <Link href='/cabinet/settings'>Settings</Link>
            </DropdownItem>
            <DropdownItem aria-label='team_settings' key="team_settings">Team Settings</DropdownItem>
            <DropdownItem aria-label='analytics' key="analytics">Analytics</DropdownItem>
            <DropdownItem aria-label='system' key="system">System</DropdownItem>
            <DropdownItem aria-label='configurations' key="configurations">Configurations</DropdownItem>
            <DropdownItem aria-label='help' key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem aria-label='logout' key="logout" color="danger">
              <Logout />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
