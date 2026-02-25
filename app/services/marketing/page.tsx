import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../src/generated/images-map.json'
import { Target, Mail, Share2, Filter, Layers, TrendingUp, Zap, Users, BarChart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'خدمات بازاریابی دیجیتال | استراتژی‌های نوین رشد | عصر سئو',
    description: 'خدمات حرفه‌ای بازاریابی دیجیتال شامل تبلیغات گوگل، مارکتینگ شبکه‌های اجتماعی، ایمیل مارکتینگ و مدیریت قیف فروش برای رشد کسب‌وکار شما.',
    keywords: 'بازاریابی دیجیتال, تبلیغات گوگل, گوگل ادز, ایمیل مارکتینگ, شبکه‌های اجتماعی, قیف فروش, کمپین تبلیغاتی',
    alternates: {
        canonical: 'https://asreseo.com/services/marketing/',
    },
    openGraph: {
        title: 'خدمات بازاریابی دیجیتال | عصر سئو',
        description: 'استراتژی‌های نوین بازاریابی دیجیتال برای افزایش فروش و دیده شدن.',
        type: 'website',
        url: 'https://asreseo.com/services/marketing/',
    },
}

export default function MarketingPage() {
    const marketingServices = [
        {
            title: 'تبلیغات گوگل (Google Ads)',
            description: 'جذب مشتریان هدفمند در سریع‌ترین زمان ممکن با مدیریت حرفه‌ای کمپین‌های گوگل ادز.',
            icon: Target,
            features: ['تحقیق کلمات کلیدی', 'ساخت و بهینه‌سازی کمپین', 'مدیریت بودجه', 'گزارش‌دهی شفاف'],
            gradient: 'from-blue-500 to-blue-700',
            href: '/services/marketing/google-ads/'
        },
        {
            title: 'بازاریابی شبکه‌های اجتماعی',
            description: 'ایجاد حضور قدرتمند و تعامل موثر با مخاطبان در پلتفرم‌های اجتماعی محبوب.',
            icon: Share2,
            features: ['استراتژی محتوا', 'مدیریت صفحات', 'تبلیغات اینستاگرام', 'افزایش فالوور هدفمند'],
            gradient: 'from-pink-500 to-rose-700',
            href: '/services/marketing/social-media/'
        },
        {
            title: 'ایمیل مارکتینگ',
            description: 'حفظ ارتباط با مشتریان و تبدیل آن‌ها به خریداران وفادار با ارسال ایمیل‌های هوشمند.',
            icon: Mail,
            features: ['تولید محتوای ایمیل', 'اتوماسیون ارسال', 'بخش‌بندی مخاطبان', 'تحلیل نرخ کلیک'],
            gradient: 'from-purple-500 to-indigo-700',
            href: '/services/marketing/email-marketing/'
        },
        {
            title: 'مدیریت قیف فروش',
            description: 'بهینه‌سازی مسیر حرکت کاربر از آشنایی تا خرید نهایی برای افزایش نرخ تبدیل.',
            icon: Filter,
            features: ['طراحی مسیر مشتری', 'بهینه‌سازی لندینگ پیج', 'تست A/B', 'تحلیل نرخ ریزش'],
            gradient: 'from-orange-500 to-amber-700',
            href: '/services/marketing/sales-funnel-management/'
        },
        {
            title: 'کمپین‌های یکپارچه',
            description: 'اجرای کمپین‌های ۳۶۰ درجه برای پوشش تمامی نقاط تماس با مشتری.',
            icon: Layers,
            features: ['استراتژی چندکاناله', 'هماهنگی پیام برند', 'مانیتورینگ جامع', 'تحلیل ROI'],
            gradient: 'from-teal-500 to-emerald-700',
            href: '/services/marketing/integrated-campaigns/'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-padding bg-linear-to-br from-blue-50 to-indigo-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <TrendingUp className="h-4 w-4" />
                                    رشد هوشمندانه کسب‌وکار شما
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    خدمات <span className="gradient-text">بازاریابی دیجیتال</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    ما با استفاده از داده‌ها و استراتژی‌های نوین، مسیر رشد کسب‌وکار شما را هموار می‌کنیم. از جذب تا وفادارسازی مشتری، در کنار شما هستیم.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                                        مشاوره رایگان بازاریابی
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 to-transparent z-10" />
                                <OptimizedImage
                                    src="/images/marketing-engagement-hero.webp"
                                    alt="خدمات بازاریابی دیجیتال"
                                    fill
                                    imageData={imagesMap['/images/marketing-engagement-hero.webp']}
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">راه‌حل‌های بازاریابی ما</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                استراتژی‌های هدفمند برای دیده شدن در دنیای دیجیتال
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {marketingServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in group relative overflow-hidden">
                                    <CardHeader>
                                        <div className={`w-14 h-14 bg-linear-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                                            <service.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <CardTitle className="group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>• {feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-padding bg-slate-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">داده محور</h3>
                                <p className="text-gray-600">تمامی تصمیمات ما بر اساس تحلیل دقیق داده‌ها و رفتار کاربران است.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">نتیجه گرا</h3>
                                <p className="text-gray-600">تمرکز اصلی ما بر افزایش فروش و بازگشت سرمایه (ROI) مشتریان است.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">مشتری مدار</h3>
                                <p className="text-gray-600">همراهی گام به گام با شما برای رسیدن به اهداف کسب‌وکارتان.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
