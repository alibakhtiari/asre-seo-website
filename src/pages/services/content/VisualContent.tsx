
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Film, Sparkles, Star, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Image className="h-6 w-6 text-blue-600" />,
    title: 'طراحی گرافیک اختصاصی',
    description: 'بنر، پوستر و عکس نوشته حرفه‌ای بر پایه هویت بصری برند و اهداف کمپین.'
  },
  {
    icon: <Film className="h-6 w-6 text-green-700" />,
    title: 'تولید ویدیوهای تبلیغاتی',
    description: 'ساخت ویدیو معرفی محصول، موشن گرافیک و اینفوگرافیک انیمیشنی.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-pink-700" />,
    title: 'افزایش جذابیت و نرخ تبدیل',
    description: 'بهبود تجربه کاربری، افزایش ماندگاری و اثرگذاری برند با جلوه‌های بصری حرفه‌ای.'
  },
  {
    icon: <Star className="h-6 w-6 text-purple-600" />,
    title: 'ویرایش، بهینه‌سازی و تدوین',
    description: 'رفع ایرادات، تنظیم رنگ/نور و تدوین حرفه‌ای قبل از انتشار.'
  }
];

const benefits = [
  'تأثیرگذاری بیشتر بر مشتری و ماندگاری برند',
  'افزایش شانس وایرال شدن در شبکه‌های اجتماعی',
  'ارائه یکپارچه هویت بصری در همه پلتفرم‌ها',
  'افزایش نرخ تبدیل با محتوای بصری متقاعدکننده'
];

const faqs = [
  {
    question: 'آیا تولید ویدیو و عکس شامل سناریونویسی هم هست؟',
    answer: 'بله، ایده‌پردازی و نگارش سناریو متناسب با هدف کمپین انجام می‌شود.'
  },
  {
    question: 'فرمت نهایی فایل‌های تصویری و ویدیویی چیست؟',
    answer: 'مطابق نیاز شما، فرمت رایج برای سوشال یا وب‌سایت با بهترین کیفیت تحویل می‌گردد.'
  },
  {
    question: 'چقدر زمان برای تولید هر پروژه نیاز است؟',
    answer: 'بستگی به حجم و نوع محتوا دارد؛ زمان تخمینی هنگام ثبت سفارش اعلام می‌شود.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            محتوای بصری حرفه‌ای برای رشد کسب‌وکار شما
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            عصر سئو خدمات گرافیک و تولید ویدیو را با خلاقیت و بهینه‌سازی فنی، در سطحی بی‌نظیر ارائه می‌کند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای محتوای تصویری و ویدیویی</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول درباره محتوای تصویری و ویدیویی</h2>
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

const VisualContent = () => {
  return (
    <ServicePageTemplate
      title="محتوای تصویری و ویدیویی | طراحی گرافیک | عصر سئو"
      description="طراحی گرافیک و تولید انواع محتوای بصری: بنر، پوستر، ویدئو، اینفوگرافیک و تصاویر تبلیغاتی با تیم متخصص عصر سئو."
      keywords="محتوای تصویری, طراحی گرافیک, ویدیو مارکتینگ, اینفوگرافی"
      canonicalUrl="https://asreseo.com/services/content/visual-content"
      heroTitle="محتوای تصویری و ویدیویی"
      heroDescription="محتوای بصری حرفه‌ای برای تقویت هویت بصری برند شما"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default VisualContent;

