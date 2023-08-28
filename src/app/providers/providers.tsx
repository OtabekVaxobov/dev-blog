// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '../sections/Header';

export function Providers({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        themes={['light', 'dark', 'purple-dark', 'cyberpunk']}
      >
        <Header />

        <main className="text-foreground bg-background">{children}</main>

      </NextThemesProvider>
    </NextUIProvider>
  );
}
