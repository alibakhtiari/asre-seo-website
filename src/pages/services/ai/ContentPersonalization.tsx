
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Sparkles, HeartHandshake, Target, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <User className="h-6 w-6 text-pink-600"/>,
    title: 'شخصی‌سازی تجربه کاربری',
    description: 'هر کاربر، محتوای منحصربه‌فرد بر اساس علایق، رفتار و سوابق خود مشاهده می‌کند.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600"/>,
    title: 'افزایش نرخ تعامل',
    description: 'نمایش پیشنهادات و مطالب مرتبط باعث افزایش مدت حضور و تعامل کاربران می‌شود.'
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-green-700"/>,
    title: 'وفادارسازی مشتری',
    description: 'ایجاد حس ارزشمندی، افزایش نرخ بازگشت و وفاداری به برند با محتوای شخصی‌سازی شده.'
  },
  {
    icon: <Target className="h-6 w-6 text-yellow-600"/>,
    title: 'دقت در هدف‌گیری کمپین‌ها',
    description: 'کمپین‌ها و CTAها متناسب با شخصیت و نیاز هر کاربر، به شکل هوشمند نمایش داده می‌شود.'
  }
];

const benefits = [
  'افزایش نرخ تبدیل و فروش از طریق پیشنهادات هدفمند',
  'کاهش نرخ پرش و افزایش زمان حضور کاربر در سایت',
  'تعامل بیشتر با کاربران و وفادارسازی موثر',
  'شخصی‌سازی بدون نیاز به نیروی انسانی و به شکل خودکار'
];

const faqs = [
  {
    question: 'آیا امکان شخصی‌سازی برای هر کاربر وجود دارد؟',
    answer: 'بله، برای هر کاربر براساس داده‌های رفتاری، پروفایل اختصاصی و محتوای منحصربه‌فرد نمایش داده می‌شود.'
  },
  {
    question: 'می‌توان پیشنهاد محصولات را هوشمند کرد؟',
    answer: 'کاملاً، سیستم ما براساس علایق و سوابق کاربر، محصولات و مطالب مرتبط را پیشنهاد می‌کند.'
  },
  {
    question: 'پیاده‌سازی روی چه پلتفرم‌هایی ممکن است؟',
    answer: 'امکان اجرا روی وب‌سایت، فروشگاه اینترنتی و حتی اپلیکیشن‌های موبایل شما وجود دارد.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Personalization: شخصی‌سازی محتوا با هوش مصنوعی</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            به کمک هوش مصنوعی، نمایش خودکار و هوشمند محتوا و پیشنهادات متناسب با هر کاربر را تجربه کنید تا تجربه‌ای منحصر به فرد از برند شما حاصل گردد.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای شخصی‌سازی محتوا با عصر سئو</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول شخصی‌سازی AI</h2>
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

const ContentPersonalization = () => {
  return (
    <ServicePageTemplate
      title="شخصی‌سازی محتوا با هوش مصنوعی | AI Personalization | عصر سئو"
      description="شخصی‌سازی محتوا با هوش مصنوعی برای نمایش محتوای هدفمند و پیشنهادات مناسب به هر کاربر."
      keywords="شخصی‌سازی محتوا, هوش مصنوعی, Personalization, محتوای هدفمند"
      canonicalUrl="https://asreseo.com/services/ai/content-personalization"
      heroTitle="شخصی‌سازی محتوا با هوش مصنوعی"
      heroDescription="ارائه تجربه منحصر به فرد با محتوای شخصی‌سازی شده برای هر کاربر"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default ContentPersonalization;
