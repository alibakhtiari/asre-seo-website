import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bot, Database, FileText, BookOpen, MessageSquare, Clock, CheckCircle, Users, TrendingUp, Shield, Zap, Globe } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'چت‌بات RAG فارسی | Persian AI Chatbot with Knowledge Base',
  description: 'چت‌بات هوشمند فارسی با تکنولوژی RAG، قابلیت یادگیری از اسناد PDF، کاتالوگ‌ها و صفحات سایت برای پاسخگویی دقیق ۲۴/۷. پشتیبانی از CRMs مختلف.',
  keywords: 'چت‌بات RAG, چت‌بات فارسی, هوش مصنوعی, پایگاه دانش, Persian Chatbot, AI Bot, CRM Integration',
  alternates: {
    canonical: 'https://asreseo.com/services/ai/persian-chatbot',
  },
  openGraph: {
    title: 'چت‌بات RAG هوشمند فارسی | عصر سئو',
    description: 'چت‌بات پیشرفته با قابلیت یادگیری از پایگاه دانش، اسناد PDF، کاتالوگ‌ها و صفحات سایت برای پاسخگویی ۲۴/۷.',
    type: 'website',
    url: 'https://asreseo.com/services/ai/persian-chatbot',
    images: [
      {
        url: '/og-persian-chatbot.jpg',
        width: 1200,
        height: 630,
        alt: 'چت‌بات RAG هوشمند فارسی'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'چت‌بات RAG هوشمند فارسی | عصر سئو',
    description: 'چت‌بات پیشرفته با قابلیت یادگیری از پایگاه دانش و پاسخگویی ۲۴/۷.',
    images: ['/og-persian-chatbot.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'چت‌بات RAG هوشمند فارسی',
  'description': 'چت‌بات پیشرفته فارسی با تکنولوژی RAG برای پاسخگویی هوشمند با استفاده از پایگاه دانش سازمانی',
  'serviceType': 'AI Chatbot Development',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات چت‌بات هوش مصنوعی',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'چت‌بات RAG پیشرفته',
          'description': 'سیستم چت‌بات هوشمند با Retrieval-Augmented Generation'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'یکپارچه‌سازی با CRM',
          'description': 'اتصال چت‌بات به سیستم‌های مدیریت ارتباط با مشتری'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چت‌بات RAG چگونه کار می‌کند؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'چت‌بات RAG ابتدا پرسش کاربر را تحلیل کرده، سپس از پایگاه دانش اطلاعات مرتبط را جستجو می‌کند و در نهایت با ترکیب این اطلاعات، پاسخ دقیق و مفصلی ارائه می‌دهد.'
        }
      },
      {
        '@type': 'Question',
        'name': 'چه نوع فایل‌هایی قابل پردازش است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'سیستم قادر به پردازش فایل‌های PDF، اسناد Word، صفحات وب، کاتالوگ‌های محصولات، و انواع مختلف متن‌های فارسی است.'
        }
      }
    ]
  }
}

