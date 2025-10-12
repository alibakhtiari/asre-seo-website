import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Mic, Users, HeartPulse, BadgeCheck, AlertTriangle, BarChart3, Zap, TrendingUp, Shield, CheckCircle } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'مانیتورینگ برند با هوش مصنوعی | AI Brand Monitoring Services',
  description: 'مانیتورینگ هوشمند برند با تحلیل احساسات کاربران. نظارت ۲۴/۷ بر شائبه‌های برند، تحلیل بحران‌ها، جلوگیری از مشکلات و مدیریت شهرت آنلاین.',
  keywords: 'مانیتورینگ برند, هوش مصنوعی, Brand Monitoring, تحلیل احساسات, نظارت وب, تجربه مشتری',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/brand-monitoring',
  },
  openGraph: {
    title: 'مانیتورینگ برند با هوش مصنوعی | عصر سئو',
    description: 'نظارت هوشمند بر برند در شبکه‌های اجتماعی و وب با تحلیل احساسات و بررسی نظرات کاربران.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/brand-monitoring',
    images: [
      {
        url: '/og-brand-monitoring.jpg',
        width: 1200,
        height: 630,
        alt: 'مانیتورینگ برند با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مانیتورینگ برند با هوش مصنوعی | عصر سئو',
    description: 'نظارت هوشمند بر برند در شبکه‌های اجتماعی با تحلیل احساسات.',
    images: ['/og-brand-monitoring.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'مانیتورینگ برند با هوش مصنوعی',
  'description': 'نظارت هوشمند بر برند در شبکه‌های اجتماعی و وب با تحلیل احساسات کاربران',
  'serviceType': 'AI Brand Monitoring',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات مانیتورینگ برند',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تحلیل احساسات برند',
          'description': 'میزان مثبت، منفی و خنثی بودن احساسات کاربران نسبت به برند'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'نظارت بحران‌ها',
          'description': 'شناسایی سریع بحران‌های احتمالی برند در رسانه‌های اجتماعی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'برند من در چه رسانه‌هایی مانیتور می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'در تمامی بسترهای آنلاین شامل اینستاگرام، تلگرام، توییتر، سایت‌های خبری، وبلاگ‌ها و انجمن‌ها.'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا هشدارهای آنی دریافت می‌کنم؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، در صورت بروز کامنت منفی یا انتشار خبر مهم بلافاصله هشدار دریافت خواهید کرد.'
        }
      }
    ]
  }
}

