import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Search, TrendingUp, Target, BarChart3, Clock, Users, Star, ArrowLeft, Globe, BookOpen, Settings, Award, FileText, ShoppingCart } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'سئو وب‌سایت | بهبود رتبه گوگل تا ۵۰۰% | عصر سئو',
  description: 'خدمات کامل سئو وب‌سایت شامل تحلیل تخصصی، تحقیق کلمات کلیدی، بهینه‌سازی فنی، محتوا و لینک‌سازی. افزایش ۴۰۰% ترافیک ارگانیک با متخصصین عصر سئو.',
  keywords: 'سئو وب‌سایت, بهبود رتبه گوگل, ترافیک ارگانیک, تحقیق کلمات کلیدی, سئو سایت',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/website-seo',
  },
  openGraph: {
    title: 'سئو وب‌سایت | افزایش رتبه گوگل | عصر سئو',
    description: 'بهینه‌سازی کاملی سایت برای رتبه عالی در گوگل و ترافیک ارگانیک بالا.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/website-seo',
    images: [
      {
        url: '/og-website-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'سئو وب‌سایت حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سئو وب‌سایت | عصر سئو',
    description: 'بهبود رتبه سایت در گوگل با تیم حرفه‌ای عصر سئو.',
    images: ['/og-website-seo.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'سئو وب‌سایت',
  'description': 'خدمات کاملی سئو وب‌سایت شامل تحقیق کلمات کلیدی، بهینه‌سازی فنی، محتوا و لینک‌سازی',
  'serviceType': 'Website SEO',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات سئو وب‌سایت',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تحقیق کلمات کلیدی',
          'description': 'شناسایی کلمات کلیدی استراتژیک برای کسب‌وکار'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'بهینه‌سازی صفحات',
          'description': 'بهینه‌سازی ساختار و محتوا برای موتورهای جستجو'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'نتایج سئو چه مدتی طول می‌کشد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'نتایج اولیه معمولاً در ۳-۶ ماه دیده می‌شود، اما رشد پایدار تا ۱۲ ماه ادامه دارد.'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا سئو برای همه نوع کسب‌وکار مناسب است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، سئو برای B2B، B2C، فروشگاه‌های آنلاین و برندهای محلی بسیار مؤثر است.'
        }
      }
    ]
  }
}