export default function PersianChatbotPage() {
  const features = [
    {
      icon: Bot,
      title: 'چت‌بات RAG پیشرفته',
      description: 'استفاده از تکنولوژی Retrieval-Augmented Generation برای پاسخ‌های دقیق و مبتنی بر داده‌های شما.',
      benefits: ['دقت بالاتر پاسخ‌ها', 'یادگیری از داده‌های واقعی', 'پاسخ‌های مرتبط و مفید']
    },
    {
      icon: Database,
      title: 'ادغام با پایگاه دانش',
      description: 'اتصال مستقیم به پایگاه دانش، صفحات سایت و اطلاعات محصولات برای پاسخ‌های جامع.',
      benefits: ['دسترسی به اطلاعات کامل', 'پاسخ‌های یکپارچه', 'به‌روزرسانی خودکار']
    },
    {
      icon: FileText,
      title: 'پردازش اسناد PDF',
      description: 'خواندن و تحلیل فایل‌های PDF، کاتالوگ‌ها و مستندات برای استخراج اطلاعات مرتبط.',
      benefits: ['تحلیل خودکار اسناد', 'استخراج اطلاعات کلیدی', 'پشتیبانی از فایل‌های چندگانه']
    },
    {
      icon: BookOpen,
      title: 'یادگیری از محتوای سایت',
      description: 'تحلیل خودکار صفحات وب‌سایت و ایجاد پایگاه دانش جامع از محتوای موجود.',
      benefits: ['به‌روزرسانی مداوم', 'یادگیری از محتوا', 'پوشش کامل وب‌سایت']
    },
    {
      icon: MessageSquare,
      title: 'گفتگوی طبیعی فارسی',
      description: 'درک عمیق زبان فارسی و قابلیت گفتگوی طبیعی و روان با کاربران.',
      benefits: ['مهارت درک بالا', 'پاسخ‌های طبیعی', 'پشتیبانی از لهجه‌های مختلف']
    },
    {
      icon: Clock,
      title: 'پشتیبانی ۲۴/۷',
      description: 'ارائه خدمات پشتیبانی و پاسخگویی در تمام ساعات شبانه‌روز بدون وقفه.',
      benefits: ['دسترسی شبانه‌روزی', 'پاسخ فوری', 'کاهش هزینه‌های عملیاتی']
    }
  ];

  const benefits = [
    { metric: '۸۰%', label: 'کاهش بار کاری پشتیبانی', color: 'text-green-600' },
    { metric: '۲۴/۷', label: 'پاسخگویی مداوم', color: 'text-blue-600' },
    { metric: '۹۵%', label: 'دقت پاسخ‌ها', color: 'text-purple-600' },
    { metric: '۶۰%', label: 'افزایش رضایت مشتری', color: 'text-orange-600' }
  ];

  const integrations = [
    'CRM سیستم‌ها (Salesforce, HubSpot, Pipedrive)',
    'پایگاه‌های داده (MySQL, PostgreSQL, MongoDB)',
    'پلتفرم‌های فروش آنلاین (Shopify, WooCommerce)',
    'سیستم‌های تیکت (Zendesk, Freshdesk)',
    'APIهای اختصاصی',
    'سیستم‌های مدیریت محتوا (WordPress, Drupal)'
  ];

  const processSteps = [
    {
      step: '۱',
      title: 'تحلیل نیازها',
      desc: 'بررسی ساختار سازمان، پایگاه دانش موجود و نیازهای مشتریان'
    },
    {
      step: '۲',
      title: 'آماده‌سازی داده‌ها',
      desc: 'جمع‌آوری و ساختارمندسازی اسناد، صفحات وب و اطلاعات سازمان'
    },
    {
      step: '۳',
      title: 'آموزش مدل AI',
      desc: 'آموزش مدل هوش مصنوعی با داده‌های سازمانی و تنظیم پارامترها'
    },
    {
      step: '۴',
      title: 'تست و بهینه‌سازی',
      desc: 'آزمایش چت‌بات با سناریوهای مختلف و بهبود عملکرد'
    },
    {
      step: '۵',
      title: 'راه‌اندازی و پشتیبانی',
      desc: 'پیاده‌سازی عملیاتی و ارائه خدمات پشتیبانی مداوم'
    }
  ];

  const faqs = [
    {
      question: 'چت‌بات RAG چگونه کار می‌کند؟',
      answer: 'چت‌بات RAG ابتدا پرسش کاربر را تحلیل کرده، سپس از پایگاه دانش اطلاعات مرتبط را جستجو می‌کند و در نهایت با ترکیب این اطلاعات، پاسخ دقیق و مفصلی ارائه می‌دهد.'
    },
    {
      question: 'چه نوع فایل‌هایی قابل پردازش است؟',
      answer: 'سیستم قادر به پردازش فایل‌های PDF، اسناد Word، صفحات وب، کاتالوگ‌های محصولات، و انواع مختلف متن‌های فارسی است.'
    },
    {
      question: 'آیا چت‌بات به‌روزرسانی خودکار دارد؟',
      answer: 'بله، سیستم به‌طور خودکار محتوای جدید وب‌سایت و اسناد اضافه شده را تحلیل کرده و پایگاه دانش خود را به‌روزرسانی می‌کند.'
    },
    {
      question: 'امکان یکپارچه‌سازی با سیستم‌های موجود وجود دارد؟',
      answer: 'بله، چت‌بات قابلیت اتصال به CRM، سیستم‌های فروش، پایگاه‌های داده و سایر نرم‌افزارهای سازمانی را دارد.'
    },
    {
      question: 'چقدر طول می‌کشد تا چت‌بات آماده باشد؟',
      answer: 'بسته به حجم داده‌ها و پیچیدگی نیازها، معمولاً بین ۲ تا ۶ هفته زمان نیاز است تا چت‌بات کاملاً آموزش دیده و آماده شود.'
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                تکنولوژی RAG پیشرفته
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                چت‌بات <span className="gradient-text">RAG</span> هوشمند
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                چت‌بات پیشرفته فارسی با قابلیت یادگیری از پایگاه دانش سازمانی، اسناد PDF و صفحات وب‌سایت برای پاسخگویی دقیق و هوشمند ۲۴ ساعته
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  دمو رایگان چت‌بات
                </Button>
                <Button variant="outline" size="lg">
                  مشاوره رایگان
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قابلیت‌های چت‌بات RAG
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                چت‌بات هوشمند با تکنولوژی پیشرفته RAG که از داده‌های شما یاد می‌گیرد و پاسخ‌های دقیقی ارائه می‌دهد
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-indigo-600" />
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
        <section className="section-padding bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                نتایج <span className="gradient-text">اثبات شده</span>
              </h2>
              <p className="text-xl text-gray-600">
                آمار عملکرد چت‌بات‌های RAG در سازمان‌های مختلف
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardContent className="p-6">
                    <div className={`text-4xl font-bold ${benefit.color} mb-2`}>
                      {benefit.metric}
                    </div>
                    <p className="text-gray-900 font-medium">
                      {benefit.label}
                    </p>
                    <TrendingUp className="h-5 w-5 text-green-600 mx-auto mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                یکپارچه‌سازی <span className="gradient-text">جامع</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اتصال به تمام سیستم‌های سازمانی برای تجربه‌ای یکپارچه و هوشمند
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">پیاده‌سازی</span>
              </h2>
              <p className="text-xl text-gray-600">
                مراحل راه‌اندازی چت‌بات RAG در سازمان شما
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl shadow-sm">
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
                پاسخ به رایج‌ترین سوالات درباره چت‌بات RAG فارسی
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
              آماده هوشمندسازی پشتیبانی سازمانتان هستید؟
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              چت‌بات RAG هوشمند فارسی را پیاده‌سازی کنید و تجربه پشتیبانی بی‌نظیری برای مشتریان خود فراهم آورید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                شروع پیاده‌سازی چت‌بات
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
