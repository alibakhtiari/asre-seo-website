import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, FileText, Search, Target, TrendingUp, Users, Clock, Award, PenTool, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تولید محتوای متنی | محتوای متنی سئو شده و جذاب برای وب‌سایت شما',
  description: 'خدمات حرفه‌ای تولید محتوای متنی از عصر سئو. محتوای متنی سئو شده، جذاب و متناسب با مخاطبان هدف شما.',
  keywords: 'تولید محتوای متنی, محتوای متنی سئو شده, مقالات وبلاگ, محتوای سایت',
  alternates: {
    canonical: 'https://asreseo.com/services/content/text-content',
  },
  openGraph: {
    title: 'تولید محتوای متنی | عصر سئو',
    description: 'خدمات حرفه‌ای تولید محتوای متنی سئو شده و جذاب.',
    type: 'website',
    url: 'https://asreseo.com/services/content/text-content',
  },
}

export default function TextContentPage() {
  const features = [
    'تولید محتوای متنی منحصر به فرد و با کیفیت',
    'بهینه‌سازی محتوا برای موتورهای جستجو',
    'تحقیق کلمات کلیدی و تحلیل رقبا',
    'تولید محتوا در موضوعات مختلف و تخصصی',
    'ویرایش و بازنویسی محتوای موجود',
    'تولید محتوای همیشه سبز (Evergreen)',
    'محتوای آموزشی و اطلاع‌رسانی',
    'تولید محتوای فروش و بازاریابی'
  ]

  const benefits = [
    {
      icon: Search,
      title: 'بهبود رتبه سئو',
      description: 'محتوای بهینه شده برای رتبه‌های بالاتر در گوگل'
    },
    {
      icon: Users,
      title: 'جذب مخاطبان هدف',
      description: 'محتوایی که مخاطبان هدف شما را جذب می‌کند'
    },
    {
      icon: Clock,
      title: 'صرفه‌جویی در زمان',
      description: 'تمرکز شما روی کسب‌وکار، تولید محتوا با ما'
    },
    {
      icon: Award,
      title: 'کیفیت حرفه‌ای',
      description: 'محتوای حرفه‌ای و استانداردهای بالای کیفیت'
    }
  ]

  const contentTypes = [
    {
      title: 'مقالات وبلاگ',
      description: 'تولید مقالات آموزشی و اطلاع‌رسانی برای وبلاگ شما',
      features: ['تحقیق موضوع', 'ساختار بهینه', 'سئو داخلی', 'فراخوان عمل']
    },
    {
      title: 'صفحات محصول',
      description: 'توضیحات جذاب و سئو شده برای محصولات شما',
      features: ['معرفی محصول', 'مزایا و ویژگی‌ها', 'نظرات مشتریان', 'فراخوان خرید']
    },
    {
      title: 'صفحات خدمات',
      description: 'معرفی خدمات با محتوای متقاعدکننده',
      features: ['توضیح خدمات', 'مزایای رقابتی', 'شواهد اجتماعی', 'فراخوان اقدام']
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
                محتوای <span className="gradient-text">متنی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                تولید محتوای متنی سئو شده و جذاب برای وب‌سایت شما. محتوای ما نه تنها رتبه می‌گیرد، بلکه مخاطبان را درگیر می‌کند و به فروش تبدیل می‌شود.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  سفارش تولید محتوا
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">خدمات تولید محتوای متنی ما</h2>
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
                      <FileText className="h-6 w-6 text-green-600" />
                      آمار محتوای متنی ما
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">۱۰۰۰+</div>
                        <div className="text-sm text-gray-600">مقاله تولید شده</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۲۰۰%</div>
                        <div className="text-sm text-gray-600">افزایش ترافیک</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۱۰۰%</div>
                        <div className="text-sm text-gray-600">کیفیت منحصر به فرد</div>
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

        {/* Content Types */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">انواع محتوای متنی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                تولید انواع مختلف محتوای متنی متناسب با نیاز کسب‌وکار شما
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مزایای محتوای متنی حرفه‌ای</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با محتوای متنی با کیفیت، از مزایای متعددی برای کسب‌وکار خود بهره‌مند شوید
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فرآیند تولید محتوای متنی</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                با روش کار سیستماتیک ما، محتوای متنی با کیفیت و بهینه شده دریافت کنید
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
                  <PenTool className="h-8 w-8 text-blue-600" />
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
                  نوشتن محتوای متنی با کیفیت و بهینه شده برای سئو
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده سفارش تولید محتوا هستید؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              همین امروز پروژه تولید محتوای متنی خود را شروع کنید و نتایج را ببینید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                سفارش تولید محتوا
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
