
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Share2, Sparkles, TrendingUp, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Share2 className="h-6 w-6 text-blue-600" />,
    title: 'ایده‌پردازی خلاقانه',
    description: 'محتوای کاملاً ایده‌آل متناسب با نوع شبکه اجتماعی و مخاطب شما طراحی می‌گردد.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-pink-700" />,
    title: 'متن نویسی و کپشن حرفه‌ای',
    description: 'جملات تأثیرگذار، هشتگ مناسب و دعوت به اقدام قدرتمند برای هر پست.'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-700" />,
    title: 'افزایش تعامل و نرخ ماندگاری',
    description: 'پست‌ها و استوری‌های هدفمند با تمرکز بر رشد فالوور و تعامل.'
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: 'تقویم انتشار منظم',
    description: 'طراحی برنامه منظم انتشار محتوا برای رشد پیوسته صفحه شما.'
  }
];

const benefits = [
  'رشد اصولی جامعه مخاطبان',
  'صرفه‌جویی در زمان و تمرکز بیشتر بر کسب‌وکار اصلی',
  'افزایش تعاملات و جذب فالوور واقعی',
  'یکپارچه‌سازی پیام برند شما در تمام پلتفرم‌ها'
];

const faqs = [
  {
    question: 'چه شبکه‌هایی را پوشش می‌دهید؟',
    answer: 'اینستاگرام، تلگرام، لینکدین، توییتر و هر پلتفرم مدنظر شما را پوشش می‌دهیم.'
  },
  {
    question: 'محتوا شامل طراحی گرافیکی هم هست؟',
    answer: 'در صورت نیاز، گرافیک و عکاسی هم برای هر پست قابل انجام است. لطفاً در زمان ثبت سفارش اعلام کنید.'
  },
  {
    question: 'آیا می‌توان زمان و موضوع پست‌ها را از قبل مشخص کرد؟',
    answer: 'بله، تقویم محتوایی کاملاً متناسب کسب‌وکار شما تهیه و تأیید می‌شود.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            خدمات محتوای شبکه‌های اجتماعی عصر سئو
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            از تولید تا برنامه‌ریزی محتوا، تیم ما صفحه‌ی شما را پر از ایده‌های خلاق و تعامل بالا می‌سازد.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای محتوای شبکه اجتماعی اختصاصی</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">پرسش‌های متداول درباره محتوای شبکه‌های اجتماعی</h2>
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

const SocialMediaContent = () => {
  return (
    <ServicePageTemplate
      title="محتوای شبکه‌های اجتماعی | سوشال مدیا کانتنت | عصر سئو"
      description="تولید محتوا برای شبکه‌های اجتماعی شامل ایده‌پردازی، کپشن، متن، برنامه انتشار و افزایش تعامل توسط تیم عصر سئو."
      keywords="محتوای شبکه‌های اجتماعی, سوشال مدیا کانتنت, اینستاگرام, تلگرام"
      canonicalUrl="https://asreseo.com/services/content/social-media-content"
      heroTitle="محتوای شبکه‌های اجتماعی"
      heroDescription="محتوای خلاقانه و جذاب برای حضور قدرتمند در شبکه‌های اجتماعی"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SocialMediaContent;

