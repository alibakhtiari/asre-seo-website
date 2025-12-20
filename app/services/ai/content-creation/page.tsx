import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { FileText, Film, Sparkles, Zap, Target, Globe, PenTool, Video, Wand2, CheckCircle, Play, Type, Music, Palette } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'تولید محتوای هوشمند (متن و ویدیو) | AI Content Creation',
    description: 'تولید محتوای متنی و ویدیویی با هوش مصنوعی. ساخت مقاله، پست شبکه‌های اجتماعی، ویدیوهای تبلیغاتی و آموزشی با سرعت و کیفیت بالا.',
    keywords: 'تولید محتوا, هوش مصنوعی, ساخت ویدیو, AI Content, AI Video, تولید مقاله, ویدیو مارکتینگ',
    alternates: {
        canonical: 'https://asreseo.com/services/ai/content-creation',
    },
    openGraph: {
        title: 'تولید محتوای هوشمند (متن و ویدیو) | عصر سئو',
        description: 'استودیوی تولید محتوای هوشمند. تولید متن و ویدیو با ابزارهای پیشرفته هوش مصنوعی برای بازاریابی و آموزش.',
        type: 'website',
        url: 'https://asreseo.com/services/ai/content-creation',
        images: [
            {
                url: '/og-content-creation.jpg',
                width: 1200,
                height: 630,
                alt: 'تولید محتوای هوشمند با هوش مصنوعی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'تولید محتوای هوشمند (متن و ویدیو) | عصر سئو',
        description: 'تولید محتوای متنی و ویدیویی حرفه‌ای با ابزارهای پیشرفته AI.',
        images: ['/og-content-creation.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'تولید محتوای هوشمند (متن و ویدیو)',
    'description': 'خدمات جامع تولید محتوای متنی و ویدیویی با استفاده از هوش مصنوعی',
    'serviceType': 'AI Content Creation',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات تولید محتوا',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'تولید مقاله و متن',
                    'description': 'تولید مقالات سئو شده و محتوای متنی'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'تولید ویدیو هوشمند',
                    'description': 'ساخت ویدیوهای تبلیغاتی و آموزشی'
                }
            }
        ]
    }
}

