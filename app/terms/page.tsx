import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
    title: 'قوانین و مقررات | عصر سئو',
    description: 'شرایط و ضوابط استفاده از خدمات وب‌سایت عصر سئو.',
    alternates: {
        canonical: 'https://asreseo.com/terms/',
    },
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-right">قوانین و مقررات</h1>
                    <div className="prose prose-lg max-w-none text-right" dir="rtl">
                        <p>استفاده از خدمات عصر سئو به منزله پذیرش کامل قوانین و مقررات زیر می‌باشد.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۱. تعهدات ما</h2>
                        <p>عصر سئو متعهد است که خدمات خود را با بالاترین کیفیت و مطابق با استانداردهای روز دنیای دیجیتال ارائه دهد.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۲. تعهدات کاربر</h2>
                        <p>کاربران موظف هستند اطلاعات صحیح را در فرم‌ها وارد کنند و از هرگونه استفاده غیرمجاز از محتوای وب‌سایت خودداری نمایند.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۳. مالکیت دانش</h2>
                        <p>تمامی محتوای تولید شده در وب‌سایت عصر سئو متعلق به این مجموعه بوده و هرگونه کپی‌برداری بدون ذکر منبع پیگرد قانونی دارد.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۴. تغییرات قوانین</h2>
                        <p>عصر سئو حق دارد در هر زمان قوانین خود را به‌روزرسانی کند. تغییرات از طریق همین صفحه به اطلاع کاربران خواهد رسید.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
