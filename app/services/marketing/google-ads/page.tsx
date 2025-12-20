import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Target, TrendingUp, BarChart3, Users, Clock, Trophy, DollarSign, Search, ShoppingCart, Eye, Zap, CheckCircle, Settings, Megaphone } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'تبلیغات گوگل ادز | Google Ads حرفه‌ای PPC | عصر سئو',
  description: 'خدمات تبلیغات گوگل ادز با هدف جذب سریع مشتری و افزایش نرخ تبدیل. راهکارهای بهینه و مدیریت کامل بودجه تبلیغاتی با متخصصین عصر سئو.',
  keywords: 'گوگل ادز, تبلیغات گوگل, Google Ads, PPC, تبلیغات کلیکی, تبلیغات گوگل ادز',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/google-ads',
  },
  openGraph: {
    title: 'تبلیغات گوگل ادز | Google Ads حرفه‌ای | عصر سئو',
    description: 'کمپین‌های تبلیغاتی هوشمند در گوگل برای جذب مشتری و افزایش فروش با نرخ تبدیل بالا.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/google-ads',
    images: [
      {
        url: '/og-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'تبلیغات گوگل ادز حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تبلیغات گوگل ادز | عصر سئو',
    description: 'کمپین‌های تبلیغاتی هوشمند در گوگل برای جذب مشتری.',
    images: ['/og-google-ads.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'تبلیغات گوگل ادز',
  'description': 'خدمات تبلیغات گوگل ادز شامل کمپین‌های تبلیغاتی، مدیریت بودجه و بهینه‌سازی نرخ تبدیل',
  'serviceType': 'Pay-Per-Click Advertising',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تبلیغات گوگل ادز',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'کمپین تبلیغات کلیکی',
          'description': 'طراحی و اجرای کمپین‌های Google Ads بهینه'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'مدیریت بودجه تبلیغاتی',
          'description': 'نظارت و کنترل بودجه تبلیغاتی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'هزینه تبلیغات گوگل ادز چقدر است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'هزینه‌های بر اساس کلیک (PPC) بوده و هر کلیک تا کیلویی ۱۰۰۰ تومان بسته به حوزه دارد. بودجه روزانه را خودتان کنترل می‌کنید.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه مدت طول می‌کشد تا نتایج کمپین را ببینم؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'کمپین معمولاً ظرف چند ساعت اولین نتایج را نشان می‌دهد، اما نتایج کامل در طی ۲-۴ هفته با بهینه‌سازی‌های پی در پی حاصل می‌شود.'
        }
      }
    ]
  }
}

