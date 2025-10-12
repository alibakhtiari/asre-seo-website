import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Edit3, BookOpen, AlignJustify, Search, TrendingUp, FileText, Tags, Users, Target, PenTool, Lightbulb, Award, Zap } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'سئو محتوا | تولید و بهینه‌سازی محتوا برای رتبه بالای گوگل | عصر سئو',
  description: 'خدمات کامل سئو محتوا شامل تولید محتوای SEO محور، استراتژی محتوایی، تحقیق کلمات کلیدی پیشرفته و Topical Authority برای ۴۰۰% رشد ترافیک ارگانیک.',
  keywords: 'سئو محتوا, تولید محتوا, استراتژی محتوا, تحقیق کلمات کلیدی, Content SEO, Topical Authority',
  alternates: {
    canonical: 'https://asreseo.com/services/seo/content-seo',
  },
  openGraph: {
    title: 'سئو محتوا | تولید محتوای SEO محور | عصر سئو',
    description: 'بهینه‌سازی کامل محتوا برای رتبه عالی گوگل و ترافیک ارگانیک بالا.',
    type: 'website',
    url: 'https://asreseo.com/services/seo/content-seo',
    images: [
      {
        url: '/og-content-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'سئو محتوا حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سئو محتوا | عصر سئو',
    description: 'تولید محتوا برای رتبه بهتر گوگل.',
    images: ['/og-content-seo.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'سئو محتوا',
  'description': 'خدمات سئو محتوا شامل تولید محتوای SEO محور، استراتژی محتوایی و Topical Authority',
  'serviceType': 'Content SEO',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات سئو محتوا',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تولید محتوای SEO محور',
          'description': 'ایجاد محتواهای ارزشمند و سئو دوست'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'جدیدتحقیق کلمات کلیدی پیشرفته',
          'description': 'شناسایی کلمات کلیدی استراتژیک با فرصت بالا'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چرا سئو محتوا از اهمیت ویژه‌ای برخوردار است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'سئو محتوا تا ۶۰% در رتبه‌بندی گوگل تأثیرگذار بوده و بهترین راه جذب ترافیک ارگانیک است.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Topical Authority چیست و چرا مهم است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Topical Authority ایجاد ارتباط موضوعی بین محتواها است که گوگل را از تخصص شما در حوزه اطمینان می‌دهد.'
        }
      }
    ]
  }
}

