'use client'

import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { getAuth } from "firebase/auth";
import { Logout } from "./logout";
import { ReactElement } from "react";

export default function Ava(): ReactElement {
    const auth = getAuth();
    const user = auth.currentUser;
    const photoURL = user?.photoURL as string;
    const userName = user?.displayName as string;
    return (
        <>
            <div>
                <Dropdown suppressHydrationWarning placement="bottom-start">
                    <DropdownTrigger>
                        <Avatar
                            showFallback
                            src={
                                photoURL}
                            alt="profil"
                            className="h-8 w-8 rounded-full object-cover border-blue-500  border-1"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-bold">Signed in as</p>
                            <p className="font-bold">{userName || 'Name is defined'}</p>
                        </DropdownItem>
                        <DropdownItem description="Create a new file" key="settings">
                            My Settings
                        </DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">
                            Analytics
                        </DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            <Logout />
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    )
}