'use client';
import Loading from '@/components/loading';
import { useAuth } from '@/providers/AuthContext';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function Cabinet() {
  const user = useAuth();
  const user1 = getAuth();


  console.log(user1.currentUser);
  const currentUser = user.currentUser;
  let router = useRouter();
  const logout = () => {
    user
      .logout()
      .catch((error: string) => {
        console.log(error);
      })
      .finally(() => {
        router.push('/login');
      });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center items-center flex-col max-w-full">
          Cabinet
          <button onClick={() => logout()}>Logout</button>
        </div>
      </Suspense>
    </>
  );
}
