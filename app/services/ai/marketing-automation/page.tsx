import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Mail, Users, Target, BarChart3, Bot, Clock, TrendingUp, CheckCircle, Settings, Megaphone, Workflow } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'اتوماسیون بازاریابی با هوش مصنوعی | AI Marketing Automation',
  description: 'اتوماسیون بازاریابی هوشمند با AI. ایمیل مارکتینگ خودکار، پرورش سرنخ، چت‌بات‌های هوشمند. افزایش ۳۰۰% نرخ تبدیل.',
  keywords: 'اتوماسیون بازاریابی, هوش مصنوعی, AI Marketing, Marketing Automation, ایمیل مارکتینگ',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/marketing-automation',
  },
  openGraph: {
    title: 'اتوماسیون بازاریابی با هوش مصنوعی | عصر سئو',
    description: 'خودکارسازی هوشمند فرایندهای بازاریابی برای افزایش کارایی و فروش با استفاده از هوش مصنوعی.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/marketing-automation',
    images: [
      {
        url: '/og-marketing-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'اتوماسیون بازاریابی با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اتوماسیون بازاریابی با هوش مصنوعی | عصر سئو',
    description: 'خودکارسازی فرایندهای بازاریابی با هوش مصنوعی برای حداکثر کارایی.',
    images: ['/og-marketing-automation.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'اتوماسیون بازاریابی با هوش مصنوعی',
  'description': 'اتوماسیون فرایندهای بازاریابی با هوش مصنوعی شامل ایمیل‌های خودکار و چت‌بات‌های هوشمند',
  'serviceType': 'AI Marketing Automation',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات اتوماسیون بازاریابی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'ایمیل مارکتینگ هوشمند',
          'description': 'ارسال خودکار ایمیل‌های شخصی‌سازی شده'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'پرورش سرنخ‌های هوشمند',
          'description': 'تبدیل بازدیدکنندگان به مشتریان'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'اتوماسیون بازاریابی چه نتایجی به دنبال دارد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'افزایش نرخ تبدیل سرنخ‌ها، کاهش زمان فعالیت‌های بازاریاتی، بهبود کیفیت ارتباطات با مشتریان.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه مدت طول می‌کشد تا سیستم راه‌اندازی شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'معمولاً بین ۲ تا ۴ هفته برای پیاده‌سازی کامل سیستم اتوماسیون بازاریابی زمان نیاز است.'
        }
      }
    ]
  }
}

