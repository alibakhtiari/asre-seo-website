
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link2, Link2Off, TrendingUp, Shield, Users, Award } from 'lucide-react';

const services = [
  {
    icon: <Link2 className="h-6 w-6 text-blue-600" />,
    title: "لینک‌سازی خارجی (External Link Building)",
    description: "دریافت بک‌لینک‌های ارگانیک، کیفی و مرتبط از سایت‌های معتبر برای افزایش اعتبار دامنه شما."
  },
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: "لینک‌سازی داخلی هوشمند",
    description: "ساختاردهی و پیوند داخلی بین صفحات برای هدایت قدرت SEO و تقویت ایندکس."
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />,
    title: "حذف بک‌لینک‌های مخرب (Disavow)",
    description: "شناسایی و پاکسازی لینک‌های اسپم و مضر جهت حفظ سلامت سئو."
  },
  {
    icon: <Award className="h-6 w-6 text-orange-600" />,
    title: "استراتژی Anchor Text",
    description: "تنوع در انتخاب متن لینک برای جلوگیری از جریمه الگوریتم گوگل و افزایش قدرت پیوندها."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-rose-600" />,
    title: "لینک‌سازی بر اساس تحلیل رقبا",
    description: "بررسی و تحلیل بک‌لینک‌های رقبا و شناسایی فرصت‌های طلایی برای پیشی گرفتن."
  },
];

const benefits = [
  "افزایش اعتبار دامنه و قدرت سایت نزد گوگل",
  "کمک به رتبه‌گیری بهتر عبارات اصلی و سخت",
  "جذب ترافیک ارگانیک و مخاطب جدید",
  "کاهش اثر منفی از بک‌لینک‌های ضعیف و اسپم",
  "حفظ سلامت سئو و جلوگیری از جریمه‌های الگوریتمی"
];

const faqs = [
  {
    question: "بک‌لینک‌ها چگونه به رتبه سایت کمک می‌کنند؟",
    answer: "بک‌لینک‌های کیفی همانند رأی اعتماد برای سایت شما نزد گوگل هستند و می‌توانند رتبه‌ی صفحات را بالا ببرند."
  },
  {
    question: "آیا لینک‌سازی ریسک جریمه دارد؟",
    answer: "اگر لینک‌ها با روش صحیح و اصولی ایجاد شوند، ریسک جریمه وجود ندارد. اما خرید لینک‌های بی‌کیفیت موجب جریمه خواهد شد."
  },
  {
    question: "چه مدت پس از لینک‌سازی نتایج دیده می‌شود؟",
    answer: "معمولاً تاثیرگذاری بک‌لینک‌ها پس از ۱ تا ۳ ماه آشکار خواهد شد، البته بسته به وضعیت رقابت و کیفیت لینک‌ها."
  }
];

const contentSection = (
  <>
    {/* Link Building Hero Section */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            خدمات لینک‌سازی اصولی و پیشرفته
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            لینک‌سازی درست، کلید موفقیت سئو خارجی و صدرنشینی در نتایج گوگل است. با تیم متخصص عصر سئو، استراتژی ساخت بک‌لینک‌های کیفی و هوشمندانه را تجربه کنید.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Link Building Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              چرا لینک‌سازی مهم‌ترین رکن سئو خارجی است؟
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              داشتن ساختار صحیح لینک و بک‌لینک‌های معتبر، اعتبار و جایگاه سایت شما را تضمین می‌کند. ما به شما کمک می‌کنیم تا در رقابت با بزرگان پیشتاز باشید.
            </p>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <Link2Off className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+۳۲۰٪</div>
              <p className="text-slate-600 mb-6">رشد اعتبار دامنه با لینک‌سازی اصولی</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۹۰٪</div>
                  <p className="text-sm text-slate-600">کاهش ریسک جریمه</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-700">۲.۵ برابـر</div>
                  <p className="text-sm text-slate-600">افزایش کلیک ارگانیک</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            سوالات متداول درباره لینک‌سازی
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

const LinkBuilding = () => {
  return (
    <ServicePageTemplate
      title="خدمات لینک‌سازی | لینک‌سازی خارجی و داخلی | عصر سئو"
      description="استراتژی‌های لینک‌سازی حرفه‌ای شامل لینک‌سازی خارجی، داخلی و بک‌لینک‌های کیفی برای تقویت اعتبار سایت."
      keywords="لینک‌سازی, بک‌لینک, لینک‌سازی خارجی, لینک بیلدینگ"
      canonicalUrl="https://asreseo.com/services/seo/link-building"
      heroTitle="خدمات لینک‌سازی"
      heroDescription="استراتژی‌های قدرتمند لینک‌سازی برای افزایش اعتبار و قدرت سایت شما"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default LinkBuilding;

