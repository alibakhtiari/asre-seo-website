import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, FileText, Search, Target, TrendingUp, Users, Lightbulb, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'سئو محتوا | تولید و بهینه‌سازی محتوای سئو شده برای رتبه اول گوگل',
  description: 'خدمات حرفه‌ای سئو محتوا از عصر سئو. تولید محتوای با کیفیت و بهینه‌سازی شده برای موتورهای جستجو.',
  keywords: 'سئو محتوا, تولید محتوا, بهینه‌سازی محتوا, محتوای سئو شده, کلمات کلیدی',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/content-seo',
  },
  openGraph: {
    title: 'سئو محتوا | عصر سئو',
    description: 'خدمات حرفه‌ای سئو محتوا برای تولید محتوای بهینه شده.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/content-seo',
  },
}

export default function ContentSEOPage() {
  const features = [
    'تحقیق و انتخاب بهترین کلمات کلیدی برای کسب‌وکار شما',
    'تولید محتوای با کیفیت و منحصر به فرد',
    'بهینه‌سازی محتوا برای موتورهای جستجو',
    'تحلیل و بررسی محتوای رقبا',
    'ایجاد تقویم محتوایی منظم',
    'بهینه‌سازی متا تگ‌ها و توضیحات',
    'لینک‌سازی داخلی استراتژیک',
    'اندازه‌گیری و گزارش‌گیری از عملکرد محتوا'
  ]

  const benefits = [
    {
      icon: Search,
      title: 'افزایش رتبه کلمات کلیدی',
      description: 'رسیدن به رتبه‌های اول گوگل برای کلمات کلیدی مهم'
    },
    {
      icon: Users,
      title: 'افزایش ترافیک ارگانیک',
      description: 'جذب مخاطبان هدفمند از طریق محتوای با کیفیت'
    },
    {
      icon: Target,
      title: 'هدف‌گیری دقیق',
      description: 'تولید محتوا برای پرسونای مخاطبان هدف شما'
    },
    {
      icon: TrendingUp,
      title: 'نتایج بلندمدت',
      description: 'ایجاد دارایی‌های دیجیتال ارزشمند برای کسب‌وکار'
    }
  ]

  const contentTypes = [
    {
      title: 'مقالات وبلاگ',
      description: 'تولید مقالات آموزشی و اطلاع‌رسانی برای وبلاگ شما',
      features: ['تحقیق کلمات کلیدی', 'ساختار بهینه', 'فراخوان عمل', 'لینک‌سازی داخلی']
    },
    {
      title: 'صفحات محصول',
      description: 'توضیحات جذاب و سئو شده برای محصولات شما',
      features: ['توضیحات منحصر به فرد', 'کلمات کلیدی هدف', 'فراخوان خرید', 'اطلاعات فنی']
    },
    {
      title: 'صفحات خدمات',
      description: 'معرفی خدمات با محتوای متقاعدکننده',
      features: ['مزایای خدمات', 'مقایسه با رقبا', 'شواهد اجتماعی', 'فراخوان اقدام']
    },
    {
      title: 'محتوای همیشه سبز',
      description: 'تولید محتوای ماندگار با ارزش طولانی مدت',
      features: ['موضوعات پرجستجو', 'اطلاعات به‌روز', 'ساختار استاندارد', 'لینک‌سازی خارجی']
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
                سئو <span className="gradient-text">محتوا</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                تولید محتوای با کیفیت و بهینه‌سازی شده برای موتورهای جستجو. محتوای ما نه تنها رتبه می‌گیرد، بلکه مخاطبان را درگیر می‌کند و به فروش تبدیل می‌شود.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع پروژه سئو محتوا
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات سئو محتوای ما</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از تحقیق کلمات کلیدی تا تولید و بهینه‌سازی محتوا، همه چیز را به ما بسپارید
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
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      نتایج سئو محتوا
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۳۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش ترافیک</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۱۵۰%</div>
                        <div className="text-sm text-gray-600">افزایش رتبه کلمات</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۵۰%</div>
                        <div className="text-sm text-gray-600">کاهش نرخ پرش</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">۱۰۰%</div>
                        <div className="text-sm text-gray-600">کیفیت محتوا</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">انواع محتوای سئو شده</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                تولید انواع مختلف محتوا متناسب با نیاز کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای سئو محتوا</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با سرمایه‌گذاری روی محتوای با کیفیت، از مزایای بلندمدت بهره‌مند شوید
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-green-600" />
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
        <section className="section-padding bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند تولید محتوای سئو شده</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، محتوای با کیفیت و بهینه شده دریافت کنید
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تحقیق کلمات کلیدی</h3>
                <p className="text-gray-600 text-sm">
                  شناسایی بهترین کلمات کلیدی برای کسب‌وکار شما
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">ایده‌پردازی محتوا</h3>
                <p className="text-gray-600 text-sm">
                  تولید ایده‌های جذاب و مرتبط با کلمات کلیدی
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">تولید محتوا</h3>
                <p className="text-gray-600 text-sm">
                  نوشتن محتوای با کیفیت و بهینه شده برای سئو
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">بهینه‌سازی و انتشار</h3>
                <p className="text-gray-600 text-sm">
                  ویرایش نهایی، بهینه‌سازی و انتشار محتوا
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده تولید محتوای سئو شده هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه سئو محتوای خود را شروع کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                شروع پروژه سئو محتوا
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
