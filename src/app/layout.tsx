'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../providers/providers';
import AuthProvider from '../providers/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dev-blog',
  description: 'all kind of developers blog',
  authors: { name: 'OtabekVaxobov', url: 'https://github.com/OtabekVaxobov' },
  applicationName: 'Dev-blog',
  // manifest: 'https://dev-blog.uz/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>

        <Providers> <AuthProvider>{children} </AuthProvider></Providers>

      </body>

    </html>
  );
}
