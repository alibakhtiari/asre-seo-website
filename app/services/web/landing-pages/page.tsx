import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { MousePointerClick, ScrollText, TrendingUp, CheckCircle2, MonitorSmartphone, Palette, Target, DollarSign, Users, BarChart3, Award, Eye, Zap } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'طراحی صفحات فرود | Landing Page اختصاصی | نرخ تبدیل بالا | عصر سئو',
  description: 'طراحی صفحات فرود اختصاصی با نرخ تبدیل بالا، بهینه برای تبلیغات و کمپین‌های بازاریابی دیجیتال با فناوری‌های پیشرفته.',
  keywords: 'صفحه فرود, Landing Page, طراحی لندینگ, نرخ تبدیل, Conversion Rate Optimization',
  alternates: {
    canonical: 'https://asreseo.com/services/web/landing-pages',
  },
  openGraph: {
    title: 'طراحی صفحات فرود اختصاصی | عصر سئو',
    description: 'طراحی Landing Page با نرخ تبدیل بالا برای تبلیغات و بازاریابی.',
    type: 'website',
    url: 'https://asreseo.com/services/web/landing-pages',
    images: [
      {
        url: '/og-landing-pages.jpg',
        width: 1200,
        height: 630,
        alt: 'طراحی صفحات فرود حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Design | عصر سئو',
    description: 'طراحی صفحات فرود پرتبدیل.',
    images: ['/og-landing-pages.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'طراحی صفحات فرود اختصاصی',
  'description': 'خدمات طراحی و توسعه صفحات فرود ویژه با تمرکز بر نرخ تبدیل بالا',
  'serviceType': 'Landing Page Design & Development',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات طراحی Landing Page',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'High-Conversion Landing Page',
          'description': 'صفحات فرود با نرخ تبدیل بهینه‌سازی شده'
        }
      }
    ]
  }
}

