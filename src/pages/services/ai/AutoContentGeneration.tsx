
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ScrollText, BookOpen, Timer, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-pink-600" />,
    title: 'تولید انواع محتوا به‌صورت خودکار',
    description: 'مقالات، پست وبلاگ، توضیحات محصول و هر نوع متن سئو شده را فقط با چند کلیک تولید کنید.'
  },
  {
    icon: <ScrollText className="h-6 w-6 text-blue-600" />,
    title: 'سفارشی‌سازی لحن و سبک نگارش',
    description: 'مطابق لحن و هویت برند، محتوا را با سبک رسمی، محاوره‌ای یا آموزشی تولید نمایید.'
  },
  {
    icon: <BookOpen className="h-6 w-6 text-yellow-600" />,
    title: 'پاسخ به نیازهای اختصاصی کسب‌وکار',
    description: 'در هر صنعت و حوزه، محتوا با رعایت کلیدواژه‌ها و اهداف سایت شما تولید می‌شود.'
  },
  {
    icon: <Timer className="h-6 w-6 text-green-700" />,
    title: 'صرفه‌جویی چشمگیر در زمان و هزینه',
    description: 'در کسری از زمان و با هزینه بسیار پایین‌تر، محتوای باکیفیت و یونیک داشته باشید.'
  }
];

const benefits = [
  'تضمین یونیک بودن متن با الگوریتم‌های پیشرفته AI',
  'بالا بردن رتبه سئو و جذب بازدیدکننده بیشتر',
  'یکپارچگی محتوا در وب‌سایت و شبکه‌های اجتماعی شما',
  'کاهش نیاز به نیروی انسانی و اشتباهات انسانی'
];

const faqs = [
  {
    question: 'آیا محتواها واقعا یونیک هستند؟',
    answer: 'بله، تمام متن‌ها با الگوریتم‌های ضدکپی بررسی و به صورت یونیک و اختصاصی برای سایت شما تولید می‌شود.'
  },
  {
    question: 'آیا می‌توان کلیدواژه‌های خاص تعریف کرد؟',
    answer: 'حتماً! کافیست کلیدواژه و موضوعات مدنظر را تعیین کنید تا محتوا براساس آن‌ها تولید گردد.'
  },
  {
    question: 'آیا امکان ویرایش یا بازنویسی وجود دارد؟',
    answer: 'بله، شما می‌توانید هر محتوا را بازنویسی، خلاصه یا شخصی‌سازی و به‌روزرسانی کنید.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">خدمات تولید محتوای اتوماتیک با هوش مصنوعی</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            تیم عصر سئو با فناوری AI، تولید سریع‌تر و بهینه‌تر محتوا را برای شما ممکن ساخته است. مناسب برای وبلاگ، فروشگاه‌های آنلاین، توضیحات محصول و شبکه اجتماعی—بدون دغدغه و در کمترین زمان!
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای تولید محتوای AI با عصر سئو</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول تولید محتوای AI</h2>
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

const AutoContentGeneration = () => {
  return (
    <ServicePageTemplate
      title="تولید محتوای خودکار با AI | محتوای هوش مصنوعی | عصر سئو"
      description="تولید خودکار محتوای با کیفیت با هوش مصنوعی شامل مقالات، پست‌ها و توضیحات سئو محور به زبان فارسی."
      keywords="تولید محتوای AI, هوش مصنوعی, محتوای خودکار, AI Content Generation"
      canonicalUrl="https://asreseo.com/services/ai/auto-content-generation"
      heroTitle="تولید محتوای خودکار با AI"
      heroDescription="تولید محتوای باکیفیت و سئو محور با سرعت و دقت بالا"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default AutoContentGeneration;
