import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: 'دریافت مشاوره رایگان | عصر سئو',
    description: 'رزرو وقت مشاوره رایگان برای پروژه‌های سئو، تبلیغات گوگل و طراحی وب‌سایت.',
    alternates: {
        canonical: 'https://asreseo.com/consultation/',
    },
}

export default function ConsultationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold mb-8 text-right">درخواست جلسه مشاوره</h2>
                            <form className="space-y-6" dir="rtl">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                                        <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-hidden" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                                        <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-hidden" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">زمینه مشاوره</label>
                                    <select className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-hidden">
                                        <option>سئو و بهینه‌سازی</option>
                                        <option>تبلیغات گوگل</option>
                                        <option>طراحی وب‌سایت</option>
                                        <option>هوش مصنوعی</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات کوتاه</label>
                                    <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-hidden"></textarea>
                                </div>
                                <Button className="w-full py-6 text-lg gradient-bg text-white shadow-lg shadow-blue-500/30">ثبت درخواست مشاوره</Button>
                            </form>
                        </div>

                        <div className="order-1 lg:order-2 text-right">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">رزرو <span className="gradient-text">مشاوره تخصصی</span> رایگان</h1>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">برای نیم ساعت، کسب‌وکار شما را تحلیل می‌کنیم و نقشه راه رشدتان را ترسیم می‌کنیم. این جلسه کاملاً رایگان و بدون تعهد است.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 justify-end">
                                    <span className="text-gray-700 font-medium">۳۰ دقیقه تحلیل اختصاصی</span>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0"><Clock /></div>
                                </div>
                                <div className="flex items-center gap-4 justify-end">
                                    <span className="text-gray-700 font-medium">بررسی رقبا و کلمات کلیدی</span>
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0"><Calendar /></div>
                                </div>
                                <div className="flex items-center gap-4 justify-end">
                                    <span className="text-gray-700 font-medium">حضوری یا آنلاین (Zoom/Meet)</span>
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0"><MapPin /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
