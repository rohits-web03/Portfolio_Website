import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ 
  subsets: ['latin'],
  variable:"--font-mont" 
})

export const metadata: Metadata = {
  title: 'RKD',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  )
}
