import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Target, TrendingUp, Users, Clock, Award, Zap, MousePointer, Smartphone, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'طراحی صفحات فرود | لندینگ پیج‌های با بالاترین نرخ تبدیل',
  description: 'خدمات حرفه‌ای طراحی صفحات فرود از عصر سئو. طراحی لندینگ پیج‌های جذاب با بالاترین نرخ تبدیل.',
  keywords: 'صفحات فرود, لندینگ پیج, طراحی لندینگ پیج, نرخ تبدیل, صفحات فروش',
  alternates: {
    canonical: 'https://asreseo.com/services/web/landing-pages',
  },
  openGraph: {
    title: 'طراحی صفحات فرود | عصر سئو',
    description: 'خدمات حرفه‌ای طراحی صفحات فرود برای بالاترین نرخ تبدیل.',
    type: 'website',
    url: 'https://asreseo.com/services/web/landing-pages',
  },
}

export default function LandingPagesPage() {
  const features = [
    'طراحی صفحات فرود اختصاصی و هدفمند',
    'بهینه‌سازی برای نرخ تبدیل بالا',
    'طراحی واکنش‌گرا برای تمام دستگاه‌ها',
    'یکپارچگی با ابزارهای تحلیل و ردیابی',
    'A/B تستینگ برای بهبود عملکرد',
    'بهینه‌سازی سرعت بارگذاری صفحات',
    'طراحی بر اساس روانشناسی فروش',
    'پشتیبانی و به‌روزرسانی مداوم'
  ]

  const benefits = [
    {
      icon: Target,
      title: 'نرخ تبدیل بالا',
      description: 'تا ۳۰۰% افزایش نرخ تبدیل با طراحی حرفه‌ای'
    },
    {
      icon: TrendingUp,
      title: 'افزایش فروش',
      description: 'تبدیل بازدیدکنندگان به مشتریان واقعی'
    },
    {
      icon: Users,
      title: 'تجربه کاربری عالی',
      description: 'طراحی کاربرپسند و جذاب برای مخاطبان هدف'
    },
    {
      icon: Award,
      title: 'کیفیت حرفه‌ای',
      description: 'استانداردهای بالای طراحی و عملکرد'
    }
  ]

  const pageTypes = [
    {
      title: 'صفحات فروش محصول',
      description: 'طراحی صفحات فروش برای معرفی و فروش محصولات',
      features: ['معرفی محصول', 'مزایا و ویژگی‌ها', 'نظرات مشتریان', 'فراخوان خرید']
    },
    {
      title: 'صفحات ثبت‌نام دوره',
      description: 'طراحی صفحات ثبت‌نام برای دوره‌های آموزشی',
      features: ['معرفی دوره', 'مزایای شرکت', 'اطلاعات مدرس', 'فرم ثبت‌نام']
    },
    {
      title: 'صفحات لید مغناطیس',
      description: 'طراحی صفحات برای جمع‌آوری اطلاعات مشتریان',
      features: ['ارائه محتوای رایگان', 'فرم اطلاعات', 'فراخوان اقدام', 'پیگیری خودکار']
    },
    {
      title: 'صفحات رویداد',
      description: 'طراحی صفحات معرفی و ثبت‌نام رویدادها',
      features: ['اطلاعات رویداد', 'مزایای شرکت', 'سخنرانان', 'فرم ثبت‌نام']
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
                صفحات <span className="gradient-text">فرود</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                طراحی صفحات فرود حرفه‌ای با بالاترین نرخ تبدیل. از ایده تا اجرا، صفحات فروش فوق‌العاده‌ای برای کسب‌وکار شما ایجاد می‌کنیم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  سفارش صفحه فرود
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات طراحی صفحات فرود ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از طراحی تا بهینه‌سازی، همه چیز را برای موفقیت صفحه فرود شما انجام می‌دهیم
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
                      <Target className="h-6 w-6 text-purple-600" />
                      آمار صفحات فرود موفق ما
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۳۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش نرخ تبدیل</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۵۰%</div>
                        <div className="text-sm text-gray-600">کاهش هزینه جذب مشتری</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۱۰۰+</div>
                        <div className="text-sm text-gray-600">صفحه فرود طراحی شده</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۹۵%</div>
                        <div className="text-sm text-gray-600">رضایت مشتریان</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Page Types */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">انواع صفحات فرود</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                طراحی صفحات فرود متناسب با نیازهای مختلف کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pageTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {type.features.map((feature, featureIndex) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای صفحات فرود حرفه‌ای</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با طراحی حرفه‌ای صفحات فرود، از مزایای متعددی برای کسب‌وکار خود بهره‌مند شوید
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند طراحی صفحات فرود</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، صفحات فرود با بالاترین نرخ تبدیل دریافت کنید
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحلیل و استراتژی</h3>
                <p className="text-gray-600 text-sm">
                  تحلیل مخاطبان هدف و تدوین استراتژی صفحه فرود
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">طراحی و توسعه</h3>
                <p className="text-gray-600 text-sm">
                  طراحی رابط کاربری جذاب و توسعه صفحه فرود
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">بهینه‌سازی و تست</h3>
                <p className="text-gray-600 text-sm">
                  A/B تستینگ و بهینه‌سازی برای بهترین عملکرد
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">راه‌اندازی و تحلیل</h3>
                <p className="text-gray-600 text-sm">
                  راه‌اندازی صفحه و تحلیل مداوم عملکرد آن
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده سفارش صفحه فرود هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز صفحه فرود حرفه‌ای خود را سفارش دهید و نرخ تبدیل خود را افزایش دهید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                سفارش صفحه فرود
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
