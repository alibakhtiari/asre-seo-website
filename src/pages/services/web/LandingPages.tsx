
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MousePointerClick, ScrollText, TrendingUp, CheckCircle2, MonitorSmartphone, Palette } from "lucide-react";

const features = [
  {
    icon: <MousePointerClick className="h-6 w-6 text-blue-600" />,
    title: "تمرکز بر نرخ تبدیل بالا",
    description: "طراحی با اصول CRO و هدایت موثر کاربر به اقدام مورد نظر (CTA)."
  },
  {
    icon: <ScrollText className="h-6 w-6 text-green-600" />,
    title: "بهینه‌سازی برای تبلیغات و سئو",
    description: "لندینگ پیج قابل رقابت در تبلیغات پولی و افزایش رتبه کلمات کلیدی."
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-purple-700" />,
    title: "کاملاً واکنش‌گرا و سریع",
    description: "ظاهر بی‌نقص در تمام دستگاه‌ها و سرعت لود بالای صفحه."
  },
  {
    icon: <Palette className="h-6 w-6 text-pink-500" />,
    title: "هویت بصری هماهنگ با برند",
    description: "انتخاب رنگ‌ها و طراحی گرافیکی مطابق استراتژی برند شما."
  }
];

const benefits = [
  "افزایش نرخ مراجعه و فروش",
  "کاهش هزینه تبلیغات در هر تبدیل (CPA)",
  "تست آسان انواع پیام و پیشنهاد ویژه",
  "افزایش ماندگاری کاربر در صفحه"
];

const faqs = [
  {
    question: "لندینگ پیج چه تفاوتی با سایر صفحات سایت دارد؟",
    answer: "صفحه فرود ویژه برای تحقق یک هدف مشخص تبلیغاتی یا جذب لید، و با تمرکز بر نرخ تبدیل ساخته می‌شود."
  },
  {
    question: "چند روز طول می‌کشد طراحی یک لندینگ؟",
    answer: "معمولاً ۳ تا ۵ روز کاری زمان نیاز است ولی برای پروژه‌های خاص سریع‌تر هم ممکن است."
  },
  {
    question: "آیا قابلیت ویرایش سریع و تست A/B وجود دارد؟",
    answer: "تمام صفحات با قابلیت تغییر آسان و تست انواع پیام/تصاویر تحویل داده می‌شوند."
  }
];

const contentSection = (
  <>
    {/* Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            صفحات فرود اختصاصی؛ موتور رشد تبلیغات و لیدگیری
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            رمز موفقیت اکثر کمپین‌های دیجیتال، یک لندینگ پیج با طراحی حرفه‌ای است. ما صفحات فرود شما را برای تبدیل حداکثری می‌سازیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((step, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              چرا صفحه فرود تخصصی مهم است؟
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              هر تبلیغ موفق به یک لندینگ پیج اصولی نیاز دارد تا هزینه‌ها را به درآمد تبدیل کند.
            </p>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+۷۰ پروژه لندینگ موفق</div>
              <p className="text-slate-600 mb-6">برای کمپین‌های مختلف و برندهای برجسته</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۴۸ ساعت</div>
                  <p className="text-sm text-slate-600">کمترین زمان اجرا</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">۹۸٪</div>
                  <p className="text-sm text-slate-600">رضایت مشتری</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQ */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            سوالات متداول درباره طراحی صفحات فرود
          </h2>
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

const LandingPages = () => {
  return (
    <ServicePageTemplate
      title="طراحی صفحات فرود | Landing Page اختصاصی | عصر سئو"
      description="طراحی صفحات فرود اختصاصی با نرخ تبدیل بالا، بهینه برای تبلیغات و کمپین‌های بازاریابی."
      keywords="صفحه فرود, Landing Page, طراحی لندینگ, نرخ تبدیل"
      canonicalUrl="https://asreseo.com/services/web/landing-pages"
      heroTitle="صفحات فرود اختصاصی"
      heroDescription="طراحی صفحات فرود پرتبدیل برای افزایش فروش و جذب مشتری"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default LandingPages;
