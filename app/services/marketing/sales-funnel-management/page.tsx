import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, ScrollText, CheckCircle2, Target, Zap, BarChart3, Clock, ArrowRight, DollarSign, Award } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'مدیریت قیف فروش | Sales Funnel Management | افزایش نرخ تبدیل ۳۰۰% | عصر سئو',
  description: 'طراحی و مدیریت علمی قیف فروش با تحلیل comport رفتار مشتری، اتوماسیون بازاریابی، A/B Testing و افزایش نرخ تبدیل تا ۳۰۰%.',
  keywords: 'قیف فروش, Sales Funnel, نرخ تبدیل, Customer Journey, اتوماسیون فروش, بازاریابی دیجیتال',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/sales-funnel-management',
  },
  openGraph: {
    title: 'مدیریت قیف فروش | عصر سئو',
    description: 'طراحی و بهینه‌سازی قیف فروش برای افزایش نرخ تبدیل.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/sales-funnel-management',
    images: [
      {
        url: '/og-sales-funnel.jpg',
        width: 1200,
        height: 630,
        alt: 'مدیریت قیف فروش حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قیف فروش | عصر سئو',
    description: 'طراحی و مدیریت qفروشيمق فروش برای فروش بیشتر.',
    images: ['/og-sales-funnel.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'مدیریت قیف فروش',
  'description': 'خدمات طراحی و بهینه‌سازی قیف فروش شامل تحلیل رفتار مشتری و اتوماسیون بازاریابی',
  'serviceType': 'Sales Funnel Management',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات qفروشيمق فروش',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تحلیل بین',
          'description': 'بررسی مسیر مسیر فعلی مشتریان'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'بهینه‌سازی تبدیل',
          'description': 'افزایش نرخ تبدیل در هر مرحله'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'قیف فروش چیست؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'قیف فروش راهبری علمی مشتریان از آگاهی تا خرید نهایی است.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چقدر نرخ تبدیل بهبود می‌یابد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'متوسط ۲۵۰-۴۰۰% بهبود نرخ تبدیل با بهینه‌سازی علمی.'
        }
      }
    ]
  }
}

