import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Brain, TrendingUp, Zap, Sparkles, Type, BarChart3, CheckCircle, Target, Globe, BookOpen, PenTool } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'تولید محتوای خودکار با هوش مصنوعی | AI Auto Content Generation',
  description: 'تولید محتوای خودکار با AI پیشرفته. تولید مقاله، پست شبکه‌های اجتماعی، محتوای بازاریابی. سئو بهینه، تحویل سریع، کیفیت بالا.',
  keywords: 'تولید محتوای خودکار, AI Content, هوش مصنوعی, تولید مقاله, محتوا مارکتینگ, سئو',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/auto-content-generation',
  },
  openGraph: {
    title: 'تولید محتوای خودکار با هوش مصنوعی | عصر سئو',
    description: 'تولید محتوای بازاریابی و سئو بهینه‌سازی شده با ابزارهای پیشرفته هوش مصنوعی.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/auto-content-generation',
    images: [
      {
        url: '/og-auto-content.jpg',
        width: 1200,
        height: 630,
        alt: 'تولید محتوای خودکار با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تولید محتوای خودکار با هوش مصنوعی | عصر سئو',
    description: 'تولید محتوای بازاریابی و سئو بهینه‌سازی شده با ابزارهای پیشرفته AI.',
    images: ['/og-auto-content.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'تولید محتوای خودکار با هوش مصنوعی',
  'description': 'تولید محتوای بازاریابی و سئو پیشرفته با استفاده از هوش مصنوعی',
  'serviceType': 'AI Content Generation',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تولید محتوای هوش مصنوعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تولید مقاله هوشمند',
          'description': 'تولید مقالات سئو بهینه‌سازی شده و جذاب برای وب‌سایت'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'محتوای شبکه‌های اجتماعی',
          'description': 'تولید پست‌های اجتماعی جذاب و تعاملی با هوش مصنوعی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چگونه محتوای تولید شده بهینه‌سازی می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'محتوا با رعایت اصول سئو پیشرفته، استفاده از کلمات کلیدی مناسب و ساختار مطلوب برای موتورهای جستجو تولید می‌شود.'
        }
      },
      {
        '@type': 'Question',
        'name': 'کیفیت محتوای تولید شده چگونه تضمین می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'سیستم از هوش مصنوعی پیشرفته استفاده می‌کند که محتوای منحصر به فرد، جذاب و با کیفیت تولید می‌کند.'
        }
      }
    ]
  }
}

