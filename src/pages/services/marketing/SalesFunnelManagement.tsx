
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, ScrollText, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "تحلیل قیف فروش فعلی",
    description: "بررسی مسیرهای کاربر فعلی و کشف نقاط بهبود نرخ تبدیل."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "طراحی مسیر بهینه مشتری",
    description: "ایجاد سناریوی قدم‌به‌قدم برای هدایت بازدیدکننده تا خرید نهایی."
  },
  {
    icon: <ScrollText className="h-6 w-6 text-purple-600" />,
    title: "اتصال ابزارهای بازاریابی و اتوماسیون",
    description: "یکپارچه‌سازی با ایمیل، پیامک و ابزارهای تبلیغاتی برای یادآوری و پیگیری خودکار."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-pink-600" />,
    title: "سنجش و بهبود پیوسته",
    description: "بررسی داده‌ها و A/B Testing برای افزایش نرخ تبدیل در تمام مراحل."
  }
];

const benefits = [
  "افزایش قابل توجه نرخ تبدیل لید به مشتری",
  "کاهش هزینه بازاریابی با حذف نقص‌های قیف",
  "اطمینان از تجربه کاربری عالی تا خرید",
  "دسترسی به داده‌های تحلیلی کامل قیف فروش"
];

const faqs = [
  {
    question: "قیف فروش به چه معناست؟",
    answer: "قیف فروش به فرآیندی گفته می‌شود که مخاطب را از مرحله آگاهی تا خرید نهایی راهبری می‌کند."
  },
  {
    question: "چقدر طول می‌کشد تا قیف فروش بهبود یابد؟",
    answer: "معمولاً در یک الی دو هفته نخست بهینه‌سازی اولیه انجام می‌شود و نتایج ملموس خواهد بود."
  },
  {
    question: "آیا امکانات گزارش‌دهی وجود دارد؟",
    answer: "بله، گزارش تحلیلی نرخ تبدیل هر مرحله و پیشنهاد بهبود به شما ارائه خواهد شد."
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            مدیریت و بهینه‌سازی قیف فروش
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با تحلیل رفتار مشتریان و ابزارهای هوشمند، نرخ تبدیل و فروش خود را افزایش دهید.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای مدیریت اصولی قیف فروش</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول مدیریت قیف فروش</h2>
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

const SalesFunnelManagement = () => {
  return (
    <ServicePageTemplate
      title="مدیریت قیف فروش | Sales Funnel Optimization | عصر سئو"
      description="طراحی و بهینه‌سازی تخصصی قیف فروش، افزایش نرخ تبدیل و حل موانع فروش با تحلیل داده و استراتژی حرفه‌ای."
      keywords="قیف فروش, Sales Funnel, نرخ تبدیل, Customer Journey"
      canonicalUrl="https://asreseo.com/services/marketing/sales-funnel"
      heroTitle="مدیریت قیف فروش"
      heroDescription="طراحی مسیر بهینه تبدیل بازدیدکنندگان به مشتریان وفادار"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SalesFunnelManagement;