export default function AIContentCreationPage() {
    const textFeatures = [
        {
            icon: FileText,
            title: 'تولید مقاله هوشمند',
            description: 'تولید مقالات کامل، جذاب و سئو بهینه‌سازی شده در کمترین زمان.',
            benefits: ['سئو ۱۰۰%', 'محتوای منحصر به فرد', 'تحویل سریع']
        },
        {
            icon: PenTool,
            title: 'محتوای شبکه‌های اجتماعی',
            description: 'پست‌های جذاب و تعاملی برای تمام پلتفرم‌های اجتماعی.',
            benefits: ['ویژگی‌های ویروسی', 'تعامل بالا', 'زمان‌بندی مناسب']
        },
        {
            icon: Target,
            title: 'بازاریابی محتوایی',
            description: 'استراتژی بازاریابی محتوایی هوشمند و هدفمند.',
            benefits: ['بازاریابی inbound', 'CTA بهینه', 'تبدیل بالا']
        },
        {
            icon: Globe,
            title: 'محتوای چند زبانه',
            description: 'تولید محتوای بهینه‌سازی شده برای بازارهای مختلف.',
            benefits: ['پوشش جهانی', 'SEO بین‌المللی', 'فروش بیشتر']
        }
    ];

    const videoFeatures = [
        {
            icon: Film,
            title: 'ساخت ویدیوهای تبلیغاتی',
            description: 'تولید ویدیوهای کوتاه و جذاب متناسب با اهداف بازاریابی.',
            benefits: ['بازاریابی هدفمند', 'ویدیوهای ویروسی', 'آنالیز رقبا']
        },
        {
            icon: Sparkles,
            title: 'انیمیشن و گرافیک',
            description: 'افزودن انیمیشن و افکت‌های گرافیکی بدون نیاز به طراح.',
            benefits: ['کیفیت بالا', 'انیمیشن حرفه‌ای', 'جلوه‌های ویژه']
        },
        {
            icon: Type,
            title: 'تبدیل متن به ویدیو',
            description: 'تولید ویدیو از روی سناریو یا مقاله در چند دقیقه.',
            benefits: ['سرعت بالا', 'دقت بالا', 'هزینه مناسب']
        },
        {
            icon: Wand2,
            title: 'گوینده هوشمند',
            description: 'استفاده از صداهای طبیعی و متنوع فارسی برای نریشن.',
            benefits: ['صداهای متنوع', 'لحن طبیعی', 'بدون هزینه استودیو']
        }
    ];

    const contentTypes = [
        {
            title: 'مقالات وبلاگ',
            description: 'مقالات آموزشی و تخصصی سئو شده',
            icon: FileText,
            type: 'متن'
        },
        {
            title: 'ویدیوهای تبلیغاتی',
            description: 'تیزرهای جذاب برای اینستاگرام و یوتیوب',
            icon: Video,
            type: 'ویدیو'
        },
        {
            title: 'پست‌های اجتماعی',
            description: 'کپشن و محتوای متنی برای شبکه‌ها',
            icon: PenTool,
            type: 'متن'
        },
        {
            title: 'ویدیوهای آموزشی',
            description: 'ویدیوهای دمو محصول و راهنما',
            icon: Play,
            type: 'ویدیو'
        }
    ];

    const benefits = [
        'تولید ۱۰ برابر سریع‌تر محتوای با کیفیت',
        'کاهش ۷۰ درصدی هزینه‌های تولید محتوا',
        'یکپارچگی تولید متن و ویدیو در یک پلتفرم',
        'بهینه‌سازی خودکار برای موتورهای جستجو',
        'افزایش ترافیک ارگانیک و نرخ تعامل',
        'پوشش کامل نیازهای محتوایی برند'
    ];

    const stats = [
        { metric: '۱۰x', label: 'سرعت تولید', color: 'text-blue-600' },
        { metric: '۷۰%', label: 'کاهش هزینه', color: 'text-green-600' },
        { metric: '۱۰۰%', label: 'بهینه‌سازی سئو', color: 'text-purple-600' },
        { metric: '۲۴/۷', label: 'تولید مداوم', color: 'text-orange-600' }
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
                <section className="section-padding bg-linear-to-br from-purple-50 to-pink-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-pink-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <Badge className="bg-purple-100 text-purple-700 mb-4 px-4 py-1 text-sm border-purple-200">
                                    استودیوی هوشمند تولید محتوا
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    تولید محتوای <span className="gradient-text">متنی و ویدیویی</span> با هوش مصنوعی
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    پلتفرم جامع تولید محتوا با هوش مصنوعی. از مقالات سئو شده تا ویدیوهای تبلیغاتی جذاب، همه چیز را با سرعت و کیفیت بالا تولید کنید.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                                        شروع تولید محتوا
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                                        مشاهده نمونه‌ها
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-purple-600/10 to-transparent z-10" />
                                <Image
                                    src="/images/ai-content-hero.png"
                                    alt="تولید محتوای متنی و ویدیویی با هوش مصنوعی"
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
                <section className="section-padding bg-linear-to-r from-pink-50 to-purple-50">
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

                {/* Text Generation Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-blue-100 text-blue-700 mb-4">تولید متن</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                تولید <span className="gradient-text">محتوای متنی</span> هوشمند
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                تولید مقالات، پست‌های وبلاگ و محتوای شبکه‌های اجتماعی با رعایت کامل اصول سئو
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {textFeatures.map((feature, index) => (
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

                {/* Video Generation Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-pink-100 text-pink-700 mb-4">تولید ویدیو</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                ساخت <span className="gradient-text">ویدیوهای حرفه‌ای</span> با AI
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                تبدیل متن به ویدیو، ساخت تیزرهای تبلیغاتی و ویدیوهای آموزشی بدون نیاز به تجهیزات
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {videoFeatures.map((feature, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                                                <feature.icon className="h-6 w-6 text-pink-600" />
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

                {/* Content Types Grid */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                پوشش کامل <span className="gradient-text">نیازهای محتوایی</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                هر نوع محتوایی که برای رشد کسب‌وکار خود نیاز دارید
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contentTypes.map((type, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow border-0 bg-linear-to-br from-gray-50 to-white border border-gray-100">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                                <type.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{type.title}</h3>
                                                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                                                    {type.type}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">{type.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-linear-to-br from-indigo-50 to-purple-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                مزایای استودیوی <span className="gradient-text">تولید محتوا</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                چرا باید از هوش مصنوعی برای تولید محتوا استفاده کنید؟
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:shadow-md transition-shadow">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <CheckCircle className="h-5 w-5 text-purple-600" />
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
                            محتوای حرفه‌ای خود را همین امروز بسازید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            با استودیوی هوشمند ما، قدرت کلمات و تصاویر را ترکیب کنید و محتوایی بسازید که مخاطبان را جذب و تبدیل به مشتری کند.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
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
