import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../../src/generated/images-map.json'
import { Calendar, ListTodo, Sparkles, CheckCircle2, BadgeCheck, Clock, BarChart3, Target, TrendingUp, Award, Users } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'تقویم محتوایی | برنامه‌ریزی محتوا حرفه‌ای | سازماندهی استراتژیک محتوا | عصر سئو',
  description: 'طراحی تقویم محتوایی استراتژیک برای انتشار منظم، افزایش ۳۰۰% تعامل مخاطبان و سازماندهی هوشمند تیم تولید محتوا با ابزارهای پیشرفته عصر سئو.',
  keywords: 'تقویم محتوایی, برنامه‌ریزی محتوا, Content Calendar, استراتژی محتوا, سازماندهی محتوا',
  alternates: {
    canonical: 'https://asreseo.com/services/content/content-calendar',
  },
  openGraph: {
    title: 'تقویم محتوایی | سازماندهی استراتژیک محتوا | عصر سئو',
    description: 'برنامه‌ریزی هوشمند محتوا برای انتشار منظم و افزایش تعامل.',
    type: 'website',
    url: 'https://asreseo.com/services/content/content-calendar',
    images: [
      {
        url: '/og-content-calendar.jpg',
        width: 1200,
        height: 630,
        alt: 'تقویم محتوایی حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تقویم محتوایی | عصر سئو',
    description: 'برنامه‌ریزی استراتژیک انتشار محتوا.',
    images: ['/og-content-calendar.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'تقویم محتوایی',
  'description': 'خدمات طراحی و مدیریت تقویم محتوایی برای انتشار منظم و استراتژیک',
  'serviceType': 'Content Calendar Management',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تقویم محتوایی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'برنامه‌ریزی هوشمند',
          'description': 'زمان‌بندی استراتژیک انتشار محتوا'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'هماهنگی کمپین‌ها',
          'description': 'تطابق محتوا با رویدادهای بازاریابی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'تقویم محتوایی برای چه پلتفرم‌هایی کاربرد دارد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'برای تمام پلتفرم‌ها شامل وب‌سایت، وبلاگ، شبکه‌های اجتماعی و ایمیل مارکتینگ.'
        }
      }
    ]
  }
}

