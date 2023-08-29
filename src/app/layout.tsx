'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from '../providers/AuthContext';
import Header from '@/sections/Header';
import { ThemeProvider } from 'next-themes';
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
        <ThemeProvider>
          <AuthProvider>
            <main data-theme="" className="text-foreground bg-background">
              <Header />
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
