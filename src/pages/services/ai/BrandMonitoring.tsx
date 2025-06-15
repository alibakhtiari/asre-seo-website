
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Mic, Users, HeartPulse, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Eye className="h-6 w-6 text-pink-600"/>,
    title: 'نظارت بر تمامی کانال‌های آنلاین',
    description: 'بررسی مداوم برند شما در وب، شبکه‌های اجتماعی، انجمن‌ها و رسانه‌های خبری.'
  },
  {
    icon: <Mic className="h-6 w-6 text-blue-600"/>,
    title: 'تشخیص سریع بحران‌های احتمالی',
    description: 'شناسایی کامنت‌ها و اخبار منفی با هشدار آنی برای پیشگیری از بحران شهرت برند.'
  },
  {
    icon: <Users className="h-6 w-6 text-green-700"/>,
    title: 'تحلیل احساسات کاربران',
    description: 'تشخیص حس مثبت، منفی یا خنثی نظرات پیرامون برند و محصولات شما با هوش مصنوعی.'
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-yellow-600"/>,
    title: 'گزارش‌های تحلیلی دقیق',
    description: 'دریافت گزارش‌های بصری درباره تاثیر هر کمپین و تغییر تصویر برند در طول زمان.'
  }
];

const benefits = [
  'پیشگیری از بحران‌های شهرت و مدیریت موثر رضایت مشتری',
  'ایجاد تصویر مثبت و اعتبار قوی برای برند',
  'تحلیل لحظه‌ای دیدگاه و احساس کاربران',
  'افزایش آگاهی از برند و فرصت پاسخ سریع به فرصت‌ها و تهدیدها'
];

const faqs = [
  {
    question: 'برند من در چه رسانه‌هایی مانیتور می‌شود؟',
    answer: 'در تمامی بسترهای آنلاین شامل اینستاگرام، تلگرام، توییتر، سایت‌های خبری، وبلاگ‌ها و انجمن‌ها.'
  },
  {
    question: 'آیا هشدارهای آنی دریافت می‌کنم؟',
    answer: 'بله، در صورت بروز کامنت منفی یا انتشار خبر مهم بلافاصله هشدار دریافت خواهید کرد.'
  },
  {
    question: 'آیا تحلیل‌ها شامل داده‌های رقبا نیز هست؟',
    answer: 'در صورت نیاز، تحلیل برندهای رقیب و مقایسه جایگاه آن‌ها با برند شما هم انجام می‌شود.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Brand Monitoring: مانیتورینگ هوشمند برند</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با مانیتورینگ هوش مصنوعی، اعتبار برند شما دائماً رصد شده و بحران‌های احتمالی پیش از وقوع مدیریت می‌گردد.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای مانیتورینگ برند با عصر سئو</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <BadgeCheck className="h-5 w-5 text-green-500 ml-3" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
    {/* FAQs */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول مانیتورینگ برند</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-right">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-right">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);

const BrandMonitoring = () => {
  return (
    <ServicePageTemplate
      title="مانیتورینگ برند با هوش مصنوعی | Brand Monitoring | عصر سئو"
      description="نظارت هوشمند بر برند در شبکه‌های اجتماعی و وب با تحلیل احساسات و بررسی نظرات کاربران."
      keywords="مانیتورینگ برند, هوش مصنوعی, Brand Monitoring, تحلیل احساسات"
      canonicalUrl="https://asreseo.com/services/ai/brand-monitoring"
      heroTitle="مانیتورینگ برند با هوش مصنوعی"
      heroDescription="نظارت هوشمند بر وضعیت برند و تحلیل نظرات کاربران"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default BrandMonitoring;
