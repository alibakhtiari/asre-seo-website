import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, BarChart3, Users, Megaphone, Send, Clock, Target, TrendingUp, Award, CheckCircle, Zap, Filter, Eye } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'بازاریابی ایمیلی حرفه‌ای | Email Marketing | افزایش فروش ۵۰۰% | عصر سئو',
  description: 'کمپین‌های حرفه‌ای ایمیل مارکتینگ با اتوماسیون، شخصی‌سازی، A/B Testing و افزایش نرخ تبدیل تا ۵۰۰%. تحلیل لحظه‌ای و گزارش کامل عملکرد.',
  keywords: 'بازاریابی ایمیلی, ایمیل مارکتینگ, Email Marketing, Newsletter, اتوماسیون ایمیل, شخصی‌سازی',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/email-marketing',
  },
  openGraph: {
    title: 'بازاریابی ایمیلی حرفه‌ای | عصر سئو',
    description: 'کمپین‌های ایمیل مارکتینگ هدفمند و اتوماسیون برای افزایش فروش.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/email-marketing',
    images: [
      {
        url: '/og-email-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'بازاریابی ایمیلی حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بازاریابی ایمیلی | عصر سئو',
    description: 'کمپین‌های ایمیل مارکتینگ برای افزایش فروش.',
    images: ['/og-email-marketing.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'بازاریابی ایمیلی',
  'description': 'خدمات حرفه‌ای بازاریابی ایمیلی شامل اتوماسیون، شخصی‌سازی و تحلیل عملکرد',
  'serviceType': 'Email Marketing',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات بازاریابی ایمیلی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'اتوماسیون ایمیل',
          'description': 'سیستم ارسال زمان‌بندی شده خودکار'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تحلیل عملکرد',
          'description': 'گزارش دقیق نرخ باز شدن و کلیک'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'آیا ایمیل‌ها اسپم نمی‌شوند؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ارسال بر اساس قوانین جهانی صورت می‌گیرد.'
        }
      },
      {
        '@type': 'Question',
        'name': 'نرخ تبدیل ایمیل‌های تبلیغاتی چقدر است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '۴۲% از کمپین‌های موفق نرخ بالای ۵% دارند.'
        }
      }
    ]
  }
}

