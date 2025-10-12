import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, Target, TrendingUp, SplitSquareVertical, BadgeCheck, BarChart3, Zap, Eye, CheckCircle, Brain, Users, Rocket } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'بهینه‌سازی نرخ تبدیل با AI | CRO با هوش مصنوعی',
  description: 'بهینه‌سازی نرخ تبدیل با هوش مصنوعی. تست A/B هوشمند، تحلیل قیف فروش، شخصی‌سازی محتوا، افزایش نرخ تبدیل تا ۳۰۰%.',
  keywords: 'بهینه‌سازی تبدیل, CRO, هوش مصنوعی, Conversion Optimization, نرخ تبدیل, تست A/B',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/conversion-optimization',
  },
  openGraph: {
    title: 'بهینه‌سازی نرخ تبدیل با AI | عصر سئو',
    description: 'افزایش نرخ تبدیل با هوش مصنوعی، تست A/B هوشمند و تحلیل رفتار کاربران.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/conversion-optimization',
    images: [
      {
        url: '/og-cro.jpg',
        width: 1200,
        height: 630,
        alt: 'بهینه‌سازی نرخ تبدیل با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بهینه‌سازی نرخ تبدیل با هوش مصنوعی | عصر سئو',
    description: 'بهینه‌سازی نرخ تبدیل با هوش مصنوعی و تست A/B هوشمند.',
    images: ['/og-cro.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'بهینه‌سازی نرخ تبدیل با هوش مصنوعی',
  'description': 'بهینه‌سازی نرخ تبدیل با استفاده از هوش مصنوعی شامل تست A/B هوشمند و تحلیل قیف فروش',
  'serviceType': 'AI Conversion Optimization',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات CRO هوش مصنوعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تست A/B هوشمند',
          'description': 'تست کردن هوشمند عناصر مختلف صفحه'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تحلیل قیف فروش',
          'description': 'شناسایی نقاط ضعف مسیر تبدیل کاربر'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'آیا تست‌های A/B به صورت خودکار انجام می‌شوند؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، تست‌ها بر بستر AI انجام شده و هوشمندترین نسخه صفحات برای نمایش به کاربران انتخاب می‌شود.'
        }
      },
      {
        '@type': 'Question',
        'name': 'تحلیل‌ها روی همه صفحات انجام می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'می‌توانید صفحات کلیدی یا کل سایت را برای بهینه‌سازی انتخاب کنید و گزارش اختصاصی بگیرید.'
        }
      }
    ]
  }
}

