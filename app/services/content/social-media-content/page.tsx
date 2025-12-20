import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Users, Share2, Sparkles, TrendingUp, BadgeCheck, MessageSquare, Heart, BarChart3, Calendar, Target, Award, Zap, ImageIcon } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'محتوای شبکه‌های اجتماعی | سوشال مدیا کانتنت حرفه‌ای | عصر سئو',
  description: 'خدمات کامل تولید محتوای شبکه اجتماعی شامل ایده‌پردازی خلاقانه، کپشن جذاب، گرافیک زیبا، تقویم انتشار و استراتژی تعامل‌سازی برای ۵ پلتفرم اصلی.',
  keywords: 'محتوای شبکه‌های اجتماعی, سوشال مدیا کانتنت, اینستاگرام, تلگرام, لینکدین, توییتر, ایده‌پردازی خلاقانه',
  alternates: {
    canonical: 'https://asreseo.com/services/content/social-media-content',
  },
  openGraph: {
    title: 'محتوای شبکه‌های اجتماعی | تولید محتوا حرفه‌ای | عصر سئو',
    description: 'ایده‌پردازی، تولید و مدیریت محتوای شبکه‌های اجتماعی برای رشد برند شما.',
    type: 'website',
    url: 'https://asreseo.com/services/content/social-media-content',
    images: [
      {
        url: '/og-social-media-content.jpg',
        width: 1200,
        height: 630,
        alt: 'محتوای شبکه‌های اجتماعی حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محتوای شبکه‌های اجتماعی | عصر سئو',
    description: 'تولید محتوای شبکه‌های اجتماعی برای رشد برند.',
    images: ['/og-social-media-content.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'محتوای شبکه‌های اجتماعی',
  'description': 'خدمات تولید محتوای شبکه اجتماعی شامل ایده‌پردازی، کپشن، گرافیک و استراتژی انتشار',
  'serviceType': 'Social Media Content',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات محتوای شبکه‌های اجتماعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'ایده‌پردازی خلاقانه',
          'description': 'ایجاد ایده‌های خلاق و جذاب برای شبکه‌های اجتماعی'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'کپشن حرفه‌ای',
          'description': 'نوشتن کپشن‌های جذاب و مؤثر با هشتگ استراتژیک'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چه شبکه‌های اجتماعی را پوشش می‌دهیم؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'اینستاگرام، تلگرام، لینکدین، توییتر و متاورس را پوشش می‌دهیم.'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا گرافیک هم تولید می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، بسته به نیاز، گرافیک‌های جذاب را خواهید داشت.'
        }
      }
    ]
  }
}

