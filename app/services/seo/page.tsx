import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, TrendingUp, Target, BarChart, Globe, Zap, FileText, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات سئو حرفه‌ای | بهینه‌سازی وب‌سایت برای موتورهای جستجو',
  description: 'خدمات جامع سئو از تیم متخصص عصر سئو. سئو تکنیکال، سئو محتوا، لینک‌سازی و آنالیز کامل برای رسیدن به رتبه‌های اول گوگل.',
  keywords: 'خدمات سئو, سئو حرفه‌ای, بهینه‌سازی وب‌سایت, سئو تکنیکال, سئو محتوا, لینک‌سازی',
  alternates: {
    canonical: 'https://asreseo.com/services/seo',
  },
  openGraph: {
    title: 'خدمات سئو حرفه‌ای | عصر سئو',
    description: 'خدمات جامع سئو از تیم متخصص عصر سئو برای رسیدن به رتبه‌های اول گوگل.',
    type: 'website',
    url: 'https://asreseo.com/services/seo',
  },
}

export default function SEOPage() {
  const seoServices = [
    {
      title: 'سئو سایت',
      description: 'بهینه‌سازی کامل وب‌سایت برای موتورهای جستجو',
      icon: Globe,
      features: ['تحلیل کلمات کلیدی', 'بهینه‌سازی محتوا', 'لینک‌سازی داخلی', 'تکنیکال سئو']
    },
    {
      title: 'سئو تکنیکال',
      description: 'بهینه‌سازی فنی وب‌سایت برای بهبود عملکرد',
      icon: Zap,
      features: ['سرعت وب‌سایت', 'ساختار URL', 'Schema Markup', 'رفع خطاهای کرال']
    },
    {
      title: 'سئو محتوا',
      description: 'تولید و بهینه‌سازی محتوای با کیفیت',
      icon: FileText,
      features: ['تحقیق کلمات کلیدی', 'تولید محتوا', 'بهینه‌سازی متا', 'لینک‌سازی محتوا']
    },
    {
      title: 'لینک‌سازی',
      description: 'استراتژی لینک‌سازی خارجی و داخلی',
      icon: Target,
      features: ['لینک‌سازی خارجی', 'لینک‌سازی داخلی', 'آنالیز بک‌لینک', 'استراتژی لینک']
    },
    {
      title: 'آنالیز سئو',
      description: 'تحلیل و گزارش‌گیری از عملکرد سئو',
      icon: BarChart,
      features: ['گزارش رتبه‌بندی', 'تحلیل رقبا', 'گزارش ترافیک', 'پیشنهادات بهبود']
    },
    {
      title: 'آموزش سئو',
      description: 'آموزش تخصصی سئو به تیم شما',
      icon: BookOpen,
      features: ['کارگاه‌های آموزشی', 'مشاوره فردی', 'مستندات آموزشی', 'پشتیبانی آموزشی']
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
                خدمات <span className="gradient-text">سئو</span> حرفه‌ای
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                با خدمات جامع سئو عصر سئو، وب‌سایت خود را به رتبه‌های اول گوگل برسانید و ترافیک ارگانیک خود را چندین برابر افزایش دهید.
              </p>
              <Button size="lg" className="gradient-bg text-white px-8">
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
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

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع هستید؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              همین امروز با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white">
                شروع پروژه سئو
              </Button>
              <Button variant="outline" size="lg">
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
