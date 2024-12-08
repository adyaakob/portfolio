import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const themeColors = {
  modern: {
    primary: '#0EA5E9', // Light blue color from the design
    secondary: '#94A3B8',
    accent: '#0F172A',
    background: {
      light: '#FFFFFF',
      dark: '#0F172A'
    },
    card: {
      light: '#FFFFFF',
      dark: '#1E293B'
    }
  }
} as const

export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : '';
}