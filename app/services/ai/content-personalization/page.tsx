import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Sparkles, HeartHandshake, Target, BadgeCheck, Brain, TrendingUp, Users, CheckCircle, Zap, Palette, BarChart3, ArrowRight } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'شخصی‌سازی محتوا با هوش مصنوعی | AI Content Personalization Services',
  description: 'شخصی‌سازی هوشمند محتوا با هوش مصنوعی برای وب‌سایت‌ها. نمایش محتوای هدفمند، پیشنهادهای شخصی‌سازی شده، افزایش نرخ تبدیل و وفاداری مشتریان.',
  keywords: 'شخصی‌سازی محتوا, هوش مصنوعی, Personalization, محتوای هدفمند, تجربه کاربری, نرخ تبدیل',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/content-personalization',
  },
  openGraph: {
    title: 'شخصی‌سازی محتوا با هوش مصنوعی | عصر سئو',
    description: 'ارائه تجربه منحصر به فرد با محتوای شخصی‌سازی شده برای هر کاربر با استفاده از هوش مصنوعی.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/content-personalization',
    images: [
      {
        url: '/og-content-personalization.jpg',
        width: 1200,
        height: 630,
        alt: 'شخصی‌سازی محتوا با هوش مصنوعی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شخصی‌سازی محتوا با هوش مصنوعی | عصر سئو',
    description: 'شخصی‌سازی هوشمند محتوا برای بهبود تجربه کاربری و نرخ تبدیل.',
    images: ['/og-content-personalization.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'شخصی‌سازی محتوا با هوش مصنوعی',
  'description': 'شخصی‌سازی هوشمند محتوا با استفاده از هوش مصنوعی برای نمایش محتوای هدفمند به کاربران',
  'serviceType': 'AI Content Personalization',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات شخصی‌سازی محتوا',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'شخصی‌سازی تجربه کاربری',
          'description': 'نمایش محتوای منحصربه‌فرد برای هر کاربر'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'پیشنهاد هوشمند محصول',
          'description': 'پیشنهاد محصولات مرتبط بر اساس رفتار کاربر'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'آیا امکان شخصی‌سازی برای هر کاربر وجود دارد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، برای هر کاربر براساس داده‌های رفتاری، پروفایل اختصاصی و محتوای منحصربه‌فرد نمایش داده می‌شود.'
        }
      },
      {
        '@type': 'Question',
        'name': 'می‌توان پیشنهاد محصولات را هوشمند کرد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'کاملاً، سیستم ما براساس علایق و سوابق کاربر، محصولات و مطالب مرتبط را پیشنهاد می‌کند.'
        }
      }
    ]
  }
}

