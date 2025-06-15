
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Search, TrendingUp, Target, BarChart, Clock, Users, Star, ArrowLeft } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "تحقیق کلمات کلیدی",
    description: "شناسایی و انتخاب بهترین کلمات کلیدی برای کسب‌وکار شما."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "بهینه‌سازی صفحات",
    description: "بهینه‌سازی ساختار و محتوای صفحات سایت برای موتورهای جستجو."
  },
  {
    icon: <Target className="h-6 w-6 text-purple-600" />,
    title: "سئو تکنیکال",
    description: "رفع مشکلات فنی و بهبود ساختار سایت برای جذب ترافیک ارگانیک."
  },
  {
    icon: <BarChart className="h-6 w-6 text-orange-600" />,
    title: "تحلیل و گزارش‌دهی",
    description: "ارائه گزارش‌های دقیق و داده‌محور از روند رشد سئو سایت."
  }
];

const benefits = [
  "رشد ترافیک ارگانیک و جذب مشتریان جدید",
  "افزایش رتبه سایت در عبارات هدفمند",
  "افزایش اعتبار برند و اعتماد مخاطبان",
  "کاهش هزینه تبلیغات و بازدهی بیشتر",
  "افزایش نرخ تبدیل و فروش"
];

const process = [
  {
    step: "۱",
    title: "تحلیل سایت و بازار",
    description: "بررسی وضعیت فعلی سایت، رقبا و بازار هدف جهت تدوین استراتژی سئو."
  },
  {
    step: "۲",
    title: "استراتژی اختصاصی سئو",
    description: "تهیه نقشه راه جامع بر اساس اهداف و اولویت‌های کسب‌وکار."
  },
  {
    step: "۳",
    title: "اجرای فنی و محتوایی",
    description: "پیاده‌سازی اقدامات تکنیکال، بهینه‌سازی محتوا و لینک‌سازی."
  },
  {
    step: "۴",
    title: "پایش و بهبود مستمر",
    description: "رصد نتایج با ابزارهای حرفه‌ای و اجرای بهبودهای تدریجی."
  }
];

const faqs = [
  {
    question: "نتایج سئو در چه بازه‌ای قابل مشاهده است؟",
    answer: "بسته به میزان رقابت و شرایط سایت، معمولاً نتایج اولیه در ۳ تا ۶ ماه ظاهر می‌شود و رشد پایدار تا ۱۲ ماه ادامه دارد."
  },
  {
    question: "آیا خدمات سئو برای همه نوع وب‌سایت مناسب است؟",
    answer: "بله، سئو برای کسب‌وکارهای B2B، B2C، فروشگاه آنلاین و حتی برندهای محلی بسیار مؤثر است."
  },
  {
    question: "آیا هزینه سئو قابل مدیریت است؟",
    answer: "خدمات سئو با پکیج‌های متنوع و براساس بودجه کسب‌وکار ارائه می‌شود تا همه کسب‌وکارها بتوانند از آن بهره‌مند شوند."
  }
];

const contentSection = (
  <>
    {/* Website SEO Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            خدمات سئو وب‌سایت؛ پله پرتاب کسب‌وکار دیجیتال
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با خدمات حرفه‌ای سئو عصر سئو، رتبه سایت خود را در گوگل افزایش دهید و در معرض دید مشتریان جدید قرار بگیرید. تیم ما با دانش روز، وب‌سایت شما را به موفقیت می‌رساند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              مزایای استفاده از سئو برای سایت شما
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              سئو کارآمد، کلید رشد پایدار و افزایش درآمد است. با تخصص عصر سئو، از مزایای بی‌شمار آن بهره‌مند می‌شوید:
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+۴۰۰٪</div>
              <p className="text-slate-600 mb-6">افزایش ترافیک ارگانیک سایت‌های مشتریان ما</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">۹۲٪</div>
                  <p className="text-sm text-slate-600">رضایت مشتریان</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">۲۴/۷</div>
                  <p className="text-sm text-slate-600">پشتیبانی تخصصی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SEO Process */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            چطور سئو سایت شما را انجام می‌دهیم؟
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            از تحلیل تا اجرای تخصصی و بهبود مستمر؛ مسیر موفقیت سئو با تیم عصر سئو تضمین شده است.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* FAQ */}
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            سوالات متداول درباره سئو وب‌سایت
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
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

const WebsiteSEO = () => {
  return (
    <ServicePageTemplate
      title="خدمات سئو سایت | بهبود رتبه و افزایش ترافیک ارگانیک | عصر سئو"
      description="ارائه خدمات کامل سئو سایت شامل تحلیل تخصصی، استراتژی، بهینه‌سازی فنی، محتوایی و لینک‌سازی توسط تیم حرفه‌ای عصر سئو."
      keywords="سئو سایت, بهینه‌سازی وب‌سایت, افزایش رتبه گوگل, ترافیک ارگانیک"
      canonicalUrl="https://asreseo.com/services/seo/website-seo"
      heroTitle="خدمات سئو وب‌سایت"
      heroDescription="بهینه‌سازی وب‌سایت شما برای رشد پایدار و تبدیل بازدیدکننده به مشتری"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default WebsiteSEO;
