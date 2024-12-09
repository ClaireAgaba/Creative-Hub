import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Mens Wear - Premium Suits & Tailoring',
  description: 'Your destination for premium mens wear, custom tailoring, and elegant suits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {/* Facebook SDK */}
        <div id="fb-root" />
        <Script
          id="facebook-sdk"
          strategy="lazyOnload"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
          nonce="random123"
        />
        
        {/* Twitter/X SDK */}
        <Script
          id="twitter-sdk"
          strategy="lazyOnload"
          src="https://platform.twitter.com/widgets.js"
        />

        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
