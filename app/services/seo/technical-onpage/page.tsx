import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../../src/generated/images-map.json'
import { CheckCircle, Search, TrendingUp, Zap, Shield, Smartphone, Code, Database, Globe, Gauge, Activity, Monitor, AlertTriangle, Target, Settings, BarChart3 } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'سئو تکنیکال و داخلی | بهینه‌سازی فنی و محتوایی سایت | عصر سئو',
    description: 'خدمات جامع سئو تکنیکال و داخلی (On-Page). افزایش سرعت سایت، رفع خطاهای فنی، تحقیق کلمات کلیدی و بهینه‌سازی ساختار برای رتبه اول گوگل.',
    keywords: 'سئو تکنیکال, سئو داخلی, On-Page SEO, Technical SEO, افزایش سرعت سایت, تحقیق کلمات کلیدی, Core Web Vitals',
    alternates: {
        canonical: 'https://asreseo.com/services/seo/technical-onpage',
    },
    openGraph: {
        title: 'سئو تکنیکال و داخلی | بهینه‌سازی کامل سایت | عصر سئو',
        description: 'بهینه‌سازی فنی و محتوایی سایت برای کسب رتبه‌های برتر گوگل و تجربه کاربری عالی.',
        type: 'website',
        url: 'https://asreseo.com/services/seo/technical-onpage',
        images: [
            {
                url: '/og-technical-onpage.jpg',
                width: 1200,
                height: 630,
                alt: 'سئو تکنیکال و داخلی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'سئو تکنیکال و داخلی | عصر سئو',
        description: 'بهینه‌سازی فنی و محتوایی سایت برای رتبه اول گوگل.',
        images: ['/og-technical-onpage.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'سئو تکنیکال و داخلی',
    'description': 'خدمات جامع بهینه‌سازی فنی و داخلی وب‌سایت شامل سرعت، امنیت، ساختار و محتوا',
    'serviceType': 'SEO Services',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات سئو تکنیکال و داخلی',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'سئو تکنیکال',
                    'description': 'بهینه‌سازی سرعت، امنیت و ساختار فنی سایت'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'سئو داخلی',
                    'description': 'تحقیق کلمات کلیدی و بهینه‌سازی محتوا و متا تگ‌ها'
                }
            }
        ]
    },
    'faqSection': {
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'تفاوت سئو تکنیکال و داخلی چیست؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'سئو تکنیکال به زیرساخت فنی سایت (سرعت، امنیت، ایندکس) می‌پردازد، در حالی که سئو داخلی بر محتوا، کلمات کلیدی و ساختار صفحات تمرکز دارد. هر دو برای موفقیت ضروری هستند.'
                }
            },
            {
                '@type': 'Question',
                'name': 'چه زمانی نتایج بهینه‌سازی مشخص می‌شود؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'بهبودهای فنی معمولاً ظرف ۱-۲ هفته تأثیر خود را نشان می‌دهند، اما تأثیر کامل بر رتبه‌بندی ممکن است ۱ تا ۳ ماه زمان ببرد.'
                }
            }
        ]
    }
}

