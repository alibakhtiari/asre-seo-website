import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
    title: 'نمونه کارها | عصر سئو',
    description: 'مشاهده پروژه‌های موفق سئو، طراحی سایت و بازاریابی دیجیتال عصر سئو.',
    alternates: {
        canonical: 'https://asreseo.com/portfolio/',
    },
}

export default function PortfolioPage() {
    const projects = [
        { title: 'فروشگاه آنلاین مد و پوشاک', category: 'طراحی سایت و سئو', status: 'رتبه ۱ گوگل' },
        { title: 'اپلیکیشن مدیریت مالی', category: 'تجربه کاربری و توسعه', status: 'تکمیل شده' },
        { title: 'کمپین تبلیغاتی برند لوازم خانگی', category: 'دیجیتال مارکتینگ', status: '۳۰۰٪ رشد لید' },
        { title: 'پرورتال خبری تخصصی', category: 'سئو تکنیکال', status: 'بهینه‌سازی سرعت' },
        { title: 'پلتفرم آموزش آنلاین', category: 'طراحی سایت', status: 'واکنش‌گرا' },
        { title: 'استراتژی محتوای هلدینگ صنعتی', category: 'بازاریابی محتوایی', status: 'رشد ارگانیک' }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6">نمونه کارهای ما</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">داستان موفقیت مشتریانی که به ما اعتماد کردند</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
                        {projects.map((project, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow border-gray-100">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-600">{project.category}</Badge>
                                        <Badge className="bg-green-500">{project.status}</Badge>
                                    </div>
                                    <CardTitle className="text-xl mt-4 leading-relaxed">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 italic">تصویر پروژه</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
