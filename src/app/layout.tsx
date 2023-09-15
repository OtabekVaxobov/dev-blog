"use client"

import React from 'react';
import './globals.css';
import AuthProvider from '../providers/AuthContext';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import Footer from '../sections/Footer';
import Header from '../sections/Header';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-dev-blog.ico" type="image/png" sizes="32x32" />
        {/* <link rel="icon" href="/logo-dev-blog.png" type="image/png" sizes="32x32" /> */}
      </head>
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
