'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../providers/AuthContext';

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
  };
  return (
    <>
      <button onClick={exit}>Logout</button>
    </>
  );
}
