import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BrainCog, Lightbulb, Workflow, Users, BadgeCheck, Target, TrendingUp, Shield, Zap, Award, CheckCircle } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'مشاوره و پیاده‌سازی هوش مصنوعی | AI Consulting Services',
  description: 'مشاوره تخصصی هوش مصنوعی از عصر سئو. پیاده‌سازی کامل پروژه‌های AI، اتوماسیون فرایندها، آموزش و انتقال دانش. افزایش بهره‌وری تا ۳۰۰%.',
  keywords: 'مشاوره هوش مصنوعی, AI Consulting, پیاده‌سازی AI, اتوماسیون فرایندها, یادگیری ماشین, مشاوره AI',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/ai-consulting',
  },
  openGraph: {
    title: 'مشاوره هوش مصنوعی | پیاده‌سازی کامل پروژه‌های AI',
    description: 'مشاوره تخصصی و پیاده‌سازی راهکارهای هوش مصنوعی برای کسب‌وکارها. تحلیل نیاز، اتوماسیون و آموزش کامل.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/ai-consulting',
    images: [
      {
        url: '/og-ai-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'مشاوره و پیاده‌سازی هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مشاوره هوش مصنوعی | عصر سئو',
    description: 'پیاده‌سازی کامل پروژه‌های هوش مصنوعی و اتوماسیون فرایندها.',
    images: ['/og-ai-consulting.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'مشاوره و پیاده‌سازی هوش مصنوعی',
  'description': 'مشاوره تخصصی هوش مصنوعی شامل تحلیل نیازهای کسب‌وکار، پیاده‌سازی کامل پروژه‌های AI و اتوماسیون فرایندها',
  'serviceType': 'AI Consulting & Implementation',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات مشاوره هوش مصنوعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'مشاوره تخصصی هوش مصنوعی',
          'description': 'تحلیل دقیق نیاز کسب‌وکار و ارائه بهترین راهکار AI'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'پیاده‌سازی کامل پروژه AI',
          'description': 'اجرای کامل پروژه از طراحی تا راه‌اندازی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چه حوزه‌هایی مشاوره هوش مصنوعی ارائه می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'در حوزه‌های سئو، مارکتینگ، اتوماسیون کسب‌وکار، تحلیل داده، چت‌بات، پردازش تصویر و بسیاری زمینه‌های دیگر خدمات مشاوره ارائه می‌شود.'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا از صفر تا صد پروژه انجام می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، از نیازسنجی اولیه تا پیاده‌سازی نهایی و آموزش تیم، همه مراحل توسط کارشناسان ما دنبال می‌شود.'
        }
      }
    ]
  }
}

