import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'وبلاگ عصر سئو | مقالات تخصصی دیجیتال مارکتینگ و سئو',
  description: 'مقالات آموزشی و تخصصی در زمینه سئو، دیجیتال مارکتینگ، هوش مصنوعی و طراحی وب‌سایت از تیم عصر سئو.',
  keywords: 'وبلاگ سئو, مقالات دیجیتال مارکتینگ, آموزش سئو, مقالات هوش مصنوعی',
  alternates: {
    canonical: 'https://asreseo.com/blog',
  },
  openGraph: {
    title: 'وبلاگ عصر سئو',
    description: 'مقالات آموزشی و تخصصی در زمینه سئو، دیجیتال مارکتینگ، هوش مصنوعی و طراحی وب‌سایت.',
    type: 'website',
    url: 'https://asreseo.com/blog',
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'ترندهای دیجیتال مارکتینگ در سال ۲۰۲۴',
      excerpt: 'بررسی مهم‌ترین ترندهای دیجیتال مارکتینگ که در سال ۲۰۲۴ باید به آن‌ها توجه کنید...',
      author: 'علی بخشیاری',
      date: '۱۴۰۳/۰۱/۱۵',
      readTime: '۵ دقیقه',
      category: 'دیجیتال مارکتینگ',
      image: '/placeholder.svg'
    },
    {
      title: 'راهنمای کامل سئو برای سال ۲۰۲۴',
      excerpt: 'آپدیت جدید الگوریتم‌های گوگل و استراتژی‌های سئو که باید در سال جدید پیاده‌سازی کنید...',
      author: 'مریم احمدی',
      date: '۱۴۰۳/۰۱/۱۰',
      readTime: '۸ دقیقه',
      category: 'سئو',
      image: '/placeholder.svg'
    },
    {
      title: 'استفاده از هوش مصنوعی در تولید محتوا',
      excerpt: 'چگونه از ابزارهای هوش مصنوعی برای تولید محتوای با کیفیت و سئو شده استفاده کنیم...',
      author: 'احمد رضایی',
      date: '۱۴۰۳/۰۱/۰۵',
      readTime: '۶ دقیقه',
      category: 'هوش مصنوعی',
      image: '/placeholder.svg'
    },
    {
      title: 'راه‌اندازی کمپین گوگل ادز موفق',
      excerpt: 'مراحل گام به گام راه‌اندازی کمپین تبلیغاتی گوگل که نرخ تبدیل بالایی داشته باشد...',
      author: 'سارا کریمی',
      date: '۱۴۰۲/۱۲/۲۸',
      readTime: '۷ دقیقه',
      category: 'تبلیغات گوگل',
      image: '/placeholder.svg'
    },
    {
      title: 'طراحی وب‌سایت سئو محور',
      excerpt: 'نکات مهم در طراحی وب‌سایت که هم کاربرپسند باشد و هم برای موتورهای جستجو بهینه...',
      author: 'علی بخشیاری',
      date: '۱۴۰۲/۱۲/۲۵',
      readTime: '۹ دقیقه',
      category: 'طراحی وب',
      image: '/placeholder.svg'
    },
    {
      title: 'تحلیل رفتار کاربران با گوگل آنالیتیکس ۴',
      excerpt: 'آموزش کامل استفاده از گوگل آنالیتیکس ۴ برای تحلیل رفتار کاربران و بهبود نرخ تبدیل...',
      author: 'مریم احمدی',
      date: '۱۴۰۲/۱۲/۲۰',
      readTime: '۱۰ دقیقه',
      category: 'آنالیتیکس',
      image: '/placeholder.svg'
    }
  ]

  const categories = [
    'همه مقالات',
    'سئو',
    'دیجیتال مارکتینگ',
    'هوش مصنوعی',
    'طراحی وب',
    'تبلیغات گوگل'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                وبلاگ <span className="gradient-text">عصر سئو</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                مقالات آموزشی و تخصصی در زمینه سئو، دیجیتال مارکتینگ، هوش مصنوعی و طراحی وب‌سایت
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "gradient-bg text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in group cursor-pointer">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">تصویر مقاله</span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600">
                      ادامه مطلب
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                بارگذاری مقالات بیشتر
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
