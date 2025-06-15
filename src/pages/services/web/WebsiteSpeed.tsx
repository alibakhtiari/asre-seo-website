
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Timer, CheckCircle2, TrendingUp, ThermometerSun, Cpu } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "افزایش سرعت بارگذاری",
    description: "کاهش زمان لود صفحات به زیر ۳ ثانیه برای رضایت گوگل و کاربر."
  },
  {
    icon: <Timer className="h-6 w-6 text-blue-600" />,
    title: "بهینه‌سازی تصاویر و کد",
    description: "فشرده‌سازی حرفه‌ای تصاویر و کدنویسی بهینه برای مصرف کمتر منابع."
  },
  {
    icon: <Cpu className="h-6 w-6 text-purple-600" />,
    title: "کَش حرفه‌ای و CDN",
    description: "استفاده از شبکه تحویل محتوا و تنظیم کش جهت لود ثانیه‌ای سایت."
  },
  {
    icon: <ThermometerSun className="h-6 w-6 text-pink-500" />,
    title: "بررسی Core Web Vitals",
    description: "رفع خطاهای Largest Contentful Paint، CLS و موارد تاثیرگذار بر رتبه."
  }
];

const benefits = [
  "کاهش نرخ خروج و پرش کاربران",
  "پیشرفت در رتبه‌بندی سئو (Core Web Vitals)",
  "افزایش نرخ تبدیل و فروش آنلاین",
  "ارتقای رضایت کاربران موبایلی و دسکتاپ"
];

const faqs = [
  {
    question: "سرعت سایت چه تاثیری در سئو دارد؟",
    answer: "سایت پرسرعت تجربه مثبت کاربر و رتبه بهتر در گوگل را تضمین می‌کند."
  },
  {
    question: "اصلاح سرعت سایت چقدر زمان می‌برد؟",
    answer: "بین ۳ تا ۷ روز کاری، بسته به حجم سایت، بهینه‌سازی انجام می‌شود."
  },
  {
    question: "آیا راه حلی برای سایت‌های وردپرسی هم دارید؟",
    answer: "بله، بهینه‌سازی تخصصی برای انواع سایت‌ها از جمله وردپرس ارائه می‌گردد."
  }
];

const contentSection = (
  <>
    {/* Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            بهینه‌سازی سرعت سایت؛ تجربه بی‌رقیب برای کاربر و گوگل
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با بهینه‌سازی حرفه‌ای سرعت، کاربران بیشتری جذب کنید و رتبه سئو سایت خود را ارتقا دهید. کیفیت در عصر سئو تضمین می‌شود!
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
              مزایای افزایش سرعت سایت
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              هر ثانیه زمان بیشتر در لود سایت، ریزش مشتری و افت رتبه را به همراه دارد!
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
          <div className="bg-gradient-to-br from-yellow-100 to-blue-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">+۸۰٪</div>
              <p className="text-slate-600 mb-6">بهبود سرعت پروژه‌های ارتقاء یافته نسبت به قبل</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">۳ ثانیه</div>
                  <p className="text-sm text-slate-600">زمان بارگذاری هدف</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۱۰۰/۱۰۰</div>
                  <p className="text-sm text-slate-600">امتیاز PageSpeed هدف</p>
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
            سوالات متداول درباره بهینه‌سازی سرعت سایت
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

const WebsiteSpeed = () => {
  return (
    <ServicePageTemplate
      title="بهینه‌سازی سرعت سایت | افزایش سرعت وب‌سایت | عصر سئو"
      description="خدمات تخصصی بهینه‌سازی سرعت وب‌سایت، کاهش زمان بارگذاری و بهبود عملکرد برای تجربه کاربری بهتر."
      keywords="بهینه‌سازی سرعت سایت, سرعت وب‌سایت, Page Speed, Core Web Vitals"
      canonicalUrl="https://asreseo.com/services/web/website-speed"
      heroTitle="بهینه‌سازی سرعت سایت"
      heroDescription="افزایش سرعت بارگذاری صفحات و بهبود عملکرد کلی وب‌سایت شما"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default WebsiteSpeed;