export default function AIConsultingPage() {
  const features = [
    {
      icon: Lightbulb,
      title: 'مشاوره تخصصی هوش مصنوعی',
      description: 'تحلیل دقیق نیاز کسب‌وکار و ارائه بهترین راهکار AI متناسب با اهداف شما.',
      benefits: ['تحلیل جامع نیازها', 'راهکارهای سفارشی', 'بهینه‌سازی ROI']
    },
    {
      icon: BrainCog,
      title: 'پیاده‌سازی کامل پروژه AI',
      description: 'از طراحی تا اجرایی‌سازی، همه مراحل پروژه هوش مصنوعی توسط تیم خبره پیگیری می‌شود.',
      benefits: ['پشتیبانی کامل', 'تیم متخصص', 'کیفیت تضمینی']
    },
    {
      icon: Workflow,
      title: 'اتوماسیون هوشمند فرایندها',
      description: 'شناسایی و اتوماسیون فرایندهای قابل بهبود با هوش مصنوعی و یادگیری ماشین.',
      benefits: ['افزایش بهره‌وری', 'کاهش هزینه‌ها', 'سرعت بالاتر']
    },
    {
      icon: Users,
      title: 'آموزش و انتقال دانش',
      description: 'ارائه آموزش، مستندات و انتقال دانش هوش مصنوعی به تیم شما جهت بهره‌گیری بهینه.',
      benefits: ['آموزش عملی', 'مستندات کامل', 'پشتیبانی مداوم']
    }
  ];

  const benefits = [
    'افزایش بهره‌وری و کاهش هزینه‌های عملیاتی',
    'کسب مزیت رقابتی با پیاده‌سازی راهکارهای روز AI',
    'رفع موانع رشد و شتاب گرفتن فرآیندهای کسب‌وکار',
    'حفظ امنیت داده‌ها و طراحی سیستم مقیاس‌پذیر'
  ];

  const services = [
    {
      title: 'مشاوره استراتژیک AI',
      description: 'تدوین استراتژی هوش مصنوعی متناسب با اهداف کسب‌وکار شما',
      icon: Target,
      features: ['تحلیل SWOT', 'نقشه راه AI', 'برنامه عملیاتی', 'ارزیابی ریسک']
    },
    {
      title: 'پیاده‌سازی راهکارهای AI',
      description: 'اجرای عملی راهکارهای هوش مصنوعی در سازمان شما',
      icon: Zap,
      features: ['آماده‌سازی داده‌ها', 'آموزش مدل‌ها', 'تست و ارزیابی', 'راه‌اندازی عملیاتی']
    },
    {
      title: 'بهینه‌سازی فرایندها',
      description: 'شناسایی و اتوماسیون فرایندهای کلیدی با فناوری AI',
      icon: TrendingUp,
      features: ['تحلیل فرایندها', 'طراحی اتوماسیون', 'پیاده‌سازی', 'مانیتورینگ مداوم']
    },
    {
      title: 'امنیت و رعایت حریم خصوصی',
      description: 'طراحی سیستم‌های AI امن با رعایت کامل استاندارهای حریم خصوصی',
      icon: Shield,
      features: ['امنیت داده‌ها', 'رعایت GDPR', 'رمزگذاری', 'کنترل دسترسی']
    }
  ];

  const stats = [
    { metric: '۳۰۰%', label: 'افزایش بهره‌وری', color: 'text-green-600' },
    { metric: '۶۰%', label: 'کاهش هزینه‌ها', color: 'text-blue-600' },
    { metric: '۸۵%', label: 'رضایت مشتریان', color: 'text-purple-600' },
    { metric: '۲۵۰+', label: 'پروژه موفق', color: 'text-orange-600' }
  ];

  const processSteps = [
    {
      step: '۱',
      title: 'نیازسنجی و تحلیل',
      desc: 'بررسی جامع نیازهای سازمان و پتانسیل‌های استفاده از AI'
    },
    {
      step: '۲',
      title: 'طراحی راهکار',
      desc: 'تدوین استراتژی و طراحی معماری سیستم هوش مصنوعی'
    },
    {
      step: '۳',
      title: 'توسعه و پیاده‌سازی',
      desc: 'توسعه مدل‌های AI و پیاده‌سازی راهکارهای پیشنهادی'
    },
    {
      step: '۴',
      title: 'تست و ارزیابی',
      desc: 'آزمایش سیستم، ارزیابی عملکرد و بهینه‌سازی'
    },
    {
      step: '۵',
      title: 'آموزش و پشتیبانی',
      desc: 'آموزش تیم و ارائه خدمات پشتیبانی مداوم'
    }
  ];

  const faqs = [
    {
      question: 'چه حوزه‌هایی مشاوره هوش مصنوعی ارائه می‌شود؟',
      answer: 'در حوزه‌های سئو، مارکتینگ، اتوماسیون کسب‌وکار، تحلیل داده، چت‌بات، پردازش تصویر، تشخیص تصویر، پیش‌بینی داده‌ها و بسیاری زمینه‌های دیگر خدمات مشاوره ارائه می‌شود.'
    },
    {
      question: 'آیا از صفر تا صد پروژه انجام می‌شود؟',
      answer: 'بله، از نیازسنجی اولیه تا پیاده‌سازی نهایی و آموزش تیم، همه مراحل توسط کارشناسان متخصص ما دنبال می‌شود.'
    },
    {
      question: 'آیا پروژه مقیاس‌پذیر و ایمن خواهد بود؟',
      answer: 'همه راهکارها با رعایت اصول امنیت داده، حریم خصوصی و قابلیت توسعه در آینده ارائه می‌گردد.'
    },
    {
      question: 'چقدر طول می‌کشد تا نتایج را ببینیم؟',
      answer: 'بسته به پیچیدگی پروژه، معمولاً بین ۲ تا ۶ ماه زمان نیاز است تا سیستم کاملاً پیاده‌سازی و نتایج قابل مشاهده باشد.'
    },
    {
      question: 'آیا آموزش و پشتیبانی ارائه می‌شود؟',
      answer: 'بله، علاوه بر آموزش کامل تیم، خدمات پشتیبانی فنی مداوم نیز ارائه می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                مشاوران متخصص هوش مصنوعی
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                مشاوره و پیاده‌سازی <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                با مشاوره تخصصی تیم عصر سئو، ایده‌ها و پتانسیل‌های هوش مصنوعی را به خدمت رشد کسب‌وکار خود بگیرید. از تحلیل نیاز تا اجرا و آموزش کامل کنار شما هستیم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  مشاوره رایگان
                </Button>
                <Button variant="outline" size="lg">
                  نمونه کارها
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-green-50 to-blue-50">
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
                    <Award className="h-6 w-6 text-gray-400 mx-auto mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات مشاوره <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مجموعه کاملی از خدمات هوش مصنوعی برای توسعه و بهبود کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <service.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قابلیت‌های <span className="gradient-text">مشاوره AI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                چرا عصر سئو را برای مشاوره هوش مصنوعی انتخاب کنید؟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-indigo-600" />
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

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مزایای مشاوره <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس از پیاده‌سازی راهکارهای هوش مصنوعی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-indigo-600" />
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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">مشاوره و پیاده‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام ما برای پیاده‌سازی موفق هوش مصنوعی
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-700">
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
                پاسخ به رایج‌ترین سوالات درباره مشاوره هوش مصنوعی
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
              آماده تحول دیجیتال سازمانتان هستید؟
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با مشاوره متخصصین هوش مصنوعی عصر سئو، از پتانسیل‌های نامحدود AI برای رشد کسب‌وکار خود استفاده کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                شروع مشاوره
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                صحبت با کارشناسان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
