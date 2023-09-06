'use client';

import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '../../components/loading';
import { useAuth } from '../../providers/AuthContext';
import RouteGuard from '../../components/guard';

export default function Cabinet() {
  // const user1 = getAuth();
  // console.log(user1.currentUser);
  const { currentUser } = useAuth();
  // console.log(process.env.NEXT_PUBLIC_MEASURMENT_ID?.toString())
  console.log(currentUser);
  console.log('chack env', process.env.NEXT_PUBLIC_API_KEY)
  RouteGuard();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center items-center flex-col max-w-full">
          Cabinet
        </div>
      </Suspense>
    </>
  );
}