export default function ContentPersonalizationPage() {
  const features = [
    {
      icon: User,
      title: 'شخصی‌سازی تجربه کاربری',
      description: 'هر کاربر، محتوای منحصربه‌فرد بر اساس علایق، رفتار و سوابق خود مشاهده می‌کند.',
      benefits: ['تجربه منحصربه‌فرد', 'تعامل بیشتر', 'رضایت بالاتر']
    },
    {
      icon: Sparkles,
      title: 'افزایش نرخ تعامل',
      description: 'نمایش پیشنهادات و مطالب مرتبط باعث افزایش مدت حضور و تعامل کاربران می‌شود.',
      benefits: ['نرخ تعامل بالاتر', 'کاهش پرش', 'تمرکز بهتر']
    },
    {
      icon: HeartHandshake,
      title: 'وفادارسازی مشتری',
      description: 'ایجاد حس ارزشمندی، افزایش نرخ بازگشت و وفاداری به برند با محتوای شخصی‌سازی شده.',
      benefits: ['وفاداری بیشتر', 'بازگشت مکرر', 'وفاداری برند']
    },
    {
      icon: Target,
      title: 'دقت در هدف‌گیری کمپین‌ها',
      description: 'کمپین‌ها و CTAها متناسب با شخصیت و نیاز هر کاربر، به شکل هوشمند نمایش داده می‌شود.',
      benefits: ['تبدیل بالاتر', 'هدف‌گیری دقیق', 'کمپین موثرتر']
    }
  ];

  const personalizationTypes = [
    {
      name: 'محتوای وب‌سایت',
      description: 'شخصی‌سازی صفحات هتل، کپی تبلیغاتی و تصاویر بر اساس ترجیحات بازدیدکنندگان',
      icon: Palette,
      features: 'لایه‌ها، تصاویر، متون بسته به رفتار کاربر'
    },
    {
      name: 'پیشنهاد محصولات',
      description: 'نمایش کالاهای مرتبط و محبوب بین کاربران مشابه',
      icon: Sparkles,
      features: 'پیشنهاد زمان حال، پیشنهادی و محصول جایگزین'
    },
    {
      name: 'کمپین‌های ایمیل',
      description: 'ارسال ایمیل‌های هدفمند بر اساس فعالیات کاربر',
      icon: TrendingUp,
      features: 'آمارکتینگ، شیوه‌نامه، محتوای شخصی'
    },
    {
      name: 'ایمیل‌های تراکنشی',
      description: 'شخصی‌سازی ایمیل فاکتور، تحویل کالا و پیگیری سفارش',
      icon: Users,
      features: 'انتظارات ایمیل، اسکریپت ایمیل، زمان ارسال'
    }
  ];

  const benefits = [
    'افزایش ۴ برابر نرخ تبدیل با پیشنهادات هدفمند',
    'کاهش ۶۰ درصدی نرخ پرش وب‌سایت',
    'افزایش ۲۵ درصدی درآمد به ازای هر مشتری',
    'شخصی‌سازی بدون نیاز به نیروی انسانی',
    'افزایش میانگین سبد خرید با پیشنهادات هوشمند',
    'بهبود تجربه کاربری و رضایت مشتری'
  ];

  const technologies = [
    'ماشین لرنینگ برای تحلیل رفتار کاربر',
    'تشخیص الگوهای رفتاری با هوش مصنوعی',
    'پیش‌بینی سلیقه‌ها با الگوریتم‌های پیشرفته',
    'تحلیل داده‌های بلادرنگ برای شخصی‌سازی زمان‌دار',
    'یکپارچه‌سازی با سیستم‌های CRM و تحلیل داده',
    'گزارش‌دهی پیشرفته از عملکرد شخصی‌سازی'
  ];

  const stats = [
    { metric: '۴x', label: 'افزایش نرخ تبدیل', color: 'text-blue-600' },
    { metric: '۶۰%', label: 'کاهش نرخ پرش', color: 'text-green-600' },
    { metric: '۹۵%', label: 'دقت شخصی‌سازی', color: 'text-purple-600' },
    { metric: '۱۰۰۰+', label: 'روز داده آموزشی', color: 'text-orange-600' }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'جمع‌آوری داده‌ها',
      desc: 'تحلیل رفتار کاربران موجود و شناساندن الگوهای رفتاری'
    },
    {
      step: '۲',
      title: 'آموزش مدل AI',
      desc: 'آموزش مدل دسته‌بندی کاربر با استفاده از یادگیری ماشین'
    },
    {
      step: '۳',
      title: 'پیاده‌سازی',
      desc: 'مجازی‌سازی شخصی‌سازی روی صفحات اصلی و محصول'
    },
    {
      step: '۴',
      title: 'بهینه‌سازی',
      desc: 'آزمایش‌های A/B و بهینه‌سازی برای بهترین نرخ تبدیل'
    },
    {
      step: '۵',
      title: 'پایش و بهبود',
      desc: 'مانیتورینگ مداوم عملکرد و بهبود پیوسته الگوریتم‌ها'
    }
  ];

  const faqs = [
    {
      question: 'آیا امکان شخصی‌سازی برای هر کاربر وجود دارد؟',
      answer: 'بله، برای هر کاربر براساس داده‌های رفتاری، پروفایل اختصاصی و محتوای منحصربه‌فرد نمایش داده می‌شود. هر بازدیدکننده تجربه‌ای منحصر به فرد خواهد داشت.'
    },
    {
      question: 'می‌توان پیشنهاد محصولات را هوشمند کرد؟',
      answer: 'کاملاً، سیستم ما براساس علایق و سوابق کاربر، محصولات و مطالب مرتبط را پیشنهاد می‌کند و نرخ تبدیل را به طور قابل توجهی افزایش می‌دهد.'
    },
    {
      question: 'پیاده‌سازی روی چه پلتفرم‌هایی ممکن است؟',
      answer: 'امکان اجرا روی وب‌سایت، فروشگاه اینترنتی، اپلیکیشن‌های موبایل و حتی پلتفرم‌های شبکه‌های اجتماعی شما وجود دارد.'
    },
    {
      question: 'چه مدت طول می‌کشد تا شخصی‌سازی موثر شود؟',
      answer: 'معمولاً بین ۴ تا ۸ هفته زمان نیاز است تا سیستم کاملاً آموزش دیده و شخصی‌سازی برای بهترین نتایج تنظیم شود.'
    },
    {
      question: 'آیا حفظ حریم خصوصی در نظر گرفته شده؟',
      answer: 'بله، تمام داده‌ها با رعایت قوانین حفظ حریم خصوصی و GDPR نگهداری و پردازش می‌شود. هیچ اطلاعات شخصی بدون رضایت کاربر استفاده نخواهد شد.'
    },
    {
      question: 'می‌توان شخصی‌سازی را برای کمپین‌های بازاریابی استفاده کرد؟',
      answer: 'کاملاً، سیستم شخصی‌سازی امکان هدف‌گیری بسیار دقیق‌تر در کمپین‌های بازاریابی را فراهم می‌کند و باعث افزایش چشمگیر نرخ پاسخگویی می‌شود.'
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 mb-4">
                تجربه منحصربه‌فرد برای هر کاربر
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                شخصی‌سازی محتوا با <span className="gradient-text">هوش مصنوعی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                نمایش هوشمند محتوای هدفمند و پیشنهادات شخصی‌سازی شده برای هر کاربر، باعث افزایش تعامل، وفاداری و نرخ تبدیل شما می‌شود.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع شخصی‌سازی محتوا
                </Button>
                <Button variant="outline" size="lg">
                  مشاهده نمونه‌ها
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-pink-50 to-purple-50">
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

        {/* Personalization Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">شخصی‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                طیف کاملی از شخصی‌سازی‌ها برای تجربه کاربری بی‌نظیر
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {personalizationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <type.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{type.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{type.description}</p>
                    <p className="text-sm text-gray-500">{type.features}</p>
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
                قابلیت‌های <span className="gradient-text">شخصی‌سازی هوشمند</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ابزارهای پیشرفته برای تجربه کاربری منحصربه‌فرد
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

        {/* Technologies Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                فناوری‌های <span className="gradient-text">پیشرفته شخصی‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                از پیشرفته‌ترین تکنولوژی‌های AI برای شخصی‌سازی دقیق استفاده می‌کنیم
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {tech}
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
                مزایای شخصی‌سازی محتوا با <span className="gradient-text">هوش مصنوعی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس شخصی‌سازی هوشمند در کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-purple-600" />
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
                فرآیند <span className="gradient-text">شخصی‌سازی محتوای</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی پیاده‌سازی شخصی‌سازی هوشمند
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
                پاسخ به رایج‌ترین سوالات درباره شخصی‌سازی هوشمند محتوا
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
              تجربه منحصربه‌فرد برای مشتریان خود ایجاد کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با شخصی‌سازی هوشمند محتوا، نرخ تبدیل خود را ۴ برابر کنید و تجربه کاربری بی‌نظیری به مشتریان خود ارائه دهید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                شروع شخصی‌سازی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
