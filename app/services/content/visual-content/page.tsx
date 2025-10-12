import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Image, Film, Sparkles, Star, BadgeCheck, Palette, Video, Camera, Edit, Zap, TrendingUp, Eye, Target, Award, CheckCircle2 } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'محتوای تصویری و ویدیویی | طراحی گرافیک حرفه‌ای | افزایش نرخ تبدیل ۴۰۰% | عصر سئو',
  description: 'طراحی گرافیک و تولید محتوای بصری با ویدیو مارکتینگ، اینفوگرافیک انیمیشنی و عکاسی حرفه‌ای. افزایش نرخ تبدیل تا ۴۰۰% با محتوای جذاب و ویروسی.',
  keywords: 'محتوای تصویری, ویدیو مارکتینگ, طراحی گرافیک, اینفوگرافیک, موشن گرافیک, تولید محتوا',
  alternates: {
    canonical: 'https://asreseo.com/services/content/visual-content',
  },
  openGraph: {
    title: 'محتوای تصویری و ویدیویی | عصر سئو',
    description: 'طراحی گرافیک و تولید ویدیو حرفه‌ای برای برند شما.',
    type: 'website',
    url: 'https://asreseo.com/services/content/visual-content',
    images: [
      {
        url: '/og-visual-content.jpg',
        width: 1200,
        height: 630,
        alt: 'محتوای تصویری و ویدیویی حرفه‌ای'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محتوای تصویری | عصر سئو',
    description: 'طراحی گرافیک و تولید ویدیو برای برند شما.',
    images: ['/og-visual-content.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'محتوای تصویری و ویدیویی',
  'description': 'خدمات تولید محتوای بصری شامل طراحی گرافیک، ویدیو مارکتینگ و اینفوگرافیک',
  'serviceType': 'Visual Content Production',
  'provider': {
    '@type': 'Organization',
    'name': 'عصر سئو',
    'url': 'https://asreseo.com'
  },
  'areaServed': 'Iran',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات محتوای بصری',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'طراحی گرافیک',
          'description': 'بنر، پوستر و گرافیک تبلیغاتی حرفه‌ای'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'ویدیو مارکتینگ',
          'description': 'تولید و تدوین ویدیوهای تبلیغاتی'
        }
      }
    ]
  },
  'faqSection': {
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'چقدر زمان برای تولید هر پروژه نیاز است؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'بسته به پیچیدگی پروژه، گرافیک‌ها ۲-۵ روز و ویدیوهای پیشرفته ۱۰-۱۴ روز.'
        }
      },
      {
        '@type': 'Question',
        'name': 'فرمت فایل‌های تحویلی چیست؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'تمام فرمت‌های سوشال مدیا، وب و پرینت با بالاترین کیفیت.'
        }
      }
    ]
  }
}

