// import type { Metadata } from 'next';

import { Suspense } from 'react';
import Loading from '../components/loading';

// export const metadata: Metadata = {
//   title: 'dev-blog',
//   description: 'all kind of developers blog',
//   authors: { name: 'OtabekVaxobov', url: 'https://github.com/OtabekVaxobov' },
//   applicationName: 'Dev-blog',
//   // manifest: 'https://dev-blog.uz/manifest.json',
// };

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
