import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Mail, Target, TrendingUp, Users, Clock, Award, Zap, Send, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'بازاریابی ایمیلی | کمپین‌های ایمیلی با بالاترین نرخ باز شدن',
  description: 'خدمات حرفه‌ای بازاریابی ایمیلی از عصر سئو. طراحی کمپین‌های ایمیلی مؤثر با بالاترین نرخ تبدیل.',
  keywords: 'بازاریابی ایمیلی, کمپین ایمیلی, ایمیل مارکتینگ, خبرنامه, اتوماسیون ایمیل',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/email-marketing',
  },
  openGraph: {
    title: 'بازاریابی ایمیلی | عصر سئو',
    description: 'خدمات حرفه‌ای بازاریابی ایمیلی برای کمپین‌های مؤثر.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/email-marketing',
  },
}

export default function EmailMarketingPage() {
  const features = [
    'طراحی کمپین‌های ایمیلی هدفمند و شخصی‌سازی شده',
    'ایجاد لیست ایمیل با کیفیت و مرتبط',
    'طراحی قالب‌های ایمیل جذاب و واکنش‌گرا',
    'اتوماسیون ایمیل برای کمپین‌های خودکار',
    'تحلیل و گزارش‌گیری از عملکرد کمپین‌ها',
    'A/B تستینگ برای بهینه‌سازی نتایج',
    'یکپارچگی با سیستم‌های CRM و فروشگاه آنلاین',
    'رعایت قوانین اسپم و بهترین شیوه‌های ایمیل مارکتینگ'
  ]

  const benefits = [
    {
      icon: Target,
      title: 'هدف‌گیری دقیق',
      description: 'ارسال ایمیل به مخاطبان مناسب در زمان مناسب'
    },
    {
      icon: TrendingUp,
      title: 'نرخ تبدیل بالا',
      description: 'تا ۳۰۰% افزایش نرخ تبدیل با کمپین‌های شخصی‌سازی شده'
    },
    {
      icon: Users,
      title: 'افزایش وفاداری مشتریان',
      description: 'ایجاد ارتباط مداوم با مشتریان و افزایش وفاداری'
    },
    {
      icon: Award,
      title: 'هزینه مؤثر',
      description: 'بازگشت سرمایه بالا با هزینه کمتر نسبت به روش‌های دیگر'
    }
  ]

  const services = [
    {
      title: 'استراتژی ایمیل مارکتینگ',
      description: 'تدوین استراتژی جامع برای کمپین‌های ایمیلی',
      features: ['تحلیل مخاطبان', 'تعیین اهداف', 'تقویم محتوایی', 'شاخص‌های کلیدی عملکرد']
    },
    {
      title: 'طراحی قالب ایمیل',
      description: 'طراحی قالب‌های ایمیل جذاب و واکنش‌گرا',
      features: ['طراحی اختصاصی', 'واکنش‌گرایی کامل', 'سازگاری با ایمیل کلاینت‌ها', 'A/B تستینگ طراحی']
    },
    {
      title: 'اتوماسیون ایمیل',
      description: 'راه‌اندازی کمپین‌های ایمیلی خودکار',
      features: ['ایمیل خوشامدگویی', 'ایمیل یادآوری سبد خرید', 'ایمیل تولد', 'ایمیل ویژه مشتریان']
    },
    {
      title: 'تحلیل و گزارش‌گیری',
      description: 'اندازه‌گیری دقیق عملکرد کمپین‌های ایمیلی',
      features: ['نرخ باز شدن', 'نرخ کلیک', 'نرخ تبدیل', 'گزارش‌های پیشرفته']
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
                بازاریابی <span className="gradient-text">ایمیلی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                کمپین‌های ایمیلی با بالاترین نرخ باز شدن و تبدیل. از طراحی تا اجرا و تحلیل، همه چیز را به ما بسپارید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع کمپین ایمیلی
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات ایمیل مارکتینگ ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از طراحی کمپین تا تحلیل نتایج، همه چیز را برای موفقیت کمپین شما انجام می‌دهیم
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
                      <Mail className="h-6 w-6 text-blue-600" />
                      آمار کمپین‌های موفق ما
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۴۵%</div>
                        <div className="text-sm text-gray-600">نرخ باز شدن</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۱۵%</div>
                        <div className="text-sm text-gray-600">نرخ کلیک</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۳۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش فروش</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۱۰۰۰+</div>
                        <div className="text-sm text-gray-600">ایمیل ارسال شده</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای ایمیل مارکتینگ</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با بازاریابی ایمیلی، از مزایای متعددی برای کسب‌وکار خود بهره‌مند شوید
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

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند ایمیل مارکتینگ ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، کمپین‌های ایمیلی موفق ایجاد می‌کنیم
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل و برنامه‌ریزی</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل مخاطبان و برنامه‌ریزی کمپین‌های ایمیلی
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">طراحی و تولید محتوا</h3>
                <p className="text-gray-600 text-sm">
                  طراحی قالب ایمیل و تولید محتوای جذاب
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">ارسال و مدیریت</h3>
                <p className="text-gray-600 text-sm">
                  ارسال کمپین‌ها و مدیریت لیست ایمیل‌ها
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل و بهینه‌سازی</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل نتایج و بهینه‌سازی کمپین‌های بعدی
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع کمپین ایمیلی هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز کمپین ایمیلی خود را راه‌اندازی کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع کمپین ایمیلی
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
