import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../src/generated/images-map.json'
import { Code2, Monitor, Rocket, Layout, FastForward, Smartphone, Search, ShieldCheck, Gauge } from 'lucide-react'

export const metadata: Metadata = {
    title: 'طراحی وب‌سایت و توسعه وب | سئو محور و مدرن | عصر سئو',
    description: 'خدمات تخصصی طراحی وب‌سایت‌های سئو محور، بهینه‌سازی سرعت، طراحی لندینگ پیج و بهبود تجربه کاربری (UX) توسط تیم فنی عصر سئو.',
    keywords: 'طراحی وب‌سایت, توسعه وب, بهینه‌سازی سرعت سایت, لندینگ پیج, تجربه کاربری, UX, سایت سئو محور',
    alternates: {
        canonical: 'https://asreseo.com/services/web/',
    },
    openGraph: {
        title: 'طراحی و توسعه وب | عصر سئو',
        description: 'وب‌سایت‌های سریع، مدرن و بهینه‌سازی شده برای گوگل.',
        type: 'website',
        url: 'https://asreseo.com/services/web/',
    },
}

export default function WebServicesPage() {
    const webServices = [
        {
            title: 'طراحی سایت سئو محور',
            description: 'ساخت وب‌سایت‌هایی که از همان ابتدا برای رتبه‌بندی عالی در موتورهای جستجو طراحی شده‌اند.',
            icon: Search,
            features: ['ساختار کد استاندارد', 'رعایت اصول سئو تکنیکال', 'Mobile First Design', 'یکپارچگی با گوگل'],
            gradient: 'from-blue-500 to-indigo-700',
            href: '/services/web/seo-web-design/'
        },
        {
            title: 'بهینه‌سازی سرعت سایت',
            description: 'افزایش سرعت بارگذاری برای بهبود تجربه کاربری و کسب امتیازهای Core Web Vitals.',
            icon: Gauge,
            features: ['بهینه‌سازی تصاویر', 'کاهش حجم کدها', 'تنظیمات کش پیشرفته', 'بهبود زمان پاسخگویی'],
            gradient: 'from-orange-500 to-red-700',
            href: '/services/web/website-speed/'
        },
        {
            title: 'طراحی صفحات فرود (Landing Pages)',
            description: 'طراحی لندینگ پیج‌های حرفه‌ای با هدف افزایش مستقیم فروش و جذب لید.',
            icon: Layout,
            features: ['طراحی اختصاصی', 'کال تو اکشن‌های موثر', 'سرعت بسیار بالا', 'بهینه‌سازی نرخ تبدیل'],
            gradient: 'from-purple-500 to-fuchsia-700',
            href: '/services/web/landing-pages/'
        },
        {
            title: 'معماری تجربه کاربری (UX)',
            description: 'طراحی اصولی مسیر حرکت کاربر برای ایجاد تجربه‌ای لذت‌بخش و کارآمد.',
            icon: Smartphone,
            features: ['User Research', 'طراحی وایرفریم', 'بهبود دسترسی‌پذیری', 'تست کاربردپذیری'],
            gradient: 'from-teal-500 to-cyan-700',
            href: '/services/web/ux-architecture/'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-padding bg-linear-to-br from-slate-50 to-blue-50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 blur-3xl -z-10 rounded-full animate-pulse"></div>

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-right animate-fade-in order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Code2 className="h-4 w-4" />
                                    استانداردهای جهانی در توسعه وب
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    طراحی و <span className="gradient-text">توسعه وب</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    ما فقط وب‌سایت نمی‌سازیم؛ ما یک پلتفرم قدرتمند برای رشد کسب‌وکار شما خلق می‌کنیم که سریع، امن و کاملاً بهینه‌سازی شده است.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                                    <Button size="lg" className="gradient-bg text-white px-8">
                                        شروع طراحی سایت
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50">
                                <OptimizedImage
                                    src="/images/web-design-hero.webp"
                                    alt="طراحی وب‌سایت عصر سئو"
                                    fill
                                    imageData={imagesMap['/images/web-design-hero.webp']}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-8">
                            {webServices.map((service, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in group">
                                    <CardHeader className="flex flex-row items-center gap-6 p-8">
                                        <div className={`w-16 h-16 bg-linear-to-r ${service.gradient} rounded-2xl flex items-center justify-center shrink-0`}>
                                            <service.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-2xl mb-2 group-hover:text-indigo-600 transition-colors">
                                                {service.title}
                                            </CardTitle>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-8 pb-8 pt-0">
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
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

                {/* Why Us Section */}
                <section className="section-padding bg-slate-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">چرا وب‌سایت‌های ما متفاوت‌اند؟</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FastForward className="h-8 w-8 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">سرعت فوق‌العاده</h3>
                                <p className="text-gray-400">استفاده از تکنولوژی‌های مدرن برای لود زیر ۱ ثانیه.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck className="h-8 w-8 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">امنیت حداکثری</h3>
                                <p className="text-gray-400">پیاده‌سازی پروتکل‌های امنیتی روز دنیا برای محافظت از داده‌ها.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Rocket className="h-8 w-8 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">آماده رتبه گرفتن</h3>
                                <p className="text-gray-400">کدنویسی تمیز و بهینه‌سازی شده برای فهم بهتر گوگل.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
