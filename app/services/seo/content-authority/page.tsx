import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { CheckCircle, Edit3, BookOpen, AlignJustify, Search, TrendingUp, FileText, Target, Shield, Users, Link, Globe, Star, Award, Zap } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'سئو محتوا و لینک‌سازی | استراتژی محتوا و افزایش اعتبار سایت | عصر سئو',
    description: 'خدمات جامع سئو محتوا و لینک‌سازی (Off-Page). تولید محتوای ارزشمند، استراتژی Topical Authority و لینک‌سازی حرفه‌ای برای تسخیر نتایج گوگل.',
    keywords: 'سئو محتوا, لینک‌سازی, Content SEO, Link Building, تولید محتوا, رپورتاژ آگهی, Topical Authority',
    alternates: {
        canonical: 'https://asreseo.com/services/seo/content-authority',
    },
    openGraph: {
        title: 'سئو محتوا و لینک‌سازی | افزایش اعتبار و ترافیک | عصر سئو',
        description: 'ترکیب قدرتمند محتوای عالی و لینک‌های معتبر برای رسیدن به رتبه ۱ گوگل.',
        type: 'website',
        url: 'https://asreseo.com/services/seo/content-authority',
        images: [
            {
                url: '/og-content-authority.jpg',
                width: 1200,
                height: 630,
                alt: 'سئو محتوا و لینک‌سازی'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'سئو محتوا و لینک‌سازی | عصر سئو',
        description: 'استراتژی محتوا و لینک‌سازی برای تسخیر گوگل.',
        images: ['/og-content-authority.jpg'],
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'سئو محتوا و لینک‌سازی',
    'description': 'خدمات جامع استراتژی محتوا و لینک‌سازی خارجی برای افزایش اعتبار دامنه و رتبه سایت',
    'serviceType': 'SEO Services',
    'provider': {
        '@type': 'Organization',
        'name': 'عصر سئو',
        'url': 'https://asreseo.com'
    },
    'areaServed': 'Iran',
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'خدمات سئو محتوا و اعتبار',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'تولید محتوای سئو شده',
                    'description': 'تولید مقالات و محتوای یونیک با رعایت اصول SEO'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'لینک‌سازی خارجی',
                    'description': 'اجرای کمپین‌های لینک‌سازی و رپورتاژ آگهی'
                }
            }
        ]
    },
    'faqSection': {
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'چرا محتوا و لینک‌سازی باید با هم انجام شوند؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'محتوای عالی بدون لینک دیده نمی‌شود و لینک بدون محتوا بی‌ارزش است. ترکیب این دو (Content + Authority) فرمول اصلی موفقیت در گوگل است.'
                }
            },
            {
                '@type': 'Question',
                'name': 'آیا لینک‌سازی خطرناک است؟',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'لینک‌سازی غیراصولی بله، اما استراتژی ما کاملاً کلاه سفید و طبیعی است و بر اساس روابط عمومی و محتوای ارزشمند بنا شده است.'
                }
            }
        ]
    }
}

