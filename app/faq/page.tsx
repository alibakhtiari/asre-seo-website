import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
    title: 'سوالات متداول | عصر سئو',
    description: 'پاسخ به سوالات رایج در زمینه خدمات سئو، دیجیتال مارکتینگ و طراحی سایت.',
    alternates: {
        canonical: 'https://asreseo.com/faq/',
    },
}

export default function FAQPage() {
    const faqs = [
        { q: 'چقدر زمان می‌برد تا نتایج سئو مشاهده شود؟', a: 'معمولاً بین ۳ تا ۶ ماه زمان لازم است تا استراتژی‌های سئو شروع به نشان دادن نتایج ملموس در رتبه‌بندی‌ها کنند.' },
        { q: 'آیا هزینه‌های تبلیغات گوگل جداگانه است؟', a: 'بله، بودجه تبلیغاتی مستقیماً به گوگل پرداخت می‌شود و هزینه ما مربوط به مدیریت و بهینه‌سازی فنی کمپین‌هاست.' },
        { q: 'چه نوع وب‌سایت‌هایی طراحی می‌کنید؟', a: 'ما انواع وب‌سایت‌های شرکتی، فروشگاهی، لندینگ پیج و پورتال‌های تخصصی را با تمرکز بر سئو و سرعت طراحی می‌کنیم.' },
        { q: 'آیا خدمات تولید محتوا هم ارائه می‌دهید؟', a: 'بله، تیم محتوای ما انواع محتوای متنی، تصویری و ویدیویی را بر اساس اصول سئو تولید می‌کند.' }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="section-padding pt-32">
                <div className="container-custom max-w-3xl">
                    <h1 className="text-4xl font-bold mb-12 text-center">سوالات متداول (FAQ)</h1>
                    <Accordion type="single" collapsible className="w-full" dir="rtl">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-right text-lg font-medium">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-right text-gray-600 text-base leading-relaxed">{faq.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </main>
            <Footer />
        </div>
    )
}
