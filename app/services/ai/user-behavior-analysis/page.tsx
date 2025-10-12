import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, MousePointer, Brain, BarChart, Users, Target, TrendingUp, Zap, CheckCircle, Activity, Clock, Settings } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'تحلیل رفتار کاربران با هوش مصنوعی | AI User Behavior Analysis',
  description: 'تحلیل رفتار کاربران با هوش مصنوعی. نقشه حرارتی، پیش‌بینی رفتار، تحلیل مسیر تبدیل. بهبود UX و نرخ تبدیل تا ۵۰۰%.',
  keywords: 'تحلیل رفتار کاربران, هوش مصنوعی, User Behavior Analysis, نقشه حرارتی, پیش‌بینی رفتار',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/user-behavior-analysis',
  },
  openGraph: {
    title: 'تحلیل رفتار کاربران با هوش مصنوعی | عصر سئو',
    description: 'درک عمیق رفتار کاربران برای بهینه‌سازی تجربه و افزایش تبدیل با تحلیل هوشمند.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/user-behavior-analysis',
    images: [
      {
        url: '/og-user-behavior.jpg',
        width: 1200,
        height: 630,
        alt: 'تحلیل رفتار کاربران با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تحلیل رفتار کاربران با هوش مصنوعی | عصر سئو',
    description: 'تحلیل هوشمند رفتار کاربران برای بهبود تجربه کاربری و نرخ تبدیل.',
    images: ['/og-user-behavior.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'تحلیل رفتار کاربران با هوش مصنوعی',
  'description': 'تحلیل رفتار کاربران با هوش مصنوعی شامل نقشه حرارتی، پیش‌بینی رفتار و تحلیل مسیر تبدیل',
  'serviceType': 'AI User Behavior Analysis',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تحلیل رفتار کاربران',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'نقشه حرارتی هوشمند',
          'description': 'تحلیل دقیق نقاط کلیک و حرکت کاربران'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'پیش‌بینی رفتار کاربر',
          'description': 'استفاده از AI برای پیش‌بینی احتمال خرید'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'تحلیل رفتار کاربران چه نتایجی به دنبال دارد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'شناسایی نقاط ضعف UX، بهبود نرخ تبدیل و شخصی‌سازی تجربه کاربری.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه داده‌هایی تحلیل می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'نقاط کلیک، حرکت موس، اسکرول، زمان حضور و مسیر حرکت کاربران در سایت.'
        }
      }
    ]
  }
}