export default function TechnicalOnPageSEO() {
    const technicalServices = [
        {
            icon: Zap,
            title: 'بهینه‌سازی سرعت و Core Web Vitals',
            description: 'افزایش سرعت لود صفحات به زیر ۳ ثانیه و بهبود امتیازهای حیاتی گوگل (LCP, FID, CLS).',
            benefits: ['تجربه کاربری عالی', 'رتبه بهتر موبایل', 'کاهش نرخ پرش']
        },
        {
            icon: Shield,
            title: 'امنیت و SSL',
            description: 'پیکربندی کامل HTTPS، رفع آسیب‌پذیری‌های امنیتی و حفاظت از داده‌های کاربران.',
            benefits: ['اعتماد کاربران', 'سیگنال مثبت رتبه‌بندی', 'حفاظت از برند']
        },
        {
            icon: Code,
            title: 'داده‌های ساختاریافته (Schema)',
            description: 'پیاده‌سازی کدهای اسکیما برای نمایش غنی در نتایج جستجو (ستاره، قیمت، سوالات متداول).',
            benefits: ['نرخ کلیک بالاتر', 'نمایش متمایز', 'درک بهتر گوگل']
        },
        {
            icon: Smartphone,
            title: 'سئو موبایل (Mobile-First)',
            description: 'تضمین عملکرد بی‌نقص سایت در دستگاه‌های موبایل و تبلت با طراحی واکنش‌گرا.',
            benefits: ['ایندکس موبایل اول', 'دسترسی بیشتر', 'رضایت کاربران']
        },
        {
            icon: Database,
            title: 'بهینه‌سازی خزش و ایندکس',
            description: 'مدیریت بودجه خزش، اصلاح فایل robots.txt و نقشه سایت برای ایندکس سریع و کامل.',
            benefits: ['ایندکس سریع‌تر', 'کشف صفحات جدید', 'حذف صفحات زاید']
        },
        {
            icon: Globe,
            title: 'ساختار URL و معماری سایت',
            description: 'طراحی ساختار آدرس‌دهی منطقی و معماری اطلاعاتی برای درک آسان توسط کاربر و گوگل.',
            benefits: ['ناوبری آسان', 'توزیع اعتبار صفحات', 'URLهای تمیز']
        }
    ];

    const onPageServices = [
        {
            icon: Search,
            title: 'تحقیق کلمات کلیدی پیشرفته',
            description: 'شناسایی کلمات کلیدی پول‌ساز، طولانی (Long-tail) و بررسی شکاف کلمات کلیدی رقبا.',
            benefits: ['ترافیک هدفمند', 'نرخ تبدیل بالا', 'استراتژی محتوایی دقیق']
        },
        {
            icon: Settings,
            title: 'بهینه‌سازی متا تگ‌ها',
            description: 'نوشتن عناوین جذاب و توضیحات متا (Meta Description) برای افزایش نرخ کلیک (CTR).',
            benefits: ['CTR بالاتر', 'جذب کاربر بیشتر', 'تطابق با جستجو']
        },
        {
            icon: Monitor,
            title: 'بهینه‌سازی محتوا و هدینگ‌ها',
            description: 'ساختاردهی صحیح محتوا با تگ‌های H1-H6 و استفاده طبیعی از کلمات کلیدی و LSI.',
            benefits: ['خوانایی بهتر', 'درک موضوع توسط گوگل', 'رتبه در کلمات کلیدی']
        },
        {
            icon: Target,
            title: 'لینک‌سازی داخلی استراتژیک',
            description: 'ایجاد شبکه لینک‌های داخلی برای انتقال اعتبار به صفحات مهم و افزایش زمان حضور کاربر.',
            benefits: ['افزایش اعتبار صفحات', 'کاهش نرخ پرش', 'اینکس بهتر صفحات']
        }
    ];

    const coreWebVitals = [
        {
            metric: 'LCP',
            title: 'Largest Contentful Paint',
            description: 'زمان بارگذاری بزرگترین عنصر محتوایی',
            target: '< ۲.۵ ثانیه',
            icon: Gauge,
            color: 'text-blue-600'
        },
        {
            metric: 'FID',
            title: 'First Input Delay',
            description: 'تأخیر اولین تعامل کاربر با صفحه',
            target: '< ۱۰۰ میلی‌ثانیه',
            icon: Activity,
            color: 'text-green-600'
        },
        {
            metric: 'CLS',
            title: 'Cumulative Layout Shift',
            description: 'میزان تغییر ناگهانی چیدمان صفحه',
            target: '< ۰.۱ امتیاز',
            icon: Monitor,
            color: 'text-purple-600'
        }
    ];

    const technicalIssues = [
        'خطاهای crawl و index کردن توسط گوگل',
        'ناهنجاری در فایل robots.txt یا متا روبات',
        'اشکال در Sitemap XML و ساختار ناوبری',
        'مشکل URLهای تکراری یا نبود canonical مناسب',
        'لینک‌های شکسته و خطاهای ۴۰۴ و ۵xx',
        'خطاهای Core Web Vitals (LCP، FID، CLS)',
        'مشکلات ساختار URL و پارامترهای غیرضروری',
        'اختلالات طراحی واکنش‌گرا و موبایل',
        'مشکلات تصاویر غیربهینه و حجم بالا',
        'نبود پروتکل HTTPS و گواهی SSL منقضی',
        'کدهای برنامه‌نویسی نامناسب و ارورهای JS',
        'مشکلات دسترسی‌پذیری و استاندارهای WCAG'
    ];

    const stats = [
        { metric: '۳۰۰%', label: 'افزایش سرعت سایت', color: 'text-blue-600', icon: Zap },
        { metric: '۹۵+', label: 'امتیاز PageSpeed', color: 'text-green-600', icon: Gauge },
        { metric: '۴۰۰%', label: 'رشد ترافیک ارگانیک', color: 'text-purple-600', icon: TrendingUp },
        { metric: '۱۰۰%', label: 'رفع خطاهای فنی', color: 'text-orange-600', icon: CheckCircle }
    ];

    const faqs = [
        {
            question: 'سئو تکنیکال چه تأثیری در رتبه سایت دارد؟',
            answer: 'سئو تکنیکال زیربنای سایت شماست. بدون زیرساخت فنی سالم (سرعت، امنیت، قابلیت خزش)، حتی بهترین محتوا هم رتبه نمی‌گیرد. تأثیر آن تا ۴۰٪ در رتبه‌بندی برآورد می‌شود.'
        },
        {
            question: 'تحقیق کلمات کلیدی چقدر زمان می‌برد؟',
            answer: 'این یک فرآیند مداوم است، اما تحقیق اولیه جامع معمولاً ۱ تا ۲ هفته زمان می‌برد تا تمام فرصت‌های بازار و رقبا شناسایی شوند.'
        },
        {
            question: 'آیا رفع خطاهای تکنیکال باعث افت رتبه می‌شود؟',
            answer: 'خیر، برعکس! رفع خطاها ممکن است باعث نوسان موقت شود (چون گوگل دوباره سایت را بررسی می‌کند)، اما در نهایت منجر به رشد پایدار و بهبود رتبه خواهد شد.'
        },
        {
            question: 'Core Web Vitals چیست و چرا مهم است؟',
            answer: 'این‌ها معیارهای گوگل برای سنجش تجربه کاربری واقعی (سرعت، تعامل، پایداری بصری) هستند و از سال ۲۰۲۱ رسماً فاکتور رتبه‌بندی محسوب می‌شوند.'
        },
        {
            question: 'آیا سئو داخلی فقط شامل کلمات کلیدی است؟',
            answer: 'خیر، سئو داخلی شامل بهینه‌سازی تصاویر، ساختار هدینگ‌ها، لینک‌سازی داخلی، بهبود نرخ کلیک (CTR)، و نگارش محتوای کاربرپسند نیز می‌شود.'
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
                <section className="section-padding bg-linear-to-br from-cyan-50 to-blue-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <Badge className="bg-cyan-100 text-cyan-700 mb-4 px-4 py-1 text-sm border-cyan-200">
                                    بهینه‌سازی جامع تکنیکال و داخلی
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    سئو <span className="gradient-text">تکنیکال و داخلی</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    زیربنای فنی قدرتمند و محتوای بهینه‌سازی شده؛ دو بال پرواز وب‌سایت شما به صفحه اول گوگل. سرعت بالا، ساختار استاندارد و کلمات کلیدی هدفمند.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                                        شروع بهینه‌سازی سایت
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                                        آنالیز رایگان فنی
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-cyan-600/10 to-transparent z-10" />
                                <OptimizedImage
                                    src="/images/technical-onpage-hero.webp"
                                    alt="سئو تکنیکال و داخلی"
                                    fill
                                    imageData={imagesMap['/images/technical-onpage-hero.webp']}
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section-padding bg-linear-to-r from-blue-50 to-cyan-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <stat.icon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                                        <div className="text-3xl font-bold text-cyan-700 mb-2">
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

                {/* Technical Services Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خدمات <span className="gradient-text">سئو تکنیکال</span> (Technical SEO)
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                ساخت زیربنای فنی مستحکم برای درک بهتر سایت توسط گوگل
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {technicalServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                                                <service.icon className="h-6 w-6 text-cyan-600" />
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

                {/* On-Page Services Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خدمات <span className="gradient-text">سئو داخلی</span> (On-Page SEO)
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                بهینه‌سازی محتوا و ساختار صفحات برای جذب حداکثری کاربران و گوگل
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {onPageServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                <service.icon className="h-6 w-6 text-blue-600" />
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

                {/* Core Web Vitals Section */}
                <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                استانداردهای <span className="gradient-text">Core Web Vitals</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                ما سایت شما را برای پاس کردن سخت‌گیرانه‌ترین معیارهای تجربه کاربری گوگل بهینه می‌کنیم
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {coreWebVitals.map((vital, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                                <vital.icon className="h-6 w-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">{vital.metric}</h3>
                                                <p className="text-sm text-gray-600">{vital.title}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-3 leading-relaxed">
                                            {vital.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">هدف بهینه:</span>
                                            <span className={`text-lg font-bold ${vital.color}`}>{vital.target}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Issues Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                رفع <span className="gradient-text">خطاهای فنی</span> کشنده
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                مشکلاتی که مانع رشد سایت شما می‌شوند را شناسایی و ریشه‌کن می‌کنیم
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {technicalIssues.map((issue, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <span className="text-gray-900 font-medium leading-relaxed text-sm">
                                        {issue}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                سوالات <span className="gradient-text">متداول</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                پاسخ به سوالات شما درباره سئو تکنیکال و داخلی
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
                            سایت خود را برای موفقیت آماده کنید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            با ترکیب سئو تکنیکال قدرتمند و سئو داخلی دقیق، پتانسیل واقعی وب‌سایت خود را آزاد کنید. همین حالا برای آنالیز رایگان اقدام کنید.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                                شروع بهینه‌سازی
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
