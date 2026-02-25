import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { MessageCircle, Mail, PhoneCall } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'پشتیبانی | عصر سئو',
    description: 'مرکز پشتیبانی مشتریان عصر سئو. راه‌های ارتباطی برای حل مشکلات و پاسخگویی به سوالات شما.',
    alternates: {
        canonical: 'https://asreseo.com/support/',
    },
}

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6">مرکز پشتیبانی</h1>
                        <p className="text-xl text-gray-600">ما همیشه آماده پاسخگویی به شما هستیم</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-blue-50 text-center animate-fade-in">
                            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">پشتیبانی تلگرام</h3>
                            <p className="text-gray-600 mb-6">پاسخگویی سریع در کوتاه‌ترین زمان ممکن</p>
                            <Button className="w-full">ارسال پیام</Button>
                        </div>

                        <div className="p-8 rounded-2xl bg-indigo-50 text-center animate-fade-in animation-delay-200">
                            <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">پشتیبانی ایمیلی</h3>
                            <p className="text-gray-600 mb-6">مناسب برای موارد رسمی و مستندات</p>
                            <Button className="w-full">ارسال ایمیل</Button>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-100 text-center animate-fade-in animation-delay-400">
                            <PhoneCall className="h-12 w-12 text-slate-700 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">تماس تلفنی</h3>
                            <p className="text-gray-600 mb-6">شنبه تا چهارشنبه، ۹ الی ۱۷</p>
                            <Link href="tel:+982112345678">
                                <Button variant="outline" className="w-full border-slate-300">تماس با ما</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
