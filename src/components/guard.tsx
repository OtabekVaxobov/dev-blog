'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuth } from "../providers/AuthContext"

export default function RouteGuard() {
    let router = useRouter();
    const { currentUser } = useAuth();
    useEffect(() => {
        if (!currentUser) {
            void router.push('/');
        }
        return;
    }, [currentUser, router]);
    return (null)
}