'use client';

import Loading from '@/components/loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />} >
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <p>some content</p>


        </div>
      </Suspense>
    </>
  );
}