export default function SocialMediaContentPage() {
  const platforms = [
    {
      name: 'اینستاگرام',
      description: 'پست‌های ویژوال، استوری، ریلز و تبلیغات هدفمند',
      followers: '+۳۵۰%',
      engagement: '+۴۲۰%',
      icon: ImageIcon,
      color: 'pink'
    },
    {
      name: 'لینکدین',
      description: 'محتوای حرفه‌ای، مقالات تخصصی و شبکه‌سازی کسب‌وکاری',
      followers: '+۲۸۰%',
      engagement: '+۳۱۰%',
      icon: Users,
      color: 'blue'
    },
    {
      name: 'تلگرام',
      description: 'پیام‌رسانی فوری، اخبار و تعامل مستقیم با مخاطبان',
      followers: '+۴۵۰%',
      engagement: '+۵۲۰%',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      name: 'توییتر (اکس)',
      description: 'جنجال‌های رسانه‌ای، اخبار سریع و روندسازی',
      followers: '+۲۲۰%',
      engagement: '+۲۶۰%',
      icon: Sparkles,
      color: 'gray'
    },
    {
      name: 'تیک‌تاک',
      description: 'ویدیوهای کوتاه و وایرال برای جذب جوانان',
      followers: '+۵۰۰%',
      engagement: '+۶۰۰%',
      icon: TrendingUp,
      color: 'black'
    }
  ];

  const features = [
    {
      icon: Share2,
      title: 'ایده‌پردازی خلاقانه',
      description: 'ایده‌های مبتکر و هدفمند متناسب با هویت برند شما در هر پلتفرم',
      benefits: ['خلاقیت بی‌اندازه', 'تفاوت رقابتی', 'جذابیت بالا']
    },
    {
      icon: MessageSquare,
      title: 'کپشن حرفه‌ای',
      description: 'نوشتن متن‌های تأثیرگذار با هشتگ استراتژیک و فراخوان به اقدام قدرتمند',
      benefits: ['بازدهی بالاتر', 'هویت برند', 'پیام‌رسانی مؤثر']
    },
    {
      icon: Sparkles,
      title: 'افزایش تعامل',
      description: 'استراتژی‌هایی برای بالا بردن کامنت، لایک و اشتراک‌گذاری پست‌ها',
      benefits: ['رشد ارگانیک', 'فالوور واقعی', 'مشترک وفادار']
    },
    {
      icon: Calendar,
      title: 'تقویم انتشار هوشمند',
      description: 'برنامه‌ریزی زمان‌بندی انتشار بر اساس آنالیز بهترین ساعت‌های مخاطب',
      benefits: ['ویژگی بیشتر پست‌ها', 'تعامل مداوم', 'رشد پایدار پیج']
    }
  ];

  const contentStrategies = [
    {
      type: 'ترندها و اخبار',
      description: 'پوشش اخبار روز و موضوعات داغ برای بالا نگه داشتن توجه',
      examples: ['اخبار صنعت', 'سالگردها', 'رویدادهای جهانی']
    },
    {
      type: 'محتوای آموزشی',
      description: 'دانستنی‌هایی از حوزه کاری شما برای ایجاد ارزش افزوده',
      examples: ['راهنماها', 'نکات کاربردی', 'آموزش‌های کوتاه']
    },
    {
      type: 'محتوای سرگرم‌کننده',
      description: 'پست‌های شاد و جذاب برای بالا بردن تعامل',
      examples: ['میم‌ها', 'چالش‌ها', 'محتوای کاربرمحور']
    },
    {
      type: 'بک‌اند کامپین',
      description: 'داستان موفقیت مشتریان و پشت صحنه کسب‌وکار',
      examples: ['مصاحبه‌ها', 'پروژه‌های موفق', 'فرآیند کار']
    }
  ];

  const benefits = [
    'رشد پیج تا ۵۰۰% در عرض ۶ ماه با استراتژی درست',
    'ایجاد تعامل واقعی و فالوورهای ارزشمند و هدفمند',
    'پرهون اقتصادی نسبت به تیم‌های تبلیغاتی مستقل',
    'یکپارچه‌سازی پیام برند در تمام پلتفرم‌ها',
    'افزایش اعتبار برند و جذب مشتریان بالقوه'
  ];

  const stats = [
    { metric: '+۵۰۰%', label: 'رشد فالوورها', color: 'text-pink-600', icon: Users },
    { metric: '۸۵%', label: 'افزایش تعامل', color: 'text-green-600', icon: Heart },
    { metric: '۶ ماه', label: 'بازدهی کامل', color: 'text-blue-600', icon: TrendingUp },
    { metric: '۲۴/۷', label: 'پشتیبانی سریع', color: 'text-purple-600', icon: MessageSquare }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'بررسی برند و مخاطب',
      desc: 'تحلیل شخصیت برند، مخاطب هدف و فضای رقابتی هر پلتفرم'
    },
    {
      step: '۲',
      title: 'استراتژی محتوایی',
      desc: 'تعریف ستون‌های محتوایی، تقویم انتشار و اهداف کلیدی'
    },
    {
      step: '۳',
      title: 'تولید محتوا',
      desc: 'ایده‌پردازی، کپشن‌نویسی و تولید محتوای برند برای هر پست'
    },
    {
      step: '۴',
      title: 'عکس‌العمل و اندازه‌گیری',
      desc: 'پایش تعامل، رسپانس کامنت‌ها و بهینه‌سازی بی‌وقفه'
    }
  ];

  const faqs = [
    {
      question: 'چه شبکه‌های اجتماعی را پوشش می‌دهیم؟',
      answer: 'اینستاگرام، تلگرام، لینکدین، توییتر (اکس)، تیک‌تاک، آپارات و حتی متاورس را پوشش می‌دهیم. بسته به اهداف کسب‌وکار شما، استراتژی اختصاصی برای هر پلتفرم طراحی می‌کنیم.'
    },
    {
      question: 'آیا گرافیک و طراحی هم در پکیج‌ها هست؟',
      answer: 'بله، بسته به سفارش شما می‌تواند شامل باشد. گرافیک‌های جذاب برای پست‌ها، بوردر جالب برای اینستاگرام و حتی تولید ویدیوهای کوتاه برای تقویت حضور شما در شبکه‌های اجتماعی.'
    },
    {
      question: 'چطور رسپانس کامنت‌ها را مدیریت می‌کنید؟',
      answer: 'تیم ما به سرعت به کامنت‌ها پاسخ می‌دهد، کامنت‌های اسپمر را پاک کرده و تعامل کلاینت‌ها را با شما گزارش هفتگی می‌کند تا فضای شبکه اجتماعی شما همیشه مثبت و فعال باشد.'
    },
    {
      question: 'محتوا شامل تبلیغات هم می‌شود؟',
      answer: 'در صورت نیاز، استراتژی تبلیغات اجتماعی را نیز پیاده‌سازی می‌کنیم. از بوست پست‌های پربازدید گرفته تا تبلیغات هدفی که مستقیماً به فروش شما کمک کند.'
    },
    {
      question: 'تعداد پست‌ها در هر پکیج چقدر است؟',
      answer: 'بسته به نیاز شما متفاوت است. برای شروع معمولاً ۸-۱۲ پست در ماه برای هر پلتفرم پیشنهاد می‌کنیم تا بتوانیم رشد پایدار و مطمئنی ایجاد کنیم.'
    },
    {
      question: 'آیا می‌توانم محتوای خودم را هم استفاده کنم؟',
      answer: 'البته، می‌توانید محتوای آماده خود را بدهید تا تیم ما فقط کپشن و بهینه‌سازی را انجام دهد. اما پیشنهاد می‌کنیم از ایده‌پردازی حرفه‌ای ما نیز استفاده کنید تا نتایج بهتری بگیرید.'
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
        <section className="section-padding bg-linear-to-br from-pink-50 to-purple-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-pink-100 text-pink-700 mb-4 px-4 py-1 text-sm border-pink-200">
                  محتوای شبکه‌های اجتماعی حرفه‌ای
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  محتوای <span className="gradient-text">شبکه‌های اجتماعی</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  قدرت ایده‌پردازی خلاقانه، کپشن جذاب و استراتژی تعامل‌سازی برای رشد ۵۰۰% پیج شما در شبکه‌های اجتماعی. از اینستاگرام تا لینکدین، حضور قدرتمند برقرار کنید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                    شروع استراتژی محتوایی
                  </Button>
                  <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50">
                    مشاوره رایگان سوشال مدیا
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-pink-600/10 to-transparent z-10" />
                <Image
                  src="/images/social-media-content-hero.png"
                  alt="محتوای شبکه‌های اجتماعی حرفه‌ای"
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
        <section className="section-padding bg-linear-to-r from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-pink-600 mx-auto mb-3" />
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

        {/* Platforms Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                پوشش <span className="gradient-text">۵ پلتفرم اصلی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                استراتژی اختصاصی برای هر پلتفرم با بهترین بازدهی و ROI ممکن
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <platform.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">{platform.name}</CardTitle>
                        <div className="flex gap-4 mt-2 text-sm">
                          <span className="text-green-600 font-medium">{platform.followers} فالوور</span>
                          <span className="text-blue-600 font-medium">{platform.engagement} تعامل</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
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
                استراتژی‌های <span className="gradient-text">محتوایی اثربخش</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ترکیبی از استراتژی‌های مدرن برای حداکثر تعامل و رشد پیج شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <Target className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{strategy.type}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {strategy.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-500">
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
                خدمات <span className="gradient-text">سوشال مدیا خلاقانه</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                از ایده‌پردازی تا انتشار، پوشش کامل تمام جوانب محتوای شبکه اجتماعی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-pink-600" />
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
                          <BadgeCheck className="h-4 w-4 text-green-500 shrink-0" />
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
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای محتوای <span className="gradient-text">شبکه اجتماعی حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                سوشال مدیا قدرتمند، کلید موفقیت مارکتینگ دیجیتال مدرن است
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-pink-600" />
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
        <section className="section-padding bg-linear-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">سوشال مدیا عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۴ مرحله‌ای برای محتوایی که واقعاً نتیجه می‌دهد
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl font-bold text-pink-700">
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
                پاسخ به پرسش‌های رایج مشتریان درباره محتوای شبکه اجتماعی
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
              پیج شما همین امروز پر از ایده خلاقانه شود!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با خدمات محتوای شبکه‌های اجتماعی عصر سئو، از ایده‌پردازی خلاقانه تا استراتژی انتشار هوشمند، پیج شما را به ستاره رسانه‌های اجتماعی تبدیل خواهیم کرد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                شروع محتوای سوشال مدیا
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                نمونه محتواهای ما را ببینید
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
