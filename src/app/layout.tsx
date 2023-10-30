import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Orbitron } from 'next/font/google'
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';
import CookieConsent from '@/components/CookieConsent/CookieConsent'
const outfit = Outfit({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DJ and producer Sasha Dith',
  description: 'The official website of DJ and producer Sasha Dith',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <TheHeader />
        {children}
        <TheFooter />
        <CookieConsent />
      </body>
    </html>
  )
}
