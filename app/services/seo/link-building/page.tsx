import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Link, Target, TrendingUp, Shield, Users, Award, Zap, Globe, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'لینک‌سازی حرفه‌ای | استراتژی لینک‌سازی برای رتبه اول گوگل',
  description: 'خدمات حرفه‌ای لینک‌سازی از عصر سئو. استراتژی لینک‌سازی خارجی و داخلی برای بهبود رتبه وب‌سایت شما.',
  keywords: 'لینک‌سازی, لینک خارجی, لینک داخلی, بک‌لینک, لینک‌سازی حرفه‌ای',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/link-building',
  },
  openGraph: {
    title: 'لینک‌سازی حرفه‌ای | عصر سئو',
    description: 'خدمات حرفه‌ای لینک‌سازی برای بهبود رتبه وب‌سایت.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/link-building',
  },
}

export default function LinkBuildingPage() {
  const features = [
    'استراتژی لینک‌سازی خارجی هدفمند و مؤثر',
    'لینک‌سازی داخلی برای بهبود ساختار وب‌سایت',
    'تحلیل و بررسی بک‌لینک‌های موجود',
    'شناسایی فرصت‌های لینک‌سازی جدید',
    'ایجاد محتوای لینک‌بگیر (Link Bait)',
    'مشارکت در وبلاگ‌های معتبر و مرتبط',
    'لینک‌سازی محلی برای کسب‌وکارهای منطقه‌ای',
    'گزارش‌گیری منظم از عملکرد لینک‌ها'
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'افزایش رتبه گوگل',
      description: 'بهبود رتبه وب‌سایت با لینک‌های با کیفیت و مرتبط'
    },
    {
      icon: Target,
      title: 'هدف‌گیری دقیق',
      description: 'لینک‌سازی از وب‌سایت‌های مرتبط با حوزه فعالیت شما'
    },
    {
      icon: Users,
      title: 'افزایش اعتبار دامنه',
      description: 'افزایش Domain Authority و Trust Flow وب‌سایت'
    },
    {
      icon: Shield,
      title: 'لینک‌های طبیعی',
      description: 'ایجاد لینک‌های طبیعی و پایدار برای جلوگیری از پنالتی'
    }
  ]

  const strategies = [
    {
      title: 'لینک‌سازی خارجی',
      description: 'کسب بک‌لینک از وب‌سایت‌های معتبر و مرتبط',
      features: ['Guest Posting', 'Resource Pages', 'Broken Link Building', 'Skyscraper Technique']
    },
    {
      title: 'لینک‌سازی داخلی',
      description: 'بهینه‌سازی ساختار لینک‌های داخلی وب‌سایت',
      features: ['Silo Structure', 'Topic Clusters', 'Internal Link Optimization', 'Anchor Text Strategy']
    },
    {
      title: 'لینک‌سازی محلی',
      description: 'لینک‌سازی برای کسب‌وکارهای محلی و منطقه‌ای',
      features: ['Google My Business', 'Local Directories', 'Local Partnerships', 'Community Links']
    },
    {
      title: 'آنالیز رقبا',
      description: 'تحلیل لینک‌های رقبا و شناسایی فرصت‌ها',
      features: ['Competitor Analysis', 'Link Gap Analysis', 'Backlink Audit', 'Strategy Planning']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                لینک‌سازی <span className="gradient-text">حرفه‌ای</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                استراتژی لینک‌سازی خارجی و داخلی برای بهبود رتبه وب‌سایت شما در موتورهای جستجو. لینک‌های با کیفیت، رتبه‌های برتر.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع پروژه لینک‌سازی
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات لینک‌سازی ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از لینک‌سازی خارجی تا بهینه‌سازی لینک‌های داخلی، همه چیز را به ما بسپارید
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
                      <Link className="h-6 w-6 text-purple-600" />
                      نتایج لینک‌سازی
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۲۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش رتبه</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۱۰۰۰+</div>
                        <div className="text-sm text-gray-600">لینک با کیفیت</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۹۰%</div>
                        <div className="text-sm text-gray-600">رضایت مشتریان</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۱۰۰%</div>
                        <div className="text-sm text-gray-600">لینک طبیعی</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies Grid */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">استراتژی‌های لینک‌سازی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استفاده از بهترین و مؤثرترین روش‌های لینک‌سازی برای نتایج پایدار
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {strategy.features.map((feature, featureIndex) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای لینک‌سازی حرفه‌ای</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با لینک‌سازی اصولی و حرفه‌ای، از مزایای بلندمدت برای سئو بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-purple-600" />
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

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند لینک‌سازی ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، بهترین لینک‌ها را برای وب‌سایت شما ایجاد می‌کنیم
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل و استراتژی</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل رقبا و تدوین استراتژی لینک‌سازی مناسب
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">شناسایی فرصت‌ها</h3>
                <p className="text-gray-600 text-sm">
                  پیدا کردن بهترین فرصت‌های لینک‌سازی مرتبط
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">ایجاد لینک‌ها</h3>
                <p className="text-gray-600 text-sm">
                  ایجاد لینک‌های با کیفیت و طبیعی از منابع معتبر
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">نظارت و گزارش</h3>
                <p className="text-gray-600 text-sm">
                  پایش مداوم لینک‌ها و ارائه گزارش‌های منظم
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع لینک‌سازی هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه لینک‌سازی خود را شروع کنید و رتبه وب‌سایت خود را بهبود دهید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع پروژه لینک‌سازی
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
