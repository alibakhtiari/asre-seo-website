import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollText, BookOpen, Star, Sparkles, BadgeCheck, FileText, RotateCcw, Lightbulb, Users, TrendingUp, Award, CheckCircle } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'تولید محتوای متنی | محتوای سئومحور و منحصر‌به‌فرد | عصر سئو',
  description: 'تولید محتوای متنی تخصصی و سئومحور با کیفیت بالا. مقالات وبلاگ، توضیحات محصول، متن سایت با رعایت اصول SEO و استانداردهای محتوایی.',
  keywords: 'تولید محتوا, محتوای متنی, مقاله نویسی, محتوای سئو, SEO Content, متن منحصر‌به‌فرد, مقاله تخصصی',
  alternates: {
    canonical: 'https://asreseo.com/services/content/text-content',
  },
  openGraph: {
    title: 'تولید محتوای متنی | محتوای سئومحور با عصر سئو',
    description: 'تولید محتوای متنی تخصصی، جذاب و کاملاً بهینه‌سازی شده برای موتورهای جستجو.',
    type: 'website',
    url: 'https://asreseo.com/services/content/text-content',
    images: [
      {
        url: '/og-text-content.jpg',
        width: 1200,
        height: 630,
        alt: 'تولید محتوای متنی سئومحور'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تولید محتوای متنی | عصر سئو',
    description: 'محتوای تخصصی و سئومحور برای وب‌سایت شما.',
    images: ['/og-text-content.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'تولید محتوای متنی',
  'description': 'تولید محتوای متنی تخصصی و سئومحور شامل مقالات وبلاگ، توضیحات محصول و متن وب‌سایت',
  'serviceType': 'Content Creation & SEO',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تولید محتوای متنی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'مقاله تخصصی',
          'description': 'تولید مقالات وبلاگ حرفه‌ای و کاملاً بهینه‌سازی شده'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'توضیحات محصول',
          'description': 'نگارش توضیحات جذاب و قانع‌کننده برای محصولات'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'محتوای تولید شده منحصر به فرد است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بله، تمام متون با ضمانت یونیک بودن و بدون کپی برای هر سفارش تولید می‌شوند.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه مدت طول می‌کشد تا محتوا آماده شود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بسته به تعداد کلمات و پیچیدگی موضوع، زمان تولید بین ۲ تا ۱۴ روز می‌باشد.'
        }
      }
    ]
  }
}

