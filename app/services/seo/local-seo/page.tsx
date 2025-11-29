import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Star, Navigation, Store, Search, MessageCircle, Phone, Globe, CheckCircle, Users, Layout, TrendingUp } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'سئو محلی (Local SEO) | ثبت در گوگل مپ و افزایش مشتریان محلی | عصر سئو',
    description: 'خدمات تخصصی سئو محلی برای کسب‌وکارهای فیزیکی. ثبت و بهینه‌سازی گوگل مپ، مدیریت نظرات، و جذب مشتریان از محله و شهر شما.',
    keywords: 'سئو محلی, Local SEO, ثبت در گوگل مپ, Google Business Profile, افزایش مشتری محلی, لوکال سئو',
    alternates: {
        canonical: 'https://asreseo.com/services/seo/local-seo',
    },
    openGraph: {
        title: 'سئو محلی (Local SEO) | جذب مشتریان اطراف شما | عصر سئو',
        description: 'کسب‌وکار خود را به مشتریان نزدیکتان معرفی کنید. بهینه‌سازی نقشه گوگل و جستجوهای محلی.',
        type: 'website',
        url: 'https://asreseo.com/services/seo/local-seo',
        images: [
            {
                url: '/og-local-seo.jpg',
                width: 1200,
                height: 630,
                alt: 'سئو محلی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'سئو محلی (Local SEO) | عصر سئو',
        description: 'دیده شدن در جستجوهای محلی و گوگل مپ.',
        images: ['/og-local-seo.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'سئو محلی (Local SEO)',
    'description': 'خدمات بهینه‌سازی برای جستجوهای محلی و گوگل مپ برای جذب مشتریان فیزیکی',
    'serviceType': 'SEO Services',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات سئو محلی',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'ثبت و بهینه‌سازی گوگل مپ',
                    'description': 'ایجاد و مدیریت پروفایل کسب‌وکار گوگل (Google Business Profile)'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'مدیریت نظرات و شهرت',
                    'description': 'استراتژی دریافت نظرات مثبت و پاسخگویی به مشتریان'
                }
            }
        ]
    },
    'faqSection': {
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'سئو محلی برای چه کسب‌وکارهایی مناسب است؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'برای تمام کسب‌وکارهایی که مکان فیزیکی دارند (رستوران، مطب، فروشگاه، تعمیرگاه) یا در یک منطقه جغرافیایی خاص خدمات ارائه می‌دهند.'
                }
            },
            {
                '@type': 'Question',
                'name': 'چقدر طول می‌کشد تا در گوگل مپ رتبه بگیرم؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'بسته به رقابت منطقه و صنف شما، معمولاً بین ۱ تا ۳ ماه زمان می‌برد تا در "Local Pack" (سه نتیجه اول نقشه) ظاهر شوید.'
                }
            }
        ]
    }
}

