import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Share2, Target, TrendingUp, Users, Heart, MessageCircle, Eye, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'مدیریت شبکه‌های اجتماعی | استراتژی و محتوای شبکه‌های اجتماعی',
  description: 'خدمات حرفه‌ای مدیریت شبکه‌های اجتماعی از عصر سئو. استراتژی، تولید محتوا و مدیریت کمپین‌های اجتماعی.',
  keywords: 'شبکه‌های اجتماعی, اینستاگرام, تلگرام, لینکدین, مدیریت سوشال مدیا',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/social-media',
  },
  openGraph: {
    title: 'مدیریت شبکه‌های اجتماعی | عصر سئو',
    description: 'خدمات حرفه‌ای مدیریت شبکه‌های اجتماعی برای رشد برند شما.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/social-media',
  },
}

export default function SocialMediaPage() {
  const features = [
    'استراتژی شبکه‌های اجتماعی متناسب با برند شما',
    'تولید محتوای جذاب و خلاقانه برای هر پلتفرم',
    'مدیریت و برنامه‌ریزی پست‌های روزانه و هفتگی',
    'طراحی گرافیک و ویدیوهای اختصاصی برای شبکه‌های اجتماعی',
    'مدیریت کمپین‌های تبلیغاتی در شبکه‌های اجتماعی',
    'تحلیل و گزارش‌گیری از عملکرد صفحات',
    'مدیریت کامنت‌ها و پاسخگویی به مخاطبان',
    'شناسایی ترندها و تولید محتوای مرتبط'
  ]

  const benefits = [
    {
      icon: Users,
      title: 'افزایش دنبال‌کنندگان',
      description: 'تا ۵۰۰% افزایش تعداد دنبال‌کنندگان واقعی و هدفمند'
    },
    {
      icon: Heart,
      title: 'تعامل بیشتر',
      description: 'افزایش لایک، کامنت و اشتراک‌گذاری محتوا'
    },
    {
      icon: Target,
      title: 'هدف‌گیری دقیق',
      description: 'شناسایی و هدف‌گیری مخاطبان مناسب برای برند شما'
    },
    {
      icon: TrendingUp,
      title: 'افزایش فروش',
      description: 'تبدیل دنبال‌کنندگان به مشتریان واقعی'
    }
  ]

  const platforms = [
    {
      name: 'اینستاگرام',
      description: 'مدیریت حرفه‌ای صفحه اینستاگرام با محتوای جذاب',
      features: ['پست‌های طراحی شده', 'استوری‌های خلاقانه', 'ریلز و ویدیوها', 'IGTV و لایو']
    },
    {
      name: 'تلگرام',
      description: 'مدیریت کانال و گروه‌های تلگرام',
      features: ['کانال تلگرام', 'ربات هوشمند', 'پاسخ خودکار', 'کمپین‌های تبلیغاتی']
    },
    {
      name: 'لینکدین',
      description: 'مدیریت صفحه لینکدین برای کسب‌وکارهای B2B',
      features: ['محتوای حرفه‌ای', 'شبکه‌سازی', 'استخدام و منابع انسانی', 'مقالات تخصصی']
    },
    {
      name: 'توییتر',
      description: 'مدیریت توییتر برای تعامل لحظه‌ای با مخاطبان',
      features: ['توییت‌های جذاب', 'تعامل با کاربران', 'پوش نوتیفیکیشن', 'ترندینگ']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                شبکه‌های <span className="gradient-text">اجتماعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                مدیریت حرفه‌ای شبکه‌های اجتماعی برای رشد برند شما. از استراتژی تا اجرا، همه چیز را به ما بسپارید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع مدیریت سوشال مدیا
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات شبکه‌های اجتماعی ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از طراحی استراتژی تا تولید محتوا و مدیریت کمپین‌ها، همه چیز را برای شما انجام می‌دهیم
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
                      <Share2 className="h-6 w-6 text-pink-600" />
                      آمار عملکرد ما در شبکه‌های اجتماعی
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-600 mb-2">۵۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش دنبال‌کنندگان</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۳۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش تعامل</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۱۰۰۰+</div>
                        <div className="text-sm text-gray-600">پست موفق</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۵۰+</div>
                        <div className="text-sm text-gray-600">صفحه مدیریت شده</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">پلتفرم‌های تحت مدیریت</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مدیریت حرفه‌ای تمام پلتفرم‌های مهم شبکه‌های اجتماعی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {platform.features.map((feature, featureIndex) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای مدیریت شبکه‌های اجتماعی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با مدیریت حرفه‌ای شبکه‌های اجتماعی، از مزایای متعددی بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-pink-600" />
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
        <section className="section-padding bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند مدیریت شبکه‌های اجتماعی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، حضور موفقی در شبکه‌های اجتماعی داشته باشید
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل و استراتژی</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل مخاطبان و تدوین استراتژی شبکه‌های اجتماعی
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">برنامه‌ریزی محتوا</h3>
                <p className="text-gray-600 text-sm">
                  ایجاد تقویم محتوایی و برنامه‌ریزی پست‌ها
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">انتشار و مدیریت</h3>
                <p className="text-gray-600 text-sm">
                  انتشار محتوا و مدیریت تعامل با مخاطبان
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">نظارت و گزارش</h3>
                <p className="text-gray-600 text-sm">
                  نظارت مداوم و ارائه گزارش‌های عملکرد
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع مدیریت شبکه‌های اجتماعی هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز مدیریت شبکه‌های اجتماعی خود را به ما بسپارید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع مدیریت سوشال مدیا
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
