
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Mail, Users, Target, BarChart3, Bot, Clock, TrendingUp } from 'lucide-react';

const MarketingAutomation = () => {
  const automationFeatures = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "ایمیل مارکتینگ هوشمند",
      description: "ارسال خودکار ایمیل‌های شخصی‌سازی شده بر اساس رفتار کاربران"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "پرورش سرنخ‌ها",
      description: "تبدیل خودکار بازدیدکنندگان به مشتریان از طریق کمپین‌های هدفمند"
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "چت‌بات‌های هوشمند",
      description: "پاسخگویی ۲۴ساعته و هدایت مشتریان در مسیر خرید"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "تارگتینگ پیشرفته",
      description: "شناسایی و هدف‌گیری دقیق مخاطبان بر اساس داده‌های رفتاری"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "تحلیل و بهینه‌سازی",
      description: "بررسی مداوم عملکرد و بهینه‌سازی خودکار کمپین‌ها"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "برنامه‌ریزی محتوا",
      description: "انتشار خودکار محتوا در زمان‌های بهینه برای حداکثر تأثیر"
    }
  ];

  const benefits = [
    "افزایش ۵۰% در نرخ تبدیل سرنخ‌ها",
    "کاهش ۷۰% زمان صرف شده در فعالیت‌های تکراری",
    "افزایش ۴۰% در نرخ بازگشت مشتریان",
    "کاهش ۶۰% هزینه‌های بازاریابی",
    "افزایش ۸۰% در کیفیت سرنخ‌ها"
  ];

  return (
    <ServicePageTemplate
      title="اتوماسیون بازاریابی با هوش مصنوعی | AI Marketing | عصر سئو"
      description="اتوماسیون فرایندهای بازاریابی با هوش مصنوعی شامل ایمیل‌های خودکار، پرورش سرنخ و چت‌بات‌های هوشمند."
      keywords="اتوماسیون بازاریابی, هوش مصنوعی, AI Marketing, Marketing Automation"
      canonicalUrl="https://asreseo.com/services/ai/marketing-automation"
      heroTitle="اتوماسیون بازاریابی با هوش مصنوعی"
      heroDescription="خودکارسازی هوشمند فرایندهای بازاریابی برای افزایش کارایی و فروش"
    >
      <div className="space-y-16">
        {/* Features Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ویژگی‌های <span className="gradient-text">اتوماسیون هوشمند</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سیستم‌های پیشرفته اتوماسیون که فرایندهای بازاریابی شما را بهینه می‌کند
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover-scale group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:animate-bounce">
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

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نتایج <span className="gradient-text">قابل اندازه‌گیری</span>
            </h2>
            <p className="text-xl text-gray-600">
              اتوماسیون هوشمند به نتایج مشهود و سریع منجر می‌شود
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/80 rounded-xl">
                <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فرآیند <span className="gradient-text">پیاده‌سازی</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مراحل استقرار سیستم اتوماسیون بازاریابی در کسب‌وکار شما
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "۱", title: "تحلیل و برنامه‌ریزی", desc: "بررسی فرایندهای موجود و طراحی استراتژی" },
              { step: "۲", title: "راه‌اندازی سیستم", desc: "نصب و تنظیم ابزارهای اتوماسیون" },
              { step: "۳", title: "ایجاد کمپین‌ها", desc: "طراحی و پیاده‌سازی کمپین‌های خودکار" },
              { step: "۴", title: "نظارت و بهینه‌سازی", desc: "پایش مداوم و بهبود عملکرد" }
            ].map((item, index) => (
              <Card key={index} className="text-center group hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:animate-pulse">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ServicePageTemplate>
  );
};

export default MarketingAutomation;