export default function BrandMonitoringPage() {
  const features = [
    {
      icon: Eye,
      title: 'نظارت بر تمامی کانال‌های آنلاین',
      description: 'بررسی مداوم برند شما در وب، شبکه‌های اجتماعی، انجمن‌ها و رسانه‌های خبری.',
      benefits: ['پوشش کامل', 'نظارت ۲۴/۷', 'جمع‌آوری داده‌ها']
    },
    {
      icon: AlertTriangle,
      title: 'تشخیص سریع بحران‌های احتمالی',
      description: 'شناسایی کامنت‌ها و اخبار منفی با هشدار آنی برای پیشگیری از بحران شهرت برند.',
      benefits: ['هشدارهای آنی', 'پیشگیری بحران', 'مدیریت سریع']
    },
    {
      icon: Users,
      title: 'تحلیل احساسات کاربران',
      description: 'تشخیص حس مثبت، منفی یا خنثی نظرات پیرامون برند و محصولات شما با هوش مصنوعی.',
      benefits: ['دقت بالا', 'تحلیل لحظه‌ای', 'گزارش بصری']
    },
    {
      icon: HeartPulse,
      title: 'گزارش‌های تحلیلی دقیق',
      description: 'دریافت گزارش‌های بصری درباره تاثیر هر کمپین و تغییر تصویر برند در طول زمان.',
      benefits: ['گزارش کامل', 'ویژگی‌های بصری', 'تاریخچه برند']
    }
  ];

  const monitoringChannels = [
    {
      name: 'شبکه‌های اجتماعی',
      icon: <Users className="h-6 w-6" />,
      platforms: 'اینستاگرام، تلگرام، توییتر، لینکدین، آپارات',
      features: 'مانیتورینگ کامنت‌ها، استوری‌ها، پست‌ها و DM'
    },
    {
      name: 'رسانه‌های خبری',
      icon: <Eye className="h-6 w-6" />,
      platforms: 'وب‌سایت‌های خبری، خبرگزاری‌ها، وبلاگ‌ها',
      features: 'نظارت اخبار و تحلیل پوشش رسانه‌ای'
    },
    {
      name: 'پلتفرم‌های موجود',
      icon: <HeartPulse className="h-6 w-6" />,
      platforms: 'انجمن‌ها، سایت‌های نظرات، آپ مارکت',
      features: 'بررسی لیست‌ها و تحلیل بازخورد کاربران'
    }
  ];

  const benefits = [
    'پیشگیری از بحران‌های شهرت و مدیریت موثر رضایت مشتری',
    'ایجاد تصویر مثبت و اعتبار قوی برای برند',
    'تحلیل لحظه‌ای دیدگاه و احساس کاربران',
    'افزایش آگاهی از برند و فرصت پاسخ سریع به فرصت‌ها و تهدیدها',
    'روابط عمومی قوی و مدیریت شکل‌گیری برند',
    'بهبود عملکرد کمپین‌های بازاریابی با تحلیل اجتماعی'
  ];

  const analytics = [
    'آمار احساسات و تحلیل جملات معنادار',
    'مقایسه برند با رقبا در حوزه‌های مختلف',
    'تغییر تصویر برند در طول زمان',
    'گزارش عملکرد کمپین‌های مارکتینگ',
    'پیشنهاد استراتژی‌های بهبود برند',
    'گزارش ویژه مدیریت بحران و حرفسازی برند'
  ];

  const stats = [
    { metric: '۹۰%', label: 'دقت تشخیص بحران‌ها', color: 'text-blue-600' },
    { metric: '۲۴/۷', label: 'نظارت مداوم', color: 'text-green-600' },
    { metric: '۵min', label: 'زمان تشخیص مشکلات', color: 'text-purple-600' },
    { metric: '۱۰۰+', label: 'پلتفرم تحت مراقبه', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'راه‌اندازی داشبورد',
      desc: 'تنظیم کلمات کلیدی، رقبا و کانال‌های مدنظر در داشبورد مانیتورینگ'
    },
    {
      step: '۲',
      title: 'آموزش هوش مصنوعی',
      desc: 'آموزش مدل یادگیری برای شناسایی درست احساسات و برند شما'
    },
    {
      step: '۳',
      title: 'شروع مانیتورینگ',
      desc: 'شروع نظارت مداوم بر تمامی کانال‌های آنلاین'
    },
    {
      step: '۴',
      title: 'گزارش‌دهی',
      desc: 'ارسال گزارش‌های روزانه، هفتگی و ماهانه عملکرد برند'
    },
    {
      step: '۵',
      title: 'پشتیبانی و هشدار',
      desc: 'هشدارهای آنی در صورت بروز مشکلات و ارائه مشاوره'
    }
  ];

  const faqs = [
    {
      question: 'برند من در چه رسانه‌هایی مانیتور می‌شود؟',
      answer: 'در تمامی بسترهای آنلاین شامل اینستاگرام، تلگرام، توییتر، لینکدین، آپارات، سایت‌های خبری، خبرگزاری‌ها، وبلاگ‌ها، انجمن‌ها و سایت‌های نظرات را پوشش می‌دهد.'
    },
    {
      question: 'آیا هشدارهای آنی دریافت می‌کنم؟',
      answer: 'بله، در صورت بروز کامنت منفی، انتشار خبر مهم یا افزایش ناگهانی بحث‌ها پیرامون برند شما بلافاصله هشدار دریافت خواهید کرد.'
    },
    {
      question: 'آیا تحلیل‌ها شامل داده‌های رقبا نیز هست؟',
      answer: 'در صورت نیاز، تحلیل برندهای رقیب، مقایسه جایگاه آن‌ها با برند شما و گزارش فرصت‌های رقابتی هم انجام می‌شود.'
    },
    {
      question: 'چه مدت طول می‌کشد تا سیستم تنظیم شود؟',
      answer: 'معمولاً بین ۲۴ تا ۷۲ ساعت زمان نیاز است تا سیستم کاملاً تنظیم شده و مانیتورینگ آغاز شود.'
    },
    {
      question: 'آیا می‌توان کلمات کلیدی را تغییر داد؟',
      answer: 'بله، پنل مدیریتی انعطاف‌پذیری کامل برای افزودن، حذف و ویرایش کلمات کلیدی دارد.'
    },
    {
      question: 'گزارش‌ها با چه فرمت‌هایی ارسال می‌شود؟',
      answer: 'گزارش‌ها در فرمت‌های PDF، Email، داشبورد آنلاین و فایل‌های Excel یا CSV ارائه می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-red-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-red-100 text-red-700 mb-4">
                نظارت هوشمند بر شهرت برند
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                مانیتورینگ برند با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                نظارت هوشمند بر شهرت برند شما در تمام فضای آنلاین با تحلیل احساسات کاربران، جلوگیری از بحران‌ها و مدیریت حرفه‌ای تصویر برند.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع مانیتورینگ برند
                </Button>
                <Button variant="outline" size="lg">
                  دریافت گزارش نمونه
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-pink-50 to-red-50">
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
                    <Shield className="h-6 w-6 text-gray-400 mx-auto mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Monitoring Channels Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                کانال‌های <span className="gradient-text">تحت نظارت</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش کامل تمامی فضای دیجیتال برای محافظت از برند شما
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {monitoringChannels.map((channel, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        {channel.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold">{channel.name}</CardTitle>
                    </div>
                    <p className="text-red-600 font-medium mb-2">{channel.platforms}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{channel.features}</p>
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
                قابلیت‌های <span className="gradient-text">مانیتورینگ هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته برای نظارت کامل و پایداری برند
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-red-600" />
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

        {/* Analytics Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                گزارش‌های <span className="gradient-text">تحلیلی جامع</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                تحلیل‌های پیشرفته برای درک بهتر احساس کاربران و موقعیت برند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {analytics.map((analytic, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {analytic}
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
                مزایای مانیتورینگ برند با <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مزایای رقابتی نظارت هوشمند بر برند در فضای دیجیتال
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-red-600" />
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
        <section className="section-padding bg-gradient-to-br from-pink-50 to-red-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">مانیتورینگ برند</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام برای شروع نظارت هوشمند برند
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold text-red-700">
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
                پاسخ به رایج‌ترین سوالات درباره مانیتورینگ هوشمند برند
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
              برند خود را تحت مراقبت هوش مصنوعی قرار دهید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با مانیتورینگ هوشمند، همیشه از وضعیت برند خود آگاه باشید و در صورت نیاز سریعاً واکنش نشان دهید. شهرت برند خود را محافظت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                شروع مانیتورینگ برند
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
