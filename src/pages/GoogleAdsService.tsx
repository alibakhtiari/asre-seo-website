
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, BarChart3, Users, Clock, Shield } from 'lucide-react';

const GoogleAdsService = () => {
  const features = [
    {
      icon: Target,
      title: 'تارگت دقیق مخاطبان',
      description: 'با استفاده از ابزارهای پیشرفته گوگل، مخاطبان هدف را دقیقاً شناسایی و تارگت می‌کنیم'
    },
    {
      icon: TrendingUp,
      title: 'بهینه‌سازی مداوم',
      description: 'کمپین‌های شما را مداوم نظارت و بهینه‌سازی می‌کنیم تا بهترین نتایج را دریافت کنید'
    },
    {
      icon: BarChart3,
      title: 'گزارش‌دهی شفاف',
      description: 'گزارش‌های دقیق و قابل فهم از عملکرد کمپین‌هایتان دریافت کنید'
    },
    {
      icon: Users,
      title: 'افزایش تبدیل',
      description: 'با استراتژی‌های کاربردی، نرخ تبدیل و فروش شما را به طور چشمگیری افزایش می‌دهیم'
    }
  ];

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-100">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-text-900 mb-6">
                  تبلیغات <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">گوگل ادز</span>
                </h1>
                <p className="text-xl text-text-600 max-w-3xl mx-auto mb-8">
                  با کمپین‌های هوشمند گوگل ادز، مشتریان هدف خود را در لحظه‌ی جستجو پیدا کنید و فروش خود را چندین برابر افزایش دهید.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 shadow-lg">
                  شروع کمپین رایگان
                </Button>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border border-primary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 group">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-7 w-7 text-primary-600" />
                      </div>
                      <CardTitle className="text-text-800 group-hover:text-primary-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div className="animate-fade-in">
                  <div className="text-4xl font-bold mb-2">۳۰۰%</div>
                  <div className="text-primary-100">افزایش کلیک</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold mb-2">۸۵%</div>
                  <div className="text-primary-100">کاهش هزینه</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="text-4xl font-bold mb-2">۱۵۰+</div>
                  <div className="text-primary-100">کمپین موفق</div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="text-4xl font-bold mb-2">۹۸%</div>
                  <div className="text-primary-100">رضایت مشتری</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GoogleAdsService;