export default function UserBehaviorAnalysisPage() {
  const analysisFeatures = [
    {
      icon: Eye,
      title: 'نقشه حرارتی هوشمند',
      description: 'تحلیل دقیق نقاط کلیک، حرکت موس و زمان توقف کاربران با استفاده از الگوریتم‌های پیشرفته.',
      benefits: ['درک نقاط توجه', 'شناسایی مشکلات UX', 'بهینه‌سازی طراحی']
    },
    {
      icon: MousePointer,
      title: 'ردیابی مسیر کاربر',
      description: 'بررسی مسیر حرکت کاربران در سایت، نقاط ورود و خروج آنها.',
      benefits: ['درک مسیر خرید', 'شناسایی نقاط ریزش', 'بهبود نرخ تبدیل']
    },
    {
      icon: Brain,
      title: 'پیش‌بینی رفتار',
      description: 'استفاده از هوش مصنوعی برای پیش‌بینی احتمال خرید و رفتار آینده کاربران.',
      benefits: ['پیش‌بینی دقیق', 'شخصی‌سازی تجربه', 'افزایش رضایت مشتری']
    },
    {
      icon: BarChart,
      title: 'تحلیل فانل تبدیل',
      description: 'شناسایی نقاط ضعف در مسیر تبدیل بازدیدکننده به مشتری.',
      benefits: ['شناسایی مشکلات', 'ایجاد مسیر بهینه', 'افزایش نرخ تبدیل']
    },
    {
      icon: Users,
      title: 'بخش‌بندی هوشمند',
      description: 'دسته‌بندی خودکار کاربران بر اساس الگوهای رفتاری و ویژگی‌های مشابه.',
      benefits: ['دسته‌بندی دقیق', 'هدف‌گیری بهتر', 'شخصی‌سازی گروهی']
    },
    {
      icon: Target,
      title: 'شخصی‌سازی تجربه',
      description: 'ارائه محتوا و پیشنهادات شخصی‌سازی شده بر اساس رفتار هر کاربر.',
      benefits: ['تجربه منحصربه‌فرد', 'تعامل بالاتر', 'رضایت مشتری بیشتر']
    }
  ];

  const insights = [
    {
      title: 'شناسایی نقاط ضعف UX',
      description: 'تشخیص عناصری که باعث ترک صفحه کاربران می‌شود و باعث بهبود تجربه کاربری گردد.',
      percentage: '۸۵%',
      improvement: 'شناسایی مشکلات',
      color: 'text-red-600',
      icon: Activity
    },
    {
      title: 'بهینه‌سازی نرخ تبدیل',
      description: 'افزایش تبدیل از طریق درک بهتر رفتار کاربران و رفع موانع موجود.',
      percentage: '۶۰%',
      improvement: 'افزایش نرخ تبدیل',
      color: 'text-green-600',
      icon: TrendingUp
    },
    {
      title: 'کاهش نرخ خروج',
      description: 'شناسایی و رفع دلایل ترک زودهنگام کاربران از صفحات وب‌سایت.',
      percentage: '۴۵%',
      improvement: 'کاهش نرخ پرش',
      color: 'text-blue-600',
      icon: Users
    },
    {
      title: 'افزایش زمان حضور',
      description: 'بهبود محتوا و طراحی برای نگه‌داشتن کاربران در وب‌سایت.',
      percentage: '۷۰%',
      improvement: 'افزایش تعامل',
      color: 'text-purple-600',
      icon: Clock
    }
  ];

  const tools = [
    {
      name: 'Google Analytics 4',
      description: 'آنالیز پیشرفته رفتار کاربران و مسیر تبدیل',
      icon: BarChart
    },
    {
      name: 'Hotjar Heatmaps',
      description: 'نقشه‌های حرارتی و ضبط سشن‌های کاربر',
      icon: Eye
    },
    {
      name: 'Microsoft Clarity',
      description: 'ردیابی حرکت موس و زمان نگاه کردن',
      icon: MousePointer
    },
    {
      name: 'Mixpanel',
      description: 'تحلیل پیشرفته رفتار کاربران و سنجش A/B',
      icon: TrendingUp
    },
    {
      name: 'Amplitude',
      description: 'پیش‌بینی رفتار کاربران با الگوریتم‌های ML',
      icon: Brain
    },
    {
      name: 'Custom AI Models',
      description: 'مدل‌های یادگیری ماشین اختصاصی برای تحلیل',
      icon: Settings
    }
  ];

  const benefits = [
    'شناسایی ۸۵% نقاط ضعف تجربه کاربری',
    'افزایش ۶۰% نرخ تبدیل صفحات وب‌سایت',
    'کاهش ۴۵% نرخ خروج زودهنگام',
    'افزایش ۷۰% زمان حضور کاربران',
    'شخصی‌سازی تجربه بر اساس رفتار واقعی',
    'پیش‌بینی نیازها با هوش مصنوعی'
  ];

  const stats = [
    { metric: '۵۰۰%', label: 'افزایش نرخ تبدیل', color: 'text-green-600' },
    { metric: '۹۵%', label: 'دقت پیش‌بینی', color: 'text-blue-600' },
    { metric: '۲۴/۷', label: 'مانیتورینگ مداوم', color: 'text-purple-600' },
    { metric: '۱۰۰۰+', label: 'سشن تحلیل شده', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'نصب ابزارهای تحلیل',
      desc: 'راه‌اندازی و تنظیم ابزارهای تحلیل رفتار کاربران روی وب‌سایت'
    },
    {
      step: '۲',
      title: 'جمع‌آوری داده‌ها',
      desc: 'شروع جمع‌آوری داده‌های رفتاری و ایجاد نمونه آماری مناسب'
    },
    {
      step: '۳',
      title: 'تحلیل داده‌ها',
      desc: 'پردازش و تحلیل داده‌ها با استفاده از الگوریتم‌های یادگیری ماشین'
    },
    {
      step: '۴',
      title: 'استخراج بینش‌ها',
      desc: 'شناسایی الگوهای رفتاری و نقاط بهبود تجربه کاربری'
    },
    {
      step: '۵',
      title: 'پیاده‌سازی بهبودها',
      desc: ' اعمال تغییرات بر اساس تحلیل‌ها و ارزیابی نتایج'
    }
  ];

  const faqs = [
    {
      question: 'تحلیل رفتار کاربران چه نتایجی به دنبال دارد؟',
      answer: 'شناسایی نقاط ضعف UX، بهبود نرخ تبدیل تا ۶۰%، کاهش نرخ خروج تا ۴۵%، شخصی‌سازی تجربه کاربری و پیش‌بینی رفتار مشتریان.'
    },
    {
      question: 'چه داده‌هایی تحلیل می‌شود؟',
      answer: 'نقاط کلیک، حرکت موس، اسکرول، زمان حضور، مسیر حرکت کاربران، صفحات ورودی و خروجی، و دستگاه‌های مورد استفاده را تحلیل می‌کنیم.'
    },
    {
      question: 'مدیریت حریم خصوصی چطور حفظ می‌شود؟',
      answer: 'تمام داده‌ها به صورت ناشناس پردازش می‌شوند و از پروتکل‌های امنیتی پیشرفته استفاده می‌کنیم. هیچ اطلاعات شخصی قابل شناسایی نیست.'
    },
    {
      question: 'چه مدت طول می‌کشد تا نتایج تحلیل آماده شوند؟',
      answer: 'بسته به میزان ترافیک وب‌سایت، معمولاً بین ۱ تا ۴ هفته زمان نیاز است تا داده‌های کافی برای تحلیل معنادار جمع‌آوری شود.'
    },
    {
      question: 'آیا نیاز به نصب کد روی وب‌سایت هست؟',
      answer: 'بله، برای برخی ابزارها نیاز به نصب کد رهگیری هست، اما ما تمامی مراحل نصب و تنظیم را انجام می‌دهیم.'
    },
    {
      question: 'گزارش‌ها چگونه ارائه می‌شود؟',
      answer: 'گزارش‌ها شامل نقشه‌های حرارتی، نمودارها، توصیه‌های بهینه‌سازی و داشبوردهای مدیریتی ارائه می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 mb-4">
                درک عمیق رفتار کاربران
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                تحلیل رفتار کاربران با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                درک عمیق رفتار کاربران برای بهینه‌سازی تجربه کاربری، بهبود نرخ تبدیل و افزایش رضایت مشتری با ابزارهای هوشمند AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع تحلیل رفتار
                </Button>
                <Button variant="outline" size="lg">
                  مشاهده نقشه حرارتی نمونه
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
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

        {/* Analysis Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ابزارهای <span className="gradient-text">تحلیل هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تکنولوژی‌های پیشرفته AI برای درک عمیق رفتار کاربران وب‌سایت شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analysisFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
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

        {/* Insights Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                نتایج <span className="gradient-text">قابل اندازه‌گیری</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                بهبودهای قابل توجه در عملکرد وب‌سایت از طریق تحلیل رفتار کاربران
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {insights.map((insight, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <insight.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{insight.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-3">{insight.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">
                          {insight.improvement}
                        </span>
                      </div>
                      <div className={`text-3xl font-bold ${insight.color}`}>
                        {insight.percentage}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ابزارهای <span className="gradient-text">تحلیل پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استفاده از بهترین ابزارهای تحلیل رفتار کاربران در صنعت
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-0 bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <tool.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-lg">{tool.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مزایای تحلیل رفتار با <span className="gradient-text">AI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس تحلیل هوشمند رفتار کاربران در بهبود کسب‌وکار
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
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">تحلیل رفتار کاربران</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام برای شروع تحلیل هوشمند رفتار کاربران
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
                پاسخ به رایج‌ترین سوالات درباره تحلیل رفتار کاربران با AI
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
              کاربران خود را بهتر درک کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تحلیل هوشمند رفتار کاربران، نقاط قوت و ضعف وب‌سایت خود را شناسایی کنید و نرخ تبدیل را تا ۵۰۰% افزایش دهید. درک کاربران قدرت رقابتی است!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                شروع تحلیل رفتار
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاهده نقشه حرارتی نمونه
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
