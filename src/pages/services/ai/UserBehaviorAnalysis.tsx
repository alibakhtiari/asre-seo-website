
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MousePointer, Brain, BarChart, Users, Target, TrendingUp, Zap } from 'lucide-react';

const UserBehaviorAnalysis = () => {
  const analysisFeatures = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "نقشه حرارتی هوشمند",
      description: "تحلیل دقیق نقاط کلیک، حرکت موس و زمان توقف کاربران"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-primary" />,
      title: "ردیابی مسیر کاربر",
      description: "بررسی مسیر حرکت کاربران در سایت و نقاط خروج"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "پیش‌بینی رفتار",
      description: "استفاده از AI برای پیش‌بینی احتمال خرید و تبدیل"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "تحلیل فانل تبدیل",
      description: "شناسایی نقاط ضعف در مسیر تبدیل بازدیدکننده به مشتری"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "بخش‌بندی هوشمند",
      description: "دسته‌بندی خودکار کاربران بر اساس الگوهای رفتاری"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "شخصی‌سازی تجربه",
      description: "ارائه محتوا و پیشنهادات شخصی‌سازی شده برای هر کاربر"
    }
  ];

  const insights = [
    {
      title: "شناسایی نقاط ضعف UX",
      description: "تشخیص عناصری که باعث ترک صفحه کاربران می‌شود",
      percentage: "۸۵%",
      color: "text-red-600"
    },
    {
      title: "بهینه‌سازی نرخ تبدیل",
      description: "افزایش تبدیل از طریق درک بهتر رفتار کاربران",
      percentage: "۶۰%",
      color: "text-green-600"
    },
    {
      title: "کاهش نرخ خروج",
      description: "شناسایی و رفع دلایل ترک زودهنگام کاربران",
      percentage: "۴۵%",
      color: "text-blue-600"
    },
    {
      title: "افزایش زمان حضور",
      description: "بهبود محتوا و طراحی برای نگه‌داشتن کاربران",
      percentage: "۷۰%",
      color: "text-purple-600"
    }
  ];

  const tools = [
    "Google Analytics 4",
    "Hotjar Heatmaps",
    "Microsoft Clarity",
    "Mixpanel",
    "Amplitude",
    "Custom AI Models"
  ];

  return (
    <ServicePageTemplate
      title="تحلیل رفتار کاربران با AI | User Behavior Analysis | عصر سئو"
      description="تحلیل رفتار کاربران با هوش مصنوعی شامل نقشه حرارتی، پیش‌بینی رفتار و تحلیل مسیر تبدیل."
      keywords="تحلیل رفتار کاربران, هوش مصنوعی, User Behavior, Analytics"
      canonicalUrl="https://asreseo.com/services/ai/user-behavior-analysis"
      heroTitle="تحلیل رفتار کاربران با AI"
      heroDescription="درک عمیق رفتار کاربران برای بهینه‌سازی تجربه و افزایش تبدیل"
    >
      <div className="space-y-16">
        {/* Analysis Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ابزارهای <span className="gradient-text">تحلیل هوشمند</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تکنولوژی‌های پیشرفته AI برای درک عمیق رفتار کاربران
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analysisFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover-scale group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:animate-pulse">
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

        {/* Insights Section */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              بینش‌های <span className="gradient-text">کلیدی</span>
            </h2>
            <p className="text-xl text-gray-600">
              نتایج قابل اندازه‌گیری از تحلیل رفتار کاربران
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600">
                        {insight.description}
                      </p>
                    </div>
                    <div className={`text-3xl font-bold ${insight.color} mr-4`}>
                      {insight.percentage}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      بهبود قابل توجه
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ابزارها و <span className="gradient-text">تکنولوژی‌ها</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استفاده از بهترین ابزارهای تحلیل رفتار کاربران
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-6 py-3 text-lg font-medium hover-scale"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-3xl p-12">
          <Zap className="h-16 w-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">
            آماده درک بهتر کاربران خود هستید؟
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            با تحلیل هوشمند رفتار کاربران، تجربه آنها را بهبود دهید و فروش خود را افزایش دهید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover-scale">
              مشاوره رایگان
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover-scale">
              مشاهده نمونه تحلیل
            </button>
          </div>
        </section>
      </div>
    </ServicePageTemplate>
  );
};

export default UserBehaviorAnalysis;
