
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Target, TrendingUp, SplitSquareVertical, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-6 w-6 text-blue-700"/>,
    title: 'تست A/B هوشمند',
    description: 'اجرای تست‌های پیشرفته با تحلیل رفتار کاربران و ارائه بهترین نسخه صفحات برای افزایش نرخ تبدیل.'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-700"/>,
    title: 'تحلیل دقیق قیف فروش',
    description: 'شناسایی نقاط ضعف قیف فروش با الگوریتم‌های AI و رفع موانع برای بهبود مسیر خرید کاربر.'
  },
  {
    icon: <SplitSquareVertical className="h-6 w-6 text-purple-700"/>,
    title: 'محتوای پویا و شخصی‌سازی شده',
    description: 'نمایش پیشنهادات، فراخوان‌ها و بنرها به‌صورت پویا متناسب با علایق و رفتار کاربران.'
  },
  {
    icon: <Settings className="h-6 w-6 text-yellow-600"/>,
    title: 'اتوماسیون بهینه‌سازی نرخ تبدیل',
    description: 'بهبود خودکار عناصر سایت و فرم‌ها با یادگیری مداوم رفتار کاربران جهت حداکثرسازی فروش.'
  }
];

const benefits = [
  'افزایش سریع نرخ تبدیل و فروش با تصمیمات مبتنی بر داده',
  'کاهش هزینه و زمان تست و بهینه‌سازی صفحات',
  'عدم نیاز به حدس و گمان؛ تمام تصمیمات براساس داده واقعی کاربران',
  'یکپارچه‌سازی با ابزارهای مارکتینگ و CRM'
];

const faqs = [
  {
    question: 'آیا تست‌های A/B به صورت خودکار انجام می‌شوند؟',
    answer: 'بله، تست‌ها بر بستر AI انجام شده و هوشمندترین نسخه صفحات برای نمایش به کاربران انتخاب می‌شود.'
  },
  {
    question: 'تحلیل‌ها روی همه صفحات انجام می‌شود؟',
    answer: 'می‌توانید صفحات کلیدی یا کل سایت را برای بهینه‌سازی انتخاب کنید و گزارش اختصاصی بگیرید.'
  },
  {
    question: 'آیا نیاز به برنامه‌نویسی داریم؟',
    answer: 'خیر، همه خدمات به صورت یکپارچه و بدون نیاز به کدنویسی برای شما فعال می‌شود.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI CRO: بهینه‌سازی نرخ تبدیل با هوش مصنوعی</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با استفاده از هوش مصنوعی، تست و بهینه‌سازی نرخ تبدیل به شکل هوشمند و خودکار انجام می‌شود تا در کمترین زمان بهترین نتیجه را کسب کنید.
          </p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای بهینه‌سازی AI CRO با عصر سئو</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <BadgeCheck className="h-5 w-5 text-green-500 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول بهینه‌سازی نرخ تبدیل AI</h2>
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

const ConversionOptimization = () => {
  return (
    <ServicePageTemplate
      title="بهینه‌سازی نرخ تبدیل با AI | CRO با هوش مصنوعی | عصر سئو"
      description="بهینه‌سازی نرخ تبدیل با هوش مصنوعی شامل تست A/B هوشمند و محتوای پویا بر اساس رفتار کاربر."
      keywords="بهینه‌سازی تبدیل, CRO, هوش مصنوعی, Conversion Optimization"
      canonicalUrl="https://asreseo.com/services/ai/conversion-optimization"
      heroTitle="بهینه‌سازی نرخ تبدیل با AI"
      heroDescription="افزایش نرخ تبدیل با تحلیل هوشمند و بهینه‌سازی خودکار"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default ConversionOptimization;
