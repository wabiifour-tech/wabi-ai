import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wabi AI - Medical & Nursing Companion',
  description: 'AI-powered assistant for Nigerian nurses and nursing students. NMCN exam preparation, practice questions, and career guidance.',
  keywords: ['NMCN', 'nursing', 'Nigeria', 'medical', 'exam preparation', 'healthcare'],
  authors: [{ name: 'Wabi AI Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
