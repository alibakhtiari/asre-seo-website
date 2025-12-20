import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Megaphone, BarChart3, Users, Layers, Link2, Target, TrendingUp, DollarSign, PieChart, Flag, CheckCircle, Award, Globe, Smartphone } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'کمپین‌های تبلیغاتی ترکیبی | تبلیغات یکپارچه چندکاناله | عصر سئو',
  description: 'کمپین‌های تبلیغاتی ترکیبی و یکپارچه. افزایش ۴۰۰% آگاهی برند با استراتژی بازاریابی چندکاناله و هماهنگ سوشال مدیا، گوگل ادز و ایمیل مارکتینگ.',
  keywords: 'کمپین ترکیبی, تبلیغات یکپارچه, Integrated Marketing, بازاریابی چندکاناله, تبلیغات ترکیبی',
  alternates: {
    canonical: 'https://asreseo.com/services/marketing/integrated-campaigns',
  },
  openGraph: {
    title: 'کمپین‌های تبلیغاتی ترکیبی | عصر سئو',
    description: 'استراتژی‌های تبلیغاتی یکپارچه در چندین کانال برای حداکثر تأثیر و بازگشت سرمایه بالا.',
    type: 'website',
    url: 'https://asreseo.com/services/marketing/integrated-campaigns',
    images: [
      {
        url: '/og-integrated-campaigns.jpg',
        width: 1200,
        height: 630,
        alt: 'کمپین‌های تبلیغاتی ترکیبی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کمپین‌های تبلیغاتی ترکیبی | عصر سئو',
    description: 'کمپین‌های یکپارچه برای حداکثر تأثیر بازاریابی.',
    images: ['/og-integrated-campaigns.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'کمپین‌های تبلیغاتی ترکیبی',
  'description': 'طراحی و اجرای کمپین‌های تبلیغاتی ترکیبی و یکپارچه در چندین کانال بازاریابی',
  'serviceType': 'Integrated Marketing Campaigns',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات کمپین‌های یکپارچه',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'کمپین چندکاناله',
          'description': 'طراحی کمپین‌های تبلیغاتی هماهنگ در چندین بستر'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'کمپین‌های یکپارچه چه مزایایی دارند؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'افزایش آگاهی برند، بهینه‌سازی هزینه‌ها و یکپارچگی پیام در تمامی کانال‌ها.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه کانال‌هایی پوشش داده می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'شامل شبکه‌های اجتماعی، گوگل ادز، ایمیل مارکتینگ، وب‌سایت و سایر بسترهای دیجیتال.'
        }
      }
    ]
  }
}

