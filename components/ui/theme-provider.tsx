'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

/**
 * A wrapper component that provides theme functionality to the application.
 * Uses next-themes under the hood for handling theme switching and persistence.
 *
 * @param props - Theme provider properties from next-themes
 * @param props.children - Child components that will have access to theme context
 * @returns React component with theme context
 */
export function ThemeProvider({
  children,
  ...props
}: Readonly<ThemeProviderProps>): React.ReactElement {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
