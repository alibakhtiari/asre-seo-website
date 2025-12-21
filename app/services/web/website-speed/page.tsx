import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../../src/generated/images-map.json'
import { Zap, Timer, CheckCircle2, TrendingUp, ThermometerSun, Cpu, Gauge, Clock, DollarSign, Target, Award, BarChart3, Smartphone } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'بهینه‌سازی سرعت وب‌سایت | افزایش سرعت بارگذاری | Core Web Vitals | عصر سئو',
  description: 'بهینه‌سازی تخصصی سرعت وب‌سایت با زمان بارگذاری کمتر از ۲ ثانیه، بهبود Core Web Vitals و افزایش نرخ تبدیل Google PageSpeed Insights.',
  keywords: 'بهینه‌سازی سرعت سایت, افزایش سرعت وب‌سایت, Core Web Vitals, Page Speed, Lighthouse',
  alternates: {
    canonical: 'https://asreseo.com/services/web/website-speed',
  },
  openGraph: {
    title: 'بهینه‌سازی سرعت وب‌سایت | عصر سئو',
    description: 'افزایش سرعت بارگذاری وب‌سایت با استانداردهای گوگل.',
    type: 'website',
    url: 'https://asreseo.com/services/web/website-speed',
    images: [
      {
        url: '/og-website-speed.jpg',
        width: 1200,
        height: 630,
        alt: 'بهینه‌سازی سرعت وب‌سایت حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بهینه‌سازی سرعت وب‌سایت | عصر سئو',
    description: 'افزایش سرعت بارگذاری وب‌سایت با استانداردهای گوگل.',
    images: ['/og-website-speed.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'بهینه‌سازی سرعت وب‌سایت',
  'description': 'خدمات تخصصی بهینه‌سازی سرعت و عملکرد وب‌سایت برای تجربه کاربری بهتر',
  'serviceType': 'Website Speed Optimization',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات بهینه‌سازی سرعت',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Core Web Vitals Optimization',
          'description': 'بهبود معیارهای حیاتی گوگل برای سرعت'
        }
      }
    ]
  }
}

