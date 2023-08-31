import { useAuth } from '@/providers/AuthContext';
import { useRouter } from 'next/navigation';

export function Logout() {
    let router = useRouter();
    const user = useAuth();
    const logout = () => {

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
        <button onClick={logout}>Logout</button>
    </>)
};