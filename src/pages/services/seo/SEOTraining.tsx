
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, GraduationCap, BookOpen, CalendarCheck2, MessageCircle, PlayCircle } from 'lucide-react';

const options = [
  {
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    title: "دوره جامع سئو از پایه تا پیشرفته",
    description: "یادگیری صفر تا صد سئو با جدیدترین متدها و پروژه‌های واقعی"
  },
  {
    icon: <BookOpen className="h-6 w-6 text-green-600" />,
    title: "کارگاه محتوا و لینک‌سازی عملی",
    description: "تمرین تخصصی بر تولید محتوا، لینک‌سازی و افزایش رتبه سایت"
  },
  {
    icon: <PlayCircle className="h-6 w-6 text-orange-600" />,
    title: "آموزش ویدئویی و تعاملی",
    description: "جلسات ویدئویی قابل دانلود به همراه مثال‌های عملی برای هر مبحث"
  },
  {
    icon: <CalendarCheck2 className="h-6 w-6 text-purple-600" />,
    title: "کلاس‌های آنلاین همزمان",
    description: "کلاس آنلاین با استاد و پرسش و پاسخ زمان واقعی"
  },
  {
    icon: <UserCheck className="h-6 w-6 text-rose-600" />,
    title: "پشتیبانی و منتورینگ ویژه",
    description: "دریافت راهنمایی و رفع اشکال مستقیم از مدرس دوره"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-yellow-600" />,
    title: "سوالات و پروژه‌های اختصاصی",
    description: "حل تمرینات واقعی روی سایت شما، همراه با آنالیز و فیدبک تخصصی"
  },
];

const faqs = [
  {
    question: "آیا مدرک پایان دوره اعطا می‌شود؟",
    answer: "بله، مدرک معتبر عصر سئو به شرکت‌کنندگان موفق اهدا خواهد شد."
  },
  {
    question: "آیا جلسات به صورت ضبط شده قابل دسترس هستند؟",
    answer: "بله، تمامی جلسات ویدئویی ضبط و در اختیار شرکت‌کنندگان قرار خواهد گرفت."
  },
  {
    question: "چه سطحی برای شرکت در دوره نیاز است؟",
    answer: "مطالب از پایه تا پیشرفته ارائه شده و برای همه علاقمندان، حتی مبتدی‌ها مناسب است."
  }
];

const contentSection = (
  <>
    {/* SEO Training Services */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            آموزش تخصصی سئو و بهینه‌سازی سایت
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با دوره‌های آموزشی عصر سئو، مفاهیم سئو را به صورت اصولی و کاربردی یاد بگیرید. اساتید مجرب ما شما را قدم به قدم به موفقیت می‌رسانند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((o, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {o.icon}
                </div>
                <CardTitle className="text-lg">{o.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{o.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Training Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              چرا آموزش سئو بهترین سرمایه‌گذاری است؟
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              دانش سئو باعث رشد پایدار سایت و افزایش درآمد شما می‌شود. یادگیری صحیح این علم می‌تواند سکوی پرتاب کسب‌وکارتان باشد!
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700">
                <UserCheck className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                استخدام و رشد شغلی سریع‌تر در حوزه دیجیتال مارکتینگ
              </li>
              <li className="flex items-center text-slate-700">
                <MessageCircle className="h-5 w-5 text-blue-600 ml-3 flex-shrink-0" />
                اجرای اصول سئو روی سایت شخصی و پروژه‌های مشتریان
              </li>
              <li className="flex items-center text-slate-700">
                <BookOpen className="h-5 w-5 text-purple-600 ml-3 flex-shrink-0" />
                دسترسی مادام‌العمر به محتوای دوره
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+۷۰۰ نفر</div>
              <p className="text-slate-600 mb-6">فارغ‌التحصیل دوره‌های عصر سئو</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۹۳٪</div>
                  <p className="text-sm text-slate-600">رضایت شرکت‌کنندگان</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-700">۱۰۰٪</div>
                  <p className="text-sm text-slate-600">پشتیبانی مستقیم استاد</p>
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
            سوالات متداول آموزش سئو
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

const SEOTraining = () => {
  return (
    <ServicePageTemplate
      title="آموزش سئو | دوره‌های تخصصی سئو | عصر سئو"
      description="آموزش تخصصی سئو از مبتدی تا پیشرفته، دوره‌های عملی و کاربردی سئو با اساتید مجرب عصر سئو."
      keywords="آموزش سئو, دوره سئو, آموزش بهینه‌سازی, کلاس سئو"
      canonicalUrl="https://asreseo.com/services/seo/training"
      heroTitle="آموزش سئو"
      heroDescription="آموزش تخصصی و عملی تکنیک‌های سئو برای تسلط کامل بر بهینه‌سازی"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SEOTraining;

