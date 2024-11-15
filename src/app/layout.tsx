import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Ahmad Dahalan Yaakob',
  description: 'Professional Portfolio of Ahmad Dahalan Yaakob',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ahmad Dahalan Yaakob</title>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}