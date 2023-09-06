"use client"

import './globals.css';
import AuthProvider from '../providers/AuthContext';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { Suspense } from 'react';
import Loading from '../components/loading';
import Footer from '../sections/Footer';
import Header from '../sections/Header';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col max-h-screen justify-between">
        <ThemeProvider>
          <NextUIProvider>
            <AuthProvider>
              <main data-theme="" className="text-foreground bg-background ">

                <Header />

                {children}

                <Footer />

              </main>
            </AuthProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
