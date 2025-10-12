import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Film, Sparkles, Video, Timer, BadgeCheck, Play, Wand2, Users, TrendingUp, Zap, CheckCircle, Music, Type, Palette } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ساخت ویدیو با هوش مصنوعی | AI Video Generation Services',
  description: 'تولید ویدیوهای تبلیغاتی و آموزشی با هوش مصنوعی. ساخت ویدیو از متن، انیمیشن، گرافیک. تحویل سریع و هزینه مناسب. پوشش شبکه‌های اجتماعی.',
  keywords: 'ساخت ویدیو با AI, هوش مصنوعی, AI Video, تولید ویدیو تبلیغاتی, ویدیو آموزشی, انیمیشن, گرافیک',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/ai-video-generation',
  },
  openGraph: {
    title: 'ساخت ویدیو با هوش مصنوعی | عصر سئو',
    description: 'تولید ویدیوهای حرفه‌ای و جذاب با ابزارهای پیشرفته هوش مصنوعی برای بازاریابی و آموزش.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/ai-video-generation',
    images: [
      {
        url: '/og-ai-video.jpg',
        width: 1200,
        height: 630,
        alt: 'ساخت ویدیو با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ساخت ویدیو با هوش مصنوعی | عصر سئو',
    description: 'تولید ویدیوهای تبلیغاتی و آموزشی با ابزارهای پیشرفته AI.',
    images: ['/og-ai-video.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'ساخت ویدیو با هوش مصنوعی',
  'description': 'تولید ویدیوهای تبلیغاتی و آموزشی با استفاده از ابزارهای پیشرفته هوش مصنوعی',
  'serviceType': 'AI Video Generation',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تولید ویدیو هوش مصنوعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تولید ویدیو تبلیغاتی',
          'description': 'ساخت ویدیوهای کوتاه و جذاب برای بازاریابی و شبکه‌های اجتماعی'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تبدیل متن به ویدیو',
          'description': 'تولید ویدیو از روی متن و محتوا با استفاده از هوش مصنوعی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چه نوع ویدیوهایی قابل تولید است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'انواع ویدیو آموزشی، تبلیغاتی، معرفی محصول و گزارش سازمانی تولید می‌شود.'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا نیاز به تجربه قبلی در ساخت ویدیو دارم؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'خیر، کافیست سناریو یا متن بفرستید. باقی کار توسط سیستم هوش مصنوعی انجام می‌شود.'
        }
      }
    ]
  }
}

