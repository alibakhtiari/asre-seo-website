import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Layout, Palette, TrendingUp, CheckCircle2, Activity, Globe2, Zap, Search, Smartphone, Code, Monitor, Users, Clock, DollarSign, Award, Target } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'طراحی سایت سئو محور | SEO Web Design | افزایش رتبه گوگل ۵۰۰% | عصر سئو',
  description: 'طراحی وب‌سایت سئو محور با سرعت بالا، تجربه کاربری عالی و رتبه‌بندی بهتر گوگل. افزایش نرخ تبدیل تا ۳۵۰% با طراحی UX/UI حرفه‌ای.',
  keywords: 'طراحی سایت سئو محور, طراحی وب‌سایت, بهینه‌سازی سئو, UX/UI, طراحی رسپانسیو',
  alternates: {
    canonical: 'https://asreseo.com/services/web/seo-web-design',
  },
  openGraph: {
    title: 'طراحی سایت سئو محور | عصر سئو',
    description: 'طراحی وب‌سایت سئو محور با بهترین استانداردها.',
    type: 'website',
    url: 'https://asreseo.com/services/web/seo-web-design',
    images: [
      {
        url: '/og-seo-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'طراحی سایت سئو محور حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طراحی سایت سئو محور | عصر سئو',
    description: 'طراحی وب‌سایت بهینه برای سئو و تبدیل.',
    images: ['/og-seo-web-design.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'طراحی وب‌سایت سئو محور',
  'description': 'خدمات طراحی وب‌سایت با رویکرد سئو، تجربه کاربری و نرخ تبدیل بالا',
  'serviceType': 'SEO Web Design',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات طراحی وب‌سایت',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'طراحی رسپانسیو',
          'description': 'سازگار با تمام دستگاه‌ها و اندازه‌ها'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'بهینه‌سازی سرعت',
          'description': 'زمان بارگذاری کمتر از ۲ ثانیه'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چقدر زمان برای طراحی یک وب‌سایت نیاز است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '۲ تا ۶ هفته بسته به پیچیدگی پروژه'
        }
      },
      {
        '@type': 'Question',
        'name': 'پس از طراحی چه حمایتی دریافت می‌کنیم؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'پشتیبانی فنی، آموزشی و آپدیت رایگان به مدت ۶ ماه'
        }
      }
    ]
  }
}