export default function LandingPagesPage() {
  const landingFeatures = [
    {
      icon: MousePointerClick,
      title: 'تمرکز بر نرخ تبدیل بالا',
      description: 'طراحی با اصول CRO و هدایت موثر کاربر به اقدام مورد نظر با CTA بهینه',
      benefits: ['۳۰۰% افزایش تبدیل', 'فاکتورهای روان‌شناختی', 'فراخوان قوی عمل']
    },
    {
      icon: ScrollText,
      title: 'بهینه‌سازی برای تبلیغات و سئو',
      description: 'لندینگ پیج قابل رقابت در تبلیغات پولی و افزایش رتبه کلمات کلیدی بلندخور',
      benefits: ['رتبه بهتر کلمات کلیدی', 'بهبود ROI تبلیغات', 'سرعت شاخص‌گذاری']
    },
    {
      icon: MonitorSmartphone,
      title: 'کاملاً واکنش‌گرا و سریع',
      description: 'ظاهر بی‌نقص در تمام دستگاه‌ها و سرعت لود بالای صفحه بدون اسکرول انحرافی',
      benefits: ['۰% کاهش موبایل', 'سرعت ۱۰۰% بهتر', 'تجربه یکپارچه']
    },
    {
      icon: Palette,
      title: 'هویت بصری هماهنگ با برند',
      description: 'انتخاب رنگ‌ها و طراحی گرافیکی مطابق استراتژی برند شما و کاربران هدف',
      benefits: ['شناخت برند بالاتر', 'اعتماد مشتری بیشتر', 'تجاریهگری استراتژیک']
    },
    {
      icon: Eye,
      title: 'تحلیل و تست A/B پیشرفته',
      description: 'پیگیری دقیق رفتار کاربر با heatmaps و تست‌های آماری برای حداکثر بهینه‌سازی',
      benefits: ['بهبود مداوم ۴۵%', 'داده‌خواست محوری', 'تصمیم‌گیری علمی']
    },
    {
      icon: TrendingUp,
      title: 'یکپارچگی با ابزارهای بازاریابی',
      description: 'اتصال مستقیم به CRM، سیستم‌های emailing و ابزارهای اتوماسیون بازاریابی',
      benefits: ['کارایی عملیاتی نهایی', 'صرفه‌جویی زمانی', 'نرخ عملیاتی بالا']
    }
  ];

  const conversionElements = [
    {
      element: 'Heading (هدر جذاب)',
      importance: 'اولین چیزی که کاربر می‌بیند',
      effect: '+۳۵% نرخ کلیک'
    },
    {
      element: 'Strong CTA Buttons',
      importance: 'فراخوان عمل چشمگیر',
      effect: '+۹۰% نرخ تبدیل'
    },
    {
      element: 'Social Proof',
      importance: 'جو اعتماد و اعتبار',
      effect: '+۴۷% نرخ تبدیل'
    },
    {
      element: 'Urgency Elements',
      importance: 'ایجاد احساس فوریت',
      effect: '+۶۷% نرخ تبدیل'
    },
    {
      element: 'Video Demo',
      importance: 'نمایش عمل‌کرد محصول',
      effect: '+۲۳% نرخ ماندگاری'
    },
    {
      element: 'Testimonials',
      importance: 'گواهی رضایت مشتریان',
      effect: '+۵۶% نرخ اعتماد'
    }
  ];

  const caseStudies = [
    {
      client: 'استارتاپ FinTech',
      problem: '۵% نرخ تبدیل، dwell time پایین',
      solution: 'طراحی Landing Page با video demo و pricing tables',
      result: 'نرخ تبدیل ۲۳% (+۳۶۰%)، درآمد ماهانه ۴۲۰% رشد'
    },
    {
      client: 'کلینیک پزشکی',
      problem: 'کمبود بیمار، حضور آنلاین ضعیف',
      solution: 'Landing Page با فرم مشاوره رایگان و social proof',
      result: '۱۰۰ بیمار جدید در ماه، ۸۰% نرخ رزرواسیون'
    },
    {
      client: 'فروشگاه آنلاین',
      problem: 'نرخ خرید ۲.۳%، abandonment بالا',
      solution: 'حذف موارد اضافه انحراف، focus بر one goal',
      result: 'نرخ خرید ۱۲.۱% (+۴۲۷%)، سود ماهانه ۵ برابر'
    },
    {
      client: 'اپلیکیشن موبایل',
      problem: 'کمبود نصب، توضیحات فنی پیچیده',
      solution: 'Landing Page با توضیحات ساده و screenshots',
      result: 'نرخ نصب ۱۲% (+۶۰۰%)، رتبه اپ‌استور بالاتر'
    }
  ];

  const toolsIntegration = [
    {
      tool: 'Google Analytics ۴',
      purpose: 'پیگیری رفتار کاربران و نرخ تبدیل',
      benefit: 'داده‌های دقیق از عملکرد صفحه'
    },
    {
      tool: 'Google Optimize',
      purpose: 'انجام تست‌های A/B به صورت خودکار',
      benefit: 'بهینه‌سازی مداوم و علمی'
    },
    {
      tool: 'Hotjar',
      purpose: 'نقشه حرارتی اسکرول و کلیک کاربران',
      benefit: 'درک رفتار کاربر و نقاط بهبود'
    },
    {
      tool: 'Mailchimp / CRM',
      purpose: 'مدیریت لیدها و بازاریابی متوالی',
      benefit: 'تبدیل بازدیدکنندگان به مشتریان'
    },
    {
      tool: 'Facebook Pixel',
      purpose: 'ردیابی تبلیغات و remarketing',
      benefit: 'بهینه‌سازی هزینه تبلیغات'
    },
    {
      tool: 'Typeform / Calendly',
      purpose: 'جمع‌آوری اطلاعات کامل کاربر',
      benefit: 'لید با کیفیت بالاتر'
    }
  ];

  const pricingTypes = [
    {
      type: 'فرآیند جذب',
      description: 'هرچه مشتری کمتر فکر کند، بهتر!',
      elements: ['جابجایی قیمت، تعداد گزینه کم', 'عناصر فوریت (محدودیت زمانی)', 'تضمین‌ها و گارانتی‌ها']
    },
    {
      type: 'جذب منطقی',
      description: 'مبنای تصمیم‌گیری ویژگی‌های محصول',
      elements: ['جداول مقایسه، feature lists', 'testimonials و case studies', 'آمار و ارقام اعتمادآور']
    },
    {
      type: 'محور اجتماعی',
      description: 'نظرات دیگران برای تصمیم‌گیری',
      elements: ['آمار اجتماعی، گروه‌های بزرگ', 'گواهی افراد مشهور معتبر', 'نمادهای امنیتی و اعتماد']
    }
  ];

  const workflowSteps = [
    {
      step: 'تحقیق و استراتژی',
      desc: 'تحلیل مخاطب هدف، رقبا و اهداف کسب‌وکار، تعریف مسیر خرید کاربر',
      duration: '۳-۵ روز',
      output: 'Strategy Document & User Journey Map'
    },
    {
      step: 'طراحی و wireframing',
      desc: 'ساخت ساختار صفحه، چیدمان عناصر و تعریف call-to-actionها',
      duration: '۴-۷ روز',
      output: 'Wireframes & Interactive Prototype'
    },
    {
      step: 'توسعه و کدنویسی',
      desc: 'پیاده‌سازی ریسپانسیو با سرعت بالا، اتصال فرم‌ها و ابزارهای لازم',
      duration: '۵-۸ روز',
      output: 'Live Landing Page & Integration Setup'
    },
    {
      step: 'تست و بهینه‌سازی',
      desc: 'A/B Testing، Usability Testing و تحلیل behavior کاربران',
      duration: '۴-۶ روز',
      output: 'Optimized Page & Performance Report'
    },
    {
      step: 'مانتیورینگ و پشتیبانی',
      desc: 'پیگیری عملکرد و پیشنهادات بهبود مستمر برای حداکثر نرخ تبدیل',
      duration: 'ماهانه',
      output: 'Monthly Reports & Continuous Optimization'
    }
  ];

  const benefits = [
    '۲۵۰% افزایش نرخ تبدیل با طراحی علمی با اصول روان‌شناسی مصرف‌کننده',
    '۶۵% کاهش هزینه پز کسب مشتری (CPA) به دلیل هدفمندی بیشتر',
    '۱۳۰% بهبود نرخ تکمیل هدف به دلیل تجربه کاربری روان و جذاب',
    '۴۵۰% بازگشت سرمایه بالاتر به دلیل تمرکز بر یک هدف مشخص',
    '۱۷۰% بهبود اعتماد و اعتبار برند به دلیل social proof و testimonials'
  ];

  const stats = [
    { metric: '۲۵۰%', label: 'افزایش نرخ تبدیل', icon: Target },
    { metric: '۱۲ روز', label: 'زمان توسعه متوسط', icon: TrendingUp },
    { metric: '۹۲%', label: 'رضایت مشتریان', icon: Users },
    { metric: '۱۰۰+', label: 'لندینگ موفق طراحی شده', icon: BarChart3 }
  ];

  const faqs = [
    {
      question: 'لندینگ پیج چقدر با صفحات معمولی سایتم متفاوت است؟',
      answer: 'یک Landing Page تنها یک هدف دارد: تبدیل یک بازدیدکننده به customer. بدون menu پیچیده، بدون لینک‌های انحرافی، بدون بررسی‌های جانبی. تمام عناصر صفحه برای هدایت کاربر به یک اقدام خاص طراحی می‌شوند. اگر صفحه خانگی شما مثل بازارچه است، Landing Page مثل فروشگاه متخصص است.'
    },
    {
      question: 'چقدر طول می‌کشد یک Landing Page طراحی کنیم؟',
      answer: 'زمان توسعه بسته به پیچیدگی دارد. یک Landing Page ساده ۴-۶ روز، متوسط ۷-۱۰ روز و پیچیده با انیمیشن‌های پیشرفته ۲-۳ هفته. مهم‌تر از سرعت، رسیدن به حداکثر نرخ تبدیل است. اگر سریع‌ترین راه نرخ تبدیل پایین دهد، بهتر است زمان بیشتری بگذریم.'
    },
    {
      question: 'آیا پس از تحویل هم Landing Page را بهبود می‌دهید؟',
      answer: 'شاید مهمترین قسمت کار ما همین باشد! Landing Page هرگز کامل نمی‌شود، همیشه فرصت بهبود دارد. ما تا معادل هزینه پروژه به صورت رایگان مانیتورینگ می‌کنیم و بر اساس داده تحلیل‌های حرارتی، A/B Testing و سوابق کاربر، پیشنهادات بهبود روزانه ارائه می‌دهیم.'
    },
    {
      question: 'چقدر نرخ تبدیل Landing Page معمولاً افزایش می‌دهد؟',
      answer: 'بسته به industry متفاوت است. صفحات مالی معمولاً نرخ تبدیل ۷-۱۲%، محصولات B۲B نرم‌افزار ۲-۶%، خدمات ۳-۸% و محصولات مصرف‌کننده ۲-۴%. اما با طراحی حرفه‌ای، نرخ تبدیل پایه ۱-۲% را می‌توان به ۸-۲۰% رساند. مهمترین نکته این است که traffic را مستقیماً به customer تبدیل کنیم.'
    },
    {
      question: 'آیا برای کمپین‌های تبلیغات بودجه محدودی دارید نیز موثر است؟',
      answer: 'بله! Landing Page مخصوصاً برای بودجه‌های محدود عالی است. تبلیغات پولی گران هستند، Landing Page بد کار خود را چند برابر می‌کنند. یه کمپین تبلیغات که ۱۰ میلیون تومان هزینه دارد، با Landing Page خوب تبدیل نرخش ۵ برابر می‌شود یعنی در اصل پول بیشتری پس‌اندازی می‌شود بی اینکه هزینه بیشتری پرداخت کنیم.'
    },
    {
      question: 'چرا برخی Landing Page‌ها چندین call-to-action دارند؟',
      answer: 'بله با استراتژی! اما این call-to-actionها باید سلسله مراتبی باشند. Primary CTA اصلی، Secondary CTAهای پشتیبان و Final CTA نهایی برای کسانی که هنوز آماده نیستند. اما یادتان باشد، هرچه CTA بیشتر شود، تمرکز کاربر کمتر می‌شود. هنر این است که با یکه primary CTA، دیگران را پشتیبانی کند.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-purple-50 to-indigo-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-purple-100 text-purple-700 mb-4 px-4 py-1 text-sm border-purple-200">
                  طراحی صفحات فرود حرفه‌ای
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  صفحات فرود <span className="gradient-text">پرتبدیل</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  موتور رشد کمپین‌های دیجیتال و تبدیل بازدیدکنندگان به مشتریان وفادار با طراحی علمی Landing Page عصر سئو.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                    شروع طراحی Landing Page
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    نمونه کارهای موفق
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-purple-600/10 to-transparent z-10" />
                <Image
                  src="/images/landing-page-hero.png"
                  alt="طراحی صفحات فرود اختصاصی"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-700 mb-2">
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

        {/* Landing Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تکنولوژی‌های پیشرفته <span className="gradient-text">طراحی Landing Page</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکرد علمی برای حداکثر نرخ تبدیل
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {landingFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-purple-600" />
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

        {/* Conversion Elements Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                عناصر <span className="gradient-text">افزایش تبدیل</span> Landing Page
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اجزاء علمی برای هدایت کاربر به خرید
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {conversionElements.map((element, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <Target className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {element.element}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {element.importance}
                        </p>
                        <Badge className="bg-green-100 text-green-700">
                          {element.effect}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                نمونه کارها و <span className="gradient-text">موفقیت مشتریان</span>
              </h2>
              <p className="text-xl text-gray-600">
                آمار واقعی از بهبود کسب‌وکارها با Landing Page عصر سئو
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Badge className="bg-indigo-100 text-indigo-700 text-sm mb-2">
                        {study.client}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900">
                        چالش: {study.problem}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                        <div>
                          <span className="font-medium text-gray-900">راه حل: </span>
                          <span className="text-gray-600">{study.solution}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <div>
                          <span className="font-medium text-gray-900">نتیجه: </span>
                          <span className="text-gray-600">{study.result}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Integration Section */}
        <section className="section-padding bg-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ابزارهای <span className="gradient-text">تحلیل و بهینه‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600">
                اتصال مستقیم به بهترین ابزارهای بازاریاب دیجیتال
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {toolsIntegration.map((tool, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                        <Eye className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {tool.tool}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {tool.purpose}
                        </p>
                        <Badge variant="outline" className="text-sm">
                          {tool.benefit}
                        </Badge>
                      </div>
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
                مزایای Landing Page <span className="gradient-text">عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمار واقعی از بهبود مشتریان با طراحی Landing Page حرفه‌ای
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-indigo-600" />
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
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند طراحی <span className="gradient-text">Landing Page</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد ۵ مرحله‌ای برای حداکثر نرخ تبدیل
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <Badge variant="outline" className="text-sm mr-3">
                      مدت زمان: {step.duration}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">
                      {step.output}
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
                پاسخ به پرسش‌های مشتریان درباره طراحی Landing Page
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
              کمپین‌های شما را به درآمد بی‌پایان تبدیل کنیم!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با طراحی Landing Page عصر سئو، هر بازدیدکننده تبدیل به مشتری می‌شود. نرخ تبدیل ۲۵۰% بالاتر، هزینه CPA ۶۵% کمتر. همین امروز شمارش معکوس مشتریان جدید را شروع کنید!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                مشاوره رایگان Landing Page
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                نمونه Landing Page موفق
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
