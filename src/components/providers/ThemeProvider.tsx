'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemeProviderProps } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: 'class' | 'data-theme';
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
}

export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
} 