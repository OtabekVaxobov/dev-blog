import { Suspense } from 'react';
import Loading from '../components/loading';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="p-24">
          <p>some content</p>
        </div>
      </Suspense>
    </>
  );
}