export default function LocalSEO() {
    const localServices = [
        {
            icon: MapPin,
            title: 'بهینه‌سازی پروفایل گوگل (GBP)',
            description: 'ثبت، تایید و بهینه‌سازی کامل Google Business Profile با اطلاعات دقیق، تصاویر حرفه‌ای و دسته‌بندی صحیح.',
            benefits: ['دیده شدن در نقشه', 'اطلاعات تماس دقیق', 'جذب مشتری حضوری']
        },
        {
            icon: Navigation,
            title: 'مدیریت Citations (نقل‌قول‌ها)',
            description: 'ثبت یکپارچه نام، آدرس و تلفن (NAP) شما در دایرکتوری‌های معتبر و سایت‌های مرجع محلی.',
            benefits: ['اعتماد گوگل', 'ثبات اطلاعات', 'سیگنال‌های محلی قوی']
        },
        {
            icon: MessageCircle,
            title: 'مدیریت شهرت و نظرات',
            description: 'استراتژی دریافت نظرات ۵ ستاره، پاسخگویی حرفه‌ای به نقدها و مدیریت اعتبار آنلاین برند شما.',
            benefits: ['نرخ تبدیل بالا', 'اعتمادسازی', 'رتبه بهتر در مپ']
        },
        {
            icon: Layout,
            title: 'تولید محتوای محلی (Local Content)',
            description: 'ایجاد صفحات فرود اختصاصی برای هر منطقه یا شهر و تولید مقالات مرتبط با دغدغه‌های بومی.',
            benefits: ['رتبه در کلمات "نزدیک من"', 'ارتباط با جامعه محلی', 'پوشش مناطق مختلف']
        }
    ];

    const features = [
        {
            title: 'حضور در Local Pack',
            description: 'هدف ما قرار دادن شما در ۳ نتیجه اول گوگل مپ است که بیشترین کلیک را دریافت می‌کنند.',
            icon: Star,
            color: 'text-yellow-500'
        },
        {
            title: 'جستجوهای صوتی',
            description: 'بهینه‌سازی برای عباراتی مثل "رستوران نزدیک من" که در جستجوهای موبایل و صوتی رایج هستند.',
            icon: Phone,
            color: 'text-blue-500'
        },
        {
            title: 'افزایش تماس و مسیریابی',
            description: 'تبدیل جستجوگران به مشتریان واقعی که با شما تماس می‌گیرند یا به فروشگاه شما می‌آیند.',
            icon: Navigation,
            color: 'text-green-500'
        }
    ];

    const stats = [
        { metric: '۴۶٪', label: 'جستجوهای گوگل محلی هستند', color: 'text-blue-600', icon: Search },
        { metric: '۸۸٪', label: 'مراجعه حضوری در ۲۴ ساعت', color: 'text-green-600', icon: Store },
        { metric: '۳x', label: 'افزایش تماس‌های تلفنی', color: 'text-purple-600', icon: Phone },
        { metric: '۱۰۰٪', label: 'مالکیت پروفایل مپ', color: 'text-orange-600', icon: MapPin }
    ];

    const faqs = [
        {
            question: 'آیا بدون وب‌سایت هم می‌توان سئو محلی انجام داد؟',
            answer: 'بله، پروفایل گوگل مپ مستقل از سایت عمل می‌کند، اما داشتن وب‌سایت بهینه‌شده تأثیر بسیار زیادی در رتبه گرفتن پروفایل مپ شما دارد.'
        },
        {
            question: 'NAP چیست و چرا مهم است؟',
            answer: 'NAP مخفف Name, Address, Phone است. یکسان بودن این اطلاعات در تمام سطح وب (سایت، اینستاگرام، دایرکتوری‌ها) مهمترین سیگنال اعتماد برای گوگل است.'
        },
        {
            question: 'چگونه نظرات منفی را مدیریت کنیم؟',
            answer: 'نظرات منفی فرصتی برای نشان دادن حرفه‌ای بودن شماست. ما به شما یاد می‌دهیم چطور با پاسخگویی صحیح، حتی مشتری ناراضی را به وفادار تبدیل کنید.'
        },
        {
            question: 'آیا سئو محلی برای فروشگاه‌های آنلاین هم مفید است؟',
            answer: 'اگر انبار یا دفتر فیزیکی دارید بله، اما سئو محلی عمدتاً برای کسب‌وکارهایی است که با مشتریان در یک موقعیت جغرافیایی تعامل دارند.'
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
                                سلطان محله خود باشید
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                سئو <span className="gradient-text">محلی (Local SEO)</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                مشتریان دقیقاً در لحظه‌ای که به شما نیاز دارند، شما را پیدا کنند. افزایش تماس، مسیریابی و فروش حضوری با تسخیر نتایج گوگل مپ.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="gradient-bg text-white">
                                    ثبت کسب‌وکارتان در گوگل
                                </Button>
                                <Button variant="outline" size="lg">
                                    مشاوره سئو محلی
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
                                        <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                                        <div className="text-3xl font-bold text-green-700 mb-2">
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

                {/* Local Services Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خدمات <span className="gradient-text">سئو محلی</span> ما
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                راهکارهای جامع برای اینکه انتخاب اول مشتریان هم‌شهری خود باشید
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {localServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                                <service.icon className="h-6 w-6 text-green-600" />
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

                {/* Features Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                چرا <span className="gradient-text">سئو محلی</span> ضروری است؟
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                رفتار کاربران تغییر کرده است؛ آن‌ها به دنبال نزدیک‌ترین و بهترین گزینه هستند
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                                <feature.icon className={`h-6 w-6 ${feature.color}`} />
                                            </div>
                                            <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
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
                                پاسخ به سوالات شما درباره سئو محلی و گوگل مپ
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
                            مشتریان اطراف خود را از دست ندهید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            همین حالا حضور خود را در گوگل مپ قدرتمند کنید و تماس‌های ورودی خود را چند برابر کنید. ما راه را بلدیم.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                                ثبت سفارش سئو محلی
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
