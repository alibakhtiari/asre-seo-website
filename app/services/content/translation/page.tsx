import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Languages, Globe, Sparkles, BadgeCheck, Target, Users, BarChart3, Award, FileText, CheckCircle, Clock, Shield } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ترجمه و بومی‌سازی محتوا | Translation Services | عصر سئو',
  description: 'خدمات کامل ترجمه و بومی‌سازی محتوا برای بازارهای جهانی. حفظ سبک برند، بهینه‌سازی سئوی چندزبانه و ورود به بازارهای جدید با مترجمین متخصص.',
  keywords: 'ترجمه, بومی‌سازی محتوا, Translation, Localization, محتوای چندزبانه, ترجمه حرفه‌ای',
  alternates: {
    canonical: 'https://asreseo.com/services/content/translation',
  },
  openGraph: {
    title: 'ترجمه و بومی‌سازی محتوا | عصر سئو',
    description: 'ترجمه دقیق و بومی‌سازی محتوا برای گسترش کسب‌وکار جهانی.',
    type: 'website',
    url: 'https://asreseo.com/services/content/translation',
    images: [
      {
        url: '/og-translation.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات ترجمه حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ترجمه و بومی‌سازی | عصر سئو',
    description: 'خدمات ترجمه تخصصی برای بازارهای جهانی.',
    images: ['/og-translation.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'ترجمه و بومی‌سازی محتوا',
  'description': 'خدمات کامل ترجمه و بومی‌سازی محتوا برای بازارهای جهانی',
  'serviceType': 'Translation and Localization',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Worldwide',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات ترجمه',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'ترجمه حرفه‌ای',
          'description': 'ترجمه تخصصی توسط مترجمین حرفه‌ای'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'بومی‌سازی',
          'description': 'انطباق فرهنگی و بازاری محتوا'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چه زبان‌هایی پوشش داده می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'انگلیسی، عربی، فرانسوی، ترکی، آلمانی و سایر زبان‌ها'
        }
      },
      {
        '@type': 'Question',
        'name': 'آیا محتوای تخصصی ترجمه می‌شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، توسط مترجمین متخصص در هر حوزه'
        }
      }
    ]
  }
}