export default function ContentSEOPage() {
  const services = [
    {
      icon: Edit3,
      title: 'تولید محتوای SEO محور',
      description: 'ایجاد مقالات، بلاگ پست‌ها و صفحاتی که هم کاربر را جذب می‌کنند و هم از نظر فنی کاملاً بهینه‌سازی شده‌اند.',
      benefits: ['رتبه‌بندی عالی', 'تجربه کاربری قوی', 'ترافیک ارگانیک بالا']
    },
    {
      icon: BookOpen,
      title: 'استراتژی محتوایی پیشرفته',
      description: 'طراحی تقویم محتوا علمی و roadmap استراتژیک برای جذب ترافیک منظم و هدفمند به سایت.',
      benefits: ['برنامه‌ریزی ضابطه‌مند', 'بازدهی بهینه', 'نتیجه‌گیری پایدار']
    },
    {
      icon: AlignJustify,
      title: 'بهینه‌سازی ساختار محتوا',
      description: 'ساختاردهی هوشمند هدرها (H1-H6)، پاراگراف‌بندی بهینه، و ایجاد خوانایی و UX عالی.',
      benefits: ['سئو فنی کامل', 'خوانایی عالی', 'رتبه بالاتر']
    },
    {
      icon: Search,
      title: 'تحقیق کلمات کلیدی پیشرفته',
      description: 'تحلیل فرصت‌های کلیدی، کلمات دم بلند استراتژیک و cluster محتوایی برای حداکثر پوشش.',
      benefits: ['بازدهی بالا', 'رقابت کمتر', 'حجم جستجو بیشتر']
    },
    {
      icon: TrendingUp,
      title: 'ایجاد Topical Authority',
      description: 'ساخت شبکه محتوایی مرتبط با هسته موضوعی شما برای کسب جایگاه تخصصی و اعتماد گوگل.',
      benefits: ['اعتماد گوگل', 'رتبه بالاتر', 'دوره حضور طولانی']
    },
    {
      icon: FileText,
      title: 'لینک‌سازی داخلی هوشمند',
      description: 'طراحی ساختار لینکینگ استراتژیک برای توزیع قدرت درونی و بهبود تجربه ناوبری کاربر.',
      benefits: ['قدرت و توزیع PageRank', 'جلسات مفید طولانی‌تر', 'رتبه‌بندی بهبود یافته']
    }
  ];

  const benefits = [
    'جذب ترافیک ارگانیک ارگانیک و هدفمند با سبک محتوایی متناسب با کسب‌وکار شما',
    'افزایش ماندگاری کاربران از میانگین ۲ دقیقه به بیش از ۵ دقیقه',
    'کاهش نرخ پرش (Bounce Rate) تا ۶۰% و بهبود شاخص‌های تجربه کاربری',
    'بهبود رتبه کلمات کلیدی اصلی و افزایش کلیک‌ها از نتایج جستجو',
    'ایجاد برندینگ محتوایی و اعتبار تخصصی برای کسب‌وکار شما',
    '۵ برابر شدن نرخ تبدیل بازدیدکنندگان به مشتریان فعال'
  ];

  const contentTypes = [
    {
      title: 'مقاله تخصصی',
      description: 'مقاله‌های عمیق و فنی برای جذب مشتریان حرفه‌ای',
      features: ['بررسی جامع موضوع', 'نمودارها و آیتم‌پسند', 'فراخوان به اقدام قوی'],
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'راهنمای عملی',
      description: 'آموزش گام به گام حل مشکلات کاربران',
      features: ['توضیح مرحله به مرحله', 'نمونه‌های عملی', 'بهینه برای رتبه‌بندی'],
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'مطالعات موردی',
      description: 'نمایش نتایج واقعی پروژه‌های موفق',
      features: ['تقارن با مشتریان', 'اعداد و آمار واقعی', 'اعتمادسازی بالا'],
      icon: Target,
      color: 'purple'
    },
    {
      title: 'پست‌های ترند',
      description: 'پوشش اخبار روز و موضوعات داغ',
      features: ['سرعت تغییرات بالا', 'بازاریابی ویروسی', 'ترافیک فوری'],
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const workflowSteps = [
    {
      step: '۱',
      title: 'تحلیل استراتژیک',
      desc: 'بررسی مخاطب هدف، رقبا و کلمات کلیدی استراتژیک مهمتق'
    },
    {
      step: '۲',
      title: 'برنامه‌ریزی محتوایی',
      desc: 'طراحی تقویم محتوا، تعیین موضوعات و Crawl priorityها'
    },
    {
      step: '۳',
      title: 'تولید محتوا',
      desc: 'نوشتن حرفه‌ای، ویراستاری، و نهایی‌سازی محتوا با کیفیت بالا'
    },
    {
      step: '۴',
      title: 'بهینه‌سازی سئو',
      desc: 'سیستم‌بندی کلمات کلیدی، ساختار محتوا و عناصر فنی'
    },
    {
      step: '۵',
      title: 'انتشار و پروموشن',
      desc: 'انتشار در زمان مناسب و استفاده از استراتژی‌های تبلیغاتی پشتیبانی'
    },
    {
      step: '۶',
      title: 'اندازه‌گیری و بهبود',
      desc: 'پایش عملکرد، A/B Testing و بهینه‌سازی مداوم بر اساس داده‌ها'
    }
  ];

  const stats = [
    { metric: '+۴۰۰%', label: 'رشد ترافیک ارگانیک', color: 'text-blue-600', icon: TrendingUp },
    { metric: '۸۵%', label: 'افزایش ماندگاری', color: 'text-green-600', icon: Users },
    { metric: '۵x', label: 'نرخ تبدیل بالاتر', color: 'text-purple-600', icon: Target },
    { metric: '۰.۱', label: 'بهبود Bounce Rate', color: 'text-red-600', icon: Zap }
  ];

  const faqs = [
    {
      question: 'آیا محتواهای تولید شده تضمین رتبه دارند؟',
      answer: 'در سئو، هیچ تضمین رتبه قطعی وجود ندارد. با این حال، تیم عصر سئو بر اساس تجربه بیش از ۵ سال، متوسط ۸۵% صفحات را به صفحه اول گوگل رسانده و برای بقیه جزو بهترین نتایج است. کیفیت محتوا و تکنیک‌های مدرن، احتمال موفقیت را بسیار بالا می‌برند.'
    },
    {
      question: 'طراحی استراتژی محتوایی بر چه اساسی انجام می‌شود؟',
      answer: 'استراتژی محتوای عصر سئو بر اساس چهار رکن علمی ساخته می‌شود: ۱) رفتار و نیازهای مخاطب هدف، ۲) آنالیز رقبا و فرصت‌های بازار، ۳) تحقیق کلمات کلیدی پیشرفته، ۴) اهداف کسب‌وکار و KPIهای قابل اندازه‌گیری.'
    },
    {
      question: 'محصول یا خدمات من تخصصی است؛ آیا می‌توانید محتوای تخصصی تولید کنید؟',
      answer: 'بله، ما شبکه گسترده‌ای از نویسندگان متخصص در تمام حوزه‌ها داریم. از فناوری اطلاعات و پزشکی گرفته تا صنعت ساختمان، کشاورزی و حتی موضوعات هنری. تمامی محتواها توسط متخصصین هر حوزه نوشته شده و سپس توسط تیم سئو بهینه‌سازی می‌گردد.'
    },
    {
      question: 'چرا Topical Authority اهمیت زیادی دارد؟',
      answer: 'Topical Authority به گوگل ثابت می‌کند که شما متخصص موضوع هستید. برای مثال اگر ۱۰۰ مقاله در مورد شیرینی‌پزی دارید، گوگل بهترین مقاله‌های شما را بالاتر رتبه‌بندی می‌کند. این استراتژی لانگ‌مدت، رتبه‌بندی پایدار را تضمین می‌کند.'
    },
    {
      question: 'رومالی کند چطور متوجه می‌شوم محتوای تولید شده کارآمد است؟',
      answer: 'ما شاخص‌های کلیدی عملکرد را به‌طور هفتگی گزارش می‌دهیم از جمله: رتبه کلمات کلیدی، ترافیک ارگانیک، نرخ تبدیل، نرخ پرش، تعداد صفحات نمایش داده‌شده (impressions) و جایگاه میانگین جستجو. همچنین ماهانه جلسه استراتژیک برای بهبود نتایج برگزار می‌کنیم.'
    },
    {
      question: 'آیا محتواهای شما کپی نیست و منحصربفرد است؟',
      answer: '۱۰۰% محتواهای ما منحصربفرد بوده و توسط نویسندگان حرفه‌ای به صورت سفارشی نوشته می‌شود. پس از تولید، همه محتواها از دو ابزار کپی‌کاری پیشرفته عبور می‌کنند و کیفیت محتوا توسط تیم کنترل کیفیت بررسی می‌گردد.'
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
        <section className="section-padding bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-amber-100 text-amber-700 mb-4">
                محتوای SEO محور پیشرفته
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                سئو <span className="gradient-text">محتوا</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                قدرت محتوای ارزشمند برای رتبه عالی گوگل. تولید محتوا با پشتوانه تحقیق کلمات کلیدی پیشرفته، Topical Authority و استراتژی علمی محتوایی عصر سئو.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  شروع استراتژی محتوایی
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان محتوا
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-amber-700 mb-2">
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

        {/* Content Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">سئو محتوا پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تخصص عصر سئو در تولید محتوای ارزشمند و بهینه‌سازی برای رتبه عالی
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <service.icon className="h-6 w-6 text-amber-600" />
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
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                انواع <span className="gradient-text">محتوای استراتژیک</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                انتخاب نوع محتوای مناسب بسته به مخاطبان، اهداف و استراتژی لانگ‌مدت شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <type.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
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

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای سئو <span className="gradient-text">محتوا حرفه‌ای</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                محتوای ارزشمند دقیقاً همان چیزی است که گوگل و کاربران به دنبالش هستند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-amber-600" />
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
        <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">سئو محتوا</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد علمی تولید محتوا از تحقیق تا انتشار و اندازه‌گیری نتایج
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl font-bold text-amber-700">
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
                پاسخ به پرسش‌های رایج مشتریان درباره سئو محتوا
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
              محتوای شما باید دیده شود!
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تیم عصر سئو، محتوای شما را به پله‌های نخست گوگل ببرید. از strategia استراتژی محتوایی علمی گرفته تا تولید محتوای منحصربفرد، همه چیز را برای موفقیت شما آماده کرده‌ایم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                شروع استراتژی محتوایی
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                نمونه کارها را ببینید
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
