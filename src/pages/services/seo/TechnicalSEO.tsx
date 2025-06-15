
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Smartphone, Code, Database, Globe } from 'lucide-react';

const TechnicalSEO = () => {
  const technicalServices = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "بهینه‌سازی سرعت",
      description: "کاهش زمان بارگذاری صفحات به کمتر از ۳ ثانیه"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Mobile-First SEO",
      description: "بهینه‌سازی برای دستگاه‌های موبایل و تبلت"
    },
    {
      icon: <Code className="h-6 w-6 text-green-600" />,
      title: "Schema Markup",
      description: "پیاده‌سازی ساختارداده‌های Rich Snippets"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "امنیت HTTPS",
      description: "پیکربندی SSL و امنیت وب‌سایت"
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "بهینه‌سازی پایگاه داده",
      description: "بهبود کوئری‌ها و عملکرد پایگاه داده"
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      title: "CDN و کش",
      description: "پیکربندی شبکه توزیع محتوا و کش"
    }
  ];

  const technicalIssues = [
    "خطاهای کرال و ایندکس",
    "مشکلات نقشه سایت XML",
    "تکراری بودن محتوا (Duplicate Content)",
    "ساختار URL نامناسب",
    "مشکلات Robots.txt",
    "خطاهای ۴۰۴ و لینک‌های شکسته",
    "مشکلات هویت کننده canonical",
    "عدم بهینگی Core Web Vitals"
  ];

  const contentSection = (
    <>
      {/* Technical Services */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              خدمات سئو تکنیکال حرفه‌ای
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              سئو تکنیکال پایه و اساس موفقیت در رتبه‌بندی است. ما تمام جنبه‌های فنی وب‌سایت شما را بهینه می‌کنیم تا موتورهای جستجو به راحتی آن را بخوانند و ایندکس کنند.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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

      {/* Core Web Vitals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Core Web Vitals و تجربه کاربری
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                گوگل Core Web Vitals را به عنوان عامل مهم رتبه‌بندی در نظر می‌گیرد. ما این معیارهای کلیدی را بهینه می‌کنیم:
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">LCP (Largest Contentful Paint)</h4>
                    <p className="text-sm text-slate-600">بارگذاری محتوای اصلی در کمتر از ۲.۵ ثانیه</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">FID (First Input Delay)</h4>
                    <p className="text-sm text-slate-600">پاسخ‌دهی به تعامل کاربر در کمتر از ۱۰۰ میلی‌ثانیه</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full ml-3"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">CLS (Cumulative Layout Shift)</h4>
                    <p className="text-sm text-slate-600">ثبات بصری صفحه با امتیاز کمتر از ۰.۱</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6">نتایج بهینه‌سازی تکنیکال</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>سرعت بارگذاری</span>
                    <span className="font-bold">+۲۵۰٪</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>امتیاز PageSpeed</span>
                    <span className="font-bold">۹۵/۱۰۰</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>کاهش Bounce Rate</span>
                    <span className="font-bold">-۴۰٪</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Issues */}
      <section className="py-16 bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              مشکلات تکنیکالی که ما حل می‌کنیم
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              مشکلات تکنیکال می‌توانند مانع جدی برای رتبه‌بندی سایت شما باشند. ما این مشکلات را شناسایی و برطرف می‌کنیم.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalIssues.map((issue, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 ml-3 flex-shrink-0" />
                <span className="text-slate-700">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <ServicePageTemplate
      title="خدمات سئو تکنیکال | بهینه‌سازی فنی وب‌سایت | عصر سئو"
      description="سئو تکنیکال حرفه‌ای شامل بهینه‌سازی سرعت، ساختار، Schema Markup و تصحیح خطاهای فنی وب‌سایت."
      keywords="سئو تکنیکال, Technical SEO, بهینه‌سازی فنی, سرعت سایت"
      canonicalUrl="https://asreseo.com/services/seo/technical-seo"
      heroTitle="خدمات سئو تکنیکال"
      heroDescription="بهینه‌سازی فنی و ساختاری وب‌سایت برای عملکرد بهتر در موتورهای جستجو"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default TechnicalSEO;
