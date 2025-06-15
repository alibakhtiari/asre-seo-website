
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Edit3, BookOpen, AlignJustify, Search, TrendingUp } from 'lucide-react';

const ContentSEO = () => {
  const services = [
    {
      icon: <Edit3 className="h-6 w-6 text-blue-600" />,
      title: "تولید محتوای سئو محور",
      description: "تولید مقالات و بلاگ پست‌هایی که هم مخاطب را جذب می‌کند و هم رتبه می‌گیرند."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "استراتژی محتوایی",
      description: "طراحی تقویم محتوا و نقشه راه تخصصی برای جذب ترافیک هدفمند."
    },
    {
      icon: <AlignJustify className="h-6 w-6 text-purple-600" />,
      title: "بهینه‌سازی متون و ساختار",
      description: "ساختاردهی سرتیترها (H1-H6)، بهینه‌سازی پاراگراف‌بندی و خوانایی متن."
    },
    {
      icon: <Search className="h-6 w-6 text-orange-600" />,
      title: "تحقیق کلمات کلیدی پیشرفته",
      description: "تحلیل فرصت‌های کلیدی و کلمات دم بلند برای بالاترین بازدهی."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-rose-600" />,
      title: "افزایش اعتبار محتوا (Topical Authority)",
      description: "ایجاد ارتباط موضوعی بین محتواها برای کسب جایگاه تخصصی."
    }
  ];

  const benefits = [
    "جذب ترافیک ارگانیک و هدفمند با سبک محتوایی متناسب با کسب‌وکار شما",
    "افزایش نرخ ماندگاری کاربر و کاهش Bounce Rate سایت شما",
    "بهبود رتبه کلمات کلیدی اصلی و افزایش کلیک ارگانیک",
    "ایجاد برندینگ محتوایی و اعتبار تخصصی برای سایت",
    "افزایش نرخ تبدیل از طریق آموزش و ترغیب هوشمندانه مشتریان"
  ];

  const faqs = [
    {
      question: "آیا محتواهای تولید شده تضمین رتبه دارند؟",
      answer: "در سئو هیچ تضمین رتبه قطعی نیست اما تیم عصر سئو بر اساس تجربه، اکثر صفحات را به صفحه اول گوگل می‌آورد."
    },
    {
      question: "طراحی استراتژی محتوایی بر چه اساسی انجام می‌شود؟",
      answer: "بر اساس رفتار مخاطب هدف، آنالیز رقبا و تحلیل کلمات کلیدی، بهترین ساختار محتوایی را پیشنهاد می‌دهیم."
    },
    {
      question: "محصول یا خدمات من تخصصی است؛ آیا می‌توانید محتوای تخصصی تولید کنید؟",
      answer: "بله، ما با کمک نویسندگان متخصص هر حوزه محتواهای باکیفیت و تخصصی تولید می‌کنیم."
    }
  ];

  const contentSection = (
    <>
      {/* Content SEO Services */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              خدمات سئو محتوا و تولید محتوای SEO محور
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              رشد ترافیک ارگانیک و افزایش سرعت رتبه‌گیری با تولید و بهینه‌سازی هوشمندانه محتوا؛ این تخصص عصر سئو است. ما با تولید مقالات، صفحات و محتوای ارزشمند، جایگاه برتر را برای شما تضمین می‌کنیم.
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                چرا سئو محتوا مهم‌ترین ابزار رشد است؟
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                محتوای با کیفیت نقشه راه موفقیت سایت شماست. تجربه ثابت کرده سایت‌هایی که به محتوا اهمیت می‌دهند، رشد پایدارتری در رتبه و فروش دارند.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+۴۰۰٪</div>
                <p className="text-slate-600 mb-6">رشد ترافیک ارگانیک سایت‌های مشتریان ما</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">۸۵٪</div>
                    <p className="text-sm text-slate-600">افزایش ماندگاری کاربر</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-700">۵ برابـر</div>
                    <p className="text-sm text-slate-600">افزایش نرخ تبدیل</p>
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
              سوالات متداول درباره سئو محتوا
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

  return (
    <ServicePageTemplate
      title="خدمات سئو محتوا | تولید و بهینه‌سازی محتوا برای سئو | عصر سئو"
      description="بهینه‌سازی کامل محتوا، تولید محتوای سئو محور و ایجاد استراتژی محتوایی علمی برای رشد ترافیک سایت و افزایش رتبه گوگل."
      keywords="سئو محتوا, تولید محتوا, استراتژی محتوا, تحقیق کلمات کلیدی, Content SEO"
      canonicalUrl="https://asreseo.com/services/seo/content-seo"
      heroTitle="خدمات سئو محتوا"
      heroDescription="تولید و بهینه‌سازی محتوا با پشتوانه سئو برای جذب ترافیک بیشتر و رتبه بهتر"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default ContentSEO;

