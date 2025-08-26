import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bright Smile Dental Clinic - Professional Dental Care',
  description:
    'Bright Smile Dental Clinic provides exceptional dental care with modern technology and compassionate service. Book your appointment today for a healthier, brighter smile.',
  keywords:
    'dental clinic, dentist, dental care, teeth cleaning, cosmetic dentistry, orthodontics',
  authors: [{ name: 'Bright Smile Dental Clinic' }],
  openGraph: {
    title: 'Bright Smile Dental Clinic - Professional Dental Care',
    description:
      'Exceptional dental care with modern technology and compassionate service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