export default function TextContentPage() {
  const features = [
    {
      icon: ScrollText,
      title: 'مقالات تخصصی و سئو محور',
      description: 'نگارش مقالات هدفمند و کاملاً بهینه برای موتورهای جستجو در حوزه شما.',
      benefits: ['سئو پیشرفته', 'محتوای تخصصی', 'رتبه‌بندی بهتر']
    },
    {
      icon: BookOpen,
      title: 'تولید توضیحات محصولات',
      description: 'متون جذاب و قانع‌کننده برای معرفی بهتر محصولات فروشگاه اینترنتی شما.',
      benefits: ['افزایش فروش', 'جذب مشتری', 'تجربه بهتر خرید']
    },
    {
      icon: Sparkles,
      title: 'تنوع سبک نگارش',
      description: 'مطابق با پرسونای کسب‌وکار شما، با لحنی رسمی یا غیر رسمی، دوستانه یا آموزشی تولید می‌شود.',
      benefits: ['تطبیق برند', 'تنوع محتوایی', 'ارتباط موثر']
    },
    {
      icon: Star,
      title: 'ویرایش و تضمین کیفیت',
      description: 'تمام محتوای تولیدی قبل از تحویل ویرایش و از نظر انحصار و کیفیت بررسی می‌گردد.',
      benefits: ['کیفیت تضمینی', 'مراجعه نهایی', 'رضایت مشتری']
    }
  ];

  const contentTypes = [
    {
      title: 'محتوای وب‌سایت',
      description: 'صفحات اصلی، درباره ما، خدمات، مزایای محصولات',
      icon: FileText,
      features: 'بهینه‌سازی برای سئو، خوانایی بالا، تطابق برند'
    },
    {
      title: 'مقالات وبلاگ',
      description: 'مقالات آموزشی و خبری حوزه کاری شما',
      icon: ScrollText,
      features: 'سئو فنی، ساختار مقاله، پل‌های ارتباطی'
    },
    {
      title: 'توضیحات محصولات',
      description: 'کپی تبلیغاتی، ویژگی‌ها، فواید محصولات',
      icon: BookOpen,
      features: 'کپی قانع‌کننده، بیان مزایا،_call-to-action'
    },
    {
      title: 'مطالب ارگانیک',
      description: 'مطالب انگیزشی، اخبار شرکت، داستان‌های موفق',
      icon: Lightbulb,
      features: 'روایت جذاب، هدف‌گذاری فروش، برندینگ'
    }
  ];

  const benefits = [
    'افزایش رتبه سئو و حضور ثابت در نتایج گوگل',
    'جذب اعتماد و ارتباط قوی‌تر با مشتریان',
    'صرفه‌جویی در وقت شما توسط تیم حرفه‌ای محتوا',
    'افزایش نرخ تبدیل و وفاداری مخاطب',
    'بهبود تجربه کاربری و تعامل بازدیدکنندگان',
    'بازاریابی محتوایی موثر و پایدار'
  ];

  const process = [
    {
      step: '1',
      title: 'بررسی نیاز و استراتژی',
      description: 'تحلیل کلمات کلیدی، مخاطب هدف و اهداف محتوایی'
    },
    {
      step: '2',
      title: 'برنامه‌ریزی محتوا',
      description: 'طراحی ساختار و نقشه محتوا برای هر صفحه'
    },
    {
      step: '3',
      title: 'تحقیق و نگارش',
      description: 'جمع‌آوری اطلاعات و تولید محتوای اولیه'
    },
    {
      step: '4',
      title: 'بهینه‌سازی و ویرایش',
      description: 'بهینه‌سازی سئو، ویرایش محتوا و کنترل کیفیت'
    },
    {
      step: '5',
      title: 'تحویل و پشتیبانی',
      description: 'ارسال فایل نهایی و ارائه پشتیبانی پس از تولید'
    }
  ];

  const stats = [
    { metric: '۲۵۰%', label: 'افزایش ترافیک ارگانیک', color: 'text-blue-600' },
    { metric: '۱۰۰%', label: 'رتبه‌بندی بهتر گوگل', color: 'text-green-600' },
    { metric: '۱۸۵', label: 'کلمات بهینه سئو', color: 'text-purple-600' },
    { metric: '۹۶%', label: 'دلپذیر بودن محتوا', color: 'text-orange-600' }
  ];

  const qualityGuarantees = [
    'بررسی انحصار محتوای تولید شده',
    'رعایت اصول سئو پیشرفته',
    'همگون بودن با سبک برند شما',
    'کیفیت گرامری و ادبی بالای محتوا',
    'بررسی کامل توسط کارشناسان محتوا',
    'امکان ویرایش رایگان تا رضایت کامل'
  ];

  const faqs = [
    {
      question: 'محتوای تولید شده منحصر به فرد است؟',
      answer: 'بله، تمام متون با ضمانت یونیک بودن و بدون کپی برای هر سفارش تولید می‌شوند. از ابزارهای پیشرفته تشخیص کپی برای اطمینان استفاده می‌کنیم.'
    },
    {
      question: 'چه نوع محتواهایی را پوشش می‌دهید؟',
      answer: 'از بلاگ پست، متن سایت، توضیح محصول، معرفی خدمات، پرسش و پاسخ، محتوای خبری، تا هر نوع محتوای نگارشی مورد نیاز شما.'
    },
    {
      question: 'زمان تحویل به چه صورت است؟',
      answer: 'بسته به حجم سفارش، از ۲ روز تا یک هفته متداول است. برای محتوای پیچیده‌تر ممکن است تا دو هفته طول بکشد. مدت دقیق هنگام سفارش اعلام می‌شود.'
    },
    {
      question: 'آیا امکان شخصی‌سازی لحن محتوا دارید؟',
      answer: 'بله، ما بر اساس پرسونای برند شما، لحن گرامشانه، دوستانه، آموزشی، یا حرفه‌ای را انتخاب کرده و محتوای شما را در همین سبک نگارش می‌کنیم.'
    },
    {
      question: 'چه افرادی محتوای شما را تولید می‌کنند؟',
      answer: 'تیم ما شامل کارشناسان محتوا، متخصصین سئو و نویسندگان حرفه‌ای با سالهاست تجربه هستند. هر نویسنده در حوزه تخصصی خودش فعالیت می‌کند.'
    },
    {
      question: 'پس از تولید محتوا چه پشتیبانی دارید؟',
      answer: 'تا یک هفته پس از تحویل، امکان ویرایش رایگان محتوا وجود دارد. همچنین مشاوره استراتژی محتوایی را نیز به صورت ماهانه ارائه می‌دهیم.'
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
        <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-green-100 text-green-700 mb-4">
                تخصصی در تولید محتوای متنی
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                تولید محتوای <span className="gradient-text">متنی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                محتوای جذاب، سئومحور و منحصربه‌فرد توسط کارشناسان حرفه‌ای سلامت دیجیتال. مقالات وبلاگ، توضیحات محصول و متن‌های وب‌سایت با کیفیت عالی.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  سفارش تولید محتوا
                </Button>
                <Button variant="outline" size="lg">
                  نمونه کارها
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-emerald-50 to-green-50">
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
                    <TrendingUp className="h-6 w-6 text-gray-400 mx-auto mt-2" />
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
                انواع محتوای <span className="gradient-text">قابل تولید</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                پوشش تمام نیازهای محتوایی وب‌سایت از وبلاگ گرفته تا محصولات
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <contentType.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{contentType.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-2">{contentType.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{contentType.features}</p>
                  </CardContent>
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
                ویژگی‌های <span className="gradient-text">محتوای ما</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                چرا کیفیت محتوای عصر سئو بالاتر از سایر رقباست؟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-green-600" />
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

        {/* Quality Guarantees */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ضمانت‌های <span className="gradient-text">کیفیت</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                استانداردها و تعهداتی که ما را متمایز می‌کند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {qualityGuarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {guarantee}
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
                مزایای تولید محتوا با <span className="gradient-text">عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نتایج ملموس محتوای حرفه‌ای در رشد کسب‌وکار شما
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="h-5 w-5 text-green-600" />
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
        <section className="section-padding bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">تولید محتوا</span>
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد گام به گام برای تولید محتوای حرفه‌ای و نتیجه‌بخش
              </p>
            </div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-700">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
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
                پاسخ به رایج‌ترین سوالات درباره تولید محتوای متنی
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
              محتوای خود را حرفه‌ای کنید!
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              با تولید محتوای متنی حرفه‌ای و بهینه‌سازی شده، رتبه گوگل خود را بهبود دهید و ترافیک ارگانیک بیشتری کسب کنید. محتوای خوب، پایه هر بازاریابی موفقی است.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                شروع تولید محتوا
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
