import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Brain, Search, Target, TrendingUp, Users, Clock, Award, Zap, Bot, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو هوشمند | بهینه‌سازی وب‌سایت با هوش مصنوعی',
  description: 'خدمات حرفه‌ای سئو هوشمند از عصر سئو. استفاده از الگوریتم‌های هوش مصنوعی برای بهینه‌سازی وب‌سایت.',
  keywords: 'سئو هوشمند, هوش مصنوعی سئو, بهینه‌سازی هوشمند, AI SEO, سئو خودکار',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/smart-seo',
  },
  openGraph: {
    title: 'سئو هوشمند | عصر سئو',
    description: 'خدمات حرفه‌ای سئو هوشمند با استفاده از هوش مصنوعی.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/smart-seo',
  },
}

export default function SmartSEOPage() {
  const features = [
    'تحلیل هوشمند کلمات کلیدی با استفاده از AI',
    'پیش‌بینی ترندهای جستجو و رفتار کاربران',
    'بهینه‌سازی خودکار محتوا بر اساس الگوریتم‌های گوگل',
    'شناسایی فرصت‌های سئو با تحلیل رقبا',
    'ایجاد استراتژی محتوایی هوشمند',
    'لینک‌سازی هوشمند بر اساس تحلیل داده‌ها',
    'گزارش‌گیری لحظه‌ای از عملکرد سئو',
    'پیشنهادات بهینه‌سازی مداوم بر اساس یادگیری ماشین'
  ]

  const benefits = [
    {
      icon: Brain,
      title: 'هوش مصنوعی پیشرفته',
      description: 'استفاده از جدیدترین الگوریتم‌های یادگیری ماشین برای سئو'
    },
    {
      icon: Target,
      title: 'نتایج دقیق‌تر',
      description: 'پیش‌بینی دقیق‌تر رفتار کاربران و ترندهای جستجو'
    },
    {
      icon: TrendingUp,
      title: 'بهبود مستمر',
      description: 'یادگیری مداوم و بهبود خودکار استراتژی سئو'
    },
    {
      icon: Clock,
      title: 'صرفه‌جویی در زمان',
      description: 'اتوماسیون فرآیندهای تکراری و زمان‌بر سئو'
    }
  ]

  const aiFeatures = [
    {
      title: 'تحلیل هوشمند کلمات کلیدی',
      description: 'شناسایی بهترین کلمات کلیدی با تحلیل میلیاردها جستجو',
      icon: Search,
      benefits: ['دقت بالاتر', 'پیش‌بینی ترندها', 'تحلیل رقبا', 'ROI بهتر']
    },
    {
      title: 'بهینه‌سازی محتوا',
      description: 'بهینه‌سازی خودکار محتوا بر اساس الگوریتم‌های گوگل',
      icon: Lightbulb,
      benefits: ['سئو بهتر', 'کیفیت بالاتر', 'سرعت بیشتر', 'نتایج پایدار']
    },
    {
      title: 'لینک‌سازی هوشمند',
      description: 'شناسایی و ایجاد فرصت‌های لینک‌سازی با هوش مصنوعی',
      icon: Target,
      benefits: ['لینک‌های مرتبط', 'اعتبار بالاتر', 'نرخ موفقیت بیشتر', 'صرفه‌جویی در زمان']
    },
    {
      title: 'گزارش‌گیری لحظه‌ای',
      description: 'نظارت و گزارش‌گیری خودکار از عملکرد سئو',
      icon: TrendingUp,
      benefits: ['اطلاعات لحظه‌ای', 'تحلیل دقیق', 'پیشنهادات عملی', 'گزارش‌های مصور']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                جدیدترین تکنولوژی هوش مصنوعی
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                سئو <span className="gradient-text">هوشمند</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                بهینه‌سازی وب‌سایت با استفاده از هوش مصنوعی. از تحلیل هوشمند تا بهینه‌سازی خودکار، آینده سئو همینجاست.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع سئو هوشمند
                </Button>
                <Button variant="outline" size="lg">
                  دمو رایگان
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">قابلیت‌های سئو هوشمند ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با استفاده از هوش مصنوعی، سئو را به سطح جدیدی ببرید
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
                      <Brain className="h-6 w-6 text-indigo-600" />
                      آمار عملکرد سئو هوشمند
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">۸۰%</div>
                        <div className="text-sm text-gray-600">دقت بالاتر</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۶۰%</div>
                        <div className="text-sm text-gray-600">صرفه‌جویی در زمان</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۲۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش رتبه</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۲۴/۷</div>
                        <div className="text-sm text-gray-600">نظارت هوشمند</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Grid */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ویژگی‌های هوش مصنوعی در سئو</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استفاده از جدیدترین تکنولوژی‌های AI برای بهبود عملکرد سئو
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-sm text-gray-600 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای سئو هوشمند</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با استفاده از هوش مصنوعی، از مزایای رقابتی در سئو بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-indigo-600" />
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند سئو هوشمند ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با استفاده از هوش مصنوعی، بهترین استراتژی سئو را برای شما ایجاد می‌کنیم
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل هوشمند</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل وب‌سایت و رقبا با استفاده از هوش مصنوعی
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">استراتژی AI</h3>
                <p className="text-gray-600 text-sm">
                  تدوین استراتژی بهینه‌سازی بر اساس داده‌های AI
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">اجرای خودکار</h3>
                <p className="text-gray-600 text-sm">
                  اجرای خودکار بهینه‌سازی‌ها با نظارت AI
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">بهبود مستمر</h3>
                <p className="text-gray-600 text-sm">
                  یادگیری مداوم و بهبود خودکار عملکرد سئو
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده ورود به عصر سئو هوشمند هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه سئو هوشمند خود را شروع کنید و از رقبا پیشی بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع سئو هوشمند
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
