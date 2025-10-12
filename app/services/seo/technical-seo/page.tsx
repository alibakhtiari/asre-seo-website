import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Shield, Smartphone, Code, Database, Globe, Activity, Settings, Monitor, Gauge, Bug, Target, AlertTriangle, TrendingUp } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'سئو تکنیکال | رفع خطاهای فنی و افزایش سرعت سایت | عصر سئو',
  description: 'خدمات سئو تکنیکال پیشرفته شامل بهینه‌سازی سرعت، امنیت SSL، داده‌های ساختاریافته، و رفع مشکلات فنی تا ۳۰۰% بهبود رتبه گوگل.',
  keywords: 'سئو تکنیکال, رفع خطای سایت, بهینه‌سازی فنی, افزایش سرعت سایت, Technical SEO, Core Web Vitals',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/technical-seo',
  },
  openGraph: {
    title: 'سئو تکنیکال | رفع خطاهای فنی سایت | عصر سئو',
    description: 'بهینه‌سازی فنی کامل سایت برای ارتقای رتبه گوگل و تجربه کاربری عالی.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/technical-seo',
    images: [
      {
        url: '/og-technical-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'سئو تکنیکال پیشرفته'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سئو تکنیکال | عصر سئو',
    description: 'رفع مشکلات فنی سایت و بهبود رتبه گوگل.',
    images: ['/og-technical-seo.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'سئو تکنیکال',
  'description': 'خدمات سئو تکنیکال شامل بهینه‌سازی سرعت، امنیت، ساختاریافته‌سازی داده‌ها و رفع مشکلات فنی',
  'serviceType': 'Technical SEO',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات سئو تکنیکال',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'بهینه‌سازی سرعت',
          'description': 'افزایش سرعت لود صفحات و بهبود Core Web Vitals'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'امنیت SSL',
          'description': 'پیکربندی HTTPS و حذف ریسک‌های امنیتی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'سئو تکنیکال چه تأثیری در رتبه سایت دارد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'سئو تکنیکال تا ۴۰% در تعیین رتبه سایت تأثیرگذار بوده و زیربنای تمامی اقدامات SEO است.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه مدت طول می‌کشد تا نتایج سئو تکنیکال دیده شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'نتایج سرعت و تجربه کاربری معمولاً ظرف ۱-۲ هفته، اما تأثیر در رتبه‌بندی ممکن است ۱-۳ ماه طول بکشد.'
        }
      }
    ]
  }
}

