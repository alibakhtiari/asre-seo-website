
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Smartphone, Code, Database, Globe, Activity } from 'lucide-react';

const technicalServices = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-600" />,
    title: "بهینه‌سازی سرعت سایت",
    description: "افزایش سرعت لود صفحات به زیر ۳ ثانیه و بهبود تجربه کاربری."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    title: "سئو موبایل و واکنش‌گرا",
    description: "اطمینان از عملکرد بی‌نقص سایت روی همه دستگاه‌ها و موبایل."
  },
  {
    icon: <Code className="h-6 w-6 text-green-600" />,
    title: "ساختاردهی Schema و داده‌های ساختاریافته",
    description: "اضافه‌کردن داده‌های ساختاریافته برای نمایش غنی‌تر در نتایج گوگل."
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: "افزایش امنیت و SSL",
    description: "پیکربندی HTTPS و حذف ریسک‌های امنیتی سایت."
  },
  {
    icon: <Database className="h-6 w-6 text-purple-600" />,
    title: "بهینه‌سازی دیتابیس",
    description: "افزایش سرعت کوئری‌ها، بهینه‌سازی داده‌ها و جلوگیری از خطاهای دیتابیس."
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    title: "CDN و کشینگ",
    description: "راه‌اندازی شبکه تحویل محتوا و برنامه‌ریزی کش برای افزایش سرعت."
  }
];

const technicalIssues = [
  "خطاهای crawl و index",
  "ناهنجاری در فایل robots.txt",
  "اشکال در Sitemap XML",
  "مشکل URLهای تکراری یاسازی صحیح canonical",
  "لینک‌های شکسته و خطاهای ۴۰۴",
  "خطاهای Core Web Vitals",
  "مشکلات ساختار URL و پارامترها",
  "اختلالات طراحی واکنش‌گرا"
];

const faqs = [
  {
    question: "سئو تکنیکال شامل چه اقداماتی است؟",
    answer: "شامل مواردی مانند سرعت سایت، امنیت، ساختارداده‌ها، رفع خطاهای فنی و بهینه‌سازی Core Web Vitals است."
  },
  {
    question: "کدام خطاهای فنی بیشترین تاثیر منفی در سئو دارند؟",
    answer: "مواردی چون مشکل ایندکس، خطاهای ۴۰۴، سرعت پایین و ساختار غیر استاندارد URL بسیار مخرب هستند."
  },
  {
    question: "آیا خدمات سئو تکنیکال به تنهایی کافی است؟",
    answer: "خیر. سئو تکنیکال باید با محتوا و لینک‌سازی حرفه‌ای تکمیل شود تا نتایج عالی بگیرید."
  }
];

const contentSection = (
  <>
    {/* Technical SEO Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            سئو تکنیکال؛ زیربنای رتبه سایت شما
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با خدمات تخصصی سئو تکنیکال تیم عصر سئو، تمام جنبه‌های فنی سایت خود را استاندارد کنید و رتبه آینده سایت‌تان را تضمین نمایید.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalServices.map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Tech SEO Issues */}
    <section className="py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              خطاهای فنی متداول و تاثیر آن بر سئو
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              حذف خطاهای تکنیکال، سکوی پرتاب سایت شما به صفحات نخست نتایج جستجو خواهد بود. موارد زیر را برای سایت خود جدی بگیرید:
            </p>
            <ul className="space-y-3">
              {technicalIssues.map((issue, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-2xl text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">+۲۰۰٪</div>
              <p className="mb-6">افزایش سرعت بارگذاری سایت با بهینه‌سازی تکنیکال</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">۹۵/۱۰۰</div>
                  <p className="text-sm">امتیاز Google PageSpeed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">۹۰٪</div>
                  <p className="text-sm">رضایت مشتریان از خدمات تکنیکال</p>
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
            سوالات متداول درباره سئو تکنیکال
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

const TechnicalSEO = () => {
  return (
    <ServicePageTemplate
      title="سئو تکنیکال | رفع خطاهای فنی و افزایش سرعت سایت | عصر سئو"
      description="خدمات سئو تکنیکال کامل شامل بهینه‌سازی سرعت، امنیت، ساختاریافته‌سازی داده‌ها و رفع مشکلات فنی برای رشد رتبه سایت."
      keywords="سئو تکنیکال, رفع خطای سایت, بهینه‌سازی فنی, افزایش سرعت سایت"
      canonicalUrl="https://asreseo.com/services/seo/technical-seo"
      heroTitle="خدمات سئو تکنیکال"
      heroDescription="بهینه‌سازی فنی سایت برای ارتقای جایگاه در نتایج موتورهای جستجو و رضایت کاربر"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default TechnicalSEO;
