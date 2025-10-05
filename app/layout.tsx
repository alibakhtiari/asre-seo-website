import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'
import { Providers } from './providers'

const vazirMatn = localFont({
  src: [
    {
      path: './Vazirmatn-Regular.woff2',
      weight: '400',
    },
    {
      path: './Vazirmatn-Bold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ، سئو و هوش مصنوعی در ایران',
  description: 'عصر سئو - شرکت پیشرو در ارائه خدمات دیجیتال مارکتینگ، سئو، هوش مصنوعی، تبلیغات گوگل و طراحی وب‌سایت. با تیم متخصص ما رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید.',
  keywords: 'سئو, دیجیتال مارکتینگ, تبلیغات گوگل, طراحی وب‌سایت, بهینه‌سازی سایت, AsreSEO, چت‌بات فارسی, هوش مصنوعی, AI, اتوماسیون بازاریابی, تولید محتوا با AI',
  authors: [{ name: 'عصر سئو' }],
  creator: 'عصر سئو',
  publisher: 'عصر سئو',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://asreseo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fa': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران',
    description: 'با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید',
    url: 'https://asreseo.com/',
    siteName: 'عصر سئو',
    images: [
      {
        url: 'https://asreseo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'عصر سئو - خدمات دیجیتال مارکتینگ',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران',
    description: 'با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید',
    images: ['https://asreseo.com/twitter-image.jpg'],
    creator: '@asreseo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      'msvalidate.01': 'bing-site-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirMatn.className} antialiased`}>
        <Providers>
          {children}
          <FloatingActions />
        </Providers>
      </body>
    </html>
  )
}
