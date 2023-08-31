'use client';

import Loading from '@/components/loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />} >
        <div className="p-24">
          <p>some content</p>
        </div>
      </Suspense>
    </>
  );
}