export default function MarketingAutomationPage() {
  const automationFeatures = [
    {
      icon: Mail,
      title: 'ایمیل مارکتینگ هوشمند',
      description: 'ارسال خودکار ایمیل‌های شخصی‌سازی شده بر اساس رفتار کاربران و تعاملات آن‌ها.',
      benefits: ['شخصی‌سازی محتوا', 'زمان‌بندی هوشمند', 'بازخورد خودکار']
    },
    {
      icon: Users,
      title: 'پرورش سرنخ‌ها',
      description: 'تبدیل خودکار بازدیدکنندگان به مشتریان از طریق کمپین‌های هدفمند و آموزشی.',
      benefits: ['نرخ تبدیل بالاتر', 'آموزش سیستماتیک', 'پیگیری هوشمند']
    },
    {
      icon: Bot,
      title: 'چت‌بات‌های هوشمند',
      description: 'پاسخگویی ۲۴ساعته و هدایت مشتریان در مسیر خرید با کمک چت‌بات‌های AI.',
      benefits: ['پشتیبانی ۲۴/۷', 'پاسخ فوری', 'جمع‌آوری داده‌ها']
    },
    {
      icon: Target,
      title: 'تارگتینگ پیشرفته',
      description: 'شناسایی و هدف‌گیری دقیق مخاطبان بر اساس داده‌های رفتاری و ترجیحات شخصی.',
      benefits: ['هدف‌گیری دقیق‌تر', 'بازده بالاتر', 'بهبود ROI']
    },
    {
      icon: BarChart3,
      title: 'تحلیل و بهینه‌سازی',
      description: 'بررسی مداوم عملکرد و بهینه‌سازی خودکار کمپین‌ها با یادگیری ماشین.',
      benefits: ['بهبود پیوسته', 'پیش‌بینی دقیق', 'بهینه‌سازی خودکار']
    },
    {
      icon: Clock,
      title: 'برنامه‌ریزی محتوا',
      description: 'انتشار خودکار محتوا در زمان‌های بهینه برای حداکثر تأثیرگذاری و تعامل.',
      benefits: ['زمان‌بندی مناسب', 'رسیدن به حداکثر مخاطب', 'تعامل بهتر']
    }
  ];

  const marketingChannels = [
    {
      name: 'ایمیل مارکتینگ',
      description: 'کمپین‌های ایمیل خودکار و شخصی‌سازی شده',
      icon: Mail,
      features: 'Newsletter، Welcome Emails، Trigger Emails'
    },
    {
      name: 'شبکه‌های اجتماعی',
      description: 'مدیریت و اتوماسیون پست‌های اجتماعی',
      icon: Users,
      features: 'Scheduling، Analytics، Auto-responses'
    },
    {
      name: 'وب‌سایت و CRM',
      description: 'ادغام با سیستم‌های مدیریت مشتری',
      icon: Target,
      features: 'Lead Scoring، Behavior Tracking، Segmentation'
    },
    {
      name: 'SMS مارکتینگ',
      description: 'ارسال پیام‌های متنی خودکار',
      icon: Bot,
      features: 'Transactional، Promotional، Reminders'
    }
  ];

  const benefits = [
    'افزایش ۵۰% در نرخ تبدیل سرنخ‌ها',
    'کاهش ۷۰% زمان صرف شده در فعالیت‌های تکراری',
    'افزایش ۴۰% در نرخ بازگشت مشتریان',
    'کاهش ۶۰% هزینه‌های بازاریابی',
    'افزایش ۸۰% در کیفیت سرنخ‌ها',
    'گزارش‌دهی خودکار و لحظه‌ای'
  ];

  const aiCapabilities = [
    'یادگیری ماشین برای تحلیل رفتار مشتریان',
    'پیش‌بینی احتمال خرید با الگوریتم‌های پیشرفته',
    'شخصی‌سازی محتوای مبتنی بر داده‌های رفتاری',
    'اتوماسیون کمپین‌های مارکتینگ در زمان مناسب',
    'A/B Testing خودکار برای بهبود عملکرد',
    'تحلیل سنتیمنت مشتریان در شبکه‌های اجتماعی'
  ];

  const stats = [
    { metric: '۳۰۰%', label: 'افزایش نرخ تبدیل', color: 'text-green-600' },
    { metric: '۷۰%', label: 'کاهش هزینه‌ها', color: 'text-blue-600' },
    { metric: '۲۴/۷', label: 'آماده به کار', color: 'text-purple-600' },
    { metric: '۱۰۰۰+', label: 'کمپین موفق', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'استراتژی و برنامه‌ریزی',
      desc: 'تحلیل فرایندهای فعلی و طراحی استراتژی اتوماسیون بازاریابی'
    },
    {
      step: '۲',
      title: 'راه‌اندازی و ادغام',
      desc: 'پیاده‌سازی ابزارهای اتوماسیون و اتصال به سیستم‌های موجود'
    },
    {
      step: '۳',
      title: 'ساخت کمپین‌ها',
      desc: 'طراحی و پیاده‌سازی کمپین‌های بازاریابی خودکار'
    },
    {
      step: '۴',
      title: 'نظارت و بهینه‌سازی',
      desc: 'پایش عملکرد، تحلیل داده‌ها و بهبود پیوسته سیستم'
    },
    {
      step: '۵',
      title: 'گزارش‌دهی و رشد',
      desc: 'ارائه گزارش‌های مدیریتی و برنامه‌ریزی برای رشد بیشتر'
    }
  ];

  const faqs = [
    {
      question: 'اتوماسیون بازاریابی چه نتایجی به دنبال دارد؟',
      answer: 'افزایش نرخ تبدیل سرنخ‌ها تا ۵۰%، کاهش زمان فعالیت‌های بازاریاتی تا ۷۰%، بهبود کیفیت سرنخ‌ها و افزایش فروش.'
    },
    {
      question: 'چه مدت طول می‌کشد تا سیستم راه‌اندازی شود؟',
      answer: 'معمولاً بین ۲ تا ۴ هفته برای پیاده‌سازی کامل سیستم اتوماسیون بازاریابی زمان نیاز است، بسته به پیچیدگی نیازها.'
    },
    {
      question: 'آیا نیاز به نیروی انسانی برای مدیریت سیستم هست؟',
      answer: 'در ابتدای راه‌اندازی نیاز به تنظیمات اولیه هست، اما بعد از راه‌اندازی سیستم به صورت خودکار کار می‌کند و نیاز به نظارت کمتری دارد.'
    },
    {
      question: 'هزینه اتوماسیون بازاریابی چقدر است؟',
      answer: 'هزینه بستگی به اندازه سازمان و پیچیدگی نیازها دارد، اما معمولاً در کمتر از ۶ ماه با افزایش فروش باز می‌گردد.'
    },
    {
      question: 'آیا سیستم با ابزارهای بازاریابی موجود سازگار است؟',
      answer: 'بله، سیستم ما قابلیت ادغام با ابزارهای محبوب مارکتینگ مثل Mailchimp، HubSpot، Salesforce و غیره را دارد.'
    },
    {
      question: 'چه پشتیبانی ارائه می‌شود؟',
      answer: 'پشتیبانی کامل شامل آموزش تیم، پشتیبانی فنی و مشاوره استراتژیک مداوم ارائه می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-orange-100 text-orange-700 mb-4">
                اتوماسیون هوشمند بازاریابی
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                اتوماسیون بازاریابی با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                خودکارسازی هوشمند فرایندهای بازاریابی با هوش مصنوعی برای افزایش کارایی، بهبود نرخ تبدیل و کاهش هزینه‌های بازاریابی تا ۷۰%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع اتوماسیون بازاریابی
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-red-50 to-orange-50">
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

        {/* Marketing Channels Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                کانال‌های <span className="gradient-text">بازاریابی تحت پوشش</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اتوماسیون کامل تمامی کانال‌های بازاریابی برای حداکثر تأثیرگذاری
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {marketingChannels.map((channel, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <channel.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{channel.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{channel.description}</p>
                    <p className="text-sm text-gray-500">{channel.features}</p>
                  </CardHeader>
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
                قابلیت‌های <span className="gradient-text">اتوماسیون هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته اتوماسیون که فرایندهای بازاریابی شما را بهینه می‌کنند
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-orange-600" />
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

        {/* AI Capabilities Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                فناوری‌های <span className="gradient-text">AI در اتوماسیون</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استفاده از پیشرفته‌ترین تکنولوژی‌های هوش مصنوعی برای هوشمندسازی بازاریابی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {capability}
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
                مزایای اتوماسیون بازاریابی با <span className="gradient-text">AI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس اتوماسیون هوشمند در بهبود عملکرد بازاریابی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
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
        <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">پیاده‌سازی اتوماسیون</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام برای استقرار اتوماسیون بازاریابی هوشمند
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-700">
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
                پاسخ به رایج‌ترین سوالات درباره اتوماسیون بازاریابی با هوش مصنوعی
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
              بازاریابی خود را همین امروز هوشمند کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با اتوماسیون بازاریابی هوش مصنوعی، فرایندهای مارکتینگ خود را بهینه‌سازی کنید و نرخ تبدیل را تا ۳۰۰% افزایش دهید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                شروع اتوماسیون
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره استراتژیک رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
