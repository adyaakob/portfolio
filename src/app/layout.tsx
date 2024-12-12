import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import '@/app/globals.css'
import 'react-vertical-timeline-component/style.min.css'

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
      <body className="dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}