export default function SalesFunnelManagementPage() {
  const funnelStages = [
    {
      stage: 'آگاهی (Awareness)',
      phase: 'TOP',
      percentage: '۱۰۰%',
      description: 'شناخت نیاز و معرفی برند',
      color: 'blue',
      activities: ['محتوای آموزشی', 'سوشال مدیا', 'تبلیغات']
    },
    {
      stage: 'علاقه‌مندی (Interest)',
      phase: 'MIDDLE',
      percentage: '۵۰%',
      description: 'کشف راه‌حل‌ها و مقایسه گزینه‌ها',
      color: 'green',
      activities: ['وبلاگ تخصصی', 'ویدیو آموزشی', 'وبینار']
    },
    {
      stage: 'تصمیم‌گیری (Consideration)',
      phase: 'MIDDLE',
      percentage: '۲۵%',
      description: 'ارزیابی مزایا و مقایسه رقبا',
      color: 'yellow',
      activities: ['مطالعات موردی', 'تست رایگان', 'مشاوره رایگان']
    },
    {
      stage: 'اقدام (Action)',
      phase: 'BOTTOM',
      percentage: '۵%',
      description: 'خرید نهایی و تکمیل تراکنش',
      color: 'orange',
      activities: ['پیشنهاد ویژه', 'گارانتی', 'پرداخت آسان']
    },
    {
      stage: 'وفاداری (Retention)',
      phase: 'BOTTOM',
      percentage: '۳%',
      description: 'تکرار خرید و بازاریابی دهان به دهان',
      color: 'purple',
      activities: ['پشتیبانی عالی', 'برنامه وفاداری', 'بازاریابی مجدد']
    }
  ];

  const services = [
    {
      icon: BarChart3,
      title: 'تحلیل پیشرفته قیف فروش فعلی',
      description: 'بررسی کامل مسیر مشتری از ورود تا خرید، شناسایی نقاط ضعف و فرصت‌های بهین##سازی با ابزارهای گوگل آنالیتیکس و هاتجار.',
      benefits: ['شناسایی نقاط ضعف', 'داده‌های دقیق', 'برنامه‌ریزی علمی']
    },
    {
      icon: Target,
      title: 'طراحی قیف فروش شخصی‌سازی شده',
      description: 'ساخت مسیر مشتری منحصربه‌فرد بر اساس محصول، مخاطب و اهداف کسب‌وکار با استفاده از بهترین روش‌های بازاریابی دیجیتال.',
      benefits: ['بازدهی بالاتر', 'تجربه شخصی', 'نرخ تبدیل بهتر']
    },
    {
      icon: Zap,
      title: 'اتوماسیون بازاریابی هوشمند',
      description: 'پیاده‌سازی سیستم اتوماسیون ایمیل، پیامک و پیام‌رسانی برای یادآوری‌ها، فالوآپ‌ها و پیشنهادات هوشمند.',
      benefits: ['کارایی عملیاتی', 'بازدهی ۲۴/۷', 'کاهش هزینه‌ها']
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing و بهبود مستمر',
      description: 'تست مداوم صفحات، فرم‌ها، CTAها و محتوای بازاریابی برای دستیابی به بهترین نرخ تبدیل ممکن.',
      benefits: ['بهبود مداوم', 'نتایج مبتنی بر داده', 'بازدهی حداکثری']
    },
    {
      icon: Users,
      title: 'مدیریت مشتری و CRM یکپارچه',
      description: 'نظام مدیریت مشتری متمرکز با دسته‌بندی هوشمند بر اساس مرحله قیف، تاریخچه خرید و رفتار آنلاین.',
      benefits: ['مدیریت ساده', 'نمایش یکپارچه', 'مشتری‌سازی بهتر']
    },
    {
      icon: DollarSign,
      title: 'گزارش‌دهی مالی و ROI دقیق',
      description: 'اندازه‌گیری دقیق هزینه‌های بازاریابی، درآمدهای حاصل و نرخ بازگشت سرمایه برای تصمیم‌گیری‌های آگاهانه.',
      benefits: ['برنامه‌ریزی بودجه', 'شفافیت مالی', 'تصمیم‌گیری بهتر']
    }
  ];

  const optimizationStrategies = [
    {
      title: 'Landing Page Optimization',
      icon: Target,
      techniques: [
        'A/B Testing عنوان‌ها و تصاویر',
        'بهینه‌سازی فرم‌های ورودی',
        'افزایش سرعت بارگذاری',
        'CTAهای استراتژیک'
      ],
      impact: '+۴۲% نرخ تبدیل'
    },
    {
      title: 'Email Marketing Automation',
      icon: ScrollText,
      techniques: [
        'کمپین‌های welcome خودکار',
        'ایمیل‌های follow-up هوشمند',
        'کمپین‌های remarketing',
        'فالوآپ ترک خرید'
      ],
      impact: '+۳۱۰% نرخ بازگشایی'
    },
    {
      title: 'Customer Journey Mapping',
      icon: Users,
      techniques: [
        'نقشه‌ریزی مسیر مشتری',
        'شناسایی نقاط تماس',
        'بهینه‌سازی تجربه کاربری',
        'کاهش friction در فرآیند خرید'
      ],
      impact: '+۲۸۰% نرخ تکمیل خرید'
    }
  ];

  const benefits = [
    '۲۵۰-۴۰۰% افزایش نرخ تبدیل لید به مشتری با مسیر بهینه‌سازی شده',
    '۵۰% کاهش هزینه مشتری جدید با اتوماسیون فرایند فروش',
    '۳۵% بهبود تجربه مشتری و نرخ رضایت از طریق UX شخصی‌سازی شده',
    '۱۰۰% شفافیت در عملکرد قیف با داشبوردهای تحلیلی پیشرفته',
    'کردن نگهساری مشتری تا ۵ برابر با استراتژی‌های بازاریابی مجدد'
  ];

  const stats = [
    { metric: '۲۵۰%', label: 'افزایش نرخ تبدیل', color: 'text-green-600', icon: TrendingUp },
    { metric: '۵۰%', label: 'کاهش cost acquisition', color: 'text-blue-600', icon: DollarSign },
    { metric: '۱۰۰%', label: 'گزارش شفافیت', color: 'text-purple-600', icon: BarChart3 },
    { metric: '۲۴/۷', label: 'اتوماسیون کامل', color: 'text-orange-600', icon: Zap }
  ];

  const workflowSteps = [
    {
      step: 'تحلیل و بررسی',
      desc: 'کنار قیف فعلی، شناسایی نقاط ضعف و فرصت‌های بهبود'
    },
    {
      step: 'طراحی استراتژی',
      desc: 'ساخت نقشه راه جامع با اهداف کمی و استراتژی‌های اجرایی'
    },
    {
      step: 'پیاده‌سازی فنی',
      desc: 'راه‌اندازی ابزارها، اتوماسیون‌ها و پیکسل‌های پیگیری'
    },
    {
      step: 'تست و بهینه‌سازی',
      desc: 'A/B Testing گسترده و بهینه‌سازی مداوم بر اساس داده‌ها'
    },
    {
      step: 'گزارش‌دهی و مانیتورینگ',
      desc: 'گزارش هفتگی، تحلیل ROI و پیشنهادات بهبود مستمر'
    }
  ];

  const faqs = [
    {
      question: 'قیف فروش به چه معناست و چرا اهمیت دارد؟',
      answer: 'قیف فروش (Sales Funnel) مسیر علمی هدایت مشتری از مرحله آگاهی تا خرید نهایی است. اگر این مسیر بهینه نباشد، بسیاری از مشتریان بالقوه را از دست می‌دهید. بهینه‌سازی qفروشيمق فروش می‌تواند نرخ تبدیل را تا ۵ برابر بهبود دهد.'
    },
    {
      question: 'چطور نرخ تبدیل قیف فروش را اندازه‌گیری می‌کنیم؟',
      answer: 'با ابزارهایی مانند Google Analytics، Hotjar، پایگاه داده CRM و پیکسل‌های تبلیغاتی، هر مرحله از قیف را دقیقاً اندازه‌گیری می‌کنیم. نرخ تبدیل بین مراحل، میانگین مدت زمان هر مرحله و نقاط خروج مشتری‌ها را پیگیری می‌کنیم.'
    },
    {
      question: 'چه مدت طول می‌کشد تا نتایج بهبود qفروشيمق فروش را ببینیم؟',
      answer: 'معمولاً در عرض ۱-۲ هفته اول تغییرات اساسی اعمال می‌شود و نتایج اولیه قابل مشاهده است. اما بهینه‌سازی کامل و پایدار معمولاً ۴-۸ هفته زمان نیاز دارد. در این مدت نرخ تبدیل به صورت مداوم بهبود می‌یابد.'
    },
    {
      question: 'آیا qفروشيمق فروش برای همه نوع کسب‌وکار مناسب است؟',
      answer: 'بله! هم برای فروشگاه‌های آنلاین، هم خدمات دیجیتال، هم B2B و هم کسب‌وکارهای سنتی. استراتژی هر کدام متفاوت است اما هدف مشترک بهینه‌سازی نرخ تبدیل است. از استارتاپ‌های کوچک تا شرکت‌های بزرگ از این سرویس بهره‌مند می‌شوند.'
    },
    {
      question: 'آیا تغییرات فنی روی وب‌سایت لازم است؟',
      answer: 'بسته به شرایط فعلی شما متفاوت است. اگر ابزارهای آنالیز و اتوماسیون ندارید، نیاز به راه‌اندازی دارند. اگر دارید، استراتژی را بر موجودیت فعلی پیاده‌سازی می‌کنیم. هیچ اختلالی در عملکرد عادی وب‌سایت ایجاد نخواهد شد.'
    },
    {
      question: 'هزینه خدمات مدیریت qفروشيمق فروش چقدر است؟',
      answer: 'قیمت‌گذاری بر اساس پیچیدگی قیف فعلی، ابزارهای مورد نیاز و مدت زمان قرارداد تعیین می‌شود. بسته‌های اقتصادی از ۲ میلیون تومان شروع می‌شود و بسته‌های VIP تا ۱۵ میلیون تومان برای پروژه‌های جامع. هزینه سرمایه‌گذاری عالی برای بازگشت ۵ برابری است!'
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
        <section className="section-padding bg-linear-to-br from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-orange-100 text-orange-700 mb-4">
                مدیریت qفروشيمق فروش حرفه‌ای
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                مدیریت <span className="gradient-text">قیف فروش</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                افزایش نرخ تبدیل ۳۰۰% با طراحی علمی قیف فروش، اتوماسیون بازاریابی هوشمند و بهینه‌سازی رفتار مشتری در عصر سئو.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  بهینه‌سازی qفروشيمق فروش
                </Button>
                <Button variant="outline" size="lg">
                  تحلیل رایگان qفروشيمق فروش فعلی
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-red-50 to-orange-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-red-700 mb-2">
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

        {/* Funnel Stages Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مراحل <span className="gradient-text">قیف فروش استاندارد</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مسیر علمی هدایت مشتریان از آگاهی تا خرید نهایی
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {funnelStages.map((stage, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-orange-700">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{stage.stage}</h3>
                          <Badge className={`bg-${stage.color}-100 text-${stage.color}-700`}>{stage.percentage}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{stage.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {stage.activities.map((activity, actIndex) => (
                            <Badge key={actIndex} variant="outline" className="text-sm">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">مدیریت قیف فروش</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکردی جامع برای تبدیل بازدیدکنندگان به مشتریان
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <service.icon className="h-6 w-6 text-orange-600" />
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
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
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

        {/* Optimization Strategies Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                استراتژی‌های <span className="gradient-text">بهینه‌سازی اثربخش</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تکنیک‌های عملی با اثبات نتایج برای هر مرحله قیف فروش
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {optimizationStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <strategy.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{strategy.title}</CardTitle>
                    </div>
                    <Badge className="mb-3 bg-green-100 text-green-700">{strategy.impact}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {strategy.techniques.map((technique, techniqueIndex) => (
                        <div key={techniqueIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                          {technique}
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
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای مدیریت <span className="gradient-text">قیف فروش حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس که مستقیماً به کسب‌وکار شما کمک می‌کنند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-orange-600" />
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
        <section className="section-padding bg-linear-to-br from-red-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">مدیریت قیف فروش</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۵ مرحله‌ای برای حداکثر نرخ تبدیل
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.step}
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
                پاسخ به پرسش‌های رایج مشتریان درباره qفروشيمق فروش
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
        <section className="section-padding bg-linear-to-br from-slate-900 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              چرا بسیاری از مشتریان بالقوه را از دست می‌دهید؟
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              احتماق خیلی بالا است که قیف فروش شما بهینه نباشد و مشتریان شما در مسیر خرید رها شوند. عصر سئو با تحلیل علمی و پیاده‌سازی اتوماسیون پیشرفته، نرخ تبدیل شما را تا ۵ برابر افزایش می‌دهد. اجازه ندهید مشتریان شما به رقبا بروند!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                شروع بهینه‌سازی qفروشيمق فروش
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                تحلیل رایگان qفروشيمق فروش فعلی
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