export default function ContentAuthoritySEO() {
    const contentServices = [
        {
            icon: Edit3,
            title: 'تولید محتوای SEO محور',
            description: 'تولید مقالات عمیق و کاربردی که هم نیاز کاربر را رفع می‌کند و هم برای گوگل بهینه شده است.',
            benefits: ['جذب ترافیک ارگانیک', 'افزایش زمان حضور کاربر', 'پاسخ به نیاز کاربر']
        },
        {
            icon: TrendingUp,
            title: 'استراتژی Topical Authority',
            description: 'پوشش جامع تمام زیرمجموعه‌های موضوعی کسب‌وکار شما برای اثبات تخصص به گوگل.',
            benefits: ['مرجعیت در بازار', 'رتبه‌بندی سریع‌تر', 'اعتماد گوگل']
        },
        {
            icon: Search,
            title: 'تحقیق کلمات کلیدی معنایی',
            description: 'فراتر از کلمات کلیدی ساده؛ تمرکز بر نیت کاربر (User Intent) و مفاهیم مرتبط.',
            benefits: ['هدف‌گیری دقیق', 'نرخ تبدیل بالاتر', 'پوشش کامل موضوع']
        },
        {
            icon: AlignJustify,
            title: 'بهینه‌سازی محتوای موجود',
            description: 'بروزرسانی و غنی‌سازی مقالات قدیمی برای بازگرداندن رتبه‌های از دست رفته.',
            benefits: ['رشد سریع ترافیک', 'استفاده از دارایی موجود', 'بهبود تازگی محتوا']
        }
    ];

    const authorityServices = [
        {
            icon: Link,
            title: 'لینک‌سازی خارجی (Link Building)',
            description: 'کسب بک‌لینک‌های باکیفیت از سایت‌های معتبر و مرتبط با حوزه کاری شما.',
            benefits: ['افزایش اعتبار دامنه', 'بهبود رتبه کلمات سخت', 'ترافیک ارجاعی']
        },
        {
            icon: FileText,
            title: 'رپورتاژ آگهی هدفمند',
            description: 'انتشار اخبار و مقالات شما در رسانه‌های خبری بزرگ برای برندسازی و سئو.',
            benefits: ['برندسازی قوی', 'لینک‌های دائمی', 'اعتماد مخاطب']
        },
        {
            icon: Shield,
            title: 'مدیریت پروفایل لینک',
            description: 'پایش مداوم بک‌لینک‌ها و حذف لینک‌های اسپم (Disavow) برای جلوگیری از جریمه.',
            benefits: ['امنیت سایت', 'جلوگیری از پنالتی', 'حفظ سلامت دامنه']
        },
        {
            icon: Target,
            title: 'لینک‌سازی داخلی پیشرفته',
            description: 'طراحی ساختار لینک‌های داخلی برای توزیع قدرت (Link Juice) در تمام صفحات سایت.',
            benefits: ['اینکس بهتر', 'افزایش قدرت صفحات', 'ناوبری بهتر']
        }
    ];

    const contentTypes = [
        {
            title: 'مقاله تخصصی',
            description: 'مقاله‌های عمیق و فنی برای جذب مشتریان حرفه‌ای',
            features: ['بررسی جامع موضوع', 'نمودارها و آیتم‌پسند', 'فراخوان به اقدام قوی'],
            icon: FileText,
            color: 'blue'
        },
        {
            title: 'راهنمای عملی',
            description: 'آموزش گام به گام حل مشکلات کاربران',
            features: ['توضیح مرحله به مرحله', 'نمونه‌های عملی', 'بهینه برای رتبه‌بندی'],
            icon: BookOpen,
            color: 'green'
        },
        {
            title: 'مطالعات موردی',
            description: 'نمایش نتایج واقعی پروژه‌های موفق',
            features: ['تقارن با مشتریان', 'اعداد و آمار واقعی', 'اعتمادسازی بالا'],
            icon: Target,
            color: 'purple'
        },
        {
            title: 'پست‌های ترند',
            description: 'پوشش اخبار روز و موضوعات داغ',
            features: ['سرعت تغییرات بالا', 'بازاریابی ویروسی', 'ترافیک فوری'],
            icon: TrendingUp,
            color: 'orange'
        }
    ];

    const stats = [
        { metric: '+۴۰۰%', label: 'رشد ترافیک ارگانیک', color: 'text-amber-600', icon: TrendingUp },
        { metric: '۵۰+', label: 'دامنه اعتبار بالا', color: 'text-purple-600', icon: Globe },
        { metric: '۵x', label: 'نرخ تبدیل بالاتر', color: 'text-green-600', icon: Target },
        { metric: '۱۰۰%', label: 'لینک‌های طبیعی', color: 'text-blue-600', icon: CheckCircle }
    ];

    const faqs = [
        {
            question: 'چرا محتوا پادشاه است؟',
            answer: 'چون گوگل به دنبال پاسخ دادن به سوالات کاربران است. محتوای باکیفیت تنها راهی است که می‌توانید به این نیاز پاسخ دهید و گوگل را راضی کنید.'
        },
        {
            question: 'آیا خرید بک‌لینک توصیه می‌شود؟',
            answer: 'خرید لینک‌های بی‌کیفیت و انبوه خطرناک است. ما بر روی "ساخت" لینک از طریق روابط عمومی، محتوای عالی و رپورتاژهای باکیفیت تمرکز داریم که کاملاً امن است.'
        },
        {
            question: 'Topical Authority چقدر زمان می‌برد؟',
            answer: 'بسته به رقابت حوزه شما، معمولاً با تولید ۲۰ تا ۵۰ مقاله مرتبط و لینک‌سازی داخلی صحیح، ظرف ۳ تا ۶ ماه می‌توانید به مرجعیت موضوعی برسید.'
        },
        {
            question: 'آیا محتوای شما کپی نیست؟',
            answer: 'خیر، تمام محتواها توسط نویسندگان متخصص نوشته شده و از نظر یونیک بودن و کیفیت نگارش به دقت بررسی می‌شوند.'
        },
        {
            question: 'تأثیر رپورتاژ آگهی چقدر است؟',
            answer: 'رپورتاژ آگهی اگر در رسانه درست و با متن مناسب منتشر شود، یکی از قوی‌ترین سیگنال‌های سئو است که هم اعتبار دامنه را بالا می‌برد و هم ترافیک مستقیم می‌آورد.'
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
                <section className="section-padding bg-linear-to-br from-amber-50 to-purple-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <Badge className="bg-amber-100 text-amber-700 mb-4 px-4 py-1 text-sm border-amber-200">
                                    قدرت محتوا + اعتبار لینک
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    سئو <span className="gradient-text">محتوا و لینک‌سازی</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    ترکیبی برنده برای تسخیر نتایج جستجو. محتوای ارزشمند که کاربران عاشق آن هستند و لینک‌های قدرتمند که گوگل به آن‌ها اعتماد دارد.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                                        شروع استراتژی محتوایی
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                                        مشاوره لینک‌سازی
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-amber-600/10 to-transparent z-10" />
                                <Image
                                    src="/images/content-authority-hero.png"
                                    alt="سئو محتوا و لینک‌سازی"
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
                <section className="section-padding bg-linear-to-r from-purple-50 to-amber-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                                        <div className="text-3xl font-bold text-amber-700 mb-2">
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

                {/* Content Services Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خدمات <span className="gradient-text">سئو محتوا</span> (Content SEO)
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                تولید محتوایی که هم برای کاربر جذاب است و هم برای موتورهای جستجو بهینه شده است
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {contentServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                                                <service.icon className="h-6 w-6 text-amber-600" />
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

                {/* Authority Services Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                خدمات <span className="gradient-text">لینک‌سازی و اعتبار</span> (Authority)
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                افزایش اعتبار دامنه شما نزد گوگل با استراتژی‌های لینک‌سازی امن و مؤثر
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {authorityServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group animate-fade-in border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                                <service.icon className="h-6 w-6 text-purple-600" />
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

                {/* Content Types Section */}
                <section className="section-padding bg-linear-to-br from-slate-50 to-indigo-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                انواع <span className="gradient-text">محتوای استراتژیک</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                ما برای هر مرحله از قیف فروش، محتوای مناسب تولید می‌کنیم
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {contentTypes.map((type, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                                <type.icon className="h-6 w-6 text-indigo-600" />
                                            </div>
                                            <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                                        </div>
                                        <p className="text-gray-600 mb-4">{type.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-1">
                                            {type.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
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
                                پاسخ به سوالات شما درباره محتوا و لینک‌سازی
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
                            صدای برند خود را به گوش همه برسانید!
                        </h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                            با محتوای قدرتمند و اعتبار دامنه بالا، جایگاه خود را در صدر نتایج گوگل تثبیت کنید. ما استراتژی، تولید و توزیع را برای شما انجام می‌دهیم.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                                شروع کمپین محتوایی
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
