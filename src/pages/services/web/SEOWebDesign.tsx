
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Palette, TrendingUp, CheckCircle2, Activity, Globe2 } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-6 w-6 text-blue-600" />,
    title: "ساختار حرفه‌ای و بر پایه UX",
    description: "طراحی ساختار صفحات بر اساس اصول روانشناسی کاربر و افزایش نرخ تبدیل."
  },
  {
    icon: <Globe2 className="h-6 w-6 text-green-600" />,
    title: "سئو تکنیکال و محتوایی از ابتدا",
    description: "استفاده از استانداردهای سئو در همه جنبه‌های طراحی، محتوا و کدنویسی."
  },
  {
    icon: <Palette className="h-6 w-6 text-purple-600" />,
    title: "هویت بصری اختصاصی و خلاقانه",
    description: "رعایت هویت برند، انتخاب رنگ‌ها و گرافیک اثرگذار برای ماندگاری ذهنی."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-pink-500" />,
    title: "آمادگی کامل برای رشد و تبلیغات",
    description: "طراحی صفحات قابل توسعه و هماهنگ با انواع تبلیغات و کمپین‌های دیجیتال."
  }
];

const benefits = [
  "رتبه سریع‌تر و پایدارتر در نتایج گوگل",
  "کاهش محسوس نرخ پرش کاربران",
  "افزایش قابل توجه نرخ درخواست و فروش",
  "صرفه‌جویی در زمان و هزینه به علت استاندارد بودن"
];

const faqs = [
  {
    question: "آیا سایت طراحی شده با اصول سئو به صورت تضمینی به رتبه یک می‌رسد؟",
    answer: "رعایت کامل سئو در طراحی سایت، زیرساخت لازم برای رشد سریع را فراهم می‌کند، اما تضمین رتبه یک نیازمند تداوم محتوا و لینک‌سازی است."
  },
  {
    question: "چقدر طول می‌کشد تا یک سایت سئو محور آماده شود؟",
    answer: "بسته به حجم صفحات و امکانات، عموماً بین ۲ تا ۴ هفته زمان برای طراحی و پیاده‌سازی کامل نیاز است."
  },
  {
    question: "پشتیبانی و آموزش پس از تحویل سایت به چه صورت است؟",
    answer: "پس از اتمام پروژه، آموزش پنل و پشتیبانی ۳ ماه رایگان به شما ارائه می‌شود."
  }
];

const contentSection = (
  <>
    {/* Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            طراحی سایت سئو محور با رویکرد رشد و موفقیت تجاری
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            وب‌سایت شما مهم‌ترین سرمایه دیجیتال است. ما آن را به گونه‌ای طراحی می‌کنیم که از همان روز اول، برای تعامل، فروش و رشد آماده باشد.
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
              چرا طراحی با رویکرد سئو مهم است؟
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              طراحی اصولی پایه ثابت موفقیت شما در سئو، تبلیغات و تعامل با کاربران است.
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
              <div className="text-4xl font-bold text-blue-600 mb-2">+۹۰ پروژه موفق</div>
              <p className="text-slate-600 mb-6">طراحی و راه‌اندازی برای کسب‌وکارهای مختلف</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">۹۳٪</div>
                  <p className="text-sm text-slate-600">رضایت مشتریان</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۲ هفته</div>
                  <p className="text-sm text-slate-600">میانگین زمان اجرا</p>
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
            سوالات متداول درباره طراحی سایت سئو محور
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

const SEOWebDesign = () => {
  return (
    <ServicePageTemplate
      title="طراحی سایت سئو محور | طراحی وب‌سایت بهینه | عصر سئو"
      description="طراحی وب‌سایت سئو محور با بهترین استانداردها، سرعت بالا و تجربه کاربری عالی برای رتبه‌بندی بهتر."
      keywords="طراحی سایت سئو محور, طراحی وب‌سایت, سایت بهینه, UX/UI"
      canonicalUrl="https://asreseo.com/services/web/seo-web-design"
      heroTitle="طراحی سایت سئو محور"
      heroDescription="طراحی وب‌سایت‌های بهینه با رعایت کامل اصول سئو و تجربه کاربری"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SEOWebDesign;