export default function TranslationPage() {
  const languages = [
    {
      name: 'انگلیسی',
      flag: '🇺🇸',
      description: 'ترجمه تجاری، فنی و وب‌سایت',
      specialties: ['Business English', 'Technical Translation', 'Website Localization']
    },
    {
      name: 'عربی',
      flag: '🇸🇦',
      description: 'ترجمه رسمی عربی استاندارد',
      specialties: ['Modern Standard Arabic', 'Business Correspondence', 'Legal Translation']
    },
    {
      name: 'فرانسوی',
      flag: '🇫🇷',
      description: 'ترجمه ادبیات، فرهنگی و تجاری',
      specialties: ['European French', 'Canadian French', 'Technical Translation']
    },
    {
      name: 'ترکی',
      flag: '🇹🇷',
      description: 'ترجمه برای بازار ترکیه',
      specialties: ['Business Turkish', 'E-commerce Content', 'Website Translation']
    },
    {
      name: 'آلمانی',
      flag: '🇩🇪',
      description: 'ترجمه فنی و صنعتی پیشرفته',
      specialties: ['Technical German', 'Engineering Documents', 'Legal Translation']
    }
  ];

  const services = [
    {
      icon: Languages,
      title: 'ترجمه حرفه‌ای و دقیق',
      description: 'ترجمه تخصصی انواع محتوا توسط زبان‌دانان حوزه کسب‌وکار شما، با رعایت اصول نگارشی، فرهنگی و ساختار جملات بومی.',
      benefits: ['دقت بالا', 'کدنویسی فرهنگی', 'تطابق با برند']
    },
    {
      icon: Globe,
      title: 'بومی‌سازی خلاقانه',
      description: 'انطباق کامل متن با فرهنگ، بازار هدف، ارزش‌های اجتماعی و نیازمندی‌های بازاریابی محلی هر زبان.',
      benefits: ['بازدهی فرهنگی', 'ارتباط مؤثر', 'نرخ تبدیل بالاتر']
    },
    {
      icon: Sparkles,
      title: 'حفظ ساختار سئو در ترجمه',
      description: 'بهینه‌سازی متون چندزبانه برای جستجوی گوگل و الگوریتم‌های محلی با حفظ رتبه کلمات کلیدی استراتژیک.',
      benefits: ['رتبه جهانی', 'ترافیک بین‌المللی', 'بومی‌سازی فنی']
    },
    {
      icon: Shield,
      title: 'تضمین کیفیت و کنترل دو مرحله‌ای',
      description: 'مرور اولیه توسط مترجم تخصصی، سپس کنترل کیفیت توسط متخصص زبان‌شناسی برای اطمینان از کیفیت عالی.',
      benefits: ['کیفیت تضمینی', 'دقت دوگانه', 'رضایت ۱۰۰%']
    }
  ];

  const benefits = [
    'امکان ورود به بازارهای جدید ملی و بین‌المللی با مخاطبان میلیونی',
    'حفظ انسجام کامل برند در تمام زبان‌ها و بازارها',
    'افزایش رتبه سایت در نتایج جستجوی کشورهای هدف',
    'ارتباط مؤثر و ایجاد اعتماد سریع‌تر با مشتریان بین‌المللی',
    'کاهش هزینه‌های بازاریابی محلی با محتوای آماده‌سازی شده',
    'مزیت رقابتی ماندگار نسبت به رقبای محلی'
  ];

  const contentTypes = [
    {
      type: 'وب‌سایت و اپلیکیشن',
      description: 'ترجمه کامل صفحات، اپلیکیشن‌ها و رابط کاربری',
      examples: ['صفحات وب‌سایت', 'اپلیکیشن موبایل', 'پنل مدیریت'],
    },
    {
      type: 'محتوای بازاریابی',
      description: 'ترجمه کتاب‌های راهنما، کاتالوگ و متون تبلیغاتی',
      examples: ['بروشورها', 'کاتالوگ محصولات', 'کمپین‌های تبلیغاتی'],
    },
    {
      type: 'مستندات فنی',
      description: 'ترجمه اسناد، راهنماها و محتوای آموزشی',
      examples: ['راهنمای کاربری', 'مطالعات موردی', 'اسناد فنی'],
    },
    {
      type: 'محتوای حقوقی',
      description: 'ترجمه قراردادها، شرایط استفاده و اسناد قانونی',
      examples: ['شرایط خدمات', 'قراردادها', 'اسناد قانونی'],
    }
  ];

  const stats = [
    { metric: '۹۵%', label: 'کیفیت ترجمه', color: 'text-green-600', icon: Award },
    { metric: '۲۰+', label: 'زبان پشتیبان', color: 'text-blue-600', icon: Globe },
    { metric: '۳-۷ روز', label: 'زمان تحویل', color: 'text-purple-600', icon: Clock },
    { metric: '۱۰۰%', label: 'رضایت مشتریان', color: 'text-orange-600', icon: Users }
  ];

  const workflowSteps = [
    {
      step: 'ارزیابی و تحلیل',
      desc: 'بررسی محتوای پایه، زبان هدف و نیازهای فرهنگی'
    },
    {
      step: 'تخصیص مترجم تخصصی',
      desc: 'انتخاب مترجم حرفه‌ای با تخصص در حوزه محتوای شما'
    },
    {
      step: 'ترجمه اولیه و کنترل کیفیت',
      desc: 'ترجمه توسط مترجم و بررسی کیفیت توسط متخصص زبان‌شناسی'
    },
    {
      step: 'بومی‌سازی و نهایی‌سازی',
      desc: 'انطباق فرهنگی، کنترل نهایی و تحویل محصول'
    }
  ];

  const faqs = [
    {
      question: 'چه زبان‌هایی را پوشش می‌دهید؟',
      answer: 'انگلیسی، عربی، فرانسوی، ترکی، آلمانی، ایتالیایی، روسی، کره‌ای، ژاپنی و سایر زبان‌های اصلی دنیا را پوشش می‌دهیم. اگر زبان خاصی نیاز دارید، در زمان مشاوره بررسی خواهیم کرد.'
    },
    {
      question: 'آیا محتوای تخصصی هم ترجمه می‌کنید؟',
      answer: 'بله، این یکی از تخصص‌های اصلی ماست. مقالات علمی، متون فنی و تخصصی توسط مترجمین حوزه مربوطه (پزشکی، مهندسی، حقوق و غیره) ترجمه می‌شود.'
    },
    {
      question: 'زمان تحویل ترجمه به چه صورت است؟',
      answer: 'بسته به حجم و زبان، معمولاً ۳ روز تا یک هفته. برای پروژه‌های اورژانسی، خدمات سریع‌العمل در دسترس است. زمان دقیق هنگام ثبت سفارش اعلام خواهد شد.'
    },
    {
      question: 'چطور کیفیت ترجمه را تضمین می‌کنید؟',
      answer: 'تمام ترجمه‌ها از دو مرحله کنترل کیفیت عبور می‌کنند: ۱) کنترل توسط مترجم تخصصی، ۲) بازبینی توسط متخصص زبان‌شناسی. همچنین با هفت روز گارانتی کیفیت رسپانس هستیم.'
    },
    {
      question: 'آیا سئو در ترجمه‌ها رعایت می‌شود؟',
      answer: 'بله، متخصصین ما با دانش سئوی بین‌المللی کار می‌کنند. کلمات کلیدی استراتژیک حفظ شده، ساختار محتوا بهینه‌سازی می‌شود و برای موتورهای جستجوی محلی آماده می‌گردد.'
    },
    {
      question: 'هزینه ترجمه چگونه محاسبه می‌شود؟',
      answer: 'بر اساس زبان، حوزه تخصصی، تعداد کلمات و زمان تحویل. پکیج‌های مختلفی داریم که از اقتصادی تا VIP. ریچمپ دقیق در زمان ارائه مشاوره اعلام خواهد شد.'
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
        <section className="section-padding bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-green-100 text-green-700 mb-4">
                خدمات ترجمه تخصصی
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                ترجمه و <span className="gradient-text">بومی‌سازی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                مترجمین تخصصی حوزه کسب‌وکار شما برای گسترش جهانی. از ترجمه دقیق تا بومی‌سازی کامل فرهنگی، عصر سئو در کنار شماست.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع ترجمه حرفه‌ای
                </Button>
                <Button variant="outline" size="lg">
                  تحلیل محتوای شما
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-teal-50 to-green-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-700 mb-2">
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

        {/* Languages Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                پوشش <span className="gradient-text">زبان‌های اصلی دنیا</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                مترجمین تخصصی در تمام زبان‌های اصلی برای بازارهای جهانی شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((lang, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors text-2xl">
                        {lang.flag}
                      </div>
                      <CardTitle className="text-xl font-semibold">{lang.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{lang.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {lang.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">ترجمه کامل</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکردی جامع برای ترجمه و بومی‌سازی محتوای شما در سطح جهانی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
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

        {/* Content Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">محتوای قابل ترجمه</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش کامل انواع محتوا از وب‌سایت تا مستندات قانونی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <FileText className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{type.type}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <BadgeCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
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
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای ترجمه و <span className="gradient-text">بومی‌سازی حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                گسترش جهانی کسب‌وکار با مترجمین متخصص حوزه شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
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
        <section className="section-padding bg-gradient-to-br from-teal-50 to-green-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">ترجمه تخصصی</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی ۴ مرحله‌ای برای ترجمه دقیق و با کیفیت
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-700">
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
                پاسخ به پرسش‌های رایج مشتریان درباره خدمات ترجمه
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
              زبان مرز نمی‌شناسد، کسب‌وکار شما را جهانی کنید!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با مترجمین تخصصی عصر سئو، محتوای شما به زبان‌های زنده دنیا ترجمه شود و به بازارهای میلیونی دسترسی پیدا کنید. از تحلیل فرهنگی تا بهینه‌سازی سئو چندزبانه، ما در کنار شما هستیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                شروع ترجمه حرفه‌ای
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان ترجمه
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