export default function TechnicalSEOPage() {
  const technicalServices = [
    {
      icon: Zap,
      title: 'بهینه‌سازی سرعت سایت',
      description: 'افزایش سرعت لود صفحات به زیر ۳ ثانیه و بهبود امتیاز Core Web Vitals تا ۹۵+.',
      benefits: ['سرعت بالاتر', 'رتبه بهتر', 'تجربه کاربری عالی']
    },
    {
      icon: Smartphone,
      title: 'سئو موبایل و واکنش‌گرا',
      description: 'اطمینان از عملکرد بی‌نقص سایت روی همه دستگاه‌ها و موبایل با طراحی کاملاً responsive.',
      benefits: ['سازگاری کامل', 'رتبه موبایل', 'دسترسی بیشتر']
    },
    {
      icon: Code,
      title: 'ساختاردهی Schema و داده‌های ساختاریافته',
      description: 'اضافه‌کردن داده‌های ساختاریافته JSON-LD برای نمایش غنی‌تر نتایج در جستجوی گوگل.',
      benefits: ['سنیپت‌های غنی', 'جذب کلیک بیشتر', 'رتبه بالاتر']
    },
    {
      icon: Shield,
      title: 'افزایش امنیت و SSL',
      description: 'پیکربندی HTTPS، گواهی SSL و حذف ریسک‌های امنیتی که رتبه سایت را تهدید می‌کنند.',
      benefits: ['امنیت کامل', 'اعتماد کاربر', 'رتبه بهتر']
    },
    {
      icon: Database,
      title: 'بهینه‌سازی دیتابیس',
      description: 'افزایش سرعت کوئری‌ها، بهینه‌سازی داده‌ها و جلوگیری از خطاهای دیتابیس و downtime.',
      benefits: ['سرعت بالاتر', 'ثبات سیستم', 'کارایی بهتر']
    },
    {
      icon: Globe,
      title: 'CDN و کشینگ پیشرفته',
      description: 'راه‌اندازی شبکه تحویل محتوا جهانی و برنامه‌ریزی هوشمند کش برای افزایش سرعت جهانی.',
      benefits: ['سرعت جهانی', 'کارایی بالا', 'تجربه کاربری بهتر']
    }
  ];

  const technicalIssues = [
    'خطاهای crawl و index کردن توسط گوگل',
    'ناهنجاری در فایل robots.txt یا متا روبات',
    'اشکال در Sitemap XML و ساختار ناوبری',
    'مشکل URLهای تکراری یا نبود canonical مناسب',
    'لینک‌های شکسته و خطاهای ۴۰۴ و ۵xx',
    'خطاهای Core Web Vitals (LCP، FID، CLS)',
    'مشکلات ساختار URL و پارامترهای غیرضروری',
    'اختلالات طراحی واکنش‌گرا و موبایل',
    'مشکلات تصاویر غیربهینه و حجم بالا',
    'نبود پروتکل HTTPS و گواهی SSL منقضی',
    'کدهای برنامه‌نویسی نامناسب و ارورهای JS',
    'مشکلات دسترسی‌پذیری و استاندارهای WCAG'
  ];

  const coreWebVitals = [
    {
      metric: 'LCP',
      title: 'Largest Contentful Paint',
      description: 'زمان بارگذاری بزرگترین عنصر محتوایی',
      target: '< ۲.۵ ثانیه',
      icon: Gauge,
      color: 'text-blue-600'
    },
    {
      metric: 'FID',
      title: 'First Input Delay',
      description: 'تأخیر اولین تعامل کاربر با صفحه',
      target: '< ۱۰۰ میلی‌ثانیه',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      metric: 'CLS',
      title: 'Cumulative Layout Shift',
      description: 'میزان تغییر ناگهانی چیدمان صفحه',
      target: '< ۰.۱ امتیاز',
      icon: Monitor,
      color: 'text-purple-600'
    }
  ];

  const benefits = [
    '+۲۰۰% افزایش سرعت بارگذاری صفحات',
    '+۱۵۰% بهبود امتیاز Google PageSpeed',
    '+۹۵% کاهش خطاهای فنی و crawler',
    '+۱۳۰% بهبود شاخص‌های Core Web Vitals',
    '+۱۲۰% افزایش نرخ ایندکس صفحات جدید',
    '+۸۰% کاهش bounce rate مخاطبان'
  ];

  const stats = [
    { metric: '۹۵+', label: 'امتیاز PageSpeed', color: 'text-green-600', icon: TrendingUp },
    { metric: '۲.۵s', label: 'زمان بارگذاری', color: 'text-blue-600', icon: Zap },
    { metric: '۱۰۰%', label: 'سازگاری موبایل', color: 'text-purple-600', icon: Smartphone },
    { metric: '۴۰%', label: 'تأثیر در رتبه‌بندی', color: 'text-orange-600', icon: Target }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'آنالیز فنی جامع',
      desc: 'بررسی کامل ساختار فنی سایت، ابزارهای گوگل و شناسایی مشکلات'
    },
    {
      step: '۲',
      title: 'اولویت‌بندی مسائل',
      desc: 'دسته‌بندی مشکلات بر اساس شدت تأثیر و زمانبر بودن رفع آن‌ها'
    },
    {
      step: '۳',
      title: 'بهینه‌سازی سرعت',
      desc: 'افزایش سرعت لود صفحات با ابزارهای پیشرفته بهینه‌سازی'
    },
    {
      step: '۴',
      title: 'رفع خطاهای فنی',
      desc: 'اصلاح ساختار URL، canonical، robots.txt و سایر تنظیمات فنی'
    },
    {
      step: '۵',
      title: 'امنیت و HTTPS',
      desc: 'پیکربندی گواهی SSL، امنیت وب‌سایت و محافظت در برابر حملات'
    },
    {
      step: '۶',
      title: 'مانیتورینگ و اصلاح',
      desc: 'پایش مداوم عملکرد، اعمال بهینه‌سازی‌های جدید و گزارش‌دهی'
    }
  ];

  const faqs = [
    {
      question: 'سئو تکنیکال چه تأمیناتی دارد؟',
      answer: 'سئو تکنیکال تأمین‌کننده زیربنای فنی سایت است شامل سرعت، امنیت، داده‌های ساختاریافته، رفع خطاهای crawler و بهینه‌سازی تجربه کاربری که تا ۴۰% در رتبه‌بندی گوگل تأثیرگذار است.'
    },
    {
      question: 'کدام خطاهای فنی بیشترین تأثیر منفی در سئو دارند؟',
      answer: 'خطاهای ایندکس شدن، سرعت پایین، نبود HTTPS، خطاهای ۴۰۴، ساختار URL نامناسب، تصاویر غیربهینه و مشکلات Core Web Vitals از جمله مخرب‌ترین عوامل فنی هستند.'
    },
    {
      question: 'آیا سئو تکنیکال به تنهایی کافی است؟',
      answer: 'خیر، سئو تکنیکال زیربنای ضروری است اما برای نتایج عالی باید با سئو محتوایی، سوشال سیگنال، لینک‌سازی و بازاریابی دیجیتال ترکیب شود.'
    },
    {
      question: 'Core Web Vitals چیست و چرا مهم است؟',
      answer: 'Core Web Vitals معیارهای گوگل برای سنجش تجربه کاربری شامل سرعت لود، تعاملی بودن و پایداری چیدمان است که از سال ۲۰۲۱ جزء عوامل رتبه‌بندی گوگل بوده و ۲۰% امتیاز سئو را تشکیل می‌دهد.'
    },
    {
      question: 'چه مدت طول می‌کشد تا نتایج سئو تکنیکال دیده شود؟',
      answer: 'نتایج سرعت و تجربه کاربری معمولاً ظرف ۱-۲ هفته، تأثیر در رتبه‌بندی ممکن است ۱-۳ ماه طول بکشد. اما خطاهای فنی شدید ممکن است تأثیر فوری در رتبه داشته باشند.'
    },
    {
      question: 'آیا خدمات فنی باعث اختلال در سایت می‌شود؟',
      answer: 'خیر، تمام تغییرات فنی با نهایت دقت و تست انجام می‌شود. تیم ما دارای نسخه پشتیبان کامل بوده و هیچ اختلالی در عملکرد عادی وب‌سایت ایجاد نخواهد شد.'
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
        <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">
                پیشرفته‌ترین سئو تکنیکال
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                سئو <span className="gradient-text">تکنیکال</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                زیربنای فنی سایت شما برای رتبه عالی در گوگل. رفع خطاهای فنی، افزایش سرعت ۳۰۰% و بهبود تجربه کاربری با متخصصین عصر سئو.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع بهینه‌سازی فنی
                </Button>
                <Button variant="outline" size="lg">
                  تحلیل رایگان سایت شما
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-cyan-700 mb-2">
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

        {/* Technical Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">سئو تکنیکال پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تمامی جوانب فنی سایت برای حداکثر سازگاری با الگوریتم‌های گوگل
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                        <service.icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
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

        {/* Core Web Vitals Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                معیارهای <span className="gradient-text">Core Web Vitals</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                فاکتورهای حیاتی گوگل برای سنجش تجربه کاربری و رتبه‌بندی
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreWebVitals.map((vital, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <vital.icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{vital.metric}</h3>
                        <p className="text-sm text-gray-600">{vital.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {vital.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">هدف بهینه:</span>
                      <span className={`text-lg font-bold ${vital.color}`}>{vital.target}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Issues Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خطاهای فنی <span className="gradient-text">شایع</span> که رتبه شما را نابود می‌کنند
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                شناسایی و رفع این مشکلات، سکوی پرتاب سایت شما به صفحات نخست نتایج جستجو خواهد بود
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-medium leading-relaxed text-sm">
                    {issue}
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
                نتایج ملموس <span className="gradient-text">سئو تکنیکال حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                بهبودهای چشمگیر عملکرد سایت در جستجوی گوگل و تجربه کاربری
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-cyan-600" />
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
        <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">بهینه‌سازی فنی</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام علمی برای ساخت زیربنای فنی قدرتمند
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-2xl font-bold text-cyan-700">
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
                پاسخ به رایج‌ترین سوالات درباره سئو تکنیکال
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
              زیربنای فنی سایت خود را تقویت کنید!
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با سئو تکنیکال پیشرفته، خطاهای فنی را رفع کنید، سرعت سایت را افزایش دهید و رتبه گوگل خود را تا ۳۰۰% بهبود بخشید. ساخت زیربنای قدرتمند، کلید موفقیت بلندمدت است.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                شروع بهینه‌سازی فنی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                تحلیل رایگان سرعت سایت
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
