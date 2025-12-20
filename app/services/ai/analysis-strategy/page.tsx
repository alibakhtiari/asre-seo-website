import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { BarChart3, Search, Target, TrendingUp, Eye, Brain, Shield, LineChart, PieChart, CheckCircle, Zap, Users, Lightbulb } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'تحلیل و استراتژی هوشمند | AI Analysis & Strategy',
    description: 'خدمات جامع تحلیل و استراتژی با هوش مصنوعی. سئو هوشمند، بهینه‌سازی نرخ تبدیل (CRO)، تحلیل رفتار کاربران و مانیتورینگ برند.',
    keywords: 'سئو هوشمند, تحلیل رفتار کاربر, مانیتورینگ برند, AI SEO, CRO, استراتژی هوش مصنوعی, تحلیل داده',
    alternates: {
        canonical: 'https://asreseo.com/services/ai/analysis-strategy',
    },
    openGraph: {
        title: 'تحلیل و استراتژی هوشمند | عصر سئو',
        description: 'رشد کسب‌وکار با داده‌های دقیق. ترکیب سئو، CRO و تحلیل رفتار کاربران با قدرت هوش مصنوعی.',
        type: 'website',
        url: 'https://asreseo.com/services/ai/analysis-strategy',
        images: [
            {
                url: '/og-analysis-strategy.jpg',
                width: 1200,
                height: 630,
                alt: 'تحلیل و استراتژی هوشمند با هوش مصنوعی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'تحلیل و استراتژی هوشمند | عصر سئو',
        description: 'تصمیم‌گیری داده‌محور با ابزارهای تحلیل و استراتژی هوش مصنوعی.',
        images: ['/og-analysis-strategy.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'تحلیل و استراتژی هوشمند',
    'description': 'خدمات جامع تحلیل داده و استراتژی کسب‌وکار با استفاده از هوش مصنوعی',
    'serviceType': 'AI Business Intelligence',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات تحلیل و استراتژی AI',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'سئو هوشمند',
                    'description': 'بهینه‌سازی موتور جستجو با AI'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'بهینه‌سازی نرخ تبدیل',
                    'description': 'افزایش فروش با تحلیل رفتار کاربر'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'مانیتورینگ برند',
                    'description': 'نظارت بر شهرت برند در فضای آنلاین'
                }
            }
        ]
    }
}

