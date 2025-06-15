
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spline, UserCheck, CheckCircle2, Layers3, WandSparkles, ListChecks } from "lucide-react";

const features = [
  {
    icon: <Spline className="h-6 w-6 text-blue-600" />,
    title: "معماری اطلاعات ساخت‌یافته",
    description: "تنظیم ساختار استاندارد سایت برای یافتن سریع اطلاعات توسط کاربران و گوگل."
  },
  {
    icon: <Layers3 className="h-6 w-6 text-green-600" />,
    title: "سفر کاربر بهینه‌شده",
    description: "طراحی مسیرهای دسترسی و تعامل به گونه‌ای که کاربر بدون سردرگمی هدف خود را پیدا کند."
  },
  {
    icon: <WandSparkles className="h-6 w-6 text-purple-700" />,
    title: "رعایت الگوهای برتر UX",
    description: "استفاده از بهترین شیوه‌ها و تست شده‌های جهانی در تجربه کاربری سایت."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-pink-500" />,
    title: "افزایش رضایت و وفاداری کاربر",
    description: "تجربه لذت‌بخش باعث بازگشت و معرفی سایت توسط کاربران می‌شود."
  }
];

const benefits = [
  "افزایش ماندگاری و تعامل کاربر در سایت",
  "کاهش نرخ خروج زودهنگام و افزایش صفحات مشاهده شده",
  "سهولت در پیدا کردن خدمات یا محصول موردنظر",
  "پایه‌ریزی موفقیت سئو و تبلیغات"
];

const faqs = [
  {
    question: "معماری اطلاعات و UX برای چه نوع سایت‌هایی ضروری است؟",
    answer: "همه سایت‌ها، از فروشگاه تا شرکتی، نیازمند معماری اطلاعات منظم و UX قوی هستند."
  },
  {
    question: "مراحل اجرای پروژه UX/IA چگونه است؟",
    answer: "تحلیل نیاز، بررسی رقبای موفق، ترسیم سفر کاربر و سپس طراحی چیدمان اصلی انجام می‌شود."
  },
  {
    question: "آیا تست کاربری قبل از تحویل انجام می‌دهید؟",
    answer: "بله، تست کاربردپذیری و رفع نقاط کور پیش از تحویل نهایی اجرا می‌شود."
  }
];

const contentSection = (
  <>
    {/* Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            طراحی معماری اطلاعات و تجربه کاربری (UX) حرفه‌ای
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            راز ماندگاری کاربران و موفقیت سایت شما، تجربه کاربری روان و ساختار اطلاعاتی دقیق است. تیم عصر سئو این را تضمین می‌کند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((step, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              تاثیر معماری اطلاعات و UX بر کسب‌وکار آنلاین
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              ساختار حرفه‌ای و تجربه کاربری عالی باعث هدایت کاربران به مسیر صحیح و افزایش نتایج می‌شود.
            </p>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+۱۱۰ پروژه موفق</div>
              <p className="text-slate-600 mb-6">طراحی و بهبود ساختار اطلاعات در سایت‌های متنوع</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">۹۵٪</div>
                  <p className="text-sm text-slate-600">رضایت از تجربه کاربری</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۲ هفته</div>
                  <p className="text-sm text-slate-600">میانگین زمان پیاده‌سازی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQ */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            سوالات متداول درباره معماری اطلاعات و UX
          </h2>
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

const UXArchitecture = () => {
  return (
    <ServicePageTemplate
      title="معماری اطلاعات و UX | طراحی تجربه کاربری | عصر سئو"
      description="طراحی معماری اطلاعات و تجربه کاربری بهینه برای افزایش رضایت کاربران و بهبود نرخ تبدیل."
      keywords="معماری اطلاعات, UX Design, تجربه کاربری, Information Architecture"
      canonicalUrl="https://asreseo.com/services/web/ux-architecture"
      heroTitle="معماری اطلاعات و UX"
      heroDescription="طراحی تجربه کاربری بهینه و ساختار منطقی برای وب‌سایت شما"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default UXArchitecture;
