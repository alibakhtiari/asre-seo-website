import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Users, Clock, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو سایت | بهینه‌سازی وب‌سایت برای رتبه‌های اول گوگل',
  description: 'خدمات حرفه‌ای سئو سایت از عصر سئو. بهینه‌سازی کامل وب‌سایت شما برای موتورهای جستجو و افزایش ترافیک ارگانیک.',
  keywords: 'سئو سایت, بهینه‌سازی وب‌سایت, سئو حرفه‌ای, رتبه اول گوگل, ترافیک ارگانیک',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/website-seo',
  },
  openGraph: {
    title: 'سئو سایت | عصر سئو',
    description: 'خدمات حرفه‌ای سئو سایت برای رسیدن به رتبه‌های اول گوگل.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/website-seo',
  },
}

export default function WebsiteSEOPage() {
  const features = [
    'تحلیل کامل وب‌سایت و شناسایی نقاط ضعف',
    'تحقیق و انتخاب بهترین کلمات کلیدی',
    'بهینه‌سازی محتوا و متا تگ‌ها',
    'لینک‌سازی داخلی و خارجی',
    'بهبود سرعت بارگذاری صفحات',
    'تنظیم Schema Markup',
    'گزارش‌گیری منظم از رتبه‌بندی',
    'پشتیبانی و مشاوره مداوم'
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'افزایش ترافیک ارگانیک',
      description: 'تا ۳۰۰% افزایش ترافیک طبیعی از موتورهای جستجو'
    },
    {
      icon: Users,
      title: 'افزایش نرخ تبدیل',
      description: 'بهبود کیفیت ترافیک و افزایش فروش آنلاین'
    },
    {
      icon: Clock,
      title: 'صرفه‌جویی در زمان',
      description: 'نتایج پایدار و بلندمدت بدون نیاز به تبلیغات مداوم'
    },
    {
      icon: Award,
      title: 'مزیت رقابتی',
      description: 'پیشی گرفتن از رقبا در نتایج جستجو'
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
                سئو <span className="gradient-text">سایت</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                وب‌سایت خود را برای موتورهای جستجو بهینه کنید و به رتبه‌های اول گوگل برسید. خدمات حرفه‌ای سئو سایت از تیم متخصص عصر سئو.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع پروژه سئو
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات سئو سایت ما شامل:</h2>
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
                      <Globe className="h-6 w-6 text-blue-600" />
                      آمار پروژه‌های موفق
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">+۵۰۰</div>
                        <div className="text-sm text-gray-600">پروژه موفق</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۳۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش ترافیک</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۶ ماه</div>
                        <div className="text-sm text-gray-600">نتایج اولیه</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۲۴/۷</div>
                        <div className="text-sm text-gray-600">پشتیبانی</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای سئو سایت</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با سرمایه‌گذاری روی سئو، از مزایای بلندمدت برای کسب‌وکار خود بهره‌مند شوید
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
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند کاری ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک و علمی، بهترین نتایج را برای شما به ارمغان می‌آوریم
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">۱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">تحلیل و بررسی</h3>
                <p className="text-gray-600">
                  بررسی کامل وب‌سایت، تحلیل رقبا و شناسایی فرصت‌های بهبود
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">۲</span>
                </div>
                <h3 className="text-xl font-bold mb-4">استراتژی و اجرا</h3>
                <p className="text-gray-600">
                  تدوین استراتژی بهینه‌سازی و اجرای گام به گام آن
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">۳</span>
                </div>
                <h3 className="text-xl font-bold mb-4">نظارت و گزارش</h3>
                <p className="text-gray-600">
                  پایش مداوم نتایج و ارائه گزارش‌های منظم از پیشرفت
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه سئو سایت خود را شروع کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع پروژه سئو
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                تماس با ما
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
