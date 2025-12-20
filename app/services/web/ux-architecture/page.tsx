import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../../src/generated/images-map.json'
import { Spline, UserCheck, CheckCircle2, Layers3, WandSparkles, ListChecks, Target, Users, Zap, TrendingUp, Award, Brain, Eye } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'طراحی تجربه کاربری UX | معماری اطلاعات | افزایش نرخ تبدیل ۲۵۰% | عصر سئو',
  description: 'طراحی UX پیشرفته و معماری اطلاعات بهینه برای وب‌سایت با افزایش نرخ تبدیل تا ۲۵۰% و بهبود تجربه کاربری.',
  keywords: 'تجربه کاربری UX, معماری اطلاعات, Information Architecture, UI/UX Design, نرخ تبدیل',
  alternates: {
    canonical: 'https://asreseo.com/services/web/ux-architecture',
  },
  openGraph: {
    title: 'طراحی تجربه کاربری و معماری اطلاعات | عصر سئو',
    description: 'طراحی UX پیشرفته برای وب‌سایت شما.',
    type: 'website',
    url: 'https://asreseo.com/services/web/ux-architecture',
    images: [
      {
        url: '/og-ux-architecture.jpg',
        width: 1200,
        height: 630,
        alt: 'طراحی تجربه کاربری حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX Design | عصر سئو',
    description: 'طراحی تجربه کاربری پیشرفته.',
    images: ['/og-ux-architecture.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'طراحی تجربه کاربری UX',
  'description': 'خدمات طراحی تجربه کاربری و معماری اطلاعات بهینه',
  'serviceType': 'UX Design & Information Architecture',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات UX Design',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'معماری اطلاعات',
          'description': 'طراحی ساختار داده‌های وب‌سایت'
        }
      }
    ]
  }
}