export default function ContentCalendarPage() {
  const strategies = [
    {
      type: 'استراتژی Seasonal',
      description: 'محتوای مرتبط با فصل‌ها، تعطیلات و رویدادهای سالانه',
      examples: ['محتوای نوروزی', 'کمپین‌های تابستانی', 'آماده‌سازی پاییزی'],
      impact: '۲۲۰% افزایش تعامل'
    },
    {
      type: 'استراتژی Pillar',
      description: 'محتوای استراتژیک و پایه‌ای که ماه‌ها قابل استفاده است',
      examples: ['راهنمای کامل محصولات', 'آموزش‌های تخصصی', 'تحقیقات عمیق'],
      impact: '۴۵۰% ترافیک پایدار'
    },
    {
      type: 'استراتژی Cluster',
      description: 'شبکه محتوایی مرتبط با یک موضوع هسته‌ای',
      examples: ['محتوای اطراف یک محصول', 'سری آموزشی جامع', 'مجموعه مقالات مرتبط'],
      impact: '۳۰۰% پوشش کلمات کلیدی'
    }
  ];

  const pillars = [
    {
      pillar: 'Audience-Centric Planning',
      description: 'برنامه‌ریزی بر اساس نیازها و رفتار مخاطبان هدف',
      benefits: ['ارتباط بهتر', 'تعامل بالاتر', 'تبدیل بیشتر']
    },
    {
      pillar: 'Data-Driven Scheduling',
      description: 'زمان‌بندی بر اساس تحلیل دیتای عملکردی گذشته',
      benefits: ['بازدهی بالاتر', 'بهینه‌سازی زمان', 'پیش‌بینی عملکرد']
    },
    {
      pillar: 'Brand Consistency',
      description: 'حفظ هماهنگی پیام برند در تمام محتوای منتشر شده',
      benefits: ['شناسایی برند', 'اعتماد مشتری', 'تمایز رقابتی']
    },
    {
      pillar: 'Campaign Integration',
      description: 'هماهنگی محتوا با کمپین‌های بازاریابی و فروش',
      benefits: ['تقویت فروش', 'هماهنگی تیم‌ها', 'مدیریت یکپارچه']
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'برنامه‌ریزی هوشمند انتشار محتوا',
      description: 'زمان‌بندی دقیق و استراتژیک برای انواع محتوا در پلتفرم‌های مختلف با توجه به الگوریتم‌های هر شبکه.',
      benefits: ['انتشار منظم', 'بیشینه‌سازی دسترسی', 'روند رشد پایدار']
    },
    {
      icon: ListTodo,
      title: 'هماهنگی محتوایی با کمپین‌ها',
      description: 'ترکیب کامل استراتژی محتوا با رویدادهای بازاریابی، تخفیف‌ها، فصلی‌ها و کمپین‌های مختلف برند.',
      benefits: ['تقویت کمپین‌ها', 'تطابق زمانی', 'بازدهی ترکیبی']
    },
    {
      icon: Sparkles,
      title: 'افزایش نظم و انسجام برند',
      description: 'ساختارمندسازی تولید محتوا با تعریف نقش‌ها، مسئولیت‌ها و گردش کار برای تیم‌های محتوایی.',
      benefits: ['کارایی تیم', 'کیفیت محتوا', 'تحویل به موقع']
    },
    {
      icon: BarChart3,
      title: 'گزارش‌دهی پیشرفته و تحلیل عملکرد',
      description: 'داشبورد جامع با شاخص‌های کلیدی عملکرد، تحلیل روندها و پیشنهادهای بهبود مستمر.',
      benefits: ['شفافیت کامل', 'تصمیم‌گیری آگاهانه', 'بهبود پیوسته']
    },
    {
      icon: Target,
      title: 'پیگیری استراتژیک اهداف محتوایی',
      description: 'نمایش چگونگی دستیابی به اهداف بازاریابی، فروش و برندینگ از طریق محتوا.',
      benefits: ['همخوانی استراتژیک', 'سنجش ROI', 'مدیریت انتظارات']
    },
    {
      icon: TrendingUp,
      title: 'بهینه‌سازی مداوم انتشارات',
      description: 'A/B Testing در زمان‌بندی، فرمت محتوا، پلتفرم‌ها و تجزیه تحلیل برای حداکثر کارایی.',
      benefits: ['بازدهی بالاتر', 'تجربه به دست آمده', 'بهبود مستمر']
    }
  ];

  const benefits = [
    '۳۰۰% افزایش منظم انتشار محتوای باکیفیت و استراتژیک',
    '۴۵۰% بهبود تعامل مخاطبان با برنامه‌ریزی محتوای هدفمند',
    '۶۰% کاهش دوباره‌کاری و اتلاف وقت تیم',
    '۱۰۰% هماهنگی محتوا با اهداف بازاریابی و فروش',
    '۲۲۰% بهبود ROI بازاریابی محتوایی با انتشار هوشمند'
  ];

  const tools = [
    {
      name: 'Google Calendar Integration',
      description: 'ادغام کامل با تقویم گوگل برای قابلیت همکاری تیمی',
      features: ['هماهنگی تیمی', 'یادآوری‌های هوشمند', 'دسترسی چندسکویی']
    },
    {
      name: 'Asana Integration',
      description: 'ارتباط با ابزار مدیریت پروژه برای پیگیری وظایف',
      features: ['مدیریت وظایف', 'زمان‌بندی اجرایی', 'گزارش پیشرفت']
    },
    {
      name: 'Buffer/SocialPilot Integration',
      description: 'اتوماسیون انتشار در شبکه‌های اجتماعی',
      features: ['انتشار خودکار', 'مدیریت چند اکانت', 'گزارش‌های تحلیلی']
    }
  ];

  const stats = [
    { metric: '۳۰۰%', label: 'افزایش محتوای منظم', color: 'text-blue-600', icon: TrendingUp },
    { metric: '۴۵۰%', label: 'بهبود تعامل', color: 'text-green-600', icon: Users },
    { metric: '۶۰%', label: 'کاهش دوباره‌کاری', color: 'text-purple-600', icon: Clock },
    { metric: '۱۰۰%', label: 'هماهنگی استراتژیک', color: 'text-orange-600', icon: Target }
  ];

  const workflowSteps = [
    {
      step: 'تحلیل استراتژی',
      desc: 'بررسی رقبا، مخاطبان و اهداف محتوایی کسب‌وکار شما'
    },
    {
      step: 'طراحی استراتژی محتوا',
      desc: 'تعریف ستون‌های محتوایی، توزیع پلتفرم‌ها و استراتژی زمانی'
    },
    {
      step: 'ابعادگیری تقویم',
      desc: 'پردازش ماهانه، هفتگی و روزانه با تعیین مسئولین هر محتوا'
    },
    {
      step: 'ابزارسازی اجرایی',
      desc: 'ارتباط با ابزارهای اتوماسیون و برنامه‌ریزی انتشار'
    },
    {
      step: 'مانیتورینگ و اصلاح',
      desc: 'پیگیری عملکرد و اعمال بهبودهای استراتژیک'
    },
    {
      step: 'گزارش‌دهی و بهبود',
      desc: 'ارائه گزارش ماهانه و پیشنهاد استراتژی‌های بهتر'
    }
  ];

  const faqs = [
    {
      question: 'آیا طراحی تقویم محتوا منحصراً برای شبکه اجتماعی است؟',
      answer: 'خیر، تقویم محتوای عصر سئو برای تمام پلتفرم‌ها طراحی می‌شود: وب‌سایت، وبلاگ، شبکه‌های اجتماعی (اینستاگرام، لینکدین، توییتر، تیک‌تاک)، ایمیل مارکتینگ، یوتیوب و حتی دیگران. یک پلن جامع و یکپارچه برای تمام حضور دیجیتال برند شما.'
    },
    {
      question: 'چطور می‌توان تغییرات را در تقویم اعمال کرد؟',
      answer: 'تقویم را به صورت آنلاین (Google Sheet یا Trello) طراحی می‌کنیم که هم تیم شما و هم تیم ما به راحتی بتوانیم تغییرات را اعمال کنیم. همچنین اپلیکیشن‌های موبایل برای دسترسی سریع در دسترس هستند.'
    },
    {
      question: 'اطلاع‌رسانی درباره موعد انتشار محتوا به چه صورت است؟',
      answer: 'سیستم یادآوری پیشرفته با نوتیفیکیشن ایمیلی، پیامکی و در اپلیکیشن‌ها. برای پست‌های حساس، تماس تلفنی نیز انجام می‌شود. هیچ محتوایی را فراموش نخواهید کرد.'
    },
    {
      question: 'آیا شامل تولید محتوا هم می‌شود یا فقط برنامه‌ریزی؟',
      answer: 'بسته به پکیج انتخابی شما، می‌تواند فقط برنامه‌ریزی استراتژیک باشد یا شامل تولید محتوا، گرافیک، کپشن‌نویسی و حتی انتشار هم بشود. پکیج کامل ما پوشش کاملی از استراتژی تا اجرا دارد.'
    },
    {
      question: 'حجم کار ماهانه تقویم چقدر است؟',
      answer: 'بر اساس اهداف شما متفاوت است. برای برندهای کوچک معمولاً ۲۴ پست در ماه کافی است، برای برندهای متوسط ۶۰-۸۰ پست و برای برندهای بزرگ ۱۵۰+ پست در ماه برنامه‌ریزی می‌کنیم.'
    },
    {
      question: 'چطور ROI تقویم محتوایی را اندازه‌گیری می‌کنم؟',
      answer: 'با شاخص‌هایی مانند نرخ رشد فالوور، تعامل، ترافیک وب‌سایت، نرخ تبدیل، فروش و حتی ارزش برند. ما گزارش ماهانه کاملی با نمودارها و تحلیل‌ها ارائه می‌دهیم.'
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
        <section className="section-padding bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-blue-100 text-blue-700 mb-4 px-4 py-1 text-sm border-blue-200">
                  سازماندهی استراتژیک محتوا
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  تقویم <span className="gradient-text">محتوایی</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  برنامه‌ریزی علمی انتشار محتوا برای رشد ۴۰۰% تعامل مخاطبان. سازماندهی هوشمند تیم محتوایی با ابزارهای پیشرفته عصر سئو و استراتژی‌های اثبات‌شده.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                    طراحی تقویم محتوایی
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    نمونه تقویم‌ها را ببینید
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 to-transparent z-10" />
                <OptimizedImage
                  src="/images/content-calendar-hero.webp"
                  alt="تقویم محتوایی حرفه‌ای"
                  fill
                  imageData={imagesMap['/images/content-calendar-hero.webp']}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-purple-50 to-blue-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
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

        {/* Pillars Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                چهار <span className="gradient-text">ستون اصلی</span> تقویم محتوایی موفق
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکردی علمی و کامل برای سازماندهی محتوای برند شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{pillar.pillar}</CardTitle>
                    </div>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {pillar.benefits.map((benefit, benefitIndex) => (
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

        {/* Content Strategies Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                استراتژی‌های پیشرفته <span className="gradient-text">انتشار محتوا</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                روش‌های اثبات‌شده برای حداکثر تأثیر و بازدهی محتوای شما
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{strategy.type}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    <Badge className="mb-3 bg-green-100 text-green-700">{strategy.impact}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {strategy.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <BadgeCheck className="h-4 w-4 text-green-500 shrink-0" />
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
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات کامل <span className="gradient-text">مدیریت تقویم محتوایی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش کامل از استراتژی تا اجرا و اندازه‌گیری عملکرد
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-blue-600" />
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

        {/* Tools Integration Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ادغام با <span className="gradient-text">ابزارهای حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600">
                اتصال یکپارچه با بهترین ابزارهای مدیریت محتوا و اتوماسیون
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <BarChart3 className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {tool.name}
                        </h3>
                        <p className="text-gray-600 mb-3">{tool.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {tool.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="outline" className="text-sm">
                              {feature}
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

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای تقویم <span className="gradient-text">محتوایی حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                برگردان محتوا به سرمایه استراتژیک کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
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
        <section className="section-padding bg-linear-to-br from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">طراحی و اجرای</span> تقویم محتوایی
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۶ مرحله‌ای برای تقویم محتوایی کاملاً کارآمد
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
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
                پاسخ به پرسش‌های رایج مشتریان درباره تقویم محتوایی
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
              تقویم محتوایی شما را همین امروز ساختارمند کنیم!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تقویم محتوایی عصر سئو، پایان دهید به انتشارهای بی‌نظم و شتابزده. استراتژی علمی، ابزارهای پیشرفته و تیم متخصص در کنار شما برای تبدیل محتوا به دارایی استراتژیک کسب‌وکارتان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                شروع طراحی تقویم محتوایی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان استراتژی محتوا
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