export default function AutoContentGenerationPage() {
  const features = [
    {
      icon: FileText,
      title: 'تولید مقاله هوشمند',
      description: 'تولید مقالات کامل، جذاب و سئو بهینه‌سازی شده در کمترین زمان.',
      benefits: ['سئو ۱۰۰%', 'محتوای منحصر به فرد', 'تحویل سریع']
    },
    {
      icon: PenTool,
      title: 'محتوای شبکه‌های اجتماعی',
      description: 'پست‌های جذاب و تعاملی برای تمام پلتفرم‌های اجتماعی.',
      benefits: ['ویژگی‌های ویروسی', 'تعامل بالا', 'زمان‌بندی مناسب']
    },
    {
      icon: Target,
      title: 'بازاریابی محتوایی',
      description: 'استراتژی بازاریابی محتوایی هوشمند و هدفمند.',
      benefits: ['بازاریابی inbound', 'CTA بهینه', 'تبدیل بالا']
    },
    {
      icon: Globe,
      title: 'محتوای چند زبانه',
      description: 'تولید محتوای بهینه‌سازی شده برای بازارهای مختلف.',
      benefits: ['پوشش جهانی', 'SEO بین‌المللی', 'فروش بیشتر']
    }
  ];

  const contentTypes = [
    {
      title: 'مقالات وبلاگ',
      description: 'مقالات آموزشی و تخصصی برای وبلاگ کسب‌وکار',
      icon: BookOpen,
      formats: ['آموزشی', 'راهنما', 'مطالعات موردی']
    },
    {
      title: 'پست‌های شبکه اجتماعی',
      description: 'محتوای جذاب برای اینستاگرام، لینکدین، توییتر',
      icon: Sparkles,
      formats: ['شورت', 'ریلز', 'استوری', 'پست متنی']
    },
    {
      title: 'محتوای بازاریابی',
      description: 'بلاگ پست، ایمیل مارکتینگ، لندینگ پیج',
      icon: Target,
      formats: ['خبرنامه', 'کمپین‌های تبلیغاتی', 'اسکریپت ویدیو']
    },
    {
      title: 'محتوای محصول',
      description: 'توضیحات محصول، کپی تبلیغاتی، کاتالوگ',
      icon: TrendingUp,
      formats: ['توضیحات محصول', 'ویژگی‌ها', 'بررسی تخصصی']
    }
  ];

  const benefits = [
    'تولید ۱۰ برابر سریع‌تر محتوای با کیفیت',
    'کاهش ۷۰ درصدی هزینه‌های تولید محتوا',
    'بهینه‌سازی خودکار برای موتورهای جستجو',
    'انتشار مداوم و منظم محتوای تازه',
    'افزایش ترافیک ارگانیک وب‌سایت',
    'بهبود نرخ تبدیل و فروش آنلاین'
  ];

  const features2 = [
    'تحلیل کلمات کلیدی پیشرفته',
    'بهینه‌سازی برای صدای برند شما',
    'تولید محتوای چند رسانه‌ای',
    'ادغام با سیستم‌های مدیریت محتوا',
    'گزارش‌دهی عملکرد محتوا',
    'یادگیری از بازخوردهای قبلی',
    'پشتیبانی از بیش از ۵۰ زبان',
    'تطبیق با ترندهای روز'
  ];

  const stats = [
    { metric: '۱۰x', label: 'سرعت تولید بالاتر', color: 'text-blue-600' },
    { metric: '۱۰۰%', label: 'بهینه‌سازی سئو', color: 'text-green-600' },
    { metric: '۹۵%', label: 'کیفیت محتوا تضمینی', color: 'text-purple-600' },
    { metric: '۱۰۰۰+', label: 'پیس تولید شده', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'تحلیل موضوع',
      desc: 'تحلیل کلمات کلیدی، مخاطب هدف و اهداف محتوایی'
    },
    {
      step: '۲',
      title: 'تولید هوشمند',
      desc: 'تولید اولیه محتوا با هوش مصنوعی پیشرفته'
    },
    {
      step: '۳',
      title: 'بررسی و ویرایش',
      desc: 'بررسی کیفیت توسط کارشناسان و ویرایش نهایی'
    },
    {
      step: '۴',
      title: 'بهینه‌سازی',
      desc: 'بهینه‌سازی نهایی برای سئو و انتشار'
    },
    {
      step: '۵',
      title: 'انتشار و تحلیل',
      desc: 'انتشار محتوا و تحلیل عملکرد در شبکه‌ها'
    }
  ];

  const faqs = [
    {
      question: 'چگونه محتوای تولید شده بهینه‌سازی می‌شود؟',
      answer: 'محتوا با رعایت اصول سئو پیشرفته، استفاده از کلمات کلیدی مناسب و ساختار مطلوب برای موتورهای جستجو تولید می‌شود.'
    },
    {
      question: 'کیفیت محتوای تولید شده چگونه تضمین می‌شود؟',
      answer: 'سیستم از هوش مصنوعی پیشرفته استفاده می‌کند که محتوای منحصر به فرد، جذاب و با کیفیت تولید می‌کند.'
    },
    {
      question: 'آیا محتوا منحصر به فرد است یا کپی؟',
      answer: 'تمام محتوای تولید شده منحصر به فرد بوده و توسط سیستم‌های پیشرفته تشخیص کپی بررسی می‌شود.'
    },
    {
      question: 'چه زبان‌هایی پشتیبانی می‌شود؟',
      answer: 'سیستم تولید محتوا به فارسی، انگلیسی، عربی و بیش از ۵۰ زبان دیگر امکان‌پذیر است.'
    },
    {
      question: 'آیا امکان سفارشی‌سازی برند وجود دارد؟',
      answer: 'بله، محتوای تولید شده کاملاً مطابق با صدای برند، مخاطب هدف و سبک شما سفارشی‌سازی می‌شود.'
    },
    {
      question: 'چه مدت طول می‌کشد تا محتوای آماده شود؟',
      answer: 'برای محتوای کوتاه معمولاً چند دقیقه، و برای محتوای بلند‌تر حداکثر ۲۴ ساعت زمان نیاز است.'
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 mb-4">
                فناوری تولید محتوای پیشرفته
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                تولید محتوای خودکار با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                تولید محتوای بازاریابی، مقالات سئو بهینه‌سازی شده و پست‌های شبکه‌های اجتماعی با کیفیت بالا در کمترین زمان ممکن.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  تولید محتوای رایگان
                </Button>
                <Button variant="outline" size="lg">
                  نمونه محتوا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-indigo-50 to-purple-50">
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

        {/* Content Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع محتوای <span className="gradient-text">قابل تولید</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                طیف کاملی از محتواهای بازاریابی و آموزشی برای تمام نیازهای شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <type.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-3">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600">
                      <strong>فرمت‌های:</strong>
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
                قابلیت‌های <span className="gradient-text">تولید محتوا</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته برای تولید محتوای حرفه‌ای و تاثیرگذار
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-purple-600" />
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
                امکانات پیشرفته برای تولید محتوای بی‌نظیر و تاثیرگذار
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features2.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-purple-600" />
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
                مزایای تولید محتوای <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                مزایای رقابتی تولید محتوای حرفه‌ای در زمان و هزینه کمتر
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">تولید محتوا</span>
              </h2>
              <p className="text-xl text-gray-600">
                گام‌های حرفه‌ای تولید محتوا از ایده تا انتشار نهایی
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-700">
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
                پاسخ به رایج‌ترین سوالات درباره تولید محتوای خودکار
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
              تولید محتوای خود تجاری را آغاز کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تولید محتوای هوش مصنوعی، استراتژی بازاریابی خود را متحول کنید. ترافیک بیشتر، تبدیل بالاتر و فروش افزون تر.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                شروع تولید محتوا
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاهده نمونه‌ها
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
