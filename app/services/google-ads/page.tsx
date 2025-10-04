import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Target, TrendingUp, DollarSign, Users, Clock, Award, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات گوگل ادز | کمپین‌های تبلیغاتی گوگل با بالاترین نرخ تبدیل',
  description: 'خدمات حرفه‌ای گوگل ادز از عصر سئو. راه‌اندازی کمپین‌های تبلیغاتی گوگل با بالاترین نرخ تبدیل و کمترین هزینه.',
  keywords: 'گوگل ادز, تبلیغات گوگل, کمپین تبلیغاتی, گوگل ادوردز, PPC',
  alternates: {
    canonical: 'https://asreseo.com/services/google-ads',
  },
  openGraph: {
    title: 'خدمات گوگل ادز | عصر سئو',
    description: 'خدمات حرفه‌ای گوگل ادز برای کمپین‌های تبلیغاتی با بالاترین نرخ تبدیل.',
    type: 'website',
    url: 'https://asreseo.com/services/google-ads',
  },
}

export default function GoogleAdsPage() {
  const features = [
    'راه‌اندازی کمپین‌های گوگل ادز از صفر تا صد',
    'تحلیل کلمات کلیدی و انتخاب بهترین‌ها',
    'نوشتن متن‌های تبلیغاتی جذاب و مؤثر',
    'طراحی صفحات فرود اختصاصی',
    'مدیریت بودجه و بهینه‌سازی هزینه‌ها',
    'گزارش‌گیری روزانه و تحلیل عملکرد',
    'A/B تستینگ مداوم برای بهبود نتایج',
    'پشتیبانی ۲۴ ساعته و مشاوره رایگان'
  ]

  const benefits = [
    {
      icon: Target,
      title: 'هدف‌گیری دقیق',
      description: 'نمایش تبلیغات به مخاطبان هدف با استفاده از هوش مصنوعی گوگل'
    },
    {
      icon: TrendingUp,
      title: 'نتایج سریع',
      description: 'مشاهده نتایج و افزایش ترافیک در همان روز اول راه‌اندازی'
    },
    {
      icon: DollarSign,
      title: 'مدیریت بودجه هوشمند',
      description: 'بهینه‌سازی هزینه‌ها و کاهش هزینه به ازای هر کلیک تا ۴۰%'
    },
    {
      icon: Award,
      title: 'تضمین کیفیت',
      description: 'تضمین حداقل ۲۰۰% افزایش نرخ تبدیل یا بازگشت وجه'
    }
  ]

  const process = [
    {
      step: '۱',
      title: 'تحلیل و استراتژی',
      description: 'بررسی کسب‌وکار، تحلیل رقبا و تدوین استراتژی تبلیغاتی'
    },
    {
      step: '۲',
      title: 'راه‌اندازی کمپین',
      description: 'ایجاد حساب گوگل ادز، انتخاب کلمات کلیدی و نوشتن متن‌های تبلیغاتی'
    },
    {
      step: '۳',
      title: 'بهینه‌سازی مداوم',
      description: 'نظارت روزانه، A/B تستینگ و بهینه‌سازی کمپین‌ها'
    },
    {
      step: '۴',
      title: 'گزارش و تحلیل',
      description: 'ارائه گزارش‌های منظم و تحلیل دقیق از عملکرد کمپین‌ها'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">گوگل ادز</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                کمپین‌های تبلیغاتی گوگل با بالاترین نرخ تبدیل و کمترین هزینه. تیم متخصص ما آماده کمک به شما برای موفقیت در تبلیغات آنلاین است.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع کمپین گوگل ادز
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
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-green-600 mb-2">+۱۰۰۰</div>
                <div className="text-gray-600">کمپین موفق</div>
              </div>
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-blue-600 mb-2">۲۵۰%</div>
                <div className="text-gray-600">افزایش نرخ تبدیل</div>
              </div>
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-purple-600 mb-2">۴۰%</div>
                <div className="text-gray-600">کاهش هزینه</div>
              </div>
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-orange-600 mb-2">۲۴/۷</div>
                <div className="text-gray-600">نظارت و پشتیبانی</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات گوگل ادز ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از راه‌اندازی کمپین تا بهینه‌سازی مداوم، همه چیز را به ما بسپارید
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
                      <Target className="h-6 w-6 text-green-600" />
                      مزایای همکاری با ما
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <benefit.icon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">{benefit.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند کاری ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک و علمی، بهترین نتایج را برای شما به ارمغان می‌آوریم
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع کمپین گوگل ادز هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز کمپین تبلیغاتی خود را راه‌اندازی کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع کمپین گوگل ادز
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
