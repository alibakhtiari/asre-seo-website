import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Zap, Search, Globe, BarChart, Shield, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو تکنیکال | بهینه‌سازی فنی وب‌سایت برای موتورهای جستجو',
  description: 'خدمات حرفه‌ای سئو تکنیکال از عصر سئو. بهینه‌سازی سرعت، ساختار URL، Schema Markup و رفع خطاهای کرال.',
  keywords: 'سئو تکنیکال, بهینه‌سازی فنی, سرعت وب‌سایت, ساختار URL, Schema Markup',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/technical-seo',
  },
  openGraph: {
    title: 'سئو تکنیکال | عصر سئو',
    description: 'خدمات حرفه‌ای سئو تکنیکال برای بهینه‌سازی فنی وب‌سایت.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/technical-seo',
  },
}

export default function TechnicalSEOPage() {
  const features = [
    'بهبود سرعت بارگذاری صفحات وب‌سایت',
    'بهینه‌سازی ساختار URL برای سئو بهتر',
    'پیاده‌سازی Schema Markup برای داده‌های ساختار یافته',
    'رفع خطاهای کرال و ایندکسینگ',
    'بهینه‌سازی فایل robots.txt و sitemap.xml',
    'بهبود معماری اطلاعات وب‌سایت',
    'بهینه‌سازی برای موبایل و AMP',
    'تحلیل و رفع مشکلات امنیتی سئو'
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'افزایش سرعت بارگذاری',
      description: 'تا ۶۰% بهبود سرعت وب‌سایت و کاهش نرخ پرش'
    },
    {
      icon: Search,
      title: 'بهبود کرالینگ',
      description: 'بهینه‌سازی وب‌سایت برای خزنده‌های موتورهای جستجو'
    },
    {
      icon: Globe,
      title: 'ساختار بهینه',
      description: 'ایجاد معماری مناسب برای ایندکس بهتر صفحات'
    },
    {
      icon: Shield,
      title: 'امنیت بالاتر',
      description: 'شناسایی و رفع مشکلات امنیتی که بر سئو تأثیر می‌گذارند'
    }
  ]

  const services = [
    {
      title: 'بهینه‌سازی سرعت',
      description: 'کاهش زمان بارگذاری صفحات و بهبود Core Web Vitals',
      features: ['فشرده‌سازی تصاویر', 'مینیمایز CSS/JS', 'بهره‌برداری از کش', 'CDN']
    },
    {
      title: 'ساختار فنی',
      description: 'بهینه‌سازی ساختار فنی وب‌سایت برای موتورهای جستجو',
      features: ['URL Structure', 'Navigation', 'Internal Linking', 'XML Sitemap']
    },
    {
      title: 'Schema Markup',
      description: 'پیاده‌سازی داده‌های ساختار یافته برای نتایج بهتر',
      features: ['JSON-LD', 'Microdata', 'Rich Snippets', 'Knowledge Graph']
    },
    {
      title: 'تحلیل فنی',
      description: 'بررسی و رفع مشکلات فنی وب‌سایت',
      features: ['Error Analysis', 'Crawl Budget', 'Index Coverage', 'Log Analysis']
    }
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
                سئو <span className="gradient-text">تکنیکال</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                بهینه‌سازی فنی وب‌سایت شما برای موتورهای جستجو. از سرعت بارگذاری تا ساختار فنی، همه چیز را برای رتبه‌بندی بهتر آماده می‌کنیم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع پروژه سئو تکنیکال
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات سئو تکنیکال ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مجموعه کاملی از خدمات بهینه‌سازی فنی برای بهبود عملکرد وب‌سایت شما
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-6 w-6 text-blue-600" />
                      نتایج قابل اندازه‌گیری
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۶۰%</div>
                        <div className="text-sm text-gray-600">افزایش سرعت</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۱۰۰%</div>
                        <div className="text-sm text-gray-600">رفع خطاها</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۸۰%</div>
                        <div className="text-sm text-gray-600">بهبود کرالینگ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۲۴/۷</div>
                        <div className="text-sm text-gray-600">نظارت فنی</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای سئو تکنیکال</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با بهینه‌سازی فنی وب‌سایت، از مزایای متعددی برای سئو بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده بهینه‌سازی فنی وب‌سایت هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه سئو تکنیکال خود را شروع کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع پروژه سئو تکنیکال
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
