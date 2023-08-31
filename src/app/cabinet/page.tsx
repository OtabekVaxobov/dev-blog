'use client';

import Loading from '@/components/loading';
import { Logout } from '@/components/logout';
import { getAuth } from 'firebase/auth';
import { Suspense } from 'react';


export default function Cabinet() {
  const user1 = getAuth();
  // console.log(user1.currentUser);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center items-center flex-col max-w-full">
          <Logout />
          Cabinet
        </div>
      </Suspense>
    </>
  );
}
