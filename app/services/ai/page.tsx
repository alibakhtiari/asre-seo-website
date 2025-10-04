import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
      title: 'اتوماسیون بازاریابی',
      description: 'خودکارسازی فرآیندهای بازاریابی با استفاده از هوش مصنوعی',
      icon: Bot,
      features: ['ارسال ایمیل خودکار', 'مدیریت شبکه‌های اجتماعی', 'لید اسکورینگ', 'پاسخ به مشتریان'],
      isNew: false,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'تولید محتوا با AI',
      description: 'تولید محتوای متنی، تصویری و ویدیویی با هوش مصنوعی',
      icon: Sparkles,
      features: ['مقالات وبلاگ', 'پست‌های شبکه‌های اجتماعی', 'توضیحات محصولات', 'محتوای سئو شده'],
      isNew: true,
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      title: 'تحلیل رفتار کاربران',
      description: 'بررسی و تحلیل رفتار کاربران برای بهبود تجربه کاربری',
      icon: Users,
      features: ['نقشه حرارتی', 'تحلیل مسیر کاربر', 'پیش‌بینی رفتار', 'بهینه‌سازی UX'],
      isNew: false,
      gradient: 'from-green-500 to-green-700'
    },
    {
      title: 'سئو هوشمند',
      description: 'بهینه‌سازی وب‌سایت با استفاده از الگوریتم‌های هوش مصنوعی',
      icon: Brain,
      features: ['تحلیل کلمات کلیدی', 'پیشنهاد محتوا', 'لینک‌سازی هوشمند', 'گزارش خودکار'],
      isNew: false,
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      title: 'چت‌بات فارسی',
      description: 'طراحی و پیاده‌سازی چت‌بات‌های هوشمند فارسی زبان',
      icon: MessageSquare,
      features: ['پاسخ به سوالات متداول', 'پشتیبانی ۲۴ ساعته', 'یکپارچگی با CRM', 'یادگیری مداوم'],
      isNew: false,
      gradient: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'بهینه‌سازی نرخ تبدیل',
      description: 'افزایش نرخ تبدیل با استفاده از هوش مصنوعی',
      icon: Target,
      features: ['A/B تستینگ خودکار', 'شخصی‌سازی محتوا', 'پیش‌بینی رفتار خرید', 'بهینه‌سازی فرم‌ها'],
      isNew: false,
      gradient: 'from-pink-500 to-pink-700'
    },
    {
      title: 'شخصی‌سازی محتوا',
      description: 'ارائه محتوای شخصی‌سازی شده بر اساس رفتار کاربر',
      icon: Users,
      features: ['توصیه محصولات', 'محتوای داینامیک', 'ایمیل‌های شخصی', 'صفحات فرود اختصاصی'],
      isNew: false,
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'مانیتورینگ برند',
      description: 'نظارت هوشمند بر برند و شهرت آنلاین شما',
      icon: Shield,
      features: ['نظارت شبکه‌های اجتماعی', 'تحلیل احساسات', 'گزارش لحظه‌ای', 'هشدارهای هوشمند'],
      isNew: false,
      gradient: 'from-red-500 to-red-700'
    },
    {
      title: 'تولید ویدیو با AI',
      description: 'ایجاد ویدیوهای حرفه‌ای با استفاده از هوش مصنوعی',
      icon: Video,
      features: ['ویدیوهای تبلیغاتی', 'توضیحات محصولات', 'ویدیوهای آموزشی', 'محتوای شبکه‌های اجتماعی'],
      isNew: true,
      gradient: 'from-violet-500 to-violet-700'
    },
    {
      title: 'مشاوره AI',
      description: 'مشاوره تخصصی برای پیاده‌سازی راه‌حل‌های هوش مصنوعی',
      icon: Brain,
      features: ['ارزیابی نیازها', 'تدوین استراتژی AI', 'انتخاب ابزارها', 'پیاده‌سازی و آموزش'],
      isNew: false,
      gradient: 'from-cyan-500 to-cyan-700'
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
        <section className="section-padding bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="h-4 w-4" />
                جدیدترین تکنولوژی‌های هوش مصنوعی
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                با بهره‌گیری از جدیدترین تکنولوژی‌های هوش مصنوعی، کسب‌وکار خود را به سطح بعدی ببرید و از رقبا پیشی بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع پروژه AI
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان
                </Button>
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
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
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
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
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">سرعت و کارایی</h3>
                <p className="text-gray-600">
                  انجام کارها در کسری از زمان معمول با دقت بالاتر
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">افزایش درآمد</h3>
                <p className="text-gray-600">
                  بهبود نرخ تبدیل و افزایش فروش با تحلیل هوشمند
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 animate-fade-in">
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
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
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