export default function IntegratedCampaignsPage() {
  const marketingChannels = [
    {
      name: 'سوشال مدیا',
      description: 'مدیریت حضور در اینستاگرام، لینکدین، توئیتر، یوتیوب',
      platforms: ['Instagram', 'LinkedIn', 'Twitter', 'YouTube'],
      icon: Globe,
      color: 'blue'
    },
    {
      name: 'گوگل ادز',
      description: 'کمپین‌های جستجو، نمایش و شاپینگ گوگل',
      platforms: ['Search Ads', 'Display Ads', 'Shopping Ads'],
      icon: Target,
      color: 'green'
    },
    {
      name: 'ایمیل مارکتینگ',
      description: 'کمپین‌های ایمیلی شخصی‌سازی شده و اتوماسیون',
      platforms: ['Welcome Emails', 'Promotions', 'Nurturing'],
      icon: Megaphone,
      color: 'purple'
    },
    {
      name: 'وب‌سایت',
      description: 'بهینه‌سازی تجربه کاربری و تبدیل بازدیدکننده به مشتری',
      platforms: ['Landing Pages', 'CTAs', 'SEO'],
      icon: Globe,
      color: 'cyan'
    }
  ];

  const campaignObjectives = [
    'افزایش آگاهی از برند و شناخت محصول',
    'جذب ترافیک هدفمند به وب‌سایت',
    'افزایش فروش و تعداد مشتریان',
    'ساخت جامعه客户 وفادار و فعال',
    'ایجاد لیست مخاطبان و خبرنامه',
    'ترویج محصول یا خدمات جدید'
  ];

  const benefits = [
    'افزایش موثر آگاهی از برند در سطح بازار',
    'بهینه‌سازی هزینه‌های تبلیغاتی تا ۵۰%',
    'افزایش هم‌افزایی پیام و یکپارچگی برند',
    'امکان سنجش دقیق تاثیر هر کانال تبلیغاتی',
    'بازدهی بهتر با هماهنگی کانال‌های مختلف',
    'تجربه مشتری یکپارچه در تمامی نقطه تماس‌ها'
  ];

  const stats = [
    { metric: '۴۰۰%', label: 'افزایش آگاهی برند', color: 'text-green-600', icon: Target },
    { metric: '۶۰%', label: 'کاهش هزینه بازاریابی', color: 'text-blue-600', icon: DollarSign },
    { metric: '۸+', label: 'کانال تبلیغاتی', color: 'text-purple-600', icon: Layers },
    { metric: '۱۰۰%', label: 'گزارش دقیق عملکرد', color: 'text-orange-600', icon: BarChart3 }
  ];

  const features = [
    {
      icon: Megaphone,
      title: 'پوشش چند کانال تبلیغاتی',
      description: 'هماهنگی و اجرای کمپین در سوشال مدیا، گوگل ادز، ایمیل و بیش از 10 بستر تبلیغاتی.',
      benefits: ['کنترل کامل پوشش', 'رسیدن به حداکثر مخاطب', 'افزایش تأثیرگذاری']
    },
    {
      icon: BarChart3,
      title: 'گزارش‌دهی و آنالیز یکپارچه',
      description: 'تحلیل عملکرد تمام کانال‌ها و ارائه دیدگاه کلی برای تصمیم‌گیری بهتر.',
      benefits: ['دیدگاه جامع عملکرد', 'تصمیم‌گیری داده‌محور', 'بهینه‌سازی مداوم']
    },
    {
      icon: Users,
      title: 'هدفمندی بر اساس رفتار مشتری',
      description: 'استفاده از داده‌های مشتریان و تقسیم‌بندی برای نهایت بازده.',
      benefits: ['سگمنتاسیون دقیق', 'بازدهی بالاتر', 'شخصی‌سازی تجربه']
    },
    {
      icon: Link2,
      title: 'یکپارچگی پیام برند',
      description: 'تمام پیام‌ها و تبلیغات در کانال‌های مختلف، با یک صدای واحد و همسو با اهداف برند.',
      benefits: ['تجربۀ برند یکپارچه', 'تقویت شناخت برند', 'افزایش اعتماد مشتری']
    }
  ];

  const processSteps = [
    {
      step: '۱',
      title: 'تحقیق و استراتژی',
      desc: 'بررسی بازار، مخاطب هدف، رقبا و تعیین استراتژی کمپین یکپارچه'
    },
    {
      step: '۲',
      title: 'تعیین اهداف و KPIها',
      desc: 'تعریف اهداف قابل اندازه‌گیری و شاخص‌های کلیدی عملکرد کمپین'
    },
    {
      step: '۳',
      title: 'طراحی کمپین',
      desc: 'طراحی استراتژی محتوای یکپارچه برای تمامی کانال‌های تبلیغاتی'
    },
    {
      step: '۴',
      title: 'پیاده‌سازی همزمان',
      desc: 'اجرای همزمان کمپین در تمامی کانال‌های انتخاب شده'
    },
    {
      step: '۵',
      title: 'مانیتورینگ و تست',
      desc: 'پایش مداوم عملکرد و تست A/B برای بهینه‌سازی کمپین'
    },
    {
      step: '۶',
      title: 'گزارش‌گیری و بهینه‌سازی',
      desc: 'ارائه گزارش جامع و استراتژی‌های بهینه‌سازی برای کمپین‌های آتی'
    }
  ];

  const campaignTypes = [
    {
      title: 'کمپین گسترش برند',
      description: 'افزایش آگاهی و شناخت برند در بازار هدف',
      examples: ['کمپین‌های معرفی محصول', 'کمپین‌های اعتبار برندي', 'کمپین‌های آموزشی']
    },
    {
      title: 'کمپین فروش مستقیم',
      description: 'تحریک فوری مشتریان به خرید محصول یا خدمات',
      examples: ['کمپین‌های تخفیف', 'کمپین‌های فصلی', 'کمپین‌های اورژانسی']
    },
    {
      title: 'کمپین جذب مشتریان',
      description: 'افزایش تعداد مشتریان جدید و پایگاه داده',
      examples: ['کمپین‌های ثبت‌نام', 'کمپین‌های آزمون رایگان', 'کمپین‌های جذب مشتری']
    },
    {
      title: 'کمپین تعامل مشتری',
      description: 'تقویت ارتباط با مشتریان فعلی و افزایش وفاداری',
      examples: ['کمپین‌های تعطیلات', 'کمپین‌های قدردانی', 'کمپین‌های اطلاع‌رسانی']
    }
  ];

  const faqs = [
    {
      question: 'منظور از کمپین یکپارچه چیست؟',
      answer: 'برنامه‌ریزی و اجرای همزمان تبلیغات در چند بستر بصورت هماهنگ و همسو برای دستیابی به بیشترین بازدهی و تأثیرگذاری. تمامی پیام‌ها با یکدیگر هماهنگ هستند.'
    },
    {
      question: 'آیا کمپین من طبق هدف‌گذاری اجرا می‌شود؟',
      answer: 'بله، همه مراحل کمپین براساس اهداف و KPIهای اختصاصی شما پیاده‌سازی می‌شود. هر کمپین دارای اهداف مشخص و قابل اندازه‌گیری است.'
    },
    {
      question: 'گزارش عملکرد چطور ارائه می‌شود؟',
      answer: 'گزارشات جامعی پیرامون بازدهی تک‌تک کانال‌ها و جمع کل ارائه می‌شود. شامل نمودارهای کاربردی و تحلیل‌های استراتژیک برای تصمیم‌گیری بهتر.'
    },
    {
      question: 'چه تعداد کانال تبلیغاتی پوشش می‌دهد؟',
      answer: 'بسته به استراتژی شما، از ۳ تا ۱۲ کانال مختلف پوشش داده می‌شود. ما بر اساس بودجه و اهداف شما بهترین ترکیب کانال‌ها را انتخاب می‌کنیم.'
    },
    {
      question: 'چقدر زمان برای اجرای کمپین نیاز است؟',
      answer: 'بسته به اندازه کمپین، معمولاً بین ۲ هفته تا ۳ ماه زمان نیاز است. کمپین‌های کوچک‌تر سریع‌تر راه‌اندازی می‌شوند.'
    },
    {
      question: 'آیا امکان تغییر استراتژی در حین کمپین وجود دارد؟',
      answer: 'بله، ما کمپین را پایش مداوم می‌کنیم و بر اساس داده‌ها استراتژی را تعدیل می‌کنیم. انعطاف‌پذیری از ویژگی‌های کمپین‌های یکپارچه است.'
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
        <section className="section-padding bg-linear-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                بازاریابی یکپارچه و چندکاناله
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                کمپین‌های تبلیغاتی <span className="gradient-text">ترکیبی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                استراتژی‌های تبلیغاتی یکپارچه در چندین کانال برای حداکثر تأثیرگذاری. افزایش آگاهی برند تا ۴۰۰% با کمپین‌های هماهنگ سوشال مدیا، گوگل ادز و ایمیل مارکتینگ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع کمپین یکپارچه
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره استراتژیک
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
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

        {/* Marketing Channels Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                کانال‌های بازاریابی <span className="gradient-text">پوشش داده شده</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش کامل فضای دیجیتال با هماهنگی استراتژیک در تمامی کانال‌ها
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {marketingChannels.map((channel, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-${channel.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${channel.color}-200 transition-colors`}>
                        <channel.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{channel.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{channel.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {channel.platforms.map((platform, platformIndex) => (
                        <Badge key={platformIndex} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
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
                قابلیت‌های کمپین‌های <span className="gradient-text">یکپارچه</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                چرا کمپین‌های ترکیبی عصر سئو بهتر از کمپین‌های تک‌کاناله هستند؟
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

        {/* Campaign Objectives */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                اهداف کمپین‌های <span className="gradient-text">یکپارچه</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                کمپین‌های تحت نیاز کسب‌وکار شما برای دستیابی به اهداف بازاریابی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {campaignObjectives.map((objective, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {objective}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع کمپین‌های <span className="gradient-text">یکپارچه</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استراتژی‌های کمپین متناسب با اهداف بازاریابی شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {campaignTypes.map((campaign, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <p className="text-gray-600">{campaign.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-900">نمونه کمپین‌ها:</h4>
                      {campaign.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
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

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مزایای کمپین‌های تبلیغاتی <span className="gradient-text">ترکیبی</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس بازاریابی چندکاناله در رشد فراگیر برند شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-indigo-600" />
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
        <section className="section-padding bg-linear-to-br from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند اجرای کمپین‌های <span className="gradient-text">یکپارچه</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۶ مرحله‌ای برای موفقیت کمپین‌های چندکاناله
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
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
                پاسخ به رایج‌ترین سوالات درباره کمپین‌های تبلیغاتی ترکیبی
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
              برند خود را در سراسر فضای دیجیتال قدرتمند کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با کمپین‌های تبلیغاتی یکپارچه، به تمام مشتریان هدف خود دسترسی پیدا کنید. استراتژی بازاریابی چندکاناله برای حداکثر تأثیرگذاری و بازگشت سرمایه بالا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                شروع کمپین یکپارچه
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                استراتژی بازاریابی رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
