import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, MessageSquare, Brain, Zap, Users, Clock, Smartphone, Globe, Shield, Star, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'چت‌بات فارسی هوشمند | دستیار مجازی ۲۴ ساعته برای کسب‌وکار شما',
  description: 'چت‌بات فارسی هوشمند عصر سئو. دستیار مجازی ۲۴ ساعته برای پاسخگویی به مشتریان، افزایش فروش و بهبود تجربه کاربری.',
  keywords: 'چت‌بات فارسی, دستیار مجازی, هوش مصنوعی, پشتیبانی ۲۴ ساعته, افزایش فروش',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/persian-chatbot',
  },
  openGraph: {
    title: 'چت‌بات فارسی هوشمند | عصر سئو',
    description: 'چت‌بات فارسی هوشمند برای پشتیبانی ۲۴ ساعته و افزایش فروش.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/persian-chatbot',
  },
}

export default function PersianChatbotPage() {
  const features = [
    'پاسخگویی خودکار به سوالات متداول مشتریان',
    'پشتیبانی ۲۴ ساعته بدون نیاز به نیروی انسانی',
    'پاسخگویی به زبان فارسی با لهجه‌های مختلف',
    'یادگیری مداوم از مکالمات برای بهبود عملکرد',
    'یکپارچگی با سیستم‌های CRM و فروشگاه آنلاین',
    'ارائه پیشنهادات فروش و محصولات مرتبط',
    'تحلیل احساسات مشتریان برای بهبود خدمات',
    'گزارش‌گیری دقیق از عملکرد و رضایت مشتریان'
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'صرفه‌جویی در زمان',
      description: 'پاسخگویی همزمان به چندین مشتری بدون محدودیت زمانی'
    },
    {
      icon: Users,
      title: 'افزایش رضایت مشتریان',
      description: 'پاسخگویی سریع و دقیق به سوالات مشتریان'
    },
    {
      icon: TrendingUp,
      title: 'افزایش فروش',
      description: 'ارائه پیشنهادات فروش هوشمند و مرتبط به مشتریان'
    },
    {
      icon: Shield,
      title: 'امنیت و اعتماد',
      description: 'حفظ حریم خصوصی و امنیت اطلاعات مشتریان'
    }
  ]

  const useCases = [
    {
      title: 'فروشگاه‌های آنلاین',
      description: 'راهنمایی مشتریان در انتخاب محصولات و نهایی کردن خرید',
      icon: Smartphone
    },
    {
      title: 'سایت‌های شرکتی',
      description: 'پاسخگویی به سوالات متداول و هدایت به بخش‌های مختلف',
      icon: Globe
    },
    {
      title: 'مراکز پشتیبانی',
      description: 'پشتیبانی اولیه و انتقال موارد پیچیده به کارشناسان',
      icon: Users
    },
    {
      title: 'رستوران‌ها و خدمات',
      description: 'رزرو آنلاین، معرفی منو و پاسخگویی به سوالات',
      icon: Star
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                  جدیدترین تکنولوژی هوش مصنوعی
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  چت‌بات <span className="gradient-text">فارسی</span> هوشمند
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  دستیار مجازی ۲۴ ساعته برای پاسخگویی به مشتریان، افزایش فروش و بهبود تجربه کاربری کسب‌وکار شما.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gradient-bg text-white">
                    سفارش چت‌بات فارسی
                  </Button>
                  <Button variant="outline" size="lg">
                    دمو رایگان
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">چت‌بات عصر سئو</h3>
                        <p className="text-sm text-gray-600">هوشمند و همیشه آنلاین</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>آنلاین و آماده پاسخگویی</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>پاسخگویی به زبان فارسی</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>یادگیری از تجربیات قبلی</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">نمونه چت با چت‌بات ما:</p>
                    <div className="bg-gray-50 rounded-lg p-4 text-right">
                      <p className="text-sm text-gray-800 mb-2">مشتری: سلام، ساعات کاری شما چیه؟</p>
                      <p className="text-sm text-indigo-600">چت‌بات: سلام! ما ۲۴ ساعته آنلاین هستیم و آماده کمک به شما هستیم. 😊</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">قابلیت‌های چت‌بات فارسی ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                چت‌بات هوشمند ما با قابلیت‌های پیشرفته، تجربه‌ای منحصر به فرد برای مشتریان شما ایجاد می‌کند
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
                      آمار عملکرد چت‌بات‌های ما
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">۹۵%</div>
                        <div className="text-sm text-gray-600">دقت پاسخگویی</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۸۰%</div>
                        <div className="text-sm text-gray-600">کاهش هزینه پشتیبانی</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۲۴/۷</div>
                        <div className="text-sm text-gray-600">کارکرد بدون وقفه</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۳۰%</div>
                        <div className="text-sm text-gray-600">افزایش فروش</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای چت‌بات فارسی هوشمند</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با پیاده‌سازی چت‌بات فارسی، از مزایای متعددی برای کسب‌وکار خود بهره‌مند شوید
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

        {/* Use Cases Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">کاربردهای چت‌بات فارسی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                چت‌بات هوشمند ما برای انواع کسب‌وکارها و صنایع مختلف قابل استفاده است
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-indigo-50 animate-fade-in">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند پیاده‌سازی چت‌بات</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، چت‌بات اختصاصی خود را در کمترین زمان دریافت کنید
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">۱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">تحلیل نیازها</h3>
                <p className="text-gray-600">
                  بررسی کسب‌وکار شما و شناسایی نیازهای مشتریان برای طراحی سناریوهای مناسب
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">۲</span>
                </div>
                <h3 className="text-xl font-bold mb-4">آموزش و تنظیم</h3>
                <p className="text-gray-600">
                  آموزش چت‌بات با اطلاعات کسب‌وکار شما و تنظیم سناریوهای پاسخگویی
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-pink-600">۳</span>
                </div>
                <h3 className="text-xl font-bold mb-4">پیاده‌سازی و پشتیبانی</h3>
                <p className="text-gray-600">
                  راه‌اندازی چت‌بات روی وب‌سایت شما و ارائه پشتیبانی مداوم برای بهبود عملکرد
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده سفارش چت‌بات فارسی هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز چت‌بات اختصاصی خود را سفارش دهید و از مزایای آن بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                سفارش چت‌بات فارسی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاهده دمو
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
