
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, AlertTriangle, BarChart2, CheckCircle2, UserCheck } from 'lucide-react';

const analysisSteps = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "بررسی کامل وضعیت سئو",
    description: "آنالیز وضعیت فعلی سایت شما؛ از قدرت دامنه تا لینک‌سازی و محتوا."
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
    title: "شناسایی نقاط ضعف و ایرادات",
    description: "کشف خطاهای فنی و محتوایی که مانع بالا آمدن سایت شما شده‌اند."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-green-600" />,
    title: "تحلیل رقبا",
    description: "بررسی استراتژی‌ها و مزیت رقابتی سایت‌های رقیب برای تدوین برنامه مؤثر."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    title: "ارائه راهکارهای عملی",
    description: "گزارش دقیق مشکلات به همراه برنامه عملیاتی برای بهبود جایگاه سایت."
  }
];

const benefits = [
  "کشف فرصت‌های رشد و کلمات کلیدی با ارزش",
  "اولویت‌بندی اقدامات فنی و محتوایی برای اثرگذاری سریع",
  "صرفه‌جویی در هزینه و زمان با رفع ایرادات جدی",
  "افزایش چشمگیر رتبه و ترافیک سایت بعد از اصلاحات"
];

const faqs = [
  {
    question: "آنالیز سئو دقیقاً شامل چه مواردی است؟",
    answer: "تحلیل تکنیکال، آنالیز محتوا، بررسی لینک‌سازی، تحلیل رقبا و ارائه راهکار جامع برای رشد سئو سایت انجام می‌شود."
  },
  {
    question: "بعد از دریافت گزارش آنالیز، چه کار باید کرد؟",
    answer: "می‌توانید اقدامات پیشنهادی را تیم خودتان انجام دهید یا اجرای رفع موارد را به تیم ما بسپارید."
  },
  {
    question: "گزارش تحلیلی در چه مدتی آماده می‌شود؟",
    answer: "معمولاً بین ۳ تا ۷ روز کاری، بسته به اندازه سایت، گزارش کامل آماده و ارائه می‌گردد."
  }
];

const contentSection = (
  <>
    {/* SEO Analysis Hero */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            آنالیز و مشاوره تخصصی سئو وب‌سایت
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            برای رشد سریع سایت، باید ابتدا وضعیت فعلی آن را به‌درستی بشناسید. خدمات تحلیل سئوی عصر سئو نقشه راه موفقیت دیجیتال شما را ترسیم می‌کند.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analysisSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
              مزایای آنالیز و مشاوره سئو
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              مشاوره سئو به شما کمک می‌کند با سرمایه‌گذاری هدفمند و اقدامات درست، رتبه سایت خود را متحول کنید.
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
              <div className="text-4xl font-bold text-blue-600 mb-2">+۱۰۰ سایت</div>
              <p className="text-slate-600 mb-6">تحلیل و مشاوره موفق توسط عصر سئو</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">۹۷٪</div>
                  <p className="text-sm text-slate-600">رضایت از کیفیت گزارش</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">۷ روز</div>
                  <p className="text-sm text-slate-600">میانگین زمان آماده‌سازی</p>
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
            سوالات متداول درباره آنالیز و مشاوره سئو
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

const SEOAnalysis = () => {
  return (
    <ServicePageTemplate
      title="آنالیز سئو و مشاوره حرفه‌ای | شناسایی ضعف تا تدوین راهکار | عصر سئو"
      description="تحلیل جامع وضعیت سئو سایت، شناسایی مشکلات، مقایسه با رقبا و ارائه‌ گزارش راهکارهای عملی با تیم عصر سئو."
      keywords="آنالیز سئو, مشاوره سئو, تحلیل سایت, خدمات تخصصی سئو"
      canonicalUrl="https://asreseo.com/services/seo/analysis"
      heroTitle="آنالیز و مشاوره سئو"
      heroDescription="تحلیل عمیق سایت، شناسایی فرصت رشد و تدوین استراتژی حرفه‌ای برای موفقیت سئو"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default SEOAnalysis;