export default function WebsiteSEOPage() {
  const features = [
    {
      icon: Search,
      title: 'تحقیق کلمات کلیدی پیشرفته',
      description: 'شناسایی جامع کلمات کلیدی استراتژیک، بلندمدت و کوتاه‌مدت برای کسب‌وکار شما با تحلیل رقبا.',
      benefits: ['حجم جستجو بالا', 'رقابت مناسب', 'پتانسیل تبدیل بالا']
    },
    {
      icon: TrendingUp,
      title: 'بهینه‌سازی صفحات هوشمند',
      description: 'بهینه‌سازی کامل ساختار صفحات با تمرکز بر عناصر حیاتی سئو: عنوان، متا، هدینگ و محتوای اصلی.',
      benefits: ['رتبه‌بندی بهتر', 'تجربه کاربری عالی', 'سازگاری با موبایل']
    },
    {
      icon: Settings,
      title: 'سئو تکنیکال کامل',
      description: 'رفع مشکلات فنی اساسی شامل سرعت، امنیت، ایندکس و ساختار URL برای سازگاری حداکثری با گوگل.',
      benefits: ['سرعت بالاتر', 'ایمن بودن سایت', 'سازگاری با crawlerها']
    },
    {
      icon: BarChart3,
      title: 'تحلیل و گزارش‌دهی پیشرفته',
      description: 'گزارش‌های هفتگی/ماهانه با شاخص‌های کلیدی عملکرد، روند بهبود و استراتژی‌های بعدی.',
      benefits: ['شفافیت کامل', 'تصمیم‌گیری آگاهانه', 'پیگیری پیشرفت']
    }
  ];

  const seoProcess = [
    {
      step: '۱',
      title: 'آنالیز جامع سایت',
      desc: 'بررسی وضعیت فعلی سئو، رقبا و بازار هدف با ابزارهای پیشرفته گوگل'
    },
    {
      step: '۲',
      title: 'استراتژی اختصاصی',
      desc: 'تهیه نقشه راه جامع بر اساس اهداف، بودجه و شرایط منحصربه‌فرد کسب‌وکار شما'
    },
    {
      step: '۳',
      title: 'بهینه‌سازی فنی',
      desc: 'اجرای تغییرات تکنیکال شامل ساختار URL، سرعت، امنیت و ساختار داده‌ها'
    },
    {
      step: '۴',
      title: 'بهینه‌سازی محتوا',
      desc: 'ایجاد و بهبود محتوا بر اساس کلمات کلیدی استراتژیک و نیازهای کاربر'
    },
    {
      step: '۵',
      title: 'لینک‌سازی استراتژیک',
      desc: 'ایجاد پروفایل بک‌لینک سالم با کیفیت بالا و اعتبار قوی'
    },
    {
      step: '۶',
      title: 'پایش و بهبود',
      desc: 'رصد عملکرد، A/B Testing و اجرای بهبودهای مستمر بر اساس داده‌ها'
    }
  ];

  const benefits = [
    'رشد ترافیک ارگانیک تا ۵۰۰% در عرض ۱۲ ماه',
    'افزایش رتبه کلمات کلیدی مهم تا صفحات نخست گوگل',
    'تقویت اعتبار برند و اعتماد مشتریان آنلاین',
    'کاهش هزینه‌های تبلیغات کلیکی با ترافیک رایگان',
    'افزایش نرخ تبدیل بازدیدکنندگان به مشتریان',
    'مزیت رقابتی پایدار نسبت به رقبای محلی'
  ];

  const stats = [
    { metric: '۴۰۰%', label: 'افزایش ترافیک ارگانیک', color: 'text-blue-600', icon: TrendingUp },
    { metric: '۵-۶', label: 'ماه نتایج اولیه', color: 'text-green-600', icon: Clock },
    { metric: '۹۲%', label: 'رضایت مشتریان', color: 'text-purple-600', icon: Users },
    { metric: '۲۴/۷', label: 'پشتیبانی تخصصی', color: 'text-orange-600', icon: Star }
  ];

  const seoTypes = [
    {
      title: 'سئو محلی (Local SEO)',
      description: 'بهینه‌سازی برای جستجوهای محلی و مشتریان منطقه‌ای',
      examples: ['Google My Business', 'محتوای محلی', 'دیدگاه‌های آنلاین'],
      icon: Target,
      color: 'green'
    },
    {
      title: 'سئو بین‌المللی (Global SEO)',
      description: 'بهینه‌سازی برای بازارهای جهانی و جستجوهای بین‌المللی',
      examples: ['hreflang', 'CDN', 'محتوای چندزبانه'],
      icon: Globe,
      color: 'blue'
    },
    {
      title: 'سئو فروشگاه آنلاین (E-commerce SEO)',
      description: 'بهینه‌سازی تخصصی برای فروشگاه‌های آنلاین و محصولات',
      examples: ['Product Schema', 'Category SEO', 'Internal Linking'],
      icon: ShoppingCart,
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'نتایج سئو در چه بازه‌ای قابل مشاهده است؟',
      answer: 'بسته به میزان رقابت و شرایط فعلی سایت، معمولاً نتایج اولیه در ۳ تا ۶ ماه ظاهر می‌شود. رشد پایدار و قابل توجه معمولاً در بازه ۶ تا ۱۲ ماه اتفاق می‌افتد و بعد از آن رشد تصاعدی خواهد داشت.'
    },
    {
      question: 'آیا خدمات سئو برای همه نوع وب‌سایت مناسب است؟',
      answer: 'بله، سئو برای تمام انواع وب‌سایت‌ها از جمله کسب‌وکارهای B2B، B2C، فروشگاه‌های آنلاین، برندهای محلی، وبلاگ‌ها و حتی اپلیکیشن‌ها بسیار مؤثر و ضروری است. استراتژی هر کدام بهینه‌سازی می‌شود.'
    },
    {
      question: 'آیا هزینه سئو قابل مدیریت است؟',
      answer: 'خدمات سئو با پکیج‌های متنوع (ماهانه، سه‌ماهه، شش‌ماهه و سالانه) و براساس بودجه و نیاز کسب‌وکار ارائه می‌شود. از پکیج‌های اقتصادی تا کاملاً حرفه‌ای در دسترس است.'
    },
    {
      question: 'سئو تکنیکال چه تفاوتی با سئو محتوایی دارد؟',
      answer: 'سئو تکنیکال زیربنای فنی سایت است (سرعت، امنیت، ساختار) و سئو محتوایی درباره محتوا و کلمات کلیدی است. هر دو بخش ضروری بوده و باید همزمان اجرا شوند.'
    },
    {
      question: 'پس از اتمام دوره سئو چه اتفاقی می‌افتد؟',
      answer: 'پس از پایان دوره، استراتژی‌های حفظ رتبه و گزارش‌های ماهانه ارائه می‌شود. همچنین بسته‌های نگهداری سئو با هزینه ماهانه نیز در دسترس است.'
    },
    {
      question: 'چطور از پیشرفت کار مطلع می‌شم؟',
      answer: 'گزارش‌های هفتگی آنلاین، داشبورد اختصاصی سئو و جلسات ماهانه برای بررسی پیشرفت و برنامه‌ریزی مراحل بعدی برگزار می‌شود.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-emerald-100 text-emerald-700 mb-4">
                سئو وب‌سایت حرفه‌ای
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                سئو <span className="gradient-text">وب‌سایت</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                خدمات کامل سئو وب‌سایت برای رتبه عالی در گوگل و رشد ترافیک ارگانیک. از تحقیق کلمات کلیدی تا بهینه‌سازی فنی، عصر سئو همراه شماست.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع سئو وب‌سایت
                </Button>
                <Button variant="outline" size="lg">
                  تحلیل رایگان سئو سایت شما
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-teal-50 to-emerald-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-emerald-700 mb-2">
                      {stat.metric}
                    </div>
                    <p className="text-gray-900 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">سئو تخصصی</span> بر اساس نوع کسب‌وکار
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                استراتژی‌های سئو متناسب با نوع کسب‌وکار شما برای حداکثر کارایی
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {seoTypes.map((seoType, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-${seoType.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${seoType.color}-200 transition-colors`}>
                        <seoType.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{seoType.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{seoType.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {seoType.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">سئو حرفه‌ای</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکرد جامعی برای بهبود رتبه گوگل از پایه تا قله موفقیت
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای سئو <span className="gradient-text">وب‌سایت حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                سئوی کارآمد، سکوی پرتابی برای رشد پایدار و درآمد بالا در کسب‌وکار دیجیتال شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">سئو وب‌سایت</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۶ مرحله‌ای برای رتبه عالی و ترافیک پایدار
              </p>
            </div>

            <div className="space-y-8">
              {seoProcess.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-700">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                سوالات <span className="gradient-text">متداول</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                پاسخ به رایج‌ترین سوالات درباره سئو وب‌سایت
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-right flex items-center gap-2">
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-right leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              رتبه گوگل خود را همین امروز بهبود دهید!
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با خدمات حرفه‌ای سئو عصر سئو، رتبه وب‌سایت خود را در گوگل افزایش دهید و به ترافیک ارگانیک پایدار برسید. از تحلیل اولیه تا اجرای تخصصی و بهبود مستمر همراه شما هستیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                شروع سئو وب‌سایت
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان سئو
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
