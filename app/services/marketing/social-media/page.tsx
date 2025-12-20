import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Users, ScrollText, TrendingUp, Clock, MessageCircle, Heart, Share, Instagram, Twitter, Facebook, Linkedin, Youtube, Zap, Target, BarChart3, Calendar, Award, CheckCircle } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'مدیریت شبکه‌های اجتماعی | سوشال مدیا مارکتینگ حرفه‌ای | عصر سئو',
  description: 'مدیریت حرفه‌ای شبکه‌های اجتماعی شامل تولید محتوا، تعامل با کاربران، تحلیل عملکرد. افزایش ۳۰۰% تعامل و نرخ تبدیل با متخصصین عصر سئو.',
  keywords: 'مدیریت شبکه‌های اجتماعی, سوشال مدیا, اینستاگرام, تلگرام, توئیتر, لینکدین, مارکتینگ اجتماعی',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/social-media',
  },
  openGraph: {
    title: 'مدیریت شبکه‌های اجتماعی | عصر سئو',
    description: 'مدیریت کامل و حرفه‌ای حضور برند شما در شبکه‌های اجتماعی قهرمانی بازاریابی دیجیتال.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/social-media',
    images: [
      {
        url: '/og-social-media.jpg',
        width: 1200,
        height: 630,
        alt: 'مدیریت شبکه‌های اجتماعی حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدیریت شبکه‌های اجتماعی | عصر سئو',
    description: 'مدیریت حرفه‌ای سوشال مدیا برای رشد برند و افزایش فروش.',
    images: ['/og-social-media.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'مدیریت شبکه‌های اجتماعی',
  'description': 'مدیریت حرفه‌ای شبکه‌های اجتماعی شامل تولید محتوا، تعامل با کاربران و تحلیل عملکرد',
  'serviceType': 'Social Media Marketing',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات مدیریت شبکه‌های اجتماعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'مدیریت اینستاگرام',
          'description': 'مدیریت حرفه‌ای پیج اینستاگرام با استراتژی محتوای جذاب'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'مدیریت لینکدین',
          'description': 'شخصی‌سازی حرفه‌ای برای شبکه‌های کسب‌وکار'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چه شبکه‌هایی را مدیریت می‌کنید؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'اینستاگرام، لینکدین، توئیتر، تلگرام، یوتیوب و شبکه‌های اجتماعی دیگر.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه مقدار زمان نیاز است تا نتایج دیده شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'معمولاً در عرض ۱-۳ ماه نتایج قابل مشاهده شامل افزایش تعامل و فالوورها.'
        }
      }
    ]
  }
}

