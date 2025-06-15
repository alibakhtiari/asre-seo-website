
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ScrollText, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6 text-pink-600" />,
    title: "تعامل هدفمند با فالوورها",
    description: "پاسخ به نظرات و دایرکت‌ها و ایجاد ارتباط صمیمانه با کاربران شبکه اجتماعی شما."
  },
  {
    icon: <ScrollText className="h-6 w-6 text-blue-600" />,
    title: "برنامه‌ریزی و تولید محتوای اختصاصی",
    description: "خلق محتوای جذاب (تصویری، ویدیویی، متنی) متناسب برند شما و بالاتر بردن تعامل پیج."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "تحلیل عملکرد و رشد",
    description: "گزارش‌های تحلیلی درباره بازخورد پست‌ها، نرخ رشد، و بهینه‌سازی برنامه محتوا."
  },
  {
    icon: <Clock className="h-6 w-6 text-yellow-500" />,
    title: "پوشش ۲۴/۷ و پاسخگویی سریع",
    description: "مدیریت کامل حضور شما در شبکه‌های اجتماعی با پاسخگویی شبانه‌روزی."
  }
];

const benefits = [
  "افزایش نرخ تعامل و رشد طبیعی فالوورها",
  "تولید آگاهی و تاثیرگذاری در بازار هدفتان",
  "صرفه‌جویی در زمان و هزینه تیم بازاریابی",
  "یکپارچگی برند در شبکه‌های اجتماعی مختلف"
];

const faqs = [
  {
    question: "مدیریت چه شبکه‌هایی ارائه می‌شود؟",
    answer: "خدمات ما برای اینستاگرام، تلگرام، لینکدین، توییتر و دیگر شبکه‌های رایج قابل ارائه است."
  },
  {
    question: "آیا تقویم محتوایی ارائه می‌شود؟",
    answer: "بله، ماهانه تقویم انتشار محتوا و ایده‌های خلاقانه متناسب با اهداف برند آماده می‌گردد."
  },
  {
    question: "راهکاری برای افزایش تعامل پیج دارید؟",
    answer: "همایش‌های تعاملی، مسابقات و محتوای وایرال از راهکارهای تخصصی ما برای افزایش تعامل کاربران است."
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            مدیریت شبکه‌های اجتماعی، برند شما را قدرتمند می‌سازد
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">با محتوای هدفمند و استراتژی حرفه‌ای، حضور دیجیتال خود را چشمگیر کنید.</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای مدیریت حرفه‌ای سوشال مدیا</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <TrendingUp className="h-5 w-5 text-green-500 ml-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول مدیریت شبکه‌های اجتماعی</h2>
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

const SocialMediaManagement = () => {
  return (
    <ServicePageTemplate
      title="مدیریت شبکه‌های اجتماعی | سوشال مدیا مارکتینگ | عصر سئو"
      description="مدیریت حرفه‌ای شبکه‌های اجتماعی شامل تولید محتوا، تعامل با کاربران، و تحلیل عملکرد برای رشد برند و افزایش نرخ تعامل."
      keywords="مدیریت شبکه‌های اجتماعی, سوشال مدیا, اینستاگرام, تلگرام"
      canonicalUrl="https://asreseo.com/services/marketing/social-media"
      heroTitle="مدیریت شبکه‌های اجتماعی"
      heroDescription="مدیریت کامل و حرفه‌ای حضور برند شما در شبکه‌های اجتماعی"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SocialMediaManagement;