export default function ConversionOptimizationPage() {
  const features = [
    {
      icon: SplitSquareVertical,
      title: 'تست A/B هوشمند',
      description: 'اجرای تست‌های پیشرفته با تحلیل رفتار کاربران و ارائه بهترین نسخه صفحات برای افزایش نرخ تبدیل.',
      benefits: ['اتوماسیون کامل', 'دقت بالا', 'نتایج لحظه‌ای']
    },
    {
      icon: BarChart3,
      title: 'تحلیل دقیق قیف فروش',
      description: 'شناسایی نقاط ضعف قیف فروش با الگوریتم‌های AI و رفع موانع برای بهبود مسیر خرید کاربر.',
      benefits: ['شناسایی مشکلات', 'بهبود مسیر خرید', 'افزایش نرخ تبدیل']
    },
    {
      icon: Users,
      title: 'محتوای پویا و شخصی‌سازی شده',
      description: 'نمایش پیشنهادات، فراخوان‌ها و بنرها به‌صورت پویا متناسب با علایق و رفتار کاربران.',
      benefits: ['تجربه منحصربه‌فرد', 'تعامل بالاتر', 'تبدیل بهتر']
    },
    {
      icon: Settings,
      title: 'اتوماسیون بهینه‌سازی نرخ تبدیل',
      description: 'بهبود خودکار عناصر سایت و فرم‌ها با یادگیری مداوم رفتار کاربران جهت حداکثرسازی فروش.',
      benefits: ['بهینه‌سازی مداوم', 'یادگیری ماشینی', 'بهبود پیوسته']
    }
  ];

  const tools = [
    {
      name: 'تست کننده‌های هوشمند',
      description: 'اجرای تست‌های چند متغیره با آنالیز آماری پیشرفته',
      icon: SplitSquareVertical,
      features: 'تست همزمان چندین عنصر، اطمینان آماری، گزارش خودکار'
    },
    {
      name: 'ابزار نقشه حرارتی',
      description: 'تحلیل رفتار کاربران با نقشه‌های حرارتی و مسیر کلیک',
      icon: Eye,
      features: 'ردیابی حرکت چشم، تحلیل اسکرول، نقاط توجه'
    },
    {
      name: 'تحلیل‌گر قیف فروش',
      description: 'شناسایی دقیق نقاط ریزش در فرایند خرید',
      icon: TrendingUp,
      features: 'دیاگرام qف قیف، تحلیل ریزش‌ها، پیشنهاد بهبود'
    },
    {
      name: 'شخصی‌ساز هوشمند',
      description: 'بهینه‌سازی تجربه کاربری بر اساس پروفایل مشتریان',
      icon: Brain,
      features: 'یادگیری رفتاری، پیشنهاد هوشمند، پیغام‌های هدفمند'
    }
  ];

  const benefits = [
    'افزایش سریع نرخ تبدیل و فروش با تصمیمات مبتنی بر داده',
    'کاهش هزینه و زمان تست و بهینه‌سازی صفحات',
    'عدم نیاز به حدس و گمان؛ تمام تصمیمات براساس داده واقعی کاربران',
    'یکپارچه‌سازی با ابزارهای مارکتینگ و CRM',
    'پیش‌بینی رفتار کاربران با الگوریتم‌های یادگیری ماشین',
    'گزارش‌دهی لحظه‌ای از عملکرد و پیشرفت کمپین‌ها'
  ];

  const results = [
    'میانگین ۱۹۶% افزایش نرخ تبدیل در صفحات فرود',
    'کاهش ۵۶% هزینه جذب مشتری با بهینه‌سازی بهتر',
    'افزایش ۳۴۷% در عملکرد فرم‌های ثبت‌نام',
    'بهبود ۲۲۳% نرخ تکمیل خرید در فروشگاه آنلاین'
  ];

  const stats = [
    { metric: '۳۰۰%', label: 'افزایش نرخ تبدیل', color: 'text-green-600' },
    { metric: '۲۴/۷', label: 'نظارت مداوم', color: 'text-blue-600' },
    { metric: '۹۵%', label: 'دقت پیش‌بینی', color: 'text-purple-600' },
    { metric: '۵x', label: 'سرعت بهینه‌سازی', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'تحلیل فعلی',
      desc: 'بررسی عملکرد فعلی وب‌سایت و شناسایی نقاط بهبود نرخ تبدیل'
    },
    {
      step: '۲',
      title: 'راه‌اندازی ابزارها',
      desc: 'پیاده‌سازی ابزارهای آنالیز و تست روی صفحات کلیدی'
    },
    {
      step: '۳',
      title: 'شروع تست A/B',
      desc: 'اجرای تست‌های هوشمند با تمرکز روی عناصر حیاتی'
    },
    {
      step: '۴',
      title: 'بهینه‌سازی',
      desc: 'اجرای بهبودها بر اساس داده‌های تست و تحلیل رفتاری'
    },
    {
      step: '۵',
      title: 'پایش و بهبود',
      desc: 'مانیتورینگ مداوم عملکرد و بهینه‌سازی پیوسته'
    }
  ];

  const faqs = [
    {
      question: 'آیا تست‌های A/B به صورت خودکار انجام می‌شوند؟',
      answer: 'بله، تست‌ها بر بستر AI انجام شده و هوشمندترین نسخه صفحات برای نمایش به کاربران انتخاب می‌شود. نیازی به نظارت مداوم نیست.'
    },
    {
      question: 'تحلیل‌ها روی همه صفحات انجام می‌شود؟',
      answer: 'می‌توانید صفحات کلیدی یا کل سایت را برای بهینه‌سازی انتخاب کنید. پیشنهاد ما شروع با صفحات با اهمیت بالا مثل محصول و خرید است.'
    },
    {
      question: 'آیا نیاز به برنامه‌نویسی داریم؟',
      answer: 'خیر، همه خدمات به صورت یکپارچه و بدون نیاز به کدنویسی برای شما فعال می‌شود. تیم ما تمام پیاده‌سازی‌ها را انجام می‌دهد.'
    },
    {
      question: 'چه مدت طول می‌کشد تا نتیجه ببینیم؟',
      answer: 'شروع نتایج از هفته اول دیده می‌شود، اما نتایج قابل توجه معمولاً در عرض ۴ تا ۸ هفته حاصل می‌شود بسته به حجم وب‌سایت.'
    },
    {
      question: 'آیا با سیستم‌های مدیریت محتوا مختلف کار می‌کند؟',
      answer: 'بله، با تمام سیستم‌های محبوب مثل وردپرس، shopify، Magento و ... سازگار است و به راحتی یکپارچه‌سازی می‌شود.'
    },
    {
      question: 'گزارش‌های عملکرد چگونه ارائه می‌شود؟',
      answer: 'گزارش‌ها به صورت روزانه از طریق داشبورد آنلاین، هفتگی از طریق ایمیل و ماهانه به صورت تفصیلی ارائه می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                بهینه‌سازی هوشمند نرخ تبدیل
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                بهینه‌سازی نرخ تبدیل با <span className="gradient-text">AI</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                با استفاده از هوش مصنوعی، تست و بهینه‌سازی نرخ تبدیل به شکل هوشمند و خودکار انجام می‌شود. نرخ تبدیل خود را تا ۳۰۰% افزایش دهید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع بهینه‌سازی نرخ تبدیل
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.metric}
                    </div>
                    <p className="text-gray-900 font-medium">
                      {stat.label}
                    </p>
                    <Rocket className="h-6 w-6 text-gray-400 mx-auto mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ابزارهای <span className="gradient-text">CRO هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مجموعه ابزارهای پیشرفته هوش مصنوعی برای بهینه‌سازی نرخ تبدیل
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <tool.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{tool.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{tool.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{tool.features}</p>
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
                قابلیت‌های <span className="gradient-text">بهینه‌سازی هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته برای افزایش نرخ تبدیل و بهبود تجربه کاربری
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
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

        {/* Results Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                نتایج <span className="gradient-text">اثبات شده</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمار عملکرد بهینه‌سازی نرخ تبدیل در پروژه‌های موفق
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مزایای بهینه‌سازی نرخ تبدیل با <span className="gradient-text">AI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مزایای رقابتی CRO هوشمند در افزایش فروش و درآمد
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">بهینه‌سازی نرخ تبدیل</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۵ مرحله‌ای برای حداکثر کردن نرخ تبدیل
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-700">
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
                پاسخ به رایج‌ترین سوالات درباره بهینه‌سازی نرخ تبدیل با AI
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
              نرخ تبدیل خود را همین امروز بهینه کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با قدرت هوش مصنوعی، نرخ تبدیل وب‌سایت خود را افزایش دهید و فروش بیشتری کسب کنید. نتایج را از اولین هفته مشاهده خواهید کرد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                شروع بهینه‌سازی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                تحلیل رایگان وب‌سایت
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
