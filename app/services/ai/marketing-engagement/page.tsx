import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Zap, Mail, Users, Target, Bot, MessageSquare, HeartHandshake, Sparkles, TrendingUp, CheckCircle, Database, Globe, Brain, User } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'بازاریابی و تعامل هوشمند | AI Marketing & Engagement',
    description: 'اتوماسیون بازاریابی، چت‌بات‌های هوشمند و شخصی‌سازی محتوا با هوش مصنوعی. افزایش نرخ تبدیل و تعامل مشتریان با ابزارهای پیشرفته AI.',
    keywords: 'اتوماسیون بازاریابی, چت‌بات هوشمند, شخصی‌سازی محتوا, AI Marketing, Chatbot, Personalization, هوش مصنوعی',
    alternates: {
        canonical: 'https://asreseo.com/services/ai/marketing-engagement',
    },
    openGraph: {
        title: 'بازاریابی و تعامل هوشمند | عصر سئو',
        description: 'پلتفرم جامع بازاریابی هوشمند. ترکیب اتوماسیون، چت‌بات و شخصی‌سازی برای خلق تجربه مشتری بی‌نظیر.',
        type: 'website',
        url: 'https://asreseo.com/services/ai/marketing-engagement',
        images: [
            {
                url: '/og-marketing-engagement.jpg',
                width: 1200,
                height: 630,
                alt: 'بازاریابی و تعامل هوشمند با هوش مصنوعی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'بازاریابی و تعامل هوشمند | عصر سئو',
        description: 'تحول در بازاریابی با ترکیب اتوماسیون، چت‌بات و شخصی‌سازی AI.',
        images: ['/og-marketing-engagement.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'بازاریابی و تعامل هوشمند',
    'description': 'خدمات جامع بازاریابی هوشمند شامل اتوماسیون، چت‌بات و شخصی‌سازی محتوا',
    'serviceType': 'AI Marketing Solutions',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات بازاریابی هوش مصنوعی',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'اتوماسیون بازاریابی',
                    'description': 'خودکارسازی کمپین‌های ایمیل و پیامک'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'چت‌بات هوشمند',
                    'description': 'پاسخگویی ۲۴ ساعته با هوش مصنوعی'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'شخصی‌سازی محتوا',
                    'description': 'نمایش محتوای اختصاصی برای هر کاربر'
                }
            }
        ]
    }
}

