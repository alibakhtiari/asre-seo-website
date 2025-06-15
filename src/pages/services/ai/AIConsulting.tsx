
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCog, Lightbulb, Workflow, Users, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-600"/>,
    title: 'مشاوره تخصصی هوش مصنوعی',
    description: 'تحلیل دقیق نیاز کسب‌وکار و ارائه بهترین راهکار AI متناسب با اهداف شما.'
  },
  {
    icon: <BrainCog className="h-6 w-6 text-blue-700"/>,
    title: 'پیاده‌سازی کامل پروژه AI',
    description: 'از طراحی تا اجرایی‌سازی، همه مراحل پروژه هوش مصنوعی توسط تیم خبره پیگیری می‌شود.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-green-700"/>,
    title: 'اتوماسیون هوشمند فرایندها',
    description: 'شناسایی و اتوماسیون فرایندهای قابل بهبود با هوش مصنوعی و یادگیری ماشین.'
  },
  {
    icon: <Users className="h-6 w-6 text-purple-700"/>,
    title: 'آموزش و انتقال دانش',
    description: 'ارائه آموزش، مستندات و انتقال دانش هوش مصنوعی به تیم شما جهت بهره‌گیری بهینه.'
  }
];

const benefits = [
  'افزایش بهره‌وری و کاهش هزینه‌های عملیاتی',
  'کسب مزیت رقابتی با پیاده‌سازی راهکارهای روز AI',
  'رفع موانع رشد و شتاب گرفتن فرآیندهای کسب‌وکار',
  'حفظ امنیت داده‌ها و طراحی سیستم مقیاس‌پذیر'
];

const faqs = [
  {
    question: 'چه مشاوره‌هایی ارائه می‌شود؟',
    answer: 'در حوزه سئو، مارکتینگ، اتوماسیون کسب‌وکار، تحلیل داده، چت‌بات، پردازش تصویر و ... خدمات ارائه می‌شود.'
  },
  {
    question: 'آیا از صفر تا صد پروژه انجام می‌شود؟',
    answer: 'بله، از نیازسنجی تا پیاده‌سازی نهایی و آموزش تیم، همه مراحل توسط ما دنبال می‌شود.'
  },
  {
    question: 'آیا پروژه مقیاس‌پذیر و ایمن خواهد بود؟',
    answer: 'همه راهکارها با رعایت اصول امنیت داده و قابلیت توسعه در آینده ارائه می‌گردد.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Consulting: مشاوره و پیاده‌سازی هوش مصنوعی</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با مشاوره تخصصی تیم عصر سئو، ایده‌ها و پتانسیل‌های هوش مصنوعی را به خدمت رشد کسب‌وکار خود بگیرید، از راهکار تا اجرا و آموزش کنار شما هستیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای مشاوره هوش مصنوعی عصر سئو</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول مشاوره AI</h2>
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

const AIConsulting = () => {
  return (
    <ServicePageTemplate
      title="مشاوره و پیاده‌سازی هوش مصنوعی | AI Consulting | عصر سئو"
      description="مشاوره تخصصی و پیاده‌سازی راهکارهای هوش مصنوعی برای کسب‌وکارها و اتوماسیون فرایندها."
      keywords="مشاوره هوش مصنوعی, AI Consulting, پیاده‌سازی AI, اتوماسیون"
      canonicalUrl="https://asreseo.com/services/ai/ai-consulting"
      heroTitle="مشاوره و پیاده‌سازی هوش مصنوعی"
      heroDescription="راهکارهای هوشمند و اتوماسیون پیشرفته برای کسب‌وکار شما"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default AIConsulting;