export default function WebsiteSpeedPage() {
  const speedFeatures = [
    {
      icon: Zap,
      title: 'افزایش سرعت بارگذاری',
      description: 'کاهش زمان لود صفحات به زیر ۲ ثانیه برای رضایت گوگل و کاربر با فشرده‌سازی پیشرفته.',
      benefits: ['رضایت کاربر بالاتر', 'رتبه‌بندی بهتر', 'نرخ تبدیل بیشتر']
    },
    {
      icon: Cpu,
      title: 'بهینه‌سازی منابع مرورگر',
      description: 'مدیریت هوشمند منابع، کشینگ پیشرفته و توزیع محتوا از نزدیک‌ترین CDN.',
      benefits: ['کارایی حداکثری', 'تجزیه بارگذاری', 'سرعت جهانی']
    },
    {
      icon: BarChart3,
      title: 'بهبود Core Web Vitals',
      description: 'رفع کامل مشکلات Largest Contentful Paint، Cumulative Layout Shift و Interaction to Next Paint.',
      benefits: ['امتیاز کامل گوگل', 'تجربه عالی', 'رتبه بالاتر']
    },
    {
      icon: Smartphone,
      title: 'بهینه‌سازی موبایل',
      description: 'طراحی Mobile-First با تصاویر ریسپانسیو و تاچ بهینه‌سازی برای سرعت حداکثر.',
      benefits: ['رضایت موبایل', 'دسترسی‌پذیری بهتر', 'مزیت رقابتی']
    },
    {
      icon: Gauge,
      title: 'نظارت مداوم عملکرد',
      description: 'پیگیری منظم سرعت سایت و هشداردهی برای حافظه مصرفی بالا یا کندی عملکرد.',
      benefits: ['شناسایی سریع проблемы', 'نگهداری پایدار', 'کارایی بلندمدت']
    },
    {
      icon: TrendingUp,
      title: 'تجزیه تحلیل رقابتی',
      description: 'مقایسه سرعت سایت با رقبا و یافت فرصت‌های بهبود عملکرد منحصربه‌فرد.',
      benefits: ['برتری رقابتی', 'بینش استراتژیک', 'بهبود مستمر']
    }
  ];

  const coreWebVitals = [
    {
      metric: 'Largest Contentful Paint (LCP)',
      description: 'زمان بارگذاری بزرگترین عنصر صفحه - باید زیر ۲.۵ ثانیه باشد',
      importance: 'اولین چیزی که کاربر می‌بیند',
      target: '< 2.5s'
    },
    {
      metric: 'First Input Delay (FID)',
      description: 'زمان پاسخگویی برای اولین تعامل کاربر - باید زیر ۱۰۰ میلی‌ثانیه باشد',
      importance: 'تجربه تعاملی کاربر',
      target: '< 100ms'
    },
    {
      metric: 'Cumulative Layout Shift (CLS)',
      description: 'میزان جابجایی غیرمنتظره عناصر - باید زیر ۰.۱ باشد',
      importance: 'ثبات بصری صفحه',
      target: '< 0.1'
    }
  ];

  const speedOptimizations = [
    {
      category: 'Server-side Optimizations',
      optimizations: [
        'پیکربندی وب سرور (Nginx/Apache)',
        'ذخیره‌سازی سمت سرور و کشینگ',
        'فشرده‌سازی GZIP/Brotli پیشرفته',
        'Database query optimization',
        'CDN جهانی و Edge computing'
      ]
    },
    {
      category: 'Client-side Optimizations',
      optimizations: [
        'Code splitting و lazy loading',
        'Minification کردن کدهای JS/CSS',
        'Optimize کردن تصاویر با WebP',
        'Critical CSS inlining',
        'Font loading optimization'
      ]
    },
    {
      category: 'Content Optimizations',
      optimizations: [
        'Lazy load تصاویر و ویدیوها',
        'Prefetch و preload استراتژیک',
        'Remove unused CSS/JS',
        'Optimize third-party scripts',
        'Resource hints و priority hints'
      ]
    }
  ];

  const impactMetrics = [
    { before: '۵.۲ ثانیه', after: '۱.۸ ثانیه', metric: 'زمان بارگذاری', improvement: '۶۵% سریع‌تر' },
    { before: '۴۲%', after: '۲۳%', metric: 'نرخ خروج (Bounce Rate)', improvement: '۴۵% کاهش' },
    { before: '۱.۲%', after: '۲.۸%', metric: 'نرخ تبدیل', improvement: '۱۳۰% افزایش' },
    { before: '۶۲ امتیاز', after: '۹۵ امتیاز', metric: 'امتیاز Core Web Vitals', improvement: '۵۳% بهبود' }
  ];

  const toolsUsed = [
    {
      tool: 'Google PageSpeed Insights',
      purpose: 'اندازه‌گیری عملکرد و امتیازدهی',
      frequency: 'پیش از شروع و پس از پایان'
    },
    {
      tool: 'Lighthouse',
      purpose: 'تجزیه تحلیل حداکثر جزئیات عملکرد',
      frequency: 'پس از هر بهینه‌سازی بزرگ'
    },
    {
      tool: 'WebPageTest',
      purpose: 'تست سرعت از مکان‌های مختلف جهان',
      frequency: 'بررسی CDN و عملکرد جهانی'
    },
    {
      tool: 'GTmetrix',
      purpose: 'تجزیه عملیاتی Waterfall و مسیر بحرانی',
      frequency: 'شناسایی bottleneckها'
    }
  ];

  const benefits = [
    '۶۵% کاهش زمان بارگذاری صفحه با فشرده‌سازی و بهینه‌سازی profissional',
    '۲۳% کاهش نرخ خروج وب‌سایت به دلیل تجربه سریع‌تر کاربر',
    '۱۳۰% افزایش نرخ تبدیل به دلیل بهبود احساس تجربه کاربر',
    '۵۳% بهبود امتیاز Core Web Vitals و رتبه‌بندی بهتر در گوگل',
    '۵۲% کاهش هزینه‌های سرور به دلیل استفاده بهینه از منابع'
  ];

  const stats = [
    { metric: '۲ ثانیه', label: 'زمان هدف بارگذاری', icon: Zap },
    { metric: '۶۵%', label: 'سرعت بیشتر', icon: TrendingUp },
    { metric: '۹۵ امتیاز', label: 'امتیاز PageSpeed', icon: Gauge },
    { metric: '۱۰۰%', label: 'سازگاری موبایل', icon: Smartphone }
  ];

  const workflowSteps = [
    {
      step: 'تحلیل اولیه عملکرد',
      desc: 'سنجش سرعت فعلی با ابزارهای مختلف و شناسایی مشکلات اصلی',
      duration: '۲-۳ روز'
    },
    {
      step: 'بررسی سرور و هاستینگ',
      desc: 'بهبود پیکربندی سرور، انتخاب CDN مناسب و بهینه‌سازی منابع',
      duration: '۳-۵ روز'
    },
    {
      step: 'بهینه‌سازی سمت کلاینت',
      desc: 'فشرده‌سازی کد، بهینه‌سازی تصاویر و حذف منابع مسدودکننده',
      duration: '۴-۷ روز'
    },
    {
      step: 'بهبود Core Web Vitals',
      desc: 'حل مشکلات LCP، FID و CLS با تکنیک‌های تخصصی',
      duration: '۳-۵ روز'
    },
    {
      step: 'تست نهایی و مانیتورینگ',
      desc: 'تست عملکرد از دستگاه‌های مختلف و تنظیم مانیتورینگ مستمر',
      duration: '۲-۳ روز'
    }
  ];

  const faqs = [
    {
      question: 'چرا سرعت وب‌سایت مهم است و چه ارتباطی با گوگل دارد؟',
      answer: 'سرعت وب‌سایت یکی از ۳ عامل حیاتی رتبه‌بندی گوگل (Core Web Vitals) است. گوگل معتقد است کاربران زمان انتظار ندارند و اولویت رتبه‌بندی را به سایت‌های سریع می‌دهد. علاوه بر این، سرعت بالا نرخ خروج را کاهش داده و نرخ تبدیل را افزایش می‌دهد.'
    },
    {
      question: 'چه مدت طول می‌کشد تا سرعت وب‌سایت بهبود یابد؟',
      answer: 'بسته به اندازه و پیچیدگی وب‌سایت، معمولاً بین ۱ تا ۲ هفته زمان نیاز است. پروژه‌های ساده شاید ۳ روز کامل شوند، اما وب‌سایت‌های سنگین‌تر با تصاویر زیاد ممکن است ۲-۳ هفته نیاز داشته باشند. مهمترین نکته این است که نتایج فوری و ملموس خواهد بود.'
    },
    {
      question: 'آیا بهبود سرعت باعث کاهش هزینه‌های سرور می‌شود؟',
      answer: 'بله! با فشرده‌سازی منابع و استفاده оптимال از کشینگ، مصرف منابع سرور شما تا ۶۰% کاهش می‌یابد. این یعنی هم هزینه کمتر و هم سرعت بالاتر. علاوه بر این، گوگل سایت‌های سریع‌تر را ترجیح می‌دهد.'
    },
    {
      question: 'پس از بهبود سرعت، آیا نیاز به نگهداری داریم؟',
      answer: 'سرعت وب‌سایت نیاز به مراقبت مستمر دارد. با اضافه شدن محتوا جدید، سرعت ممکن است کاهش یابد. ما علاوه بر ابزارهای مانیتورینگ، گزارش‌های ماهانه ارائه می‌کنیم و تا ۶ ماه پشتیبانی رایگان شامل نگهداری سرعت می‌دهیم.'
    },
    {
      question: 'آیا بهینه‌سازی سرعت برای موبایل هم ضروری است؟',
      answer: 'صد در صد! بیش از ۶۰% از کاربران اینترنت از موبایل استفاده می‌کنند. Core Web Vitals مخصوصاً برای موبایل اهمیت دارد و گوگل اولویت را به سایت‌های همراه با موبایل داده. ما رویکرد Mobile-First را در همه بهینه‌سازی‌ها رعایت می‌کنیم.'
    },
    {
      question: 'چه عوارضی سرعت پایین برای کسب‌وکار دارد؟',
      answer: '۱) رتبه پایین‌تر در گوگل و کمتر دیده شدن، ۲) نرخ خروج بالاتر (تا ۵۰%)، ۳) نرخ تبدیل پایین‌تر، ۴) تجربه کاربری ضعیف و از دست دادن مشتریان، ۵) هزینه بالاتر سرور بدون بازگشت موثر.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-green-50 to-emerald-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-emerald-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-1 text-sm border-green-200">
                  بهینه‌سازی سرعت حرفه‌ای
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  بهینه‌سازی <span className="gradient-text">سرعت وب‌سایت</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  سرعت بارگذاری کمتر از ۲ ثانیه با استانداردها گوگل PageSpeed Insights. بهبود Core Web Vitals و افزایش نرخ تبدیل بازدیدکنندگان در عصر سئو!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                    تحلیل سریع سرعت سایت
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                    ابزار تست سرعت رایگان
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-green-600/10 to-transparent z-10" />
                <OptimizedImage
                  src="/images/website-speed-hero.webp"
                  alt="بهینه‌سازی سرعت وب‌سایت"
                  fill
                  imageData={imagesMap['/images/website-speed-hero.webp']}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-emerald-50 to-green-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
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

        {/* Speed Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تکنولوژی‌های پیشرفته <span className="gradient-text">بهینه‌سازی سرعت</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکرد جامع برای حداکثر سرعت بارگذاری
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {speedFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-green-600" />
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

        {/* Core Web Vitals Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                بهبود <span className="gradient-text">Core Web Vitals</span> گوگل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                استانداردهای حیاتی سرعت گوگل که باید بهینه شوند
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreWebVitals.map((vital, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Gauge className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {vital.metric}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                          {vital.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">اهمیت:</span>
                            <span className="text-gray-700 font-medium">{vital.importance}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">هدف:</span>
                            <Badge className="bg-green-100 text-green-700">{vital.target}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Speed Optimizations Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                استراتژی‌های جامع <span className="gradient-text">بهینه‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش تمام لایه‌های پیشرفت برای حداکثر سرعت
              </p>
            </div>

            <div className="space-y-8">
              {speedOptimizations.map((category, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-5 gap-4">
                      {category.optimizations.map((optimization, optIndex) => (
                        <div key={optIndex} className="text-center p-4 bg-white rounded-lg border">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-900">{optimization}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                نتایج <span className="gradient-text">قابل اندازه‌گیری</span> بهینه‌سازی
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمار واقعی از پروژه‌های موفق سرعت (با و بدون بهینه‌سازی)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      {metric.metric}
                    </h3>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-center">
                        <div className="text-red-600 font-bold">قبل: {metric.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-600 font-bold">بعد: {metric.after}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 w-fit mx-auto">
                      {metric.improvement}
                    </Badge>
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
                مزایای سرعت <span className="gradient-text">بالا وب‌سایت</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمار واقعی از بهبود پروژه‌های سرعت بهینه‌سازی شده
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-padding bg-linear-to-br from-green-50 to-emerald-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ابزارهای حرفه‌ای <span className="gradient-text">اندازه‌گیری سرعت</span>
              </h2>
              <p className="text-xl text-gray-600">
                استفاده از بهترین ابزارهای بین‌المللی برای نتایج دقیق
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {toolsUsed.map((tool, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tool.tool}</h3>
                    <p className="text-gray-600 mb-2">{tool.purpose}</p>
                    <Badge variant="outline" className="text-sm">
                      {tool.frequency}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">بهینه‌سازی سرعت</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد سیستماتیک ۵ مرحله‌ای برای سرعت حداکثری
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <Badge variant="outline" className="text-sm">
                      مدت زمان: {step.duration}
                    </Badge>
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
                پاسخ به پرسش‌های مشتریان درباره بهینه‌سازی سرعت
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
              سرعت سایت شما را همین الان ۲ برابر کنیم!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با بهینه‌سازی سرعت عصر سئو، مشتریان شما دیگر صبر نمی‌کنند. امتیاز ۱۰۰ PageSpeed، رتبه گوگل بالاتر و نرخ تبدیل بیشتر را همین امروز شروع کنید. مشاوره رایگان سرعت سایت دریافت کنید!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                تحلیل رایگان سرعت
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                شروع بهینه‌سازی سرعت
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