export default function AIMarketingEngagementPage() {
    const automationFeatures = [
        {
            icon: Mail,
            title: 'ایمیل مارکتینگ هوشمند',
            description: 'ارسال خودکار ایمیل‌های شخصی‌سازی شده بر اساس رفتار کاربران.',
            benefits: ['شخصی‌سازی محتوا', 'زمان‌بندی هوشمند', 'بازخورد خودکار']
        },
        {
            icon: Users,
            title: 'پرورش سرنخ‌ها',
            description: 'تبدیل خودکار بازدیدکنندگان به مشتریان از طریق کمپین‌های هدفمند.',
            benefits: ['نرخ تبدیل بالاتر', 'آموزش سیستماتیک', 'پیگیری هوشمند']
        },
        {
            icon: Target,
            title: 'تارگتینگ پیشرفته',
            description: 'شناسایی و هدف‌گیری دقیق مخاطبان بر اساس داده‌های رفتاری.',
            benefits: ['هدف‌گیری دقیق‌تر', 'بازده بالاتر', 'بهبود ROI']
        }
    ];

    const chatbotFeatures = [
        {
            icon: Bot,
            title: 'چت‌بات RAG پیشرفته',
            description: 'پاسخگویی دقیق با یادگیری از پایگاه دانش و اسناد سازمانی شما.',
            benefits: ['دقت بالاتر', 'یادگیری از داده‌ها', 'پاسخ‌های مرتبط']
        },
        {
            icon: Database,
            title: 'ادغام با پایگاه دانش',
            description: 'اتصال مستقیم به اطلاعات محصولات و خدمات برای پاسخ‌های جامع.',
            benefits: ['دسترسی کامل', 'پاسخ‌های یکپارچه', 'به‌روزرسانی خودکار']
        },
        {
            icon: MessageSquare,
            title: 'گفتگوی طبیعی فارسی',
            description: 'درک عمیق زبان فارسی و قابلیت گفتگوی طبیعی و روان.',
            benefits: ['درک بالا', 'پاسخ‌های طبیعی', 'پشتیبانی ۲۴/۷']
        }
    ];

    const personalizationFeatures = [
        {
            icon: User,
            title: 'تجربه کاربری اختصاصی',
            description: 'نمایش محتوای منحصربه‌فرد برای هر کاربر بر اساس علایق.',
            benefits: ['تجربه خاص', 'تعامل بیشتر', 'رضایت بالاتر']
        },
        {
            icon: Sparkles,
            title: 'پیشنهاد محصول هوشمند',
            description: 'پیشنهاد محصولات مرتبط بر اساس سوابق بازدید و خرید.',
            benefits: ['افزایش فروش', 'سبد خرید بزرگتر', 'کشف محصولات']
        },
        {
            icon: HeartHandshake,
            title: 'وفادارسازی مشتری',
            description: 'ایجاد حس ارزشمندی و افزایش وفاداری با محتوای شخصی.',
            benefits: ['وفاداری بیشتر', 'بازگشت مکرر', 'ارزش طول عمر']
        }
    ];

    const stats = [
        { metric: '۳۰۰%', label: 'افزایش نرخ تبدیل', color: 'text-green-600' },
        { metric: '۷۰%', label: 'کاهش هزینه‌ها', color: 'text-blue-600' },
        { metric: '۲۴/۷', label: 'پاسخگویی مداوم', color: 'text-purple-600' },
        { metric: '۴x', label: 'بازگشت سرمایه', color: 'text-orange-600' }
    ];

    const benefits = [
        'یکپارچگی کامل تمام کانال‌های ارتباطی با مشتری',
        'پاسخگویی ۲۴ ساعته بدون نیاز به نیروی انسانی اضافه',
        'افزایش چشمگیر نرخ تبدیل با پیام‌های شخصی‌سازی شده',
        'کاهش خطای انسانی و هزینه‌های عملیاتی',
        'جمع‌آوری و تحلیل داده‌های ارزشمند مشتریان',
        'بهبود تجربه مشتری و افزایش وفاداری به برند'
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
                <section className="section-padding bg-linear-to-br from-orange-50 to-indigo-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <Badge className="bg-orange-100 text-orange-700 mb-4 px-4 py-1 text-sm border-orange-200">
                                    پلتفرم جامع تعامل با مشتری
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    بازاریابی و تعامل <span className="gradient-text">هوشمند</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    ترکیب قدرت اتوماسیون، چت‌بات‌های هوشمند و شخصی‌سازی محتوا برای خلق تجربه‌ای بی‌نظیر برای مشتریان و افزایش فروش.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                                        شروع هوشمندسازی
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                                        دریافت مشاوره
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-orange-600/10 to-transparent z-10" />
                                <Image
                                    src="/images/marketing-engagement-hero.png"
                                    alt="بازاریابی و تعامل هوشمند با هوش مصنوعی"
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
                <section className="section-padding bg-linear-to-r from-indigo-50 to-orange-50">
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

                {/* Automation Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-orange-100 text-orange-700 mb-4">اتوماسیون بازاریابی</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خودکارسازی <span className="gradient-text">فرایندهای بازاریابی</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                اجرای کمپین‌های هوشمند و پرورش سرنخ‌ها بدون دخالت دست
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {automationFeatures.map((feature, index) => (
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

                {/* Chatbot Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-indigo-100 text-indigo-700 mb-4">چت‌بات هوشمند</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                پاسخگویی <span className="gradient-text">۲۴ ساعته و هوشمند</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                چت‌بات‌های پیشرفته با قابلیت یادگیری از مستندات شما (RAG)
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {chatbotFeatures.map((feature, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                                <feature.icon className="h-6 w-6 text-indigo-600" />
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

                {/* Personalization Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Badge className="bg-purple-100 text-purple-700 mb-4">شخصی‌سازی محتوا</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                تجربه <span className="gradient-text">منحصربه‌فرد</span> برای هر کاربر
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                نمایش محتوا و پیشنهادات متناسب با سلیقه و رفتار هر بازدیدکننده
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {personalizationFeatures.map((feature, index) => (
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

                {/* Benefits Section */}
                <section className="section-padding bg-linear-to-br from-indigo-50 to-purple-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                مزایای یکپارچه‌سازی <span className="gradient-text">بازاریابی هوشمند</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                چرا باید تمام ابزارهای بازاریابی خود را هوشمند و یکپارچه کنید؟
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
                            بازاریابی خود را متحول کنید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            با پلتفرم جامع ما، مشتریان خود را بهتر بشناسید، با آن‌ها تعامل موثرتری داشته باشید و فروش خود را افزایش دهید.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                شروع رایگان
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                                دریافت دمو
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
