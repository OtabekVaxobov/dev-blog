'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>some content</p>
        <Link prefetch href="/about">
          About
        </Link>
      </div>
    </>
  );
}
