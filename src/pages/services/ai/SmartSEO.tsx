
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Brain, Target, BarChart3, Zap, FileText, Globe, TrendingUp } from 'lucide-react';

const SmartSEO = () => {
  const seoFeatures = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "تحلیل کلمات کلیدی با AI",
      description: "شناسایی هوشمند بهترین کلمات کلیدی بر اساس نیت جستجو"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "تولید خودکار متا تگ‌ها",
      description: "ایجاد title و description بهینه برای تمام صفحات"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "تحلیل رقبا",
      description: "بررسی استراتژی SEO رقبا و شناسایی فرصت‌ها"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "بهینه‌سازی محتوا",
      description: "پیشنهادات هوشمند برای بهبود کیفیت و SEO محتوا"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "پیش‌بینی رنکینگ",
      description: "تخمین احتمال رنک شدن برای کلمات کلیدی مختلف"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "مانیتورینگ SERP",
      description: "پایش مداوم موقعیت در نتایج جستجو و تغییرات الگوریتم"
    }
  ];

  const benefits = [
    { metric: "۳۰۰%", label: "افزایش ترافیک ارگانیک", color: "text-green-600" },
    { metric: "۸۵%", label: "بهبود رنکینگ کلیدواژه‌ها", color: "text-blue-600" },
    { metric: "۶۰%", label: "کاهش زمان بهینه‌سازی", color: "text-purple-600" },
    { metric: "۲۰۰%", label: "افزایش نرخ تبدیل", color: "text-orange-600" }
  ];

  const aiCapabilities = [
    "تحلیل تمام المان‌های SEO در یک بار",
    "شناسایی خودکار مشکلات فنی سایت",
    "پیشنهاد محتوای بهینه برای هر صفحه",
    "تولید schema markup مناسب",
    "بررسی سرعت و UX سایت",
    "آنالیز backlink profile",
    "پیش‌بینی تغییرات الگوریتم گوگل",
    "گزارش‌گیری خودکار و دوره‌ای"
  ];

  return (
    <ServicePageTemplate
      title="سئو هوشمند با AI | Smart SEO Services | عصر سئو"
      description="خدمات سئو هوشمند با هوش مصنوعی شامل تحلیل رقبا، تولید خودکار متا تگ‌ها و پیشنهادات بهینه‌سازی."
      keywords="سئو هوشمند, AI SEO, هوش مصنوعی, سئو خودکار"
      canonicalUrl="https://asreseo.com/services/ai/smart-seo"
      heroTitle="سئو هوشمند با AI"
      heroDescription="بهینه‌سازی هوشمند و خودکار وب‌سایت با قدرت هوش مصنوعی"
    >
      <div className="space-y-16">
        {/* Main Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قابلیت‌های <span className="gradient-text">سئو هوشمند</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              هوش مصنوعی پیشرفته برای تحلیل جامع و بهینه‌سازی خودکار SEO
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover-scale group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:animate-spin">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نتایج <span className="gradient-text">اثبات شده</span>
            </h2>
            <p className="text-xl text-gray-600">
              آمارهای واقعی از پروژه‌های سئو هوشمند ما
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className={`text-4xl font-bold ${benefit.color} mb-2`}>
                    {benefit.metric}
                  </div>
                  <p className="text-gray-900 font-medium">
                    {benefit.label}
                  </p>
                  <TrendingUp className="h-5 w-5 text-green-600 mx-auto mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Capabilities */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قدرت <span className="gradient-text">هوش مصنوعی</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تمام کارهای سئو را در یک جا و به صورت خودکار انجام می‌دهیم
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover-scale">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-900 font-medium">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فرآیند <span className="gradient-text">کار ما</span>
            </h2>
            <p className="text-xl text-gray-600">
              مراحل پیاده‌سازی سئو هوشمند برای وب‌سایت شما
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { 
                step: "۱", 
                title: "تحلیل جامع سایت", 
                desc: "اسکن کامل وب‌سایت توسط AI و شناسایی تمام مسائل SEO",
                time: "۲۴ ساعت"
              },
              { 
                step: "۲", 
                title: "استراتژی هوشمند", 
                desc: "طراحی نقشه راه بهینه‌سازی بر اساس تحلیل داده‌ها",
                time: "۴۸ ساعت"
              },
              { 
                step: "۳", 
                title: "پیاده‌سازی خودکار", 
                desc: "اجرای تغییرات فنی و تولید محتوای بهینه",
                time: "۱ هفته"
              },
              { 
                step: "۴", 
                title: "مانیتورینگ مداوم", 
                desc: "پایش عملکرد و بهینه‌سازی مداوم با AI",
                time: "مداوم"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-8 p-6 bg-white/80 rounded-xl">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {item.desc}
                  </p>
                  <Badge variant="secondary" className="text-sm">
                    زمان: {item.time}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ServicePageTemplate>
  );
};

export default SmartSEO;
