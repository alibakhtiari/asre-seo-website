import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../src/generated/images-map.json'
import { Bot, Brain, Sparkles, Video, MessageSquare, Target, Shield, Zap, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات هوش مصنوعی | راه‌حل‌های AI برای کسب‌وکار شما',
  description: 'خدمات حرفه‌ای هوش مصنوعی از عصر سئو. از تولید محتوا با AI تا چت‌بات فارسی و تحلیل رفتار کاربران.',
  keywords: 'هوش مصنوعی, AI, تولید محتوا با AI, چت‌بات فارسی, تحلیل رفتار کاربران, اتوماسیون بازاریابی',
  alternates: {
    canonical: 'https://asreseo.com/services/ai',
  },
  openGraph: {
    title: 'خدمات هوش مصنوعی | عصر سئو',
    description: 'خدمات حرفه‌ای هوش مصنوعی برای کسب‌وکارهای ایرانی.',
    type: 'website',
    url: 'https://asreseo.com/services/ai',
  },
}

export default function AIPage() {
  const aiServices = [
    {
      title: 'تولید محتوای هوشمند',
      description: 'تولید محتوای متنی و ویدیویی با هوش مصنوعی',
      icon: Sparkles,
      features: ['تولید مقاله و متن', 'ساخت ویدیو با AI', 'سناریونویسی هوشمند', 'محتوای شبکه‌های اجتماعی'],
      isNew: true,
      gradient: 'from-purple-500 to-purple-700',
      href: '/services/ai/content-creation'
    },
    {
      title: 'بازاریابی و تعامل AI',
      description: 'اتوماسیون بازاریابی، چت‌بات و شخصی‌سازی تجربه مشتری',
      icon: Bot,
      features: ['اتوماسیون بازاریابی', 'چت‌بات هوشمند فارسی', 'شخصی‌سازی محتوا', 'تعامل خودکار با مشتری'],
      isNew: true,
      gradient: 'from-blue-500 to-blue-700',
      href: '/services/ai/marketing-engagement'
    },
    {
      title: 'تحلیل و استراتژی',
      description: 'سئو هوشمند، بهینه‌سازی نرخ تبدیل و تحلیل رفتار کاربران',
      icon: Brain,
      features: ['سئو و تحلیل رقبا', 'بهینه‌سازی نرخ تبدیل (CRO)', 'تحلیل رفتار کاربر', 'مانیتورینگ برند'],
      isNew: true,
      gradient: 'from-orange-500 to-orange-700',
      href: '/services/ai/analysis-strategy'
    }
  ]

  const stats = [
    { number: '+۱۰۰', label: 'پروژه AI موفق' },
    { number: '۵۰%', label: 'افزایش بهره‌وری' },
    { number: '۲۴/۷', label: 'کارکرد بدون وقفه' },
    { number: '۹۰%', label: 'رضایت مشتریان' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-indigo-50 to-purple-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Bot className="h-4 w-4" />
                  جدیدترین تکنولوژی‌های هوش مصنوعی
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  خدمات <span className="gradient-text">هوش مصنوعی</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  با بهره‌گیری از جدیدترین تکنولوژی‌های هوش مصنوعی، کسب‌وکار خود را به سطح بعدی ببرید و از رقبا پیشی بگیرید. راهکارهای هوشمند برای آینده کسب‌وکار شما.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                    شروع پروژه AI
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    مشاوره رایگان
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-purple-600/10 to-transparent z-10" />
                <OptimizedImage
                  src="/images/ai-service-hero.webp"
                  alt="خدمات هوش مصنوعی"
                  fill
                  imageData={imagesMap['/images/ai-service-hero.webp']}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-linear-to-br from-purple-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">راه‌حل‌های هوش مصنوعی ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مجموعه کاملی از خدمات هوش مصنوعی برای رشد و توسعه کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in group relative overflow-hidden">
                  {service.isNew && (
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                      جدید
                    </Badge>
                  )}

                  <CardHeader>
                    <div className={`w-14 h-14 bg-linear-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
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

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای استفاده از هوش مصنوعی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با پیاده‌سازی راه‌حل‌های هوش مصنوعی، از مزایای رقابتی بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 animate-fade-in">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">سرعت و کارایی</h3>
                <p className="text-gray-600">
                  انجام کارها در کسری از زمان معمول با دقت بالاتر
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-linear-to-br from-green-50 to-blue-50 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">افزایش درآمد</h3>
                <p className="text-gray-600">
                  بهبود نرخ تبدیل و افزایش فروش با تحلیل هوشمند
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 animate-fade-in">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">تجربه کاربری بهتر</h3>
                <p className="text-gray-600">
                  ارائه خدمات شخصی‌سازی شده به مشتریان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-linear-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده ورود به عصر هوش مصنوعی هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع پروژه AI
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
