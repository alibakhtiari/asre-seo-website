
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, BarChart3, Users, Layers, Link2 } from "lucide-react";

const features = [
  {
    icon: <Megaphone className="h-6 w-6 text-blue-600" />,
    title: "پوشش چند کانال تبلیغاتی",
    description: "هماهنگی و اجرای کمپین در سوشال مدیا، گوگل ادز، ایمیل و بیش از 10 بستر تبلیغاتی."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    title: "گزارش‌دهی و آنالیز یکپارچه",
    description: "تحلیل عملکرد تمام کانال‌ها و ارائه دیدگاه کلی برای تصمیم‌گیری بهتر."
  },
  {
    icon: <Users className="h-6 w-6 text-purple-700" />,
    title: "هدفمندی بر اساس رفتار مشتری",
    description: "استفاده از داده‌های مشتریان و تقسیم‌بندی برای نهایت بازده."
  },
  {
    icon: <Link2 className="h-6 w-6 text-pink-600" />,
    title: "یکپارچگی پیام برند",
    description: "تمام پیام‌ها و تبلیغات در کانال‌های مختلف، با یک صدای واحد و همسو با اهداف برند."
  }
];

const benefits = [
  "افزایش موثر آگاهی از برند در سطح بازار",
  "بهینه‌سازی هزینه‌های تبلیغاتی",
  "افزایش هم‌افزایی پیام و یکپارچگی برند",
  "امکان سنجش دقیق تاثیر هر کانال"
];

const faqs = [
  {
    question: "منظور از کمپین یکپارچه چیست؟",
    answer: "برنامه‌ریزی و اجرای همزمان تبلیغات در چند بستر بصورت هماهنگ و همسو برای دستیابی به بیشترین بازدهی."
  },
  {
    question: "آیا کمپین من طبق هدف‌گذاری اجرا می‌شود؟",
    answer: "بله، همه مراحل کمپین براساس اهداف و KPIهای اختصاصی شما پیاده‌سازی می‌شود."
  },
  {
    question: "گزارش عملکرد چطور ارائه می‌شود؟",
    answer: "گزارشات جامعی پیرامون بازدهی تک‌تک کانال‌ها و جمع کل ارائه می‌شود."
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            کمپین‌های ترکیبی؛ قدرت تمام کانال‌ها در جهت هدف شما
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">افزایش فروش و آگاهی برند با اجرای کمپین‌های یکپارچه و هدفمند در سراسر فضای دیجیتال.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای کمپین‌های تبلیغاتی ترکیبی</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <Layers className="h-5 w-5 text-blue-600 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول کمپین‌های یکپارچه</h2>
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

const IntegratedCampaigns = () => {
  return (
    <ServicePageTemplate
      title="کمپین‌های تبلیغاتی ترکیبی | تبلیغات یکپارچه | عصر سئو"
      description="طراحی و اجرای کمپین‌های تبلیغاتی ترکیبی و یکپارچه؛ اثرگذاری حداکثری با تحلیل علمی و خلاقیت در سراسر کانال‌های دیجیتال."
      keywords="کمپین ترکیبی, تبلیغات یکپارچه, Integrated Marketing, بازاریابی چندکاناله"
      canonicalUrl="https://asreseo.com/services/marketing/integrated-campaigns"
      heroTitle="کمپین‌های تبلیغاتی ترکیبی"
      heroDescription="استراتژی‌های تبلیغاتی یکپارچه در چندین کانال برای حداکثر تأثیر"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default IntegratedCampaigns;