export default function SocialMediaManagementPage() {
  const socialPlatforms = [
    {
      name: 'اینستاگرام',
      description: 'مدیریت پیج و استوری‌ها برای حداکثر تعامل',
      icon: Instagram,
      features: ['پست‌های تبلیغاتی', 'استوری‌های تعاملی', 'آمار پیشرفته'],
      color: 'pink'
    },
    {
      name: 'لینکدین',
      description: 'شخصی‌سازی حرفه‌ای برای شبکه‌های B2B',
      icon: Linkedin,
      features: ['مقالات تخصصی', 'پست‌های حرفه‌ای', 'شبکه‌سازی B2B'],
      color: 'blue'
    },
    {
      name: 'توئیتر',
      description: 'مدیریت توییتر برای تعامل لحظه‌ای',
      icon: Twitter,
      features: ['توییت‌های ویروسی', 'پاسخگویی سریع', 'ترندهای لحظه‌ای'],
      color: 'cyan'
    },
    {
      name: 'تلگرام',
      description: 'مدیریت کانال و گروه‌های اختصاصی',
      icon: MessageCircle,
      features: ['ربات‌های خودکار', 'کانال آموزشی', 'پشتیبانی مشتریان'],
      color: 'blue'
    },
    {
      name: 'یوتیوب',
      description: 'تولید و انتشار ویدیوهای حرفه‌ای',
      icon: Youtube,
      features: ['ویدیوهای آموزشی', 'تبلیغات وایرال', 'آمار پیشرفته'],
      color: 'red'
    },
    {
      name: 'تیکتاک',
      description: 'محتوای viral و تیک‌تاک‌های خلاقانه',
      icon: Heart,
      features: ['ویدیوهای کوتاه', 'ترندهای جنجالی', 'تعامل بالا'],
      color: 'purple'
    }
  ];

  const contentStrategies = [
    'محتوای آموزشی و اطلاع‌رسانی ارزشمند',
    'پست‌های تعاملی و مسابقات جذاب',
    'استوری‌های زنده و لحظهای',
    'ویدیوهای کوتاه و وایرال',
    'مطالب انگیزشی و الهام‌بخش'
  ];

  const results = [
    { metric: '۳۰۰%', label: 'افزایش نرخ تعامل', icon: MessageCircle },
    { metric: '۴۰۰%', label: 'رشد فالوورها', icon: Users },
    { metric: '۲۰۰%', label: 'افزایش نرخ کلیک', icon: TrendingUp },
    { metric: '۲۴/۷', label: 'پاسخگویی مداوم', icon: Clock }
  ];

  const features = [
    {
      icon: Users,
      title: 'تعامل هدفمند با فالوورها',
      description: 'پاسخ به نظرات و دایرکت‌ها و ایجاد ارتباط صمیمانه با کاربران شبکه اجتماعی شما.',
      benefits: ['پاسخگویی سریع', 'ارتباط صمیمانه', 'رضایت مشتری افزایش']
    },
    {
      icon: ScrollText,
      title: 'برنامه‌ریزی و تولید محتوای اختصاصی',
      description: 'خلق محتوای جذاب (تصویری، ویدیویی، متنی) متناسب برند شما و بالاتر بردن تعامل پیج.',
      benefits: ['محتوای منحصربه‌فرد', 'همخوانی با برند', 'جذب مخاطب بیشتر']
    },
    {
      icon: TrendingUp,
      title: 'تحلیل عملکرد و رشد',
      description: 'گزارش‌های تحلیلی درباره بازخورد پست‌ها، نرخ رشد، و بهینه‌سازی برنامه محتوا.',
      benefits: ['گزارش دقیق', 'بهبود مداوم', 'نتایج قابل اندازه‌گیری']
    },
    {
      icon: Clock,
      title: 'پوشش ۲۴/۷ و پاسخگویی سریع',
      description: 'مدیریت کامل حضور شما در شبکه‌های اجتماعی با پاسخگویی شبانه‌روزی.',
      benefits: ['پاسخگویی فوری', 'ارتباط دائمی', 'قدردانی مشتری']
    }
  ];

  const metrics = [
    'رشد تعداد فالوورها و دنبال‌کنندگان',
    'میزان تعامل (لایک، کامنت، شییر)',
    'نرخ بازدید و ایمپرشن پست‌ها',
    'وضعیت تبدیل ترافیک به فروش',
    'بررسی ترندها و بازخورد کاربران'
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'بررسی و استراتژی',
      desc: 'تحلیل اهداف، مخاطب هدف و رقبا برای طراحی استراتژی'
    },
    {
      step: '۲',
      title: 'بررسی و بهبود پروفایل',
      desc: 'بهینه‌سازی بیو، عکس پروفایل و محتوای اولیه'
    },
    {
      step: '۳',
      title: 'طراحی تقویم محتوا',
      desc: 'برنامه‌ریزی محتوا و زمان‌بندی انتشار پست‌ها'
    },
    {
      step: '۴',
      title: 'تولید و انتشار محتوا',
      desc: 'ایجاد محتوای جذاب و انتشار بهینه در شبکه‌ها'
    },
    {
      step: '۵',
      title: 'تعامل و مدیریت',
      desc: 'پاسخگویی به کامنت‌ها و تعامل مداوم با کاربران'
    },
    {
      step: '۶',
      title: 'تحلیل و بهینه‌سازی',
      desc: 'بررسی آمار عملکرد و بهبود استراتژی محتوا'
    }
  ];

  const faqs = [
    {
      question: 'مدیریت چه شبکه‌هایی ارائه می‌شود؟',
      answer: 'خدمات ما برای اینستاگرام، تلگرام، لینکدین، توئیتر، یوتیوب، تیک‌تاک و دیگر شبکه‌های رایج قابل ارائه است. بسته به نیاز کسب‌وکار شما پلتفرم مناسب را انتخاب می‌کنیم.'
    },
    {
      question: 'آیا تقویم محتوایی ارائه می‌شود؟',
      answer: 'بله، ماهانه تقویم انتشار محتوا، ایده‌های خلاقانه و استراتژی تعاملی متناسب با اهداف برند شما آماده می‌گردد و در ابتدای هر ماه تحویل داده می‌شود.'
    },
    {
      question: 'راهکاری برای افزایش تعامل پیج دارید؟',
      answer: 'همایش‌های تعاملی، مسابقات اینستاگرامی، استوری‌های زنده، محتوای وایرال، همکاری با اینفلوئنسرها و تبلیغات هدفمند از جمله راهکارهای تخصصی ما برای افزایش تعامل هستند.'
    },
    {
      question: 'چند پست در هفته منتشر می‌شود؟',
      answer: 'بسته به پلتفرم و استراتژی بازاریابی شما، معمولاً در اینستاگرام ۵-۷ پست در هفته، لینکدین ۳-۴ پست و شبکه‌های دیگر متناسب با مخاطب هدف منتشر می‌شود.'
    },
    {
      question: 'آیا برای کسب‌وکارهای مختلف استراتژی متفاوتی دارید؟',
      answer: 'بله، استراتژی برای هر کسب‌وکار کاملاً سفارشی‌سازی می‌شود. ما بر اساس صنعت، مخاطب هدف، رقبا و اهداف بازاریابی استراتژی منحصربه‌فردی برای شما طراحی می‌کنیم.'
    },
    {
      question: 'چطور از کیفیت محتوا اطمینان حاصل می‌کنیم؟',
      answer: 'تمام محتوای تولیدی توسط کارشناسان محتوا بررسی می‌شود، آمار تعامل پست‌های قبلی تحلیل می‌گردد و محتوای جدید بر اساس بازخورد کاربران بهبود پیدا می‌کند.'
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
                  مدیریت حرفه‌ای شبکه‌های اجتماعی
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  مدیریت <span className="gradient-text">شبکه‌های اجتماعی</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  مدیریت کامل و حرفه‌ای حضور برند شما در شبکه‌های اجتماعی. افزایش ۳۰۰% تعامل، رشد طبیعی فالوورها و تبدیل اجتماعی به فروش با استراتژی‌های پیشرفته عصر سئو.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                    شروع مدیریت سوشال وایرال
                  </Button>
                  <Button variant="outline" size="lg" className="border-pink-200 text-pink-700 hover:bg-pink-50">
                    تحلیل رایگان پیج شما
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-pink-600/10 to-transparent z-10" />
                <Image
                  src="/images/social-media-hero.png"
                  alt="مدیریت شبکه‌های اجتماعی"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-linear-to-r from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <result.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-700 mb-2">
                      {result.metric}
                    </div>
                    <p className="text-gray-900 font-medium">
                      {result.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Platforms Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                شبکه‌های اجتماعی <span className="gradient-text">پوشش داده شده</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مدیریت حرفه‌ای تمامی پلتفرم‌های اجتماعی محبوب با استراتژی‌های اختصاصی
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialPlatforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-${platform.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${platform.color}-200 transition-colors`}>
                        <platform.icon className={`h-6 w-6 text-${platform.color}-600`} />
                      </div>
                      <CardTitle className="text-xl font-semibold">{platform.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          {feature}
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
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">مدیریت سوشال مدیا</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکرد جامع و حرفه‌ای برای مدیریت حضور برند شما در فضای دیجیتال
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-pink-600" />
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
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
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

        {/* Content Strategies */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                استراتژی‌های <span className="gradient-text">محتوای جذاب</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                رویکردهای خلاقانه برای تولید محتوای ویروسی و تعاملی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contentStrategies.map((strategy, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {strategy}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                شاخص‌های کلیدی <span className="gradient-text">اندازه‌گیری</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                معیارهای موفقیت در مدیریت شبکه‌های اجتماعی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section-padding bg-linear-to-br from-pink-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">مدیریت شبکه‌های اجتماعی</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام برای موفقیت در فضای اجتماعی
              </p>
            </div>

            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-2xl font-bold text-pink-700 shrink-0">
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
                پاسخ به رایج‌ترین سوالات درباره مدیریت شبکه‌های اجتماعی
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
              برند خود را در شبکه‌های اجتماعی قدرتمند کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با مدیریت حرفه‌ای شبکه‌های اجتماعی، فالوورهای وفادار جذب کنید، نرخ تعامل را افزایش دهید و فروش خود را از طریق فضای اجتماعی بهبود بخشید. عصر سئو، راهنمای موفقیت شماست!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                شروع مدیریت شبکه‌ها
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره استراتژی رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
