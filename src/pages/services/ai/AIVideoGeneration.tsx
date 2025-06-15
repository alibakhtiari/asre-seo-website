
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Sparkles, Video, Timer, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Film className="h-6 w-6 text-pink-600"/>,
    title: 'ساخت ویدیوهای تبلیغاتی هوشمند',
    description: 'تولید ویدیوهای کوتاه و جذاب متناسب با اهداف بازاریابی و سناریوی شما.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600"/>,
    title: 'انیمیشن و تصاویر گرافیکی',
    description: 'افزودن انیمیشن، افکت و عناصر گرافیکی به تولیدات ویدیویی بدون نیاز به طراح حرفه‌ای.'
  },
  {
    icon: <Video className="h-6 w-6 text-yellow-600"/>,
    title: 'تبدیل متن به ویدیو',
    description: 'تولید ویدیو از روی سناریو یا مقاله؛ کافی است متن خود را وارد کنید تا در چند دقیقه تبدیل به ویدیو شود.'
  },
  {
    icon: <Timer className="h-6 w-6 text-green-700"/>,
    title: 'تحویل سریع و هزینه به‌صرفه',
    description: 'دریافت ویدیوهای باکیفیت در کمترین زمان، مناسب انواع بودجه تبلیغاتی.'
  }
];

const benefits = [
  'انتشار سریع ویدیوهای سفارشی متناسب با برند',
  'افزایش نرخ مشارکت و جذابیت محتوای شبکه‌های اجتماعی',
  'صرفه‌جویی در هزینه نسبت به تولیدات سنتی',
  'امکان شخصی‌سازی کامل سناریو، گوینده و گرافیک'
];

const faqs = [
  {
    question: 'آیا نیاز به تجربه قبلی در ساخت ویدیو دارم؟',
    answer: 'خیر، کافیست سناریو یا متن بفرستید. باقی کار توسط سیستم هوش مصنوعی انجام می‌شود.'
  },
  {
    question: 'چه نوع ویدیوهایی قابل تولید است؟',
    answer: 'انواع ویدیو آموزشی، تبلیغاتی، معرفی محصول و گزارش سازمانی تولید می‌شود.'
  },
  {
    question: 'آیا گوینده انسانی هم اضافه می‌شود؟',
    answer: 'امکان انتخاب صدای هوشمند یا گوینده واقعی برای ویدیوها وجود دارد.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Video Generation: ساخت ویدیو با هوش مصنوعی</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با ابزارهای هوش مصنوعی، ساخت ویدیوهای تبلیغاتی و آموزشی، سریع، کم‌هزینه و مطابق با آخرین ترندهای روز آسان‌تر از همیشه است!
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای ساخت ویدیو AI با عصر سئو</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول ساخت ویدیو هوشمند</h2>
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

const AIVideoGeneration = () => {
  return (
    <ServicePageTemplate
      title="ساخت ویدیو با هوش مصنوعی | AI Video Generation | عصر سئو"
      description="تولید ویدیوهای تبلیغاتی و آموزشی با هوش مصنوعی شامل انیمیشن، تصاویر گرافیکی و محتوای بصری."
      keywords="ساخت ویدیو با AI, هوش مصنوعی, AI Video, تولید ویدیو"
      canonicalUrl="https://asreseo.com/services/ai/ai-video-generation"
      heroTitle="ساخت ویدیو با هوش مصنوعی"
      heroDescription="تولید ویدیوهای حرفه‌ای و جذاب با ابزارهای پیشرفته هوش مصنوعی"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default AIVideoGeneration;
