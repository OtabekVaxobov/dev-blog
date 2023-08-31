'use client'

import { useAuth } from '@/providers/AuthContext';
import { useRouter } from 'next/navigation';

export function Logout() {
    let router = useRouter();
    const user = useAuth();
    const exit = () => {

        user
            .logout()
            .catch((error: string) => {
                console.log(error);
            })
            .finally(() => {
                router.push('/');
            });
    }
    return (<>
        <button onClick={exit}>Logout</button>
    </>)
};