export default function AIVideoGenerationPage() {
  const features = [
    {
      icon: Film,
      title: 'ساخت ویدیوهای تبلیغاتی هوشمند',
      description: 'تولید ویدیوهای کوتاه و جذاب متناسب با اهداف بازاریابی و سناریوی شما.',
      benefits: ['بازاریابی هدفمند', 'ویدیوهای ویروسی', 'آنالیز رقبا']
    },
    {
      icon: Sparkles,
      title: 'انیمیشن و تصاویر گرافیکی',
      description: 'افزودن انیمیشن، افکت و عناصر گرافیکی به تولیدات ویدیویی بدون نیاز به طراح حرفه‌ای.',
      benefits: ['کیفیت بالا', 'انیمیشن حرفه‌ای', 'ویژگی‌های پیشرفته']
    },
    {
      icon: Type,
      title: 'تبدیل متن به ویدیو',
      description: 'تولید ویدیو از روی سناریو یا مقاله؛ کافی است متن خود را وارد کنید تا در چند دقیقه تبدیل به ویدیو شود.',
      benefits: ['سرعت بالا', 'دقت بالا', 'هزینه مناسب']
    },
    {
      icon: Timer,
      title: 'تحویل سریع و هزینه به‌صرفه',
      description: 'دریافت ویدیوهای باکیفیت در کمترین زمان، مناسب انواع بودجه تبلیغاتی.',
      benefits: ['تحویل سریع', 'کیفیت تضمینی', 'پشتیبانی ۲۴/۷']
    }
  ];

  const benefits = [
    'انتشار سریع ویدیوهای سفارشی متناسب با برند',
    'افزایش نرخ مشارکت و جذابیت محتوای شبکه‌های اجتماعی',
    'صرفه‌جویی در هزینه نسبت به تولیدات سنتی',
    'امکان شخصی‌سازی کامل سناریو، گوینده و گرافیک'
  ];

  const videoTypes = [
    {
      title: 'ویدیوهای تبلیغاتی',
      description: 'کمپین‌های بازاریابی، معرفی محصول، تبلیغات شبکه‌های اجتماعی',
      icon: Wand2,
      duration: '۱۵-۶۰ ثانیه',
      formats: ['Instagram', 'TikTok', 'Facebook', 'YouTube']
    },
    {
      title: 'ویدیوهای آموزشی',
      description: 'آموزش محصول، راهنمای استفاده، محتوای آموزشی سازمانی',
      icon: Users,
      duration: '۳-۱۰ دقیقه',
      formats: ['آموزشی', 'دمو', 'آموزش محصول']
    },
    {
      title: 'ویدیوهای معرفی',
      description: 'معرفی خدمات، تیم، شرکت و محصولات سازمان',
      icon: Play,
      duration: '۳۰-۹۰ ثانیه',
      formats: ['کمپانی آن', 'معرفی محصول', 'بیزینس ویدیو']
    },
    {
      title: 'ویدیوهای گزارش',
      description: 'گزارش عملکرد، اخبار سازمانی، انیمیشن داده',
      icon: TrendingUp,
      duration: '۲-۵ دقیقه',
      formats: ['گزارش سالانه', 'اخبار', 'داده‌های انیمیشنی']
    }
  ];

  const features2 = [
    'گوینده هوشمند با صداهای متنوع فارسی',
    'افکت‌های صوتی و موسیقی پس‌زمینه',
    'ترجمه خودکار زیرنویس ویدیو',
    'برندینگ و لوگو اختصاصی',
    'تصاویر و گرافیک با کیفیت بالا',
    'فرمت‌های خروجی متنوع (MP4, AVI, MOV)',
    'بهینه‌سازی برای شبکه‌های اجتماعی',
    'آمار و تحلیل عملکرد ویدیو'
  ];

  const stats = [
    { metric: '۱۰x', label: 'سرعت تولید سریع‌تر', color: 'text-blue-600' },
    { metric: '۸۰%', label: 'کاهش هزینه تولید', color: 'text-green-600' },
    { metric: '۳x', label: 'افزایش نرخ مشارکت', color: 'text-purple-600' },
    { metric: '۱۰۴+', label: 'ویدیو تولید شده', color: 'text-orange-600' }
  ];

  const processSteps = [
    {
      step: '۱',
      title: 'مشاوره و نیازسنجی',
      desc: 'تحلیل اهداف شما و تعیین نوع ویدیو مناسب برای کسب‌وکارتان'
    },
    {
      step: '۲',
      title: 'نوشتن سناریو',
      desc: 'طراحی سناریوی جذاب و بهینه‌سازی آن برای هوش مصنوعی'
    },
    {
      step: '۳',
      title: 'تولید هوشمند',
      desc: 'تبدیل سناریو به ویدیو با استفاده از ابزارهای پیشرفته AI'
    },
    {
      step: '۴',
      title: 'تدوین و بهبود',
      desc: 'بررسی کیفیت، اعمال تغییرات و نهایی‌سازی محصول'
    },
    {
      step: '۵',
      title: 'تحویل و پشتیبانی',
      desc: 'ارسال فایل نهایی در فرمت‌های مختلف و ارائه پشتیبانی'
    }
  ];

  const faqs = [
    {
      question: 'چه نوع ویدیوهایی قابل تولید است؟',
      answer: 'انواع ویدیو آموزشی، تبلیغاتی، معرفی محصول و گزارش سازمانی تولید می‌شود.'
    },
    {
      question: 'آیا نیاز به تجربه قبلی در ساخت ویدیو دارم؟',
      answer: 'خیر، کافیست سناریو یا متن بفرستید. باقی کار توسط سیستم هوش مصنوعی انجام می‌شود.'
    },
    {
      question: 'آیا گوینده انسانی هم اضافه می‌شود؟',
      answer: 'امکان انتخاب صدای هوشمند یا گوینده واقعی برای ویدیوها وجود دارد.'
    },
    {
      question: 'چقدر طول می‌کشد تا ویدیو آماده شود؟',
      answer: 'بسته به پیچیدگی ویدیو، معمولاً بین ۲۴ ساعت تا ۳ روز کاری زمان نیاز است.'
    },
    {
      question: 'آیا امکان سفارشی‌سازی برند وجود دارد؟',
      answer: 'بله، می‌توانید لوگو، رنگ‌بندی و استایل برند خود را در ویدیو اعمال کنید.'
    },
    {
      question: 'ویدیوها در چه اندازه‌هایی تولید می‌شوند؟',
      answer: 'ویدیوها در اندازه‌های استاندارد شبکه‌های اجتماعی مثل ۹:۱۶، ۱:۱ و ۱۶:۹ تولید می‌شوند.'
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
        <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-pink-100 text-pink-700 mb-4">
                تکنولوژی تولید ویدیو پیشرفته
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                ساخت ویدیو با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                تولید ویدیوهای حرفه‌ای و جذاب بدون نیاز به دوربین، استودیو و تیم تولید. از متن ساده به ویدیوهای تبلیغاتی و آموزشی تبدیل کنید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع تولید ویدیو
                </Button>
                <Button variant="outline" size="lg">
                  نمونه ویدیوها
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-blue-50 to-pink-50">
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
                    <Zap className="h-6 w-6 text-gray-400 mx-auto mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع ویدیوهای <span className="gradient-text">قابل تولید</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                طیف کاملی از ویدیوهای تبلیغاتی و آموزشی برای نیازهای مختلف شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {videoTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <type.icon className="h-6 w-6 text-pink-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-3">{type.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>مدت: {type.duration}</span>
                      <span>فرمت‌ها: {type.formats.length} نوع</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600">
                      <strong>مناسب برای:</strong>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        {type.formats.map((format, formatIndex) => (
                          <span key={formatIndex} className="bg-gray-100 px-2 py-1 rounded text-xs">
                            {format}
                          </span>
                        ))}
                      </div>
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
                قابلیت‌های <span className="gradient-text">تولید ویدیو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته برای تولید ویدیوهای حرفه‌ای و جذاب
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

        {/* Advanced Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ویژگی‌های <span className="gradient-text">پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                امکانات پیشرفته برای تولید ویدیوهای بی‌نظیر
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features2.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl border border-pink-100">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-pink-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {feature}
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
                مزایای تولید ویدیو با <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مزایای رقابتی تولید ویدیو حرفه‌ای در زمان و هزینه کمتر
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-pink-600" />
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
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">تولید ویدیو</span>
              </h2>
              <p className="text-xl text-gray-600">
                گام‌های ساده تولید ویدیو از ایده تا تحویل نهایی
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
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
                پاسخ به‌سوالات رایج درباره تولید ویدیو با هوش مصنوعی
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
              ویديوی بازاریابی خود را همین امروز بسازید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              از قدرت هوش مصنوعی برای تولید ویدیوهای جذاب و تاثیرگذار در بازاریابی کسب‌وکار خود استفاده کنید. سریع، با کیفیت و مقرون به صرفه.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                شروع ساخت ویدیو
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