export default function VisualContentPage() {
  const serviceCategories = [
    {
      category: 'طراحی گرافیک',
      icon: Palette,
      services: [
        {
          name: 'بنر و پوستر تبلیغاتی',
          description: 'طراحی حرفه‌ای برای وب‌سایت، شبکه‌های اجتماعی و تبلیغات آنلاین',
          formats: ['JPG', 'PNG', 'PSD', 'AI']
        },
        {
          name: 'اینفوگرافیک',
          description: 'جمع‌بندی اطلاعاتی پیچیده در گرافیک‌های جذاب و آسان‌فهم',
          formats: ['JPG', 'PNG', 'PDF', 'Animated GIF']
        },
        {
          name: 'عکس نوشته (Photo Content)',
          description: 'ترکیب متن تخصصی با تصاویر مرتبط و جذاب برای شبکه‌های اجتماعی',
          formats: ['JPG', 'PNG', 'Stories', 'Carousel']
        }
      ]
    },
    {
      category: 'تولید ویدیو',
      icon: Video,
      services: [
        {
          name: 'ویدیوهای تبلیغاتی محصول',
          description: 'معرفی محصول یا خدمات با سبک‌های مختلف تبلیغاتی',
          formats: ['MP4', 'MOV', 'WebM']
        },
        {
          name: 'موشن گرافیک و انیمیشن',
          description: 'تبلیغات متحرک با سبک مدرم و جذاب برای توضیح توپیش‌ها',
          formats: ['MP4', 'GIF', 'Animated PNG']
        },
        {
          name: 'ویدیوهای زنده و رویدادها',
          description: 'پخش زنده محصولات، رویدادها و آموزش‌های زنده',
          formats: ['Facebook Live', 'Instagram Live', 'YouTube']
        }
      ]
    },
    {
      category: 'عکاسی حرفه‌ای',
      icon: Camera,
      services: [
        {
          name: 'عکاسی محصول',
          description: 'تصاویر جذاب و حرفه‌ای محصولات با نورپردازی و تنظیم حرفه‌ای',
          formats: ['JPG', 'TIFF', 'PSD']
        },
        {
          name: 'عکاسی شرکتی و تیم',
          description: 'عکس‌های حرفه‌ای کارکنان، محیط کار و فعالیت‌های شرکتی',
          formats: ['JPG', 'Web-optimized']
        },
        {
          name: 'عکاسی محتوایی',
          description: 'تصاویر مرتبط با محتواهای تبلیغاتی و آموزشی',
          formats: ['JPG', 'PNG', 'Animated']
        }
      ]
    },
    {
      category: 'تدوین و پُست‌پراگنسی',
      icon: Edit,
      services: [
        {
          name: 'ویرایش و رنگ‌بندی پیشرفته',
          description: 'تصحیح رنگ، نور و بهبود کیفیت تصاویر و ویدیوها',
          formats: ['All standard formats']
        },
        {
          name: 'بهینه‌سازی برای سوشال مدیا',
          description: 'تنظیم اندازه، کیفیت و فرمت برای حداکثر جذابیت',
          formats: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn']
        },
        {
          name: 'افزودن جلوه‌های ویژه',
          description: 'افکت‌های مدرن و جذاب برای افزایش تعامل محتوا',
          formats: ['Video effects', 'Text overlays', 'Transitions']
        }
      ]
    }
  ];

  const techniques = [
    {
      name: 'ویسوال هیراکی',
      description: 'مرتب‌سازی عناصر بصری برای راهنمایی چشم مخاطب',
      impact: '+۳۲۰% نرخ پیگیری'
    },
    {
      name: 'رنگ درمانی (Color Psychology)',
      description: 'استفاده از رنگ‌های هدفمند برای تأثیرگذاری عاطفی',
      impact: '+۲۵۰% نرخ احساسات مثبت'
    },
    {
      name: 'عناصر روانشناختی',
      description: 'کاربرد تکنیک‌های F-Pattern و Z-Pattern برای تأثیرگزاری',
      impact: '+۱۸۰% نرخ نگاه'
    },
    {
      name: 'استوری‌تلینگ بصری',
      description: 'روایت داستان برند از طریق تصاویر مرتبط و پشت‌هم',
      impact: '+۴۰۰% نرخ ماندگاری'
    }
  ];

  const contentTypes = [
    {
      type: 'محتوای آموزشی بصری',
      audience: 'دریافت‌آموزان',
      goal: 'آموزش مهارت‌ها',
      impact: '+۲۵۰% نرخ یادگیری'
    },
    {
      type: 'محتوای سرگرم‌کننده',
      audience: 'جوانان',
      goal: 'تعامل و برندینگ',
      impact: '+۵۰۰% نرخ وایرال'
    },
    {
      type: 'محتوای انگیزشی',
      audience: 'کمیونیتی برند',
      goal: 'وفاداری مشتری',
      impact: '+۳۵۰% تعامل اجتماعی'
    },
    {
      type: 'محتوای تبلیغاتی مستقیم',
      audience: 'مشتریان بالقوه',
      goal: 'افزایش فروش',
      impact: '+۴۰۰% نرخ تبدیل'
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'کاربرد تکنیک‌های روانشناسی رنگ',
      description: 'بهینه‌سازی رنگ‌ها برای تأثیرگذاری عاطفی و تصمیم‌گیری مخاطبان بر اساس علم رنگ‌شناسی.',
      benefits: ['افزایش احساس مثبت', 'ترغیب به اقدام', 'تقویت برند']
    },
    {
      icon: Eye,
      title: 'طراحی برای الگوریتم‌های بصری',
      description: 'سازگار با تغییرات الگوریتم شبکه‌های اجتماعی و ترجیحات بصری کاربران مدرن.',
      benefits: ['دسترسی بیشتر', 'تعامل بالاتر', 'رشد پایدار']
    },
    {
      icon: Zap,
      title: 'مالتی‌پلتفرم و رسپانسیو',
      description: 'طراحی محتوا برای همه دستگاه‌ها و پلتفرم‌ها از موبایل تا تلویزیون.',
      benefits: ['پوشش کامل', 'تجربه یکپارچه', 'بازدهی حداکثری']
    },
    {
      icon: Target,
      title: 'معیارگیری و تحلیل عملکرد',
      description: 'پیگیری منظم آمار تعامل، دسترس‌پذیری و نرخ تبدیل با ابزارهای تحلیلی پیشرفته.',
      benefits: ['بهینه‌سازی مداوم', 'گزارش شفاف', 'تصمیم‌گیری داده‌محور']
    },
    {
      icon: Sparkles,
      title: 'توزیع هوشمند در کانال‌ها',
      description: 'تخصیص محتوای مناسب به پلتفرم‌های مختلف بر اساس الگوریتم و مخاطب هر کدام.',
      benefits: ['بازدهی بالاتر', 'تقویت برندسازمانی', 'مدیریت اولویت‌ها']
    },
    {
      icon: Award,
      title: 'کیفیت شبیه به برندهای جهانی',
      description: 'استفاده از تجهیزات حرفه‌ای و تکنیک‌های روز جهانی در تولید محتوای بصری.',
      benefits: ['اعتماد مشتریان', 'برندینگ حرفه‌ای', 'مزیت رقابتی']
    }
  ];

  const benefits = [
    '۴۰۰% افزایش نرخ تعامل و زمان ماندگاری مخاطب با محتوای جذاب‌تر',
    '۶۰۰% بهبود احتمال وایرال شدن پست‌ها در شبکه‌های اجتماعی',
    '۲۸۰% افزایش نرخ کلیک و نرخ تبدیل با طراحی‌های استراتژیک‌تر',
    '۵۰% کاهش هزینه بازاریابی به دلیل بازدهی بالاتر محتوای بصری',
    'روشی اثبات‌شده با آمار عالی برای کسب‌وکارهای بزرگ دنیا'
  ];

  const workflowSteps = [
    {
      step: 'بررسی نیاز و استراتژی',
      desc: 'فهم کسب‌وکار، هدف محتوا و استراتژی برند شما'
    },
    {
      step: 'ایده‌پردازی و سناریونویسی',
      desc: 'توسعه مفهوم خلاقانه و نگارش سناریوی بصری جذاب'
    },
    {
      step: 'طراحی و تولید اولیه',
      desc: 'ساخت مدل‌های اولیه برای بازخورد و بهبود'
    },
    {
      step: 'تولید نهایی و تدوین',
      desc: 'اجرای کامل طرح با تجهیزات حرفه‌ای و نهایی‌سازی'
    },
    {
      step: 'توزیع و مانیتورینگ',
      desc: 'انتشار هوشمند و پیگیری عملکرد با تحلیل‌های دقیق'
    },
    {
      step: 'گزارش‌دهی و بهینه‌سازی',
      desc: 'ارائه نتایج و پیشنهادات بهبود برای کمپین‌های بعدی'
    }
  ];

  const stats = [
    { metric: '۴۰۰%', label: 'افزایش تعامل', color: 'text-blue-600', icon: TrendingUp },
    { metric: '۶۰۰%', label: 'نرخ وایرال', color: 'text-green-600', icon: Sparkles },
    { metric: '۲۵۰%', label: 'نرخ یادگیری', color: 'text-orange-600', icon: Eye },
    { metric: '۵۰۰%', label: 'بلندترنویسی', color: 'text-red-600', icon: Target }
  ];

  const faqs = [
    {
      question: 'چقدر زمان برای تولید محتوای بصری نیاز است؟',
      answer: 'بسته به پیچیدگی پروژه متفاوت است: گرافیک ساده ۲-۳ روز، اینفوگرافیک متحرک ۴-۶ روز، ویدیوهای کوتاه ۵-۷ روز و ویدیوهای حرفه‌ای ۱۰-۱۴ روز. زمان‌های تخمینی دقیق هنگام مشاوره رایگان اعلام می‌شود.'
    },
    {
      question: 'فرمت فایل‌های تولیدی چیست و چگونه تحویل داده می‌شود؟',
      answer: 'تمام فرمت‌های سوشال مدیا، وب و پرینت با بالاترین کیفیت. فایل‌های وردپرس با اندازه‌های آماده برای انتشار مستقیم. تحویل از طریق گوگل درایو با امکان دانلود نامحدود و پشتیبانی فنی پس از تحویل.'
    },
    {
      question: 'آیا سناریونویسی و ایده‌پردازی هم جزو خدمات شماست؟',
      answer: 'بله! تیم متخصص عصر سئو در مرحله اول یک جلسه مشاوره مجانی برگزار می‌کند و سپس بر اساس استراتژی برند شما، ایده‌های خلاقانه و سناریوهای جلب‌کننده پیشنهاد می‌دهد. این مرحله مهمترین قسمت کار است.'
    },
    {
      question: 'چطور اطمینان حاصل کنیم از کیفیت بالای کار؟',
      answer: 'تیم طراحی عصر سئو سال‌ها تجربه کار با برندهای بزرگ ایران دارد و نمونه کارها و رضایت مشتریان قبلی را می‌توانید بررسی کنید. همچنین قبل از تولید نهایی، مدل‌های اولیه را برای تأیید نهایی ارائه می‌دهیم.'
    },
    {
      question: 'هزینه تولید محتوای بصری چقدر است؟',
      answer: 'قیمت‌گذاری بر اساس حجم، پیچیدگی و کیفیت کار تعیین می‌شود. بسته‌ها از ۵۰۰ هزار تومان برای گرافیک ساده شروع می‌شود و بسته‌های VIP تا ۱۰ میلیون تومان برای پروژه‌های کمپینی بزرگ. هزینه بسیار منطقی نسبت به کیفیت و بازدهی final است.'
    },
    {
      question: 'آیا از تجهیزات و نرم‌افزارهای حرفه‌ای استفاده می‌کنید؟',
      answer: 'بله! استفاده از تجهیزات عکاسی حرفه‌ای شامل دوربین Canon و Nikon، سیستم‌های نورپردازی پیشرفته، نرم‌افزارهای Adobe Creative Suite و DaVinci Resolve برای تدوین و After Effects برای موشن گرافیک.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 mb-4">
                تولید محتوای بصری حرفه‌ای
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                محتوای <span className="gradient-text">تصویری و ویدیویی</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                قدرت دیداری برای برند شما! ویدیو مارکتینگ حرفه‌ای با افزایش نرخ تبدیل تا ۴۰۰% و محتوای گرافیکی که میلیون‌ها بار دیده می‌شود در عصر سئو.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white">
                  سفارش محتوای بصری
                </Button>
                <Button variant="outline" size="lg">
                  مشاهده نمونه کارها
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
                    <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-pink-700 mb-2">
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

        {/* Content Types Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                استراتژی محتوا <span className="gradient-text">بر اساس هدف</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                رویکردهای تخصصی برای اهداف بازاریابی متفاوت
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((content, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <Sparkles className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{content.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">مخاطب هدف:</span>
                        <span className="text-indigo-600 font-medium">{content.audience}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">هدف اصلی:</span>
                        <span className="text-purple-600 font-medium">{content.goal}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 w-fit">{content.impact}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                دسته‌بندی کامل <span className="gradient-text">خدمات بصری عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تمام نیازهای محتوای تصویری برند شما در یک پلتفرم
              </p>
            </div>

            <div className="space-y-12">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {service.formats.map((format, formatIndex) => (
                              <Badge key={formatIndex} variant="outline" className="text-xs">
                                {format}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Psychology Techniques Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تکنیک‌های <span className="gradient-text">روانشناسی بصری پیشرفته</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                علوم اثبات‌شده برای تأثیرگذاری حداکثری بر مخاطب
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techniques.map((technique, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {technique.name}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {technique.description}
                        </p>
                        <Badge className="bg-green-100 text-green-700">
                          {technique.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تکنولوژی‌های پیشرفته <span className="gradient-text">تولید محتوای بصری</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                از روانشناسی رنگ تا الگوریتم‌های یادگیری ماشین
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
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
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
                مزایای استراتژیک <span className="gradient-text">محتوای بصری عصر سئو</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                آمارهای واقعی از برندهایی که از محتوای بصری حرفه‌ای استفاده کرده‌اند
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
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-pink-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فرآیند <span className="gradient-text">تولید محتوای بصری</span> عصر سئو
              </h2>
              <p className="text-xl text-gray-600">
                رویکرد سیستماتیک علمی از ایده‌پردازی تا تحلیل نتایج
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
                پاسخ به پرسش‌های رایج مشتریان درباره محتوای بصری
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
              محتوای بصری برند شما را حرفه‌ای و جذاب کنیم!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              عصر سئو با تجهیزات حرفه‌ای، تکنیک‌های روز دنیا و تیم تخصصی آماده ارائه خدمات گرافیک و تولید ویدیو به برند شماست. اولین پروژه خود را همین امروز شروع کنید و تفاوت را ببینید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                سفارش محتوای بصری
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                مشاوره رایگان طراحی
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
