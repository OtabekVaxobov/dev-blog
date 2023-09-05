'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuth } from "../../../providers/AuthContext";

export default function SettingsPage() {
    let router = useRouter();
    const { currentUser } = useAuth();
    useEffect(() => {
        if (!currentUser) {
            router.push('/');
        }
        return;
    }, [currentUser, router]);
    return (
        <>
            Profile settings
        </>
    )
}