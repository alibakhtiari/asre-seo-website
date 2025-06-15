
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, BarChart3, Users, Clock, Trophy } from "lucide-react";

const features = [
  {
    icon: <Target className="h-6 w-6 text-blue-600" />,
    title: "تارگت دقیق مخاطبان",
    description: "مخاطبان شما را با دقت بی‌نظیر و براساس علایق، موقعیت و هدف کسب‌وکارتان انتخاب می‌کنیم."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-700" />,
    title: "بهینه‌سازی مداوم",
    description: "بودجه و کمپین‌ها را روزانه رصد و برای بهترین بازده، دائماً بهینه می‌نماییم."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-purple-700" />,
    title: "گزارش‌دهی شفاف",
    description: "شفافیت کامل؛ دسترسی به گزارش‌های آنلاین و تحلیل عملکرد کمپین‌ها."
  },
  {
    icon: <Users className="h-6 w-6 text-pink-600" />,
    title: "افزایش نرخ تبدیل",
    description: "طراحی لندینگ و متن تبلیغ به صورت حرفه‌ای برای بیشترین تبدیل و جذب مشتری."
  }
];

const benefits = [
  "جذب مشتری با کمترین هزینه",
  "مشاوره و اجرای کمپین متناسب کسب‌وکار شما",
  "مدیریت حرفه‌ای و به‌روزرسانی کلیدواژه‌ها",
  "صرفه‌جویی در زمان با ابزارهای اتوماسیون"
];

const faqs = [
  {
    question: "آیا بودجه روزانه من قابل کنترل است؟",
    answer: "بله، می‌توانید حداقل و حداکثر بودجه را تعریف کرده و هیچ‌گاه بیش از آن هزینه نکنید."
  },
  {
    question: "چه مدت زمان می‌برد تا نتایج را ببینم؟",
    answer: "معمولاً ظرف چند ساعت از فعال‌سازی کمپین، اولین بازخوردها دریافت می‌شود."
  },
  {
    question: "گزارش عملکرد کمپین چطور ارسال می‌شود؟",
    answer: "هر هفته و هر ماه، گزارش کامل به صورت PDF و آنلاین در اختیار شما قرار خواهد گرفت."
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            چرا کمپین گوگل ادز با عصر سئو؟
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">تیم ما با کمپین‌های هدفمند و بهینه‌سازی دائمی، بیشترین بازگشت سرمایه را برای شما فراهم می‌کند.</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای تبلیغات Google Ads با عصر سئو</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <Trophy className="h-5 w-5 text-green-500 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول تبلیغات گوگل ادز</h2>
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

const GoogleAds = () => {
  return (
    <ServicePageTemplate
      title="تبلیغات گوگل ادز | Google Ads حرفه‌ای | عصر سئو"
      description="خدمات تبلیغات گوگل ادز با هدف جذب سریع مشتری و افزایش نرخ تبدیل، راهکارهای بهینه و مدیریت کامل بودجه تبلیغاتی."
      keywords="گوگل ادز, تبلیغات گوگل, Google Ads, PPC, تبلیغات کلیکی"
      canonicalUrl="https://asreseo.com/services/marketing/google-ads"
      heroTitle="تبلیغات گوگل ادز"
      heroDescription="کمپین‌های تبلیغاتی هوشمند و مؤثر در گوگل برای جذب مشتری و افزایش فروش"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default GoogleAds;
