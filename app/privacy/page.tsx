import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
    title: 'حریم خصوصی | عصر سئو',
    description: 'سیاست‌های حفظ حریم خصوصی کاربران در وب‌سایت عصر سئو.',
    alternates: {
        canonical: 'https://asreseo.com/privacy/',
    },
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-right">سیاست حریم خصوصی</h1>
                    <div className="prose prose-lg max-w-none text-right" dir="rtl">
                        <p>ما در عصر سئو به حریم خصوصی شما اهمیت می‌دهیم. در این صفحه توضیح می‌دهیم که چه اطلاعاتی را جمع‌آوری می‌کنیم و چگونه از آن‌ها استفاده می‌کنیم.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۱. اطلاعاتی که جمع‌آوری می‌کنیم</h2>
                        <p>هنگامی که شما از فرم تماس ما استفاده می‌کنید یا در خبرنامه عضو می‌شوید، اطلاعاتی نظیر نام، آدرس ایمیل و شماره تماس شما را دریافت می‌کنیم.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۲. نحوه استفاده از اطلاعات</h2>
                        <p>اطلاعات شما صرفاً برای پاسخگویی به درخواست‌های شما، ارائه خدمات و ارسال به‌روزرسانی‌های مرتبط با خدمات ما استفاده می‌شود.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۳. امنیت داده‌ها</h2>
                        <p>ما از پروتکل‌های امنیتی مدرن برای محافظت از داده‌های شما استفاده می‌کنیم و هرگز اطلاعات شما را با شخص ثالث به اشتراک نمی‌گذاریم.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">۴. کوکی‌ها</h2>
                        <p>این وب‌سایت برای بهبود تجربه کاربری از کوکی‌های استاندارد استفاده می‌کند.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
