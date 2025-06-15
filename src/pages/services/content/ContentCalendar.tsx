
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ListTodo, Sparkles, CheckCircle2, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    title: 'برنامه‌ریزی هوشمند انتشار محتوا',
    description: 'زمان‌بندی دقیق و اصولی برای تمام انواع محتواها در سایت و شبکه‌ اجتماعی.'
  },
  {
    icon: <ListTodo className="h-6 w-6 text-green-700" />,
    title: 'هماهنگی محتوایی با کمپین‌ها',
    description: 'هماهنگی کامل محتوای تقویم با رویدادهای بازاریابی، تخفیف‌ها و کمپین‌ها.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-yellow-700" />,
    title: 'افزایش نظم و انسجام برند',
    description: 'امکان پیگیری و مدیریت منظم و بی‌نقص برای تیم تولید محتوا و سوشال مدیا.'
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-purple-600" />,
    title: 'گزارش‌دهی و تحلیل عملکرد',
    description: 'امکان بررسی بازدهی مطالب و تحلیل یکپارچه خروجی‌های تقویم.'
  }
];

const benefits = [
  'انتشار محتوا به موقع و افزایش اثربخشی تبلیغات',
  'پشتیبانی از راهبرد یکپارچه و حرفه‌ای بازاریابی',
  'پرهیز از پراکندگی و دوباره‌کاری در تیم تولید محتوا',
  'مدیریت آسان زمان و وظایف اعضا'
];

const faqs = [
  {
    question: 'آیا طراحی تقویم محتوا منحصراً برای شبکه اجتماعی است؟',
    answer: 'خیر، تقویم محتوایی برای وب‌سایت، وبلاگ، شبکه اجتماعی و حتی کمپین‌های آفلاین قابل استفاده است.'
  },
  {
    question: 'چطور می‌توان تغییرات را در تقویم اِعمال کرد؟',
    answer: 'پنل آنلاین یا اکسل قابل ارائه است. هر گونه تغییر براحتی توسط شما یا تیم ما قابل انجام است.'
  },
  {
    question: 'اطلاع‌رسانی درباره موعد انتشار محتوا به چه صورت است؟',
    answer: 'سیستم یادآوری زمان انتشار یا ارسال هشدار به تیم و مدیران وجود دارد.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            تقویم محتوایی عصر سئو، مسیر منظم تا موفقیت
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            با برنامه‌ریزی دقیق و هماهنگی کامل محتوا، دیگر دغدغه‌ی بی‌نظمی و اتلاف فرصت‌های بازاریابی نخواهید داشت.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای مدیریت تقویم محتوایی</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول تقویم محتوایی</h2>
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

const ContentCalendar = () => {
  return (
    <ServicePageTemplate
      title="تقویم محتوایی | برنامه‌ریزی محتوا | عصر سئو"
      description="طراحی تقویم محتوایی دقیق برای انتشار منظم و اثرگذار، پشتیبانی از اهداف بازاریابی و انسجام محتوایی برند شما."
      keywords="تقویم محتوایی, برنامه‌ریزی محتوا, Content Calendar, استراتژی محتوا"
      canonicalUrl="https://asreseo.com/services/content/content-calendar"
      heroTitle="تقویم محتوایی"
      heroDescription="برنامه‌ریزی هوشمند و استراتژیک برای انتشار محتوای منظم و مؤثر"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default ContentCalendar;