export default function AIAnalysisStrategyPage() {
    const seoCroFeatures = [
        {
            icon: Search,
            title: 'سئو هوشمند',
            description: 'تحلیل کلمات کلیدی و بهینه‌سازی محتوا با الگوریتم‌های پیشرفته گوگل.',
            benefits: ['رتبه بالاتر', 'ترافیک ارگانیک', 'تحلیل رقبا']
        },
        {
            icon: Target,
            title: 'بهینه‌سازی نرخ تبدیل (CRO)',
            description: 'تست A/B هوشمند و تحلیل قیف فروش برای تبدیل بازدیدکننده به مشتری.',
            benefits: ['افزایش فروش', 'کاهش هزینه جذب', 'بهبود UX']
        },
        {
            icon: TrendingUp,
            title: 'استراتژی محتوایی',
            description: 'تدوین تقویم محتوایی و استراتژی کلمات کلیدی بر اساس داده‌های واقعی.',
            benefits: ['محتوای هدفمند', 'جذب مخاطب درست', 'ROI بالا']
        }
    ];

    const behaviorFeatures = [
        {
            icon: Eye,
            title: 'نقشه حرارتی و رفتار کاربر',
            description: 'تحلیل دقیق نقاط کلیک، اسکرول و رفتار کاربران در سایت.',
            benefits: ['شناسایی نقاط داغ', 'رفع مشکلات UX', 'بهینه‌سازی چیدمان']
        },
        {
            icon: Users,
            title: 'تحلیل سفر مشتری',
            description: 'ردیابی مسیر حرکت کاربر از ورود تا خرید و شناسایی نقاط ریزش.',
            benefits: ['درک رفتار مشتری', 'بهبود مسیر خرید', 'افزایش وفاداری']
        },
        {
            icon: Brain,
            title: 'پیش‌بینی رفتار',
            description: 'استفاده از یادگیری ماشین برای پیش‌بینی نیازها و رفتار آینده کاربران.',
            benefits: ['پیشنهاد هوشمند', 'شخصی‌سازی', 'پیش‌بینی فروش']
        }
    ];

    const brandConsultingFeatures = [
        {
            icon: Shield,
            title: 'مانیتورینگ برند',
            description: 'نظارت ۲۴ ساعته بر نام برند شما در شبکه‌های اجتماعی و وب.',
            benefits: ['مدیریت شهرت', 'شناسایی بحران', 'تحلیل احساسات']
        },
        {
            icon: Lightbulb,
            title: 'مشاوره استراتژیک AI',
            description: 'مشاوره تخصصی برای پیاده‌سازی هوش مصنوعی در فرایندهای کسب‌وکار.',
            benefits: ['نقشه راه AI', 'اتوماسیون فرایند', 'تحول دیجیتال']
        },
        {
            icon: LineChart,
            title: 'تحلیل رقبا',
            description: 'رصد مداوم فعالیت‌های رقبا و ارائه راهکارهای پیشی گرفتن از آنها.',
            benefits: ['شناخت بازار', 'مزیت رقابتی', 'تصمیم‌گیری بهتر']
        }
    ];

    const stats = [
        { metric: '۲۰۰%', label: 'رشد ترافیک ارگانیک', color: 'text-green-600' },
        { metric: '۳x', label: 'افزایش نرخ تبدیل', color: 'text-blue-600' },
        { metric: '۸۵%', label: 'بهبود رضایت کاربر', color: 'text-purple-600' },
        { metric: '۲۴/۷', label: 'نظارت هوشمند', color: 'text-orange-600' }
    ];

    const benefits = [
        'تصمیم‌گیری دقیق بر اساس داده‌های واقعی نه حدس و گمان',
        'شناسایی سریع فرصت‌های رشد و تهدیدهای بازار',
        'بهینه‌سازی بودجه بازاریابی و افزایش بازگشت سرمایه',
        'درک عمیق از نیازها و رفتار مشتریان',
        'پیشی گرفتن از رقبا با استراتژی‌های هوشمند',
        'کاهش ریسک‌های کسب‌وکار با پیش‌بینی‌های دقیق'
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
                <section className="section-padding bg-linear-to-br from-indigo-50 to-cyan-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-cyan-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-4 py-1 text-sm border-indigo-200">
                                    هوش تجاری و استراتژی داده‌محور
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    تحلیل و استراتژی <span className="gradient-text">هوشمند</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    با قدرت داده‌ها و هوش مصنوعی، مسیر رشد کسب‌وکار خود را هموار کنید. از سئو و بهینه‌سازی نرخ تبدیل تا تحلیل رفتار کاربران و مانیتورینگ برند.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                                        دریافت تحلیل رایگان
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                                        مشاوره استراتژیک
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-indigo-600/10 to-transparent z-10" />
                                <Image
                                    src="/images/analysis-strategy-hero.png"
                                    alt="تحلیل و استراتژی هوشمند"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section-padding bg-linear-to-r from-cyan-50 to-indigo-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                                            {stat.metric}
                                        </div>
                                        <p className="text-gray-900 font-medium">
                                            {stat.label}
                                        </p>
                                        <Zap className="h-6 w-6 text-gray-400 mx-auto mt-2" />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO & CRO Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-blue-100 text-blue-700 mb-4">رشد و بهینه‌سازی</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                سئو و <span className="gradient-text">بهینه‌سازی نرخ تبدیل</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                جذب ترافیک هدفمند و تبدیل بازدیدکنندگان به مشتریان وفادار
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {seoCroFeatures.map((feature, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                                <feature.icon className="h-6 w-6 text-blue-600" />
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

                {/* Behavior Analysis Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-purple-100 text-purple-700 mb-4">تحلیل رفتار کاربر</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                درک عمیق <span className="gradient-text">رفتار مشتریان</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                شناخت دقیق نیازها و رفتار کاربران برای ارائه بهترین تجربه کاربری
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {behaviorFeatures.map((feature, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                                <feature.icon className="h-6 w-6 text-purple-600" />
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

                {/* Brand & Consulting Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-orange-100 text-orange-700 mb-4">استراتژی و برندینگ</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                مدیریت برند و <span className="gradient-text">مشاوره استراتژیک</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                حفاظت از شهرت برند و تدوین نقشه‌راه هوشمند برای آینده کسب‌وکار
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {brandConsultingFeatures.map((feature, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                                <feature.icon className="h-6 w-6 text-orange-600" />
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

                {/* Benefits Section */}
                <section className="section-padding bg-linear-to-br from-indigo-50 to-cyan-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                چرا به تحلیل و استراتژی <span className="gradient-text">هوشمند</span> نیاز دارید؟
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                مزایای تصمیم‌گیری داده‌محور برای رشد پایدار
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-md transition-shadow">
                                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <span className="text-gray-900 font-medium leading-relaxed">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-linear-to-br from-slate-900 to-slate-800 text-white">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            آینده کسب‌وکار خود را با داده‌ها بسازید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            با تحلیل‌های دقیق و استراتژی‌های هوشمند، ریسک‌ها را کاهش دهید و فرصت‌های رشد را شکار کنید. ما در این مسیر همراه شما هستیم.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                شروع تحلیل هوشمند
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                                دریافت مشاوره
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