export default function GoogleAdsPage() {
  const campaignTypes = [
    {
      title: 'جستجوی گوگل',
      description: 'تبلیغات در نتایج جستجوی گوگل با کلمات کلیدی مرتبط',
      icon: Search,
      benefits: ['هدفمندی بالا', 'نرخ تبدیل بالاتر', 'ایمنی برند']
    },
    {
      title: 'شبکه نمایش',
      description: 'تبلیغات در شبکه وب‌سایت‌های گوگل با میلیون‌ها بازدیدکننده',
      icon: Eye,
      benefits: ['دامنه گسترده', 'قابل مشاهده بودن', 'بهینه‌سازی خودکار']
    },
    {
      title: 'شاپینگ گوگل',
      description: 'تبلیغات محصولات فروشگاه آنلاین با تصاویر و قیمت‌ها',
      icon: ShoppingCart,
      benefits: ['فروش مستقیم', 'اطلاعات محصول', 'امتیاز SEO']
    },
    {
      title: 'ویدیو یوتیوب',
      description: 'تبلیغات ویدئویی در یوتیوب با بالاترین نرخ تعامل',
      icon: Megaphone,
      benefits: ['محتوای جذاب', 'ارتباط عاطفی', 'بازچوانی مجدد برند']
    }
  ];

  const targetingOptions = [
    'تارگتینگ جغرافیایی - نمایش تبلیغ فقط در شهر‌ها یا مناطق مورد نظر',
    'تارگتینگ جمعیتی - نمایش بر اساس سن، جنس و سطح تحصیلات',
    'تارگتینگ رفتاری - نمایش بر اساس علایق و رفتارهای آنلاین کاربر',
    'تارگتینگ retargeting - نمایش مجدد تبلیغ به کسانی که سایت شما را دیده‌اند',
    'تارگتینگ دستگاهی - نمایش در موبایل یا دسکتاپ بر اساس رفتار کاربران'
  ];

  const benefits = [
    'جذب مشتری با کمترین هزینه و بیشترین بازدهی',
    'کنترل کامل بر بودجه تبلیغاتی روزانه/ماهانه',
    'مشاوره و اجرای کمپین متناسب با کسب‌وکار شما',
    'مدیریت حرفه‌ای و به‌روزرسانی کلیدواژه‌ها',
    'صرفه‌جویی در زمان با ابزارهای اتوماسیون',
    'گزارش‌دهی شفاف و آنلاین از عملکرد کمپین‌ها',
    'شروع تبلیغات فقط پس از گرفتن تأیید نهایی شما',
    'تیم پشتیبانی فنی ۲۴ ساعته برای مدیریت کمپین'
  ];

  const results = [
    { metric: '۳۲۰%', label: 'افزایش فروش', icon: TrendingUp },
    { metric: '۶۵%', label: 'کاهش هزینه جذب مشتری', icon: DollarSign },
    { metric: '۴۵۰+', label: 'کمپین موفق اجرا شده', icon: Trophy },
    { metric: '۲۴/۷', label: 'پشتیبانی فنی', icon: Users }
  ];

  const features = [
    {
      icon: Target,
      title: 'تارگت دقیق مخاطبان',
      description: 'مخاطبان شما را با دقت بی‌نظیر و براساس علایق، موقعیت و هدف کسب‌وکارتان انتخاب می‌کنیم.',
      benefits: ['دقت بالا', 'بازدهی بهتر', 'هزینه کمتر']
    },
    {
      icon: TrendingUp,
      title: 'بهینه‌سازی مداوم',
      description: 'بودجه و کمپین‌ها را روزانه رصد و برای بهترین بازده، دائماً بهینه می‌نماییم.',
      benefits: ['بهبود پیوسته', 'بازدهی حداکثری', 'بررسی روزانه']
    },
    {
      icon: BarChart3,
      title: 'گزارش‌دهی شفاف',
      description: 'شفافیت کامل؛ دسترسی به گزارش‌های آنلاین و تحلیل عملکرد کمپین‌ها.',
      benefits: ['شفافیت کامل', 'گزارش آنلاین', 'تحلیل حرفه‌ای']
    },
    {
      icon: Users,
      title: 'افزایش نرخ تبدیل',
      description: 'طراحی لندینگ و متن تبلیغ به صورت حرفه‌ای برای بیشترین تبدیل و جذب مشتری.',
      benefits: ['تبلیغ جذاب', 'نرخ تبدیل بالا', 'جذب مشتری بیشتر']
    }
  ];

  const processSteps = [
    {
      step: '۱',
      title: 'تحقیق و استراتژی',
      desc: 'بررسی کلمات کلیدی، مخاطب هدف و رقبا برای تعیین استراتژی تبلیغاتی'
    },
    {
      step: '۲',
      title: 'راه‌اندازی کمپین',
      desc: 'ایجاد حساب گوگل ادز و تنظیم کمپین‌های تبلیغاتی با پارامترهای بهینه'
    },
    {
      step: '۳',
      title: 'تارگتینگ و بودجه',
      desc: 'پیکربندی گروه‌های هدف، تعیین بودجه روزانه و تنظیم تبلیغات'
    },
    {
      step: '۴',
      title: 'نظارت و بهینه‌سازی',
      desc: 'گزارش‌دهی روزانه و بهینه‌سازی کمپین بر اساس عملکرد و نرخ تبدیل'
    },
    {
      step: '۵',
      title: 'گزارش‌گیری و گسترش',
      desc: 'ارائه گزارش نهایی و برنامه‌ریزی برای گسترش کمپین‌های موفق'
    }
  ];

  const faqs = [
    {
      question: 'آیا بودجه روزانه من قابل کنترل است؟',
      answer: 'بله، می‌توانید حداقل و حداکثر بودجه را تعریف کرده و هیچ‌گاه بیش از آن هزینه نکنید. حساب گوگل ادز شما در کنترل کامل شماست.'
    },
    {
      question: 'چه مدت زمان می‌برد تا نتایج را ببینم؟',
      answer: 'معمولاً ظرف چند ساعت از فعال‌سازی کمپین، اولین بازخوردها دریافت می‌شود. اما نتایج کامل با بهینه‌سازی در طی ۲ تا ۴ هفته مشاهده می‌شود.'
    },
    {
      question: 'گزارش عملکرد کمپین چطور ارسال می‌شود؟',
      answer: 'هر هفته گزارش کامل به صورت PDF ارسال می‌شود و دسترسی آنلاین به داشبورد کمپین برای مشاهده آمار لحظه‌ای خواهید داشت.'
    },
    {
      question: 'آیا نیاز به داشتن حساب گوگل ادز دارم؟',
      answer: 'خیر، ما حساب حرفه‌ای گوگل ادز را راه‌اندازی و مدیریت می‌کنیم. شما فقط بودجه تبلیغاتی را تأمین خواهید کرد.'
    },
    {
      question: 'چه گارانتی برای بازگشت سرمایه دارید؟',
      answer: 'پرداخت بر اساس عملکرد (performance-based) است و در صورتی که نتیجه دلخواه حاصل نشود، بخشی از هزینه بازگردانده خواهد شد.'
    },
    {
      question: 'آیا کمپین را در موبایل هم نمایش می‌دهیم؟',
      answer: 'بله، کمپین‌های ما در دسکتاپ و موبایل بهینه می‌شوند و تنظیمات خاصی برای دستگاه‌های مختلف اعمال خواهد شد.'
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
        <section className="section-padding bg-linear-to-br from-red-50 to-orange-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-red-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-orange-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-red-100 text-red-700 mb-4 px-4 py-1 text-sm border-red-200">
                  تبلیغات گوگل ادز حرفه‌ای
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  تبلیغات <span className="gradient-text">گوگل ادز</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  کمپین‌های تبلیغاتی هوشمند و مؤثر در گوگل برای جذب مشتری و افزایش فروش. کاهش هزینه جذب مشتری تا ۶۵% با استراتژی‌های پیشرفته PPC.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                    شروع کمپین تبلیغاتی
                  </Button>
                  <Button variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50">
                    مشاوره رایگان
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-red-600/10 to-transparent z-10" />
                <Image
                  src="/images/marketing-google-ads-hero.png"
                  alt="تبلیغات گوگل ادز حرفه‌ای"
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
        <section className="section-padding bg-linear-to-r from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <result.icon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-700 mb-2">
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

        {/* Campaign Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">کمپین‌های گوگل ادز</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                کمپین‌های متنوع برای پوشش تمام نیازهای تبلیغاتی کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {campaignTypes.map((campaign, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <campaign.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{campaign.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{campaign.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {campaign.benefits.map((benefit, benefitIndex) => (
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

        {/* Features Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قابلیت‌های <span className="gradient-text">گوگل ادز ما</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                چرا کمپین‌های گوگل ادز عصر سئو نتیجه‌بخش‌تر هستند؟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-red-600" />
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

        {/* Targeting Options */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                امکانات <span className="gradient-text">تارگتینگ پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نمایش تبلیغات فقط به مخاطبان هدف و حذف مشتریان غیرضروری
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {targetingOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {option}
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
                مزایای تبلیغات گوگل ادز با <span className="gradient-text">عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس تبلیغات گوگل ادز در رشد سریع کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Trophy className="h-5 w-5 text-red-600" />
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
        <section className="section-padding bg-linear-to-br from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند راه‌اندازی <span className="gradient-text">کمپین گوگل ادز</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۵ مرحله‌ای راه‌اندازی کمپین‌های تبلیغاتی موفق
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold text-red-700">
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
                پاسخ به رایج‌ترین سوالات درباره تبلیغات گوگل ادز
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
              کمپین تبلیغاتی خود را همین امروز شروع کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تبلیغات گوگل ادز حرفه‌ای، مشتریان جدید را سریع‌تر جذب کنید و فروش خود را چندین برابر کنید. راه‌اندازی رایگان کمپین از امروز!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                راه‌اندازی کمپین
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                تحلیل رایگان رقبا
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
