
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, TrendingUp, Target, BarChart, Clock, Users, Star, ArrowLeft } from 'lucide-react';

const WebsiteSEO = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "تحقیق کلمات کلیدی",
      description: "شناسایی و انتخاب بهترین کلمات کلیدی برای کسب‌وکار شما"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "بهینه‌سازی صفحات",
      description: "بهینه‌سازی کامل تمام صفحات سایت برای موتورهای جستجو"
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "سئو تکنیکال",
      description: "رفع مشکلات فنی و بهبود ساختار تکنیکال وب‌سایت"
    },
    {
      icon: <BarChart className="h-6 w-6 text-orange-600" />,
      title: "تحلیل و گزارش‌دهی",
      description: "ارائه گزارش‌های دقیق از پیشرفت و عملکرد سئو"
    }
  ];

  const benefits = [
    "افزایش ترافیک ارگانیک تا ۳۰۰٪",
    "بهبود رتبه‌بندی در کلمات کلیدی هدف",
    "کاهش هزینه تبلیغات کلیکی",
    "افزایش نرخ تبدیل و فروش آنلاین",
    "تقویت اعتبار و برند آنلاین",
    "رقابت مؤثر با شرکت‌های بزرگ"
  ];

  const process = [
    {
      step: "۱",
      title: "تحلیل اولیه",
      description: "بررسی کامل وضعیت فعلی سایت و شناسایی نقاط ضعف و قوت"
    },
    {
      step: "۲", 
      title: "استراتژی سئو",
      description: "طراحی استراتژی اختصاصی بر اساس اهداف کسب‌وکار شما"
    },
    {
      step: "۳",
      title: "پیاده‌سازی",
      description: "اجرای تکنیک‌های سئو و بهینه‌سازی‌های لازم"
    },
    {
      step: "۴",
      title: "نظارت و بهبود",
      description: "پایش مستمر عملکرد و اعمال بهبودهای مداوم"
    }
  ];

  const contentSection = (
    <>
      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              چرا سئو سایت برای کسب‌وکار شما ضروری است؟
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              در دنیای دیجیتال امروز، ۹۳٪ تجربیات آنلاین از جستجو در گوگل شروع می‌شود. سئو سایت به شما کمک می‌کند تا در این جستجوها دیده شوید و مشتریان بیشتری جذب کنید.
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                مزایای سئو سایت برای کسب‌وکار شما
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                سئو سایت یکی از مؤثرترین روش‌های بازاریابی دیجیتال است که بازدهی سرمایه‌گذاری بالایی دارد. با سئو حرفه‌ای، کسب‌وکار شما می‌تواند:
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
                <div className="text-4xl font-bold text-blue-600 mb-2">+۵۰۰٪</div>
                <p className="text-slate-600 mb-6">افزایش ترافیک ارگانیک مشتریان ما</p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">۹۲٪</div>
                    <p className="text-sm text-slate-600">رضایت مشتریان</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">۲۴/۷</div>
                    <p className="text-sm text-slate-600">پشتیبانی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              فرآیند کار ما چگونه است؟
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              ما با یک روش منظم و علمی، سئو سایت شما را بهبود می‌دهیم و نتایج قابل اندازه‌گیری ارائه می‌دهیم.
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              سوالات متداول در مورد سئو سایت
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "چقدر طول می‌کشد تا نتایج سئو را ببینم؟",
                answer: "معمولاً نتایج اولیه سئو بین ۳ تا ۶ ماه نمایان می‌شود، اما بهبودهای قابل توجه ممکن است تا ۸-۱۲ ماه طول بکشد. این زمان بستگی به رقابت در صنعت شما دارد."
              },
              {
                question: "آیا سئو برای تمام کسب‌وکارها مفید است؟",
                answer: "بله، هر کسب‌وکاری که حضور آنلاین دارد می‌تواند از سئو بهره‌مند شود. سئو برای B2B، B2C، فروشگاه‌های آنلاین و حتی کسب‌وکارهای محلی مفید است."
              },
              {
                question: "هزینه سئو چقدر است؟",
                answer: "هزینه سئو بستگی به اندازه سایت، رقابت در صنعت و اهداف شما دارد. ما پکیج‌های مختلفی داریم که متناسب با بودجه و نیاز شما طراحی شده‌اند."
              }
            ].map((faq, index) => (
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

  return (
    <ServicePageTemplate
      title="خدمات سئو سایت | بهینه‌سازی کامل وب‌سایت | عصر سئو"
      description="خدمات جامع سئو سایت شامل بهینه‌سازی تکنیکال، محتوا و لینک‌سازی. رسیدن به رتبه اول گوگل با تیم متخصص عصر سئو."
      keywords="سئو سایت, بهینه‌سازی وب‌سایت, سئو کامل, رتبه‌بندی گوگل"
      canonicalUrl="https://asreseo.com/services/seo/website-seo"
      heroTitle="خدمات سئو سایت"
      heroDescription="بهینه‌سازی کامل وب‌سایت شما برای رسیدن به رتبه‌های برتر در موتورهای جستجو"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default WebsiteSEO;
