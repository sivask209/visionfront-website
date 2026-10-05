import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'VisionFront AI Solutions | SEO & Local Marketing for Small Business',
    template: '%s | VisionFront AI Solutions',
  },
  description: SITE.description,
  keywords: ['SEO agency', 'local SEO', 'small business marketing', 'organic growth', 'Google Business Profile', 'AI search optimization'],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: SITE.url,
    title: 'VisionFront AI Solutions | SEO & Local Marketing for Small Business',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionFront AI Solutions | SEO & Local Marketing for Small Business',
    description: SITE.description,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
