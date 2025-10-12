import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BlogHero from '@/components/Blog/BlogHero'
import BlogGrid from '@/components/Blog/BlogGrid'
import BlogSidebar from '@/components/Blog/BlogSidebar'

export const metadata: Metadata = {
  title: 'وبلاگ عصر سئو | آموزش دیجیتال مارکتینگ | مطالب آموزشی تخصصی',
  description: 'وبلاگ آموزشی عصر سئو شامل مقالات تخصصی digital marketing، سئو، بهینه‌سازی وب‌سایت، تبلیغات گوگل، هوش مصنوعی و بازاریابی محتوایی.',
  keywords: 'وبلاگ دیجیتال مارکتینگ, مقالات سئو, آموزش Marketing, مطالب آموزشی, عصر سئو',
  alternates: {
    canonical: 'https://asreseo.com/blog',
  },
  openGraph: {
    title: 'وبلاگ آموزشی عصر سئو',
    description: 'مقالات تخصصی دیجیتال مارکتینگ و سئو.',
    type: 'website',
    url: 'https://asreseo.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'وبلاگ عصر سئو'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وبلاگ عصر سئو',
    description: 'مقالات تخصصی دیجیتال مارکتینگ.',
    images: ['/og-blog.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'وبلاگ عصر سئو',
  'description': 'وبلاگ آموزشی تخصصی دیجیتال مارکتینگ',
  'blogPost': [
    {
      '@type': 'BlogPosting',
      'headline': 'آموزش دیجیتال مارکتینگ',
      'description': 'آموزش جامع دیجیتال مارکتینگ',
      'url': 'https://asreseo.com/blog'
    }
  ],
  'publisher': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://asreseo.com/logo.png'
    }
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://asreseo.com/blog'
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <main>
        <BlogHero />
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <BlogGrid />
              </div>
              <div className="lg:col-span-1">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