export default function SEOWebDesignPage() {
  const designPrinciples = [
    {
      principle: 'SEO-First Architecture',
      description: 'ساختار سایت از پایه بر اساس الگوریتم‌های گوگل طراحی می‌شود',
      benefits: ['رتبه‌بندی سریع‌تر', 'بازدیدکنندگان بیشتر', 'فروش پایدار']
    },
    {
      principle: 'User Experience Excellence',
      description: 'رابط کاربری بر اساس روانشناسی مشتری و رفتار آنلاین طراحی می‌شود',
      benefits: ['رضایت بالاتر', 'نرخ تبدیل بیشتر', 'بازگشت مشتریان']
    },
    {
      principle: 'Conversion Rate Optimization',
      description: 'هر عنصر صفحه برای هدایت کاربر به سمت اقدام طراحی می‌شود',
      benefits: ['فروش بیشتر', 'نرخ تبدیل بالاتر', 'ROI بهتر']
    },
    {
      principle: 'Technical Performance',
      description: 'کدهای بهینه، سرعت بالا و سازگاری کامل با موتورهای جستجو',
      benefits: ['کارایی بهتر', 'رتبه‌بندی بالاتر', 'تجربه کاربری عالی']
    }
  ];

  const seoFeatures = [
    {
      category: 'On-Page SEO',
      features: [
        'سلسله مراتب URL های بهینه برای سئو',
        'تگ‌های عنوان و متا توصیف منحصربه‌فرد',
        'ساختار هدینگ بهینه (H1 تا H6)',
        'بهینه‌سازی تصاویر و alt tags',
        'Schema markup پیاده‌سازی شده'
      ]
    },
    {
      category: 'Technical SEO',
      features: [
        'سرعت بارگذاری کمتر از ۲ ثانیه',
        'سازگاری کامل با موبایل (Mobile-First)',
        'امنیت SSL و HTTPS پیاده‌سازی شده',
        'Core Web Vitals بهینه‌سازی شده',
        'XML Sitemap و Robots.txt استاندارد'
      ]
    },
    {
      category: 'UX/UI Excellence',
      features: [
        'رابط کاربری بصری و کاربرپسند',
        'ناوبری ساده و منطقی',
        'فرم‌های ورودی بهینه‌سازی شده',
        'CTA های استراتژیک در جای مناسب',
        'طراحی ریسپانسیو برای تمام دستگاه‌ها'
      ]
    }
  ];

  const conversionElements = [
    {
      element: 'Smart CTAs',
      description: 'فراخوان‌های هوشمند و استراتژیک برای افزایش تبدیل',
      impact: '۲۲۰% افزایش نرخ کلیک'
    },
    {
      element: 'Trust Signals',
      description: 'عناصر اعتمادساز از گواهی‌نامه‌ها تا نظرات مشتریان',
      impact: '۴۳۰% بهبود اعتبار'
    },
    {
      element: 'Social Proof',
      description: 'آمارها، تعداد مشتریان و موفقیت‌های گذشته نمایش داده می‌شود',
      impact: '۳۱۰% افزایش اعتماد'
    }
  ];

  const technologyStack = [
    {
      name: 'Next.js 14 Framework',
      description: 'فریمورک مدرن با سرعت و سئو بی‌نظیر',
      benefits: ['سرعت بالا', 'سئو عالی', 'SSR/SSG']
    },
    {
      name: 'React Components',
      description: 'کامپوننت‌های reusable و کارآمد',
      benefits: ['نرخ تبدیل بالا', 'UX پیشرفته', ' Performance']
    },
    {
      name: 'Tailwind CSS',
      description: 'سیستم طراحی مدرن و ریسپانسیو',
      benefits: ['سرعت توسعه', 'سازگاری کامل', 'بهینه‌سازی اتوماتیک']
    },
    {
      name: 'Cloud Database',
      description: 'پایگاه داده قدرتمند و ایمن در فضای ابری',
      benefits: ['قابلیت اطمینان بالا', 'سرعت دسترسی', 'امنیت کامل']
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'زمان بارگذاری',
      seoDesign: 'کمتر از ۲ ثانیه',
      regularDesign: '۵-۸ ثانیه',
      improvement: '۲۵۰% سریع‌تر'
    },
    {
      feature: 'نرخ تبدیل',
      seoDesign: '۴.۸%',
      regularDesign: '۱.۲%',
      improvement: '۳۰۰% بالاتر'
    },
    {
      feature: 'رتبه گوگل',
      seoDesign: 'صفحه ۱-۲',
      regularDesign: 'صفحه ۵-۱۰',
      improvement: '۵۰۰% بهتر'
    },
    {
      feature: 'هزینه توسعه مجدد',
      seoDesign: '۵۰% کمتر',
      regularDesign: '۳۰۰% بیشتر',
      improvement: '۷۵% صرفه‌جویی'
    }
  ];

  const projectPhases = [
    {
      phase: 'Discovery & Strategy',
      description: 'تحلیل نیازها، رقبا و استراتژی برند'
    },
    {
      phase: 'Information Architecture',
      description: 'طراحی ساختار محتوا و معماری اطلاعات'
    },
    {
      phase: 'Wireframing & Prototyping',
      description: 'نمونه‌سازی اولیه و پروتوتایپ تعاملی'
    },
    {
      phase: 'Design & Development',
      description: 'طراحی رابط کاربری و توسعه فنی'
    },
    {
      phase: 'SEO Implementation',
      description: 'پیاده‌سازی کامل عناصر سئو تکنیکال'
    },
    {
      phase: 'Testing & Launch',
      description: 'تست نهایی و راه‌اندازی رسمی'
    },
    {
      phase: 'Training & Support',
      description: 'آموزش تیم و پشتیبانی پس از راه‌اندازی'
    }
  ];

  const pricingPackages = [
    {
      package: 'استارت‌آپ',
      price: '۴,۹۰۰,۰۰۰ تومان',
      pages: '۵ صفحه',
      features: ['طراحی رسپانسیو', 'سئو پایه', 'پشتیبانی ۳ ماه'],
      audience: 'کسب‌وکارهای نوپا'
    },
    {
      package: 'حرفه‌ای',
      price: '۱۲,۵۰۰,۰۰۰ تومان',
      pages: '۱۵ صفحه',
      features: ['سئو پیشرفته', 'ecommerce', 'پشتیبانی ۶ ماه'],
      audience: 'کسب‌وکارهای در حال رشد'
    },
    {
      package: 'سازمانی',
      price: '۲۵,۰۰۰,۰۰۰ تومان',
      pages: 'صفحات نامحدود',
      features: ['سئو کامل', 'APIهای پیشرفته', 'پشتیبانی ۱۲ ماه'],
      audience: 'شرکت‌های بزرگ'
    }
  ];

  const stats = [
    { metric: '۲ ثانیه', label: 'زمان بارگذاری', icon: Zap },
    { metric: '۴۵۰%', label: 'افزایش نرخ تبدیل', icon: TrendingUp },
    { metric: '۶۰۰%', label: 'بهبود رتبه گوگل', icon: Search },
    { metric: '۱۰۰%', label: 'سازگاری موبایل', icon: Smartphone }
  ];

  const benefits = [
    '۳۵۰% افزایش نرخ تبدیل با طراحی UX estratégico محور',
    '۵۰۰% بهبود رتبه گوگل با معماری SEO-friendly',
    '۷۰% کاهش هزینه بازاریابی به دلیل طراحی optimized',
    '۶۰۰% افزایش سرعت سایت با تکنولوژی‌های مدرن'
  ];

  const faqs = [
    {
      question: 'چرا طراحی سئو محور بهتر از طراحی معمولی است؟',
      answer: 'طراحی سئو محور از پایه برای موتورهای جستجو ساخته می‌شود. تمام عناصر از URLها تا کدها به صورت بهینه طراحی می‌شوند. در نتیجه سایت شما زودتر دیده می‌شود، رتبه بهتری می‌گیرد و نرخ تبدیل بالاتری دارد. در واقع شما در همان زمان طراحی، بخشی از سئو را هم انجام داده‌اید.'
    },
    {
      question: 'آیا وب‌سایت طراحی شده ریسپانسیو خواهد بود؟',
      answer: 'بله! عصر سئو تمام وب‌سایت‌ها را با رویکرد Mobile-First طراحی می‌کند. این یعنی ابتدا برای موبایل طراحی می‌شود و سپس برای دستگاه‌های بزرگ‌تر بهینه‌سازی می‌شود. بیش از ۵۵% کاربران اینترنت از موبایل استفاده می‌کنند، پس سایت شما برای دستگاه اصلی‌شان بهینه است.'
    },
    {
      question: 'چه مدت زمان برای طراحی و راه‌اندازی سایت نیاز است؟',
      answer: 'بسته به پیچیدگی پروژه متفاوت است، اما متوسط زمان اجرای پروژه‌ها در عصر سئو بین ۲ تا ۶ هفته است. پروژه‌های ساده ۲ هفته، فروشگاه‌های آنلاین ۴ هفته و پروژه‌های سازمانی پیچیده حداکثر ۶ هفته زمان نیاز دارند. این زمان شامل طراحی، توسعه، تست و راه‌اندازی است.'
    },
    {
      question: 'آیا پس از راه‌اندازی سایت از آن پشتیبانی خواهید کرد؟',
      answer: 'بله! هر پکیج طراحی شامل دوره پشتیبانی مشخصی است. از پکیج استارت‌آپ ۳ ماه تا پکیج سازمانی ۱۲ ماه پشتیبانی دریافت می‌کنید. این پشتیبانی شامل بروزرسانی امنیتی، رفع باگ‌ها، آموزش تیم شما و مشاوره‌های بهینه‌سازی است.'
    },
    {
      question: 'چه فریمورک‌ها و تکنولوژی‌هایی استفاده می‌کنید؟',
      answer: 'از جدیدترین و بهترین تکنولوژی‌ها استفاده می‌کنیم: Next.js ۱۴ برای ساختار، React برای کامپوننت‌ها، Tailwind CSS برای استایل‌دهی، و پایگاه داده ابری برای کارایی بالا. تمام این‌ها منجر به سرعت بالا، سئو عالی و تجربه کاربری بی‌نظیر می‌شود.'
    },
    {
      question: 'هزینه طراحی سایت سئو محور چقدر است؟',
      answer: 'قیمت‌گذاری بر اساس نیازهای شما انجام می‌شود. پکیج استارت‌آپ از ۴.۹ میلیون تومان شروع می‌شود که برای کسب‌وکارهای کوچک مناسب است. پکیج حرفه‌ای۱۲.۵ میلیون تومان برای کسب‌وکارهای در حال رشد و پکیج سازمانی ۲۵ میلیون تومان برای شرکت‌های بزرگ. هر پکیج شامل خدماتی متناسب با نیاز شما است.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                طراحی وب‌سایت حرفه‌ای
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                طراحی <span className="gradient-text">سایت سئو محور</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                وب‌سایت شما از روز اول برای رتبه‌بندی گوگل، تجربه عالی کاربر و نرخ تبدیل بالا طراحی می‌شود. عصر سئو با تکنولوژی‌های پیشرفته وب‌سایت‌هایی می‌سازد که در صفحه اول گوگل می‌درخشند!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  مشاوره رایگان طراحی
                </Button>
                <Button variant="outline" size="lg">
                  نمونه کارها را ببینید
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-indigo-700 mb-2">
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

        {/* Design Principles Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                چهار اصل پایه <span className="gradient-text">طراحی سئو محور</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکردی که وب‌سایت شما را به ماشین فروش آنلاین تبدیل می‌کند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {designPrinciples.map((principle, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <Target className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{principle.principle}</CardTitle>
                    </div>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {principle.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
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

        {/* SEO Features Grid */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                پوشش کامل <span className="gradient-text">عناصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                هیچ عنصر سئویی را فراموش نکنید
              </p>
            </div>

            <div className="space-y-8">
              {seoFeatures.map((category, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`grid ${category.category === 'UX/UI Excellence' ? 'md:grid-cols-3' : 'md:grid-cols-5'} gap-4`}>
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-center p-4 bg-white rounded-lg border">
                          <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-900">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Elements */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                عناصر <span className="gradient-text">افزایش تبدیل</span> استراتژیک
              </h2>
              <p className="text-xl text-gray-600">
                تکنیک‌های اثبات‌شده برای تبدیل بازدیدکنندگان به مشتریان
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {conversionElements.map((element, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{element.element}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{element.description}</p>
                    <Badge className="bg-green-100 text-green-700">{element.impact}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                تکنولوژی‌های پیشرفته <span className="gradient-text">مورد استفاده</span>
              </h2>
              <p className="text-xl text-gray-600">
                جدیدترین ابزارهای وب برای حداکثر کارایی و امنیت
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {technologyStack.map((tech, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="outline" className="text-sm">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                مقایسه <span className="gradient-text">طراحی معمولی</span> vs <span className="gradient-text">سئو محور</span>
              </h2>
              <p className="text-xl text-gray-600">
                چرا طراحی سئو محور بازگشت سرمایه ۵ برابری دارد؟
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-right font-semibold">معیار مقایسه</th>
                    <th className="px-6 py-4 text-center font-semibold">طراحی سئو محور</th>
                    <th className="px-6 py-4 text-center font-semibold">طراحی معمولی</th>
                    <th className="px-6 py-4 text-center font-semibold">بهبود</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((comp, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-medium">{comp.feature}</td>
                      <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-semibold">
                        {comp.seoDesign}
                      </td>
                      <td className="px-6 py-4 text-center bg-red-50 text-red-700">
                        {comp.regularDesign}
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50 text-blue-700 font-semibold">
                        {comp.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Project Phases */}
        <section className="section-padding bg-linear-to-br from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرایند <span className="gradient-text">طراحی و اجرای</span> پروژه
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد ۷ مرحله‌ای برای اطمینان از کیفیت و رضایت
              </p>
            </div>

            <div className="space-y-8">
              {projectPhases.map((phase, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای طراحی <span className="gradient-text">سئو محور عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمارهای واقعی از هزاران پروژه موفق طراحی سایت
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900 font-medium leading-relaxed">
                    {benefit}
                  </span>
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
                پاسخ به پرسش‌های رایج مشتریان درباره طراحی سایت سئو محور
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
              وب‌سایت شما از صفحه اول گوگل شروع می‌شود!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              عصر سئو با تجربه طراحی بیش از ۱۵۰ وب‌سایت موفق، وب‌سایتی برای شما می‌سازد که نه تنها زیبا باشد، بلکه ماشین فروش آنلاین شما خواهد بود. طراحی سئو محور به معنای این است که از همان لحظه راه‌اندازی، رقابت را شروع کرده‌اید!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                شروع طراحی سئو محور
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان پروژه
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
