
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages, Globe, Sparkles, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Languages className="h-6 w-6 text-blue-600" />,
    title: 'ترجمه حرفه‌ای و دقیق',
    description: 'ترجمه تخصصی انواع محتوا توسط زبان‌دانان حوزه کسب‌وکار شما، با رعایت اصول نگارشی و فرهنگی.'
  },
  {
    icon: <Globe className="h-6 w-6 text-green-700" />,
    title: 'بومی‌سازی خلاقانه',
    description: 'انطباق کامل متن با فرهنگ، بازار هدف و نیازمندی‌های محلی هر زبان.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-pink-700" />,
    title: 'حفظ ساختار سئو در ترجمه',
    description: 'بهینه‌سازی متون چندزبانه برای جستجوی گوگل و الگوریتم بومی هر کشور.'
  }
];

const benefits = [
  'امکان ورود به بازارهای جدید ملی و بین‌المللی',
  'حفظ انسجام برند در همه زبان‌ها',
  'افزایش رتبه سایت در نتایج جستجوی کشورهای مختلف',
  'ارتباط مؤثر و اعتماد سریع‌تر با مشتریان خارجی'
];

const faqs = [
  {
    question: 'چه زبان‌هایی را پوشش می‌دهید؟',
    answer: 'انگلیسی، عربی، فرانسوی، ترکی، آلمانی و هر زبان مدنظر شما قابل ارائه است.'
  },
  {
    question: 'آیا محتوای تخصصی هم ترجمه می‌کنید؟',
    answer: 'بله، مقالات علمی، متون فنی و تخصصی توسط مترجمین حوزه مربوطه ترجمه می‌شود.'
  },
  {
    question: 'زمان تحویل ترجمه به چه صورت است؟',
    answer: 'بسته به حجم و زبان، از ۳ روز تا یک هفته؛ زمان دقیق هنگام ثبت سفارش اعلام خواهد شد.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            خدمات ترجمه و بومی‌سازی عصر سئو
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با مترجمین متخصص، محتوا و سایت شما را برای هر بازار هدف، مطابق با سبک برند و اصول سئو چندزبانه آماده می‌کنیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای ترجمه و بومی‌سازی عصر سئو</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول درباره ترجمه و بومی‌سازی</h2>
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

const Translation = () => {
  return (
    <ServicePageTemplate
      title="ترجمه و بومی‌سازی محتوا | Translation Services | عصر سئو"
      description="خدمات ترجمه و بومی‌سازی محتوا توسط مترجمین متخصص؛ تضمین کیفیت، حفظ سبک برند و بهینه‌سازی سئوی چندزبانه."
      keywords="ترجمه, بومی‌سازی محتوا, Translation, Localization, محتوای چندزبانه"
      canonicalUrl="https://asreseo.com/services/content/translation"
      heroTitle="ترجمه و بومی‌سازی محتوا"
      heroDescription="ترجمه دقیق و بومی‌سازی محتوا برای گسترش کسب‌وکار در بازارهای جهانی"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default Translation;

