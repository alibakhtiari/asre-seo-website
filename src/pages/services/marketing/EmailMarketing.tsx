
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, BarChart3, Timer, Users, Megaphone } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "برنامه‌ریزی و اتوماسیون ایمیل",
    description: "سیستم ارسال زمان‌بندی شده و خودکار به لیست هدفمند مخاطبان."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    title: "تحلیل و گزارش‌دهی دقیق",
    description: "ارائه گزارش‌های باز شدن، کلیک و نرخ تبدیل ایمیل‌های شما."
  },
  {
    icon: <Users className="h-6 w-6 text-pink-600" />,
    title: "تقسیم‌بندی لیست مخاطبین",
    description: "دسته‌بندی مشتریان و ارسال پیام شخصی‌سازی شده بر اساس ویژگی‌ها."
  },
  {
    icon: <Megaphone className="h-6 w-6 text-yellow-400" />,
    title: "افزایش وفاداری و تکرار خرید",
    description: "ساخت کمپین‌های وفاداری و یادآوری برای افزایش بازگشت مشتری."
  }
];

const benefits = [
  "تعامل مستقیم با مخاطب و افزایش نرخ بازگشت",
  "هزینه بسیار کم نسبت به سایر کانال‌ها",
  "افزایش سرعت اطلاع‌رسانی و فروش ویژه",
  "امکان تست A/B و بهینه‌سازی پیام‌ها به صورت دائمی"
];

const faqs = [
  {
    question: "آیا ایمیل‌ها اسپم نمی‌شوند؟",
    answer: "ارسال بر اساس قوانین جهانی Email Marketing انجام می‌گردد و از لیست‌های سفید معتبر استفاده می‌کنیم."
  },
  {
    question: "چطور می‌توانم موفقیت کمپین را ببینم؟",
    answer: "گزارش‌های تحلیلی لحظه‌ای با آمار باز شدن، کلیک، لغو عضویت و تبدیل ارائه می‌شود."
  },
  {
    question: "امکان شخصی‌سازی پیام وجود دارد؟",
    answer: "بله! پیام‌ها بر اساس نام، محصولات علاقه‌مند و موقعیت مشتری قابل شخصی‌سازی است."
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            بازاریابی ایمیلی که فروش شما را افزایش می‌دهد
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">با کمپین‌های ایمیل حرفه‌ای، ارتباط ارزشمند با مشتریان خود بسازید و فروش خود را رشد دهید.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای ایمیل مارکتینگ حرفه‌ای</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <Timer className="h-5 w-5 text-green-500 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول بازاریابی ایمیلی</h2>
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

const EmailMarketing = () => {
  return (
    <ServicePageTemplate
      title="بازاریابی ایمیلی | ایمیل مارکتینگ حرفه‌ای | عصر سئو"
      description="کمپین‌های حرفه‌ای ایمیل مارکتینگ، شامل اتوماسیون، تحلیل عملکرد و افزایش فروش و وفاداری مشتری."
      keywords="بازاریابی ایمیلی, ایمیل مارکتینگ, Email Marketing, Newsletter"
      canonicalUrl="https://asreseo.com/services/marketing/email-marketing"
      heroTitle="بازاریابی ایمیلی"
      heroDescription="کمپین‌های ایمیلی هدفمند و اتوماسیون برای افزایش فروش و وفاداری مشتریان"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default EmailMarketing;