export default function EmailMarketingPage() {
  const features = [
    {
      icon: Send,
      title: 'اتوماسیون ایمیل کامل',
      description: 'سیستم ارسال خودکار و زمان‌بندی شده با Workflow هوشمند برای کمپین‌های مختلف بازاریابی.',
      benefits: ['ارسال زودهنگام', 'پیام‌رسانی مداوم', 'بازدهی بالا']
    },
    {
      icon: Users,
      title: 'تقسیم‌بندی پیشرفته مخاطبان',
      description: 'دسته‌بندی هوشمند مشتریان بر اساس رفتار، علایق و مرحله خرید در مسیر فروش.',
      benefits: ['پیام‌های هدفمند', 'نرخ تبدیل بالاتر', 'مشتریان وفادار']
    },
    {
      icon: Target,
      title: 'شخصی‌سازی هوشمند محتوا',
      description: 'ارسال محتوا بر اساس نام، تاریخ خرید، محصولات مورد علاقه و رفتار مرور.',
      benefits: ['تعامل بالاتر', 'فروش بیشتر', 'تجربه شخصی']
    },
    {
      icon: BarChart3,
      title: 'تحلیل و گزارش‌دهی لحظه‌ای',
      description: 'داشبورد پیشرفته با آمار کامل باز شدن، کلیک، کلیک‌های منحصربه‌فرد و نرخ تبدیل.',
      benefits: ['اطلاعات لحظه‌ای', 'تصمیم‌گیری آگاهانه', 'بهینه‌سازی دائمی']
    },
    {
      icon: Clock,
      title: 'زمان‌بندی هوشمند ارسال',
      description: 'انتخاب بهترین زمان ارسال بر اساس آنالیز رفتار مخاطبان و نرخ باز شدن بالاتر.',
      benefits: ['بازدهی حداکثری', 'مشارکت بالاتر', 'نتایج بهتر']
    },
    {
      icon: Filter,
      title: 'A/B Testing پیشرفته',
      description: 'تست همزمان بر خط موضوع، محتوا، زمان ارسال و CTA برای بهترین نتیجه.',
      benefits: ['بهینه‌سازی مداوم', 'نتایج ثابت شده', 'بازدهی بالاتر']
    }
  ];

  const campaignTypes = [
    {
      type: 'کمپین‌های خوش‌آمدگویی',
      description: 'خوش‌آمدگویی جدید مشتریان و ارائه پیشنهادات ویژه',
      target: 'مشتریان جدید',
      goal: '+۲۵۰% نرخ بازگشایی'
    },
    {
      type: 'کمپین‌های وفاداری',
      description: 'یادآوری سرویس‌ها، محصولات تکمیلی و پیشنهادات ویژه',
      target: 'مشتریان فعلی',
      goal: '+۱۸۰% نرخ کلیک'
    },
    {
      type: 'کمپین‌های فروش ویژه',
      description: 'معرفی تخفیف‌های زمان‌دار و فروش‌های فصلی',
      target: 'تمام مخاطبان',
      goal: '+۴۰۰% نرخ تبدیل'
    },
    {
      type: 'کمپین‌های آموزشی',
      description: 'ارائه دانش تخصصی و راهنمای استفاده از محصولات',
      target: 'مشتریان علاقه‌مند',
      goal: '+۳۲۰% نرخ ماندگاری'
    }
  ];

  const benefits = [
    'نرخ بازگشایی بالا با خطوط موضوع جذاب و شخصی‌سازی شده',
    '۶۰% افزایش نرخ کلیک با CTAهای استراتژیک و طراحی‌های جذاب',
    '３۵% کاهش bounce rate با تقسیم‌بندی دقیق مخاطبان',
    '۲۸% بهبود نرخ تبدیل با اتوماسیون workflows هوشمند',
    '۲۴/۷ ارتباط مداوم با مشتریان از طریق کمپین‌های drip marketing'
  ];

  const stats = [
    { metric: '۴۲%', label: 'نرخ باز شدن', color: 'text-green-600', icon: Eye },
    { metric: '۸.۶%', label: 'نرخ کلیک', color: 'text-blue-600', icon: Target },
    { metric: '۴.۲%', label: 'نرخ تبدیل', color: 'text-purple-600', icon: TrendingUp },
    { metric: '۵۰۰%', label: 'ROI بالاتر', color: 'text-red-600', icon: Award }
  ];

  const workflowSteps = [
    {
      step: 'بررسی و استراتژی',
      desc: 'تحلیل مخاطبان، اهداف تجاری و طراحی استراتژی ایمیل مارکتینگ'
    },
    {
      step: 'طراحی کمپین',
      desc: 'ساخت تمپلیت‌های جذاب، کپی‌رایتینگ قوی و تنظیم اتوماسیون'
    },
    {
      step: 'تست و ارسال آزمایشی',
      desc: 'A/B Testing وسیع و اطمینان از عدم ورود به اسپم'
    },
    {
      step: 'راه‌اندازی و نظارت',
      desc: 'شروع کمپین، پایش عملکرد و بهینه‌سازی لحظه‌ای'
    },
    {
      step: 'تحلیل و گزارش',
      desc: 'ارزیابی نتایج جامع و ارائه استراتژی‌های بهبود برای کمپین بعدی'
    }
  ];

  const faqs = [
    {
      question: 'آیا ایمیل‌ها وارد inbox می‌شوند یا اسپم؟',
      answer: '۱۰۰% اطمینان داریم که ایمیل‌ها وارد inbox می‌شوند. از اطلاعات ارسال‌کننده معتبر و IPهای سفید استفاده می‌کنیم و تمامی پروتکل‌های ضدスパم را رعایت می‌کنیم. نرخ ورود به اسپم کمتر از ۰.۱% است.'
    },
    {
      question: 'چطور نرخ تبدیل ایمیل مارکتینگ را اندازه‌گیری می‌کنم؟',
      answer: 'انتهای تمامی لینک‌ها کد پیگیری داریم که کلیک، خرید و مبدا هر ایمیل را دقیقاً ثبت می‌کند. داشبورد پیشرفته با نمودارها و آمار دقیق نرخ تبدیل در اختیارتان قرار می‌دهیم.'
    },
    {
      question: 'امکان شخصی‌سازی چقدر گسترده است؟',
      answer: 'هر قسمت ایمیل قابل شخصی‌سازی است: سلام، محصولات پیشنهاد، تصاویر، تخفیف‌ها، حتی رنگ‌ها و فونت‌ها. اطلاعات دقیق از سابقه خرید، علایق و رفتار کاربر در دسترس است.'
    },
    {
      question: 'کمپین‌های ایمیلی چقدر طول می‌کشند؟',
      answer: 'کمپین‌های معمولی ۴-۶ هفته آماده‌سازی نیاز دارند، اما آماده‌سازی اولیه با لیست مخاطبان موجود همان روز ممکن است. کمپین‌های پیچیده اتوماسیون ۸-۱۰ هفته زمان نیاز دارند.'
    },
    {
      question: 'آیا پشتیبانی فنی و استراتژیک دارید؟',
      answer: '۲۴/۷ پشتیبانی فنی برای ارسال و پشتیبانی استراتژیک برای بهبود کمپین‌ها ارائه می‌دهیم. متخصصین با تجربه ۵+ سال در کنار شما هستند.'
    },
    {
      question: 'چطور هزینه ایمیل مارکتینگ را محاسبه می‌کنید؟',
      answer: 'بر اساس تعداد مخاطبان، تعداد ارسال ماهانه، پیچیدگی اتوماسیون و سفارشی‌سازی حساب می‌شود. بسته‌های اقتصادی از ۵۰۰ هزار تومان شروع می‌شود.'
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
                بازاریابی ایمیلی پیشرفته
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                بازاریابی <span className="gradient-text">ایمیلی حرفه‌ای</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                کمپین‌های ایمیل مارکتینگ هوشمند با اتوماسیون، شخصی‌سازی و افزایش ۵۰۰% نرخ فروش. عصر سئو با تکنولوژی روز دنیا مخاطبان شما را به مشتریان وفادار تبدیل می‌کند.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع کمپین ایمیلی
                </Button>
                <Button variant="outline" size="lg">
                  تحلیل لیست ایمیلی رایگان
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

        {/* Campaign Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">کمپین‌های ایمیلی استراتژیک</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                کمپین‌های مختلف برای اهداف بازاریابی متفاوت با نتایج ثابت شده
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {campaignTypes.map((campaign, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{campaign.type}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">هدف:</span>
                      <span className="text-purple-600 font-medium">{campaign.target}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-gray-500">نتیجه:</span>
                      <span className="text-green-600 font-medium">{campaign.goal}</span>
                    </div>
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
                تکنولوژی‌های پیشرفته <span className="gradient-text">ایمیل مارکتینگ</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                از اتوماسیون هوشمند تا شخصی‌سازی پیشرفته، تمام ابزارهای روز دنیا
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای بازاریابی <span className="gradient-text">ایمیلی حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                بازگشایی درب ارتباط مستقیم با مشتریان و افزایش درآمد پایدار
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند ساخت <span className="gradient-text">کمپین ایمیلی</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۵ مرحله‌ای برای کمپین‌هایی که واقعاً فروش می‌کنند
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl font-bold text-pink-700">
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
                پاسخ به پرسش‌های رایج مشتریان درباره بازاریابی ایمیلی
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
              مهمترین کانال فروش خود را هم اکنون فعال کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              بازاریابی ایمیلی یکی از قدرتمندترین و مقرون‌به‌صرفه‌ترین روش‌های بازاریابی دیجیتال است. عصر سئو با سیستم‌های اتوماسیون پیشرفته و تیم تخصصی، کمپین‌هایی طراحی می‌کند که فروش شما را چندین برابر می‌کنند. اولین کمپین خود را همین امروز شروع کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                شروع کمپین ایمیلی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره بازاریابی ایمیلی
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