export default function UXArchitecturePage() {
  const designPrinciples = [
    {
      principle: 'معماری اطلاعات ساخت‌یافته',
      description: 'تنظیم ساختار استاندارد سایت برای یافتن سریع اطلاعات توسط کاربران و گوگل با سلسله مراتب منطقی و ناوبری روان.',
      benefits: ['یافت سریع اطلاعات', 'بهبود تجربه کاربر', 'رتبه‌بندی بهتر گوگل']
    },
    {
      principle: 'سفر کاربر بهینه‌شده',
      description: 'طراحی مسیرهای دسترسی و تعامل به گونه‌ای که کاربر بدون سردرگمی و با کمترین کلیک به هدف خود برسد.',
      benefits: ['افزایش نرخ تبدیل', 'کاهش نرخ خروج', 'رضایت بالاتر کاربر']
    },
    {
      principle: 'رعایت الگوهای برتر جهان',
      description: 'استفاده از بهترین شیوه‌ها و پترن‌های UX جهانی که توسط میلیون‌ها کاربر تست شده‌اند.',
      benefits: ['تجربه شناخته شده', 'قابل پیش‌بینی بودن', 'کارایی بالا']
    }
  ];

  const methodologies = [
    {
      name: 'Design Thinking Process',
      steps: [
        'Empathize - فهم نیاز کاربران',
        'Define - تعریف مسئله',
        'Ideate - تولید ایده',
        'Prototype - ایجاد نمونه',
        'Test - آزمایش و بهبود'
      ],
      impact: '+۳۲۰% بهبود تجربه کاربری'
    },
    {
      name: 'User Journey Mapping',
      steps: [
        'نقشه‌ریزی مسیر کاربر',
        'شناسایی نقاط تماس',
        'تحلیل نقاط درد',
        'طراحی راه حل‌ها',
        'بهینه‌سازی مداوم'
      ],
      impact: '+۲۸۰% افزایش نرخ ماندگاری'
    },
    {
      name: 'Usability Testing Framework',
      steps: [
        'تایین سناریوهای تست',
        'اجرای تست با کاربران واقعی',
        'تحلیل رفتار کاربران',
        'شناسایی مشکلات',
        'تکرار و بهبود'
      ],
      impact: '+۴۵۰% بهبود نرخ تکمیل هدف'
    }
  ];

  const uxTechniques = [
    {
      technique: 'F-Pattern & Z-Pattern Layout',
      description: 'طراحی چیدمان صفحات بر اساس الگوی طبیعی خواندن کاربران',
      effect: '۵۰% بهبود جذب اولیه'
    },
    {
      technique: 'Progressive Disclosure',
      description: 'نمایش اطلاعات به تدریج برای جلوگیری از overwhelming شدن کاربر',
      effect: '۶۰% کاهش نرخ خروج'
    },
    {
      technique: 'Visual Hierarchy',
      description: 'مرتب‌سازی عناصر بصری بر اساس اهمیت نسبی آنها',
      effect: '۸۰% بهبود فهم محتوا'
    },
    {
      technique: 'Affordance Design',
      description: 'طراحی عناصر که عملکرد خود را نشان دهند',
      effect: '۹۰% کاهش سردرگمی کاربر'
    }
  ];

  const userResearchMethods = [
    {
      method: 'User Interviews',
      description: 'مصاحبه عمیق با کاربران هدف برای فهم نیازهای واقعی',
      benefit: 'دریافت بینش‌های جامع'
    },
    {
      method: 'Usability Testing',
      description: 'تست کاربردپذیری با کاربران واقعی در شرایط واقعی',
      benefit: 'شناسایی مشکلات واقعی'
    },
    {
      method: 'A/B Testing',
      description: 'تست دو یا چند نسخه متفاوت برای یافتن بهترین رویکرد',
      benefit: 'تصمیم‌گیری مبتنی بر داده'
    },
    {
      method: 'Heatmap Analysis',
      description: 'تحلیل نقشه حرارتی کلیک‌ها و اسکرول صفحات',
      benefit: 'درک رفتار کاربر'
    }
  ];

  const deliverables = [
    'User Personas - پروفایل کاربران هدف',
    'User Journey Maps - نقشه سفر کاربر',
    'Information Architecture Diagrams - نمودار معماری اطلاعات',
    'Wireframes & Prototypes - نمونه‌های اولیه و تعاملی',
    'Usability Reports - گزارش‌های کاربردپذیری',
    'A/B Testing Results - نتایج تست A/B'
  ];

  const clientTypes = [
    {
      type: 'شروع کسب‌وکار جدید',
      challenge: 'نداشتن تجربه کاربری موجود',
      solution: 'طراحی از پایه با تمرکز بر بهترین روش‌ها'
    },
    {
      type: 'بازسازی وب‌سایت موجود',
      challenge: 'رفع مشکلات تجربه کاربری',
      solution: 'تحلیل نقاط ضعف و بهینه‌سازی کامل'
    },
    {
      type: 'راه‌اندازی محصول دیجیتال',
      challenge: 'تبدیل ایده به محصول کاربردی',
      solution: 'MVP Design و تست سریع بازار'
    },
    {
      type: 'بهینه‌سازی نرخ تبدیل',
      challenge: 'کم بودن نرخ تبدیل فروش',
      solution: 'Conversion Rate Optimization'
    }
  ];

  const workflowSteps = [
    {
      step: 'تحقیق و تحلیل',
      desc: 'مصاحبه با کاربران، تحلیل رقبا، بررسی اهداف کسب‌وکار',
      duration: '۱-۲ هفته'
    },
    {
      step: 'طراحی استراتژی',
      desc: 'تعریف معماری اطلاعات، نقشه سفر کاربر، اهداف کمی',
      duration: '۳-۵ روز'
    },
    {
      step: 'نمونه‌سازی اولیه',
      desc: 'Wireframe، Prototype تعاملی، طرح‌های اولیه',
      duration: '۱ هفته'
    },
    {
      step: 'تست و بررسی',
      desc: 'Usability testing، A/B Testing، جمع‌آوری بازخورد',
      duration: '۵-۷ روز'
    },
    {
      step: 'نهایی‌سازی و تحویل',
      desc: 'اجرای نهایی، مستندسازی، آموزش تیم توسعه',
      duration: '۳-۵ روز'
    },
    {
      step: 'پشتیبانی پس از تحویل',
      desc: 'پیگیری عملکرد، پیشنهادات بهبود، تا ۳ ماه',
      duration: '۲-۳ ماه'
    }
  ];

  const benefits = [
    '۲۵۰% افزایش نرخ تبدیل با سفر کاربر بهینه‌سازی شده',
    '۷۰% کاهش نرخ خروج سایت با تجربه کاربری روان',
    '۶۰% بهبود زمان یافت اطلاعات با معماری اطلاعات استاندارد',
    '۱۸۰% افزایش رضایت کاربران با‌الگوهای UX جهانی'
  ];

  const faqs = [
    {
      question: 'تجربه کاربری (UX) دقیقاً چیست و چه تفاوتی با UI دارد؟',
      answer: 'UX یا تجربه کاربری کل تجربه کاربر از محصول یا سرویس شماست - از راه‌اندازی اولیه تا استفاده روزمره. UI یا رابط کاربری صرفاً ظاهر گرافیکی است. UX شامل تحقیق کاربران، معماری اطلاعات، قابلیت استفاده و رضایت کلی است.'
    },
    {
      question: 'چقدر زمان برای طراحی UX یک وب‌سایت نیاز است؟',
      answer: 'بسته به پیچیدگی پروژه، معمولاً بین ۲ تا ۶ هفته زمان نیاز است. پروژه‌های ساده‌ ۲ هفته، فروشگاه‌های آنلاین ۴ هفته و پلتفرم‌های پیچیده ۶ هفته یا بیشتر زمان نیاز دارند.'
    },
    {
      question: 'آیا پروژه UX شامل تحقیقات کاربر هم می‌شود؟',
      answer: 'بله! قوی‌ترین بخش سرویس ما انجام تحقیقات عمیق است. ما از روش‌های User Interviews، Usability Testing، A/B Testing و تحلیل داده‌ها برای طراحی UX استفاده می‌کنیم و به این تحقیقات تکیه می‌کنیم.'
    },
    {
      question: 'پس از طراحی UX، چه تحویلاتی دریافت می‌کنم؟',
      answer: 'User Personas، User Journey Maps، Wireframes، Interactive Prototypes، Usability Test Reports، و مستندات کامل UX Guidelines که تیم توسعه شما برای پیاده‌سازی دقیقاً نیاز دارد.'
    },
    {
      question: 'آیا می‌توان UX را برای اپلیکیشن موبایل هم طراحی کرد؟',
      answer: 'بله! علاوه بر وب‌سایت‌ها، ما خدمات UX Design برای اپلیکیشن‌های موبایل و وب‌اپلیکیشن‌ها هم ارائه می‌دهیم. رویکرد Mobile-First Design را در تمام پروژه‌ها رعایت می‌کنیم.'
    },
    {
      question: 'چطور می‌توانم کیفیت کار UX Design را ارزیابی کنم؟',
      answer: 'کیفیت کار UX را می‌توان از طریق Usability Testing، A/B Testing و تحلیل نرخ تبدیل اندازه‌گیری کرد. ما این تحلیل‌ها را به همراه مستندات تحویل می‌دهیم.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-indigo-50 to-purple-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-4 py-1 text-sm border-indigo-200">
                  طراحی تجربه کاربری پیشرفته
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  معماری اطلاعات و <span className="gradient-text">تجربه کاربری UX</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  راز ماندگاری کاربران و موفقیت دیجیتال! طراحی UX علمی با روانشناسی کاربران و معماری اطلاعات هوشمند برای نرخ تبدیل ۲۵۰% افزایش در عصر سئو.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    شروع طراحی UX
                  </Button>
                  <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                    مشاهده نمونه کارها
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                <div className="absolute inset-0 bg-linear-to-tr from-indigo-600/10 to-transparent z-10" />
                <OptimizedImage
                  src="/images/ux-architecture-hero.webp"
                  alt="طراحی تجربه کاربری و معماری اطلاعات"
                  fill
                  imageData={imagesMap['/images/ux-architecture-hero.webp' as keyof typeof imagesMap]}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-linear-to-r from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">۲۵۰%</div>
                <p className="text-gray-900">افزایش نرخ تبدیل</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">۷۰%</div>
                <p className="text-gray-900">کاهش نرخ خروج</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">۶۰%</div>
                <p className="text-gray-900">سرعت یافت اطلاعات</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">۱۸۰%</div>
                <p className="text-gray-900">افزایش رضایت</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                سه اصل پایه <span className="gradient-text">طراحی UX موفق</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکرد علمی عصر سئو برای تجربه کاربری بی‌نظیر
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {designPrinciples.map((principle, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <Target className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{principle.principle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    <div className="space-y-2">
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

        {/* Methodologies Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                رویکردهای <span className="gradient-text">UX پیشرفته</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                метод‌هایی که توسط برندهای جهانی اثبات شده‌اند
              </p>
            </div>

            <div className="space-y-8">
              {methodologies.map((method, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg">
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Brain className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{method.name}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">فرآیند اجرایی:</h4>
                        <ul className="space-y-1">
                          {method.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <Badge className="bg-green-100 text-green-700 text-lg">{method.impact}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UX Techniques Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                تکنیک‌های UX <span className="gradient-text">اثبات‌شده</span>
              </h2>
              <p className="text-xl text-gray-600">
                روش‌هایی که نرخ تبدیل را به طور چشمگیری بهبود می‌دهند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {uxTechniques.map((technique, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {technique.technique}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {technique.description}
                        </p>
                        <Badge className="bg-green-100 text-green-700">
                          {technique.effect}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* User Research Methods */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                روش‌های تحقیق <span className="gradient-text">کاربر محور</span>
              </h2>
              <p className="text-xl text-gray-600">
                کشف نیازهای واقعی کاربران با رویکرد علمی
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {userResearchMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{method.method}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <Badge variant="outline" className="text-sm">
                      {method.benefit}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                محصولات تحویلی <span className="gradient-text">UX Design</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                ارزش واقعی را در تحویل نهایی دریافت کنید
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                    <Eye className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-900 font-medium text-sm">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-linear-to-br from-purple-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                مزایای طراحی <span className="gradient-text">UX حرفه‌ای</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمارهای واقعی از بهبود پروژه‌های UX طراحی شده
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

        {/* Workflow Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">طراحی UX</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد ۶ مرحله‌ای برای UX Design کاملاً اثربخش
              </p>
            </div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white rounded-xl shadow-xs">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-700">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <Badge variant="outline" className="text-sm">
                      مدت زمان: {step.duration}
                    </Badge>
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
                پاسخ به پرسش‌های مشتریان درباره طراحی UX و تجربه کاربری
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
              تجربه کاربری برتر، فروش بی‌رقیب!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با طراحی UX علمی عصر سئو، تبدیل کاربران به مشتریان وفادار. تجربه‌ای که فراموش‌نشدنی است و فروش شما را چندین برابر می‌کند. پروژه UX خود را همین امروز شروع کنید!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                مشاوره طراحی UX رایگان
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاهده نمونه کارهای UX
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
