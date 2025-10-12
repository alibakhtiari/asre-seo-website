
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Target, TrendingUp, Palette, Users, BarChart } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      icon: Search,
      title: 'سئو و بهینه‌سازی سایت',
      description: 'بهینه‌سازی کامل وب‌سایت شما برای موتورهای جستجو و رسیدن به رتبه‌های بالا در گوگل',
      features: [
        'تحلیل و تحقیق کلمات کلیدی',
        'بهینه‌سازی محتوا و متا تگ‌ها',
        'بهبود سرعت و عملکرد سایت',
        'ساخت بک‌لینک با کیفیت'
      ],
      price: 'از ۵ میلیون تومان',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'تبلیغات گوگل',
      description: 'مدیریت حرفه‌ای کمپین‌های تبلیغاتی گوگل ادز برای حداکثر بازدهی سرمایه‌گذاری',
      features: [
        'تنظیم و مدیریت گوگل ادز',
        'کمپین‌های جستجو و نمایشی',
        'ریمارکتینگ و هدف‌گذاری دقیق',
        'گزارش‌گیری تفصیلی'
      ],
      price: 'از ۳ میلیون تومان',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'دیجیتال مارکتینگ',
      description: 'استراتژی جامع بازاریابی دیجیتال برای رشد و توسعه آنلاین کسب‌وکار شما',
      features: [
        'مدیریت شبکه‌های اجتماعی',
        'تولید محتوای جذاب',
        'ایمیل مارکتینگ',
        'تحلیل و گزارش‌گیری'
      ],
      price: 'از ۴ میلیون تومان',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'طراحی وب‌سایت',
      description: 'طراحی و توسعه وب‌سایت‌های مدرن، سریع و بهینه‌شده برای کسب‌وکار شما',
      features: [
        'طراحی ریسپانسیو و مدرن',
        'بهینه‌سازی برای سئو',
        'سرعت بالا و امنیت',
        'پشتیبانی و نگهداری'
      ],
      price: 'از ۶ میلیون تومان',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'مشاوره استراتژیک',
      description: 'مشاوره تخصصی برای تعیین بهترین استراتژی بازاریابی دیجیتال کسب‌وکار شما',
      features: [
        'تحلیل وضعیت فعلی',
        'تعیین اهداف و KPI ها',
        'طراحی نقشه راه',
        'پیگیری و ارزیابی'
      ],
      price: 'از ۲ میلیون تومان',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart,
      title: 'آنالیتیکس و گزارش‌گیری',
      description: 'تحلیل عمیق داده‌ها و ارائه گزارش‌های جامع برای بهبود عملکرد',
      features: [
        'تنظیم گوگل آنالیتیکس',
        'ردیابی تبدیل',
        'گزارش‌های تفصیلی',
        'توصیه‌های بهبود'
      ],
      price: 'از ۱.۵ میلیون تومان',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            خدمات <span className="gradient-text">جامع</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعه کاملی از خدمات دیجیتال مارکتینگ برای رشد و توسعه کسب‌وکار شما
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-asre-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-asre-green-600 mt-1">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed mt-4">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-asre-green-100 flex items-center justify-center ml-3">
                        <div className="w-2 h-2 rounded-full bg-asre-green-500"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full gradient-bg text-white hover:opacity-90 transition-opacity">
                  درخواست مشاوره رایگان
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
