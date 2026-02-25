import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'نقشه سایت | عصر سئو',
    description: 'لیست تمامی صفحات وب‌سایت عصر سئو برای دسترسی آسان‌تر کاربران.',
    alternates: {
        canonical: 'https://asreseo.com/sitemap/',
    },
}

export default function SitemapPage() {
    const links = [
        { title: 'صفحه اصلی', href: '/' },
        { title: 'خدمات سئو', href: '/services/seo/' },
        { title: 'خدمات بازاریابی', href: '/services/marketing/' },
        { title: 'خدمات وب', href: '/services/web/' },
        { title: 'خدمات هوش مصنوعی', href: '/services/ai/' },
        { title: 'وبلاگ', href: '/blog/' },
        { title: 'نمونه کارها', href: '/portfolio/' },
        { title: 'درباره ما', href: '/about/' },
        { title: 'تماس با ما', href: '/contact/' },
        { title: 'سوالات متداول', href: '/faq/' },
        { title: 'حریم خصوصی', href: '/privacy/' },
        { title: 'قوانین و مقررات', href: '/terms/' }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold mb-12 text-right">نقشه سایت</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-right" dir="rtl">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="p-4 rounded-xl border border-